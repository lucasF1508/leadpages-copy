import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';
import { cx } from 'emotion';
import { getParts } from '@lp/substring-matcher';

import Flyout from '../../molecules/Flyout';
import Input from '../../atoms/Input';
import Option from '../../atoms/Option';

import * as styles from './Typeahead.css.js';

const getHighlightedText = (text, query) => {
  const parts = getParts(text, query);
  return parts.map((part, i) => (
    <span
      key={i}
      style={part && part.toLowerCase() === query.toLowerCase() ? { fontWeight: 'bold' } : {}}
    >
      {part}
    </span>
  ));
};

const Typeahead = ({
  getOptionClassName,
  getOptionLabel,
  getOptionValue,
  handleOnReset,
  handleOnSearch,
  handleOnSelect,
  inputProps,
  listFooter,
  listHeader,
  noOptionsMessage,
  options,
  query,
  value,
}) => (
  <Autocomplete
    selectOnBlur
    wrapperStyle={{
      position: 'relative',
      display: 'inline-block',
      width: '100%',
      lineHeight: '24px',
    }}
    value={query}
    items={options}
    getItemValue={getOptionValue}
    onSelect={handleOnSelect}
    onChange={e => handleOnSearch(e.target.value)}
    renderInput={({ ref, ...props }) => (
      <Fragment>
        <Input inputRef={ref} {...inputProps} {...props} inputSelfClass={styles.input} />
        {query && (
          <div
            data-qa-selector="clear-typeahead"
            tabIndex="0"
            role="button"
            className={styles.iconCloseContainer}
            onClick={handleOnReset}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                handleOnReset();
              }
            }}
          >
            <i className={cx('lp-icon', styles.iconClose)}>close_circle</i>
          </div>
        )}
      </Fragment>
    )}
    renderMenu={children => (
      <Flyout className={styles.flyout} open>
        {listHeader && <div className={styles.menuItem}>{listHeader}</div>}
        {children}
        {listFooter && <div className={styles.menuItem}>{listFooter}</div>}
        {!options.length && <div className={styles.menuItem}>{noOptionsMessage}</div>}
      </Flyout>
    )}
    renderItem={(item, isHighlighted) => {
      const val = getOptionValue(item);
      const label = getOptionLabel(item);
      const className = getOptionClassName(item);

      return (
        <Option className={className} selected={value === val} active={isHighlighted} key={val}>
          {getHighlightedText(label, query)}
        </Option>
      );
    }}
  />
);

Typeahead.propTypes = {
  getOptionClassName: PropTypes.func,
  getOptionLabel: PropTypes.func.isRequired,
  getOptionValue: PropTypes.func.isRequired,
  handleOnReset: PropTypes.func,
  handleOnSearch: PropTypes.func,
  handleOnSelect: PropTypes.func,
  inputProps: PropTypes.object,
  listFooter: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  listHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  noOptionsMessage: PropTypes.string,
  options: PropTypes.array.isRequired,
  query: PropTypes.string,
  value: PropTypes.any,
};

Typeahead.defaultProps = {
  getOptionClassName: () => '',
  handleOnReset: () => {},
  handleOnSearch: () => {},
  handleOnSelect: () => {},
  inputProps: {},
  listFooter: '',
  listHeader: '',
  noOptionsMessage: 'No results found',
  optionValue: '',
  query: '',
};

export default Typeahead;
