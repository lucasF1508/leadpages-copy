import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { LOADING_STATES } from '../../molecules/LoadingState';
import Button from '../../atoms/Button';
import LoadingButton from '../../organisms/LoadingButton';
import Input from '../../atoms/Input';
import Select from '../../molecules/Select';
import Option from '../../atoms/Option';
import UrlOptionsDisplayLabel from './UrlOptionsDisplayLabel';
import {
  types,
  TypographyComponent,
  SupportContent
} from '../../theme/Typography';

import styles from './PageUrlEdit.css';

const PROPS = {
  assetUrl: PropTypes.string,
  headerComponent: PropTypes.node.isRequired,
  onEditClick: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
  pageUrlLoadingState: PropTypes.string,
  onSaveClick: PropTypes.func.isRequired,
  viewOnClick: PropTypes.func,
  selectOptions: PropTypes.oneOfType([
    PropTypes.instanceOf(Option),
    PropTypes.arrayOf(PropTypes.instanceOf(Option))
  ]),
  onSelectChange: PropTypes.func,
  onSelectClick: PropTypes.func,
  selectPlaceHolder: PropTypes.string,
  selectValue: PropTypes.string,
  selectClassName: PropTypes.string,
  slugValue: PropTypes.string,
  slugPlaceholder: PropTypes.string,
  slugMessage: PropTypes.func,
  hasSlugError: PropTypes.bool,
  onSlugChange: PropTypes.func
};

const DEFAULT_PROPS = {
  isEditing: false,
  pageUrlLoadingState: LOADING_STATES.success,
  assetUrl: '',
  assetName: '',
  selectValue: '',
  assetLastUpdatedString: '',
  viewOnClick: () => {},
  selectOptions: <Option primaryText="my Option" value="foo" />,
  onSelectChange: undefined,
  onSelectClick: undefined,
  selectPlaceHolder: '',
  selectClassName: '',
  slugValue: '',
  slugPlaceholder: '',
  slugMessage: () => {},
  hasSlugError: false,
  onSlugChange: undefined
};

const printErrorMessage = errorMessageFun => {
  const error = errorMessageFun();
  if (typeof error === 'string') {
    return (
      <SupportContent className={styles.errorMessage}>{error}</SupportContent>
    );
  }
  return error;
};

const PageUrlEdit = ({
  pageUrlLoadingState,
  assetUrl,
  onSaveClick,
  onEditClick,
  // Select props
  selectValue,
  selectOptions,
  onSelectChange,
  onSelectClick,
  selectPlaceHolder,
  selectClassName,
  // Link Label props
  isEditing,
  viewOnClick,
  // Input props
  slugValue,
  slugPlaceholder,
  onSlugChange,
  slugMessage,
  hasSlugError,
  headerComponent
}) => {
  if (isEditing) {
    return (
      <div>
        {onEditClick && (
          <TypographyComponent type={types.headingDefault}>
            <Button noBackground icon="left_angle" onClick={onEditClick} />
            Edit URL
          </TypographyComponent>
        )}
        <div className={styles.editUrlContent}>
          <div className={styles.editSubdomain}>
            <TypographyComponent
              className={styles.supportLabel}
              type={types.supportContent}
            >
              Sub Domain
            </TypographyComponent>
            {selectOptions && (
              <Select
                onChange={onSelectChange}
                className={selectClassName}
                onClick={onSelectClick}
                placeholderText={selectPlaceHolder}
                value={selectValue}
                id="domainSelect"
              >
                {selectOptions}
              </Select>
            )}
          </div>
          <div className={styles.editSlug}>
            <TypographyComponent
              className={styles.supportLabel}
              type={types.supportContent}
            >
              Slug
            </TypographyComponent>
            <Input
              value={slugValue}
              placeholder={slugValue || slugPlaceholder || 'your-slug-here'}
              onChange={onSlugChange}
              hasError={hasSlugError}
            />
            {!!slugMessage && printErrorMessage(slugMessage)}
          </div>
          <div className={styles.editUrlSave}>
            <LoadingButton
              loadingState={pageUrlLoadingState}
              onClick={onSaveClick}
            >
              Save URL
            </LoadingButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {headerComponent}
      <UrlOptionsDisplayLabel
        className={styles.urlEditLink}
        editOnClick={onEditClick}
        viewOnClick={viewOnClick}
        urlText={assetUrl}
        urlLink={assetUrl}
        isLink
      />
    </div>
  );
};

PageUrlEdit.propTypes = PROPS;
PageUrlEdit.defaultProps = DEFAULT_PROPS;

export default PageUrlEdit;
