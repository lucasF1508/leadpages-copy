import PropTypes from 'prop-types';
import React, { Component, Children, cloneElement } from 'react';
import classnames from 'classnames';

import OutsideClickHandler from '../../molecules/OutsideClickHandler';
import Option from '../../atoms/Option';
import Flyout from '../../molecules/Flyout';
import styles from './Select.css';

export const KEY_CODES = {
  TAB: 9,
  SPACE: 32,
  ENTER: 13,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  ESC: 27,
};

export const DIRECTIONS = {
  BEFORE: 'before',
  AFTER: 'after',
};

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedText: props.placeholderText,
      value: props.value,
      activeIndex: null,
      selectedIndex: null,
    };
  }

  componentWillMount() {
    this.setSelected(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setSelected(nextProps);
  }

  onChangeHandler() {
    const id = this.props.id;
    const value = this.state.value;
    this.props.onChange({ id, value });
  }

  setSelected(providedProps) {
    this.setState(() => {
      let selectedText = '';
      let value = '';
      let activeIndex = null;
      let selectedIndex = null;

      Children.map(providedProps.children, (child, index) => {
        if (child.type.displayName === 'Option' && child.props.selected) {
          selectedText = child.props.selectedText || child.props.primaryText;
          value = child.props.value;
          activeIndex = index;
          selectedIndex = index;
        }
      });

      return {
        activeIndex,
        selectedText,
        value,
        selectedIndex,
      };
    });
  }

  toggleHandler(e) {
    this.setState(({ open, selectedIndex }) => ({
      open: !open,
      activeIndex: selectedIndex,
    }));
    this.props.onClick(e);
  }

  close() {
    this.setState({
      open: false,
    });
  }

  handleKeyDown = event => {
    if (
      // Stop focus change if open
      (this.state.open && event.keyCode === KEY_CODES.TAB) ||
      // Stop scrolling if open
      (this.state.open && event.keyCode === KEY_CODES.UP_ARROW) ||
      // Stop scrolling if open
      (this.state.open && event.keyCode === KEY_CODES.DOWN_ARROW)
    ) {
      event.preventDefault();
    }
  };

  handleKeyUpOpen = event => {
    // OPEN space/up/down
    if (
      !this.state.open &&
      (event.keyCode === KEY_CODES.SPACE ||
        event.keyCode === KEY_CODES.UP_ARROW ||
        event.keyCode === KEY_CODES.DOWN_ARROW)
    ) {
      return this.setState(({ open, selectedIndex }) => ({
        open: !open,
        activeIndex: selectedIndex,
      }));
    }
    // CLOSE/CANCEL esc
    if (this.state.open && event.keyCode === KEY_CODES.ESC) {
      return this.setState(({ open, selectedIndex }) => ({
        open: !open,
        activeIndex: selectedIndex,
      }));
    }
    // CLOSE/CHOOSE space/enter
    if (
      this.state.open &&
      (event.keyCode === KEY_CODES.ENTER || event.keyCode === KEY_CODES.SPACE)
    ) {
      const { activeIndex } = this.state;
      const childArray = Children.toArray(this.props.children);
      const id = this.props.id;
      const { value, selectedText, primaryText } = childArray[activeIndex].props;

      return this.setState(
        ({ open }) => ({
          open: !open,
          value,
          selectedText: selectedText || primaryText,
          selectedIndex: activeIndex,
        }),
        () => {
          this.props.onChange({ id, value });
        },
      );
    }

    if (
      this.state.open &&
      (event.keyCode === KEY_CODES.UP_ARROW || event.keyCode === KEY_CODES.DOWN_ARROW)
    ) {
      const nextPosition =
        event.keyCode === KEY_CODES.UP_ARROW ? DIRECTIONS.BEFORE : DIRECTIONS.AFTER;
      const nextIndex = this.findNextChildIndex(nextPosition);

      return this.setState(() => ({
        activeIndex: nextIndex,
      }));
    }
  };

  findNextChildIndex = direction => {
    const currentFiltered = Children.toArray(this.props.children)
      .map((child, index) => ({ ...child, origIndex: index }))
      .filter(child => !child.props.disabled);
    const currentFilteredIndex = currentFiltered.findIndex(
      child => child.origIndex === this.state.activeIndex,
    );
    if (direction === DIRECTIONS.BEFORE) {
      return currentFiltered[currentFilteredIndex - 1]
        ? currentFiltered[currentFilteredIndex - 1].origIndex
        : this.state.activeIndex;
    }
    return currentFiltered[currentFilteredIndex + 1]
      ? currentFiltered[currentFilteredIndex + 1].origIndex
      : this.state.activeIndex;
  };

  renderChildren(children) {
    const onClick = props => {
      this.setState(
        {
          open: false,
          selectedText: props.selectedText || props.primaryText,
          value: props.value,
        },
        this.onChangeHandler,
      );
    };

    return Children.map(children, (child, index) =>
      child.type.displayName === 'Option'
        ? cloneElement(child, {
            onClick: () => onClick(child.props),
            selected: index === this.state.selectedIndex,
            active: this.state.open && this.state.activeIndex === index,
            tabIndex: null,
            parentRef: this.parentRef,
          })
        : child,
    );
  }

  render() {
    const {
      name,
      className,
      children,
      disabled,
      outerLabel,
      placeholderText,
      isSingleInput,
      tabIndex,
      inputClassName,
    } = this.props;

    const { open, value, selectedText } = this.state;

    const selectClassList = classnames(className, styles.select, {
      [`${styles.disabled}`]: disabled,
      [`${styles.open}`]: !!open,
      [`${styles.noBackground}`]: this.props.noBackground,
      [`${styles.header}`]: this.props.headerSelect,
    });

    const selectInputClassList = classnames(inputClassName, styles.input, {
      [`${styles.selected}`]: !!value,
      [`${styles.singleInputField}`]: isSingleInput,
    });

    return (
      <OutsideClickHandler onOutsideClick={() => this.close()}>
        <div className={selectClassList}>
          {outerLabel && <div className={styles.label}>{outerLabel}</div>}
          <div
            className={selectInputClassList}
            onClick={() => this.toggleHandler()}
            role="listbox"
            tabIndex={disabled ? undefined : tabIndex}
            onKeyUp={this.handleKeyUpOpen}
            onKeyDown={this.handleKeyDown}
            onKeyPress={this.handleKeyPress}
          >
            <span className={styles.truncateEllipsis} title={selectedText || placeholderText}>
              {selectedText || placeholderText}
            </span>
            <i className={`lp-icon ${styles.icon}`}>down_angle</i>
          </div>
          <Flyout className={styles.flyout} open={open}>
            <div
              ref={item => {
                this.parentRef = item;
              }}
              className={styles.options}
            >
              {this.renderChildren(children)}
            </div>
          </Flyout>
          <select
            name={name}
            className={styles.nativeElement}
            onChange={() => this.onChangeHandler()}
            ref={select => {
              this.select = select;
            }}
            value={value}
          >
            <option disabled value="" />
            {Children.map(children, child =>
              child.type.displayName === 'Option' ? (
                <option value={child.props.value}>{child.props.primaryText}</option>
              ) : null,
            )}
          </select>
        </div>
      </OutsideClickHandler>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  noBackground: PropTypes.bool,
  headerSelect: PropTypes.bool,
  isSingleInput: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  outerLabel: PropTypes.string,
  placeholderText: PropTypes.string,
  value: PropTypes.string,
  tabIndex: PropTypes.number,
};

Select.defaultProps = {
  className: '',
  disabled: false,
  id: null,
  name: '',
  noBackground: false,
  headerSelect: false,
  isSingleInput: false,
  onClick: () => {},
  onChange: () => {},
  outerLabel: '',
  placeholderText: '',
  value: '',
  tabIndex: 0,
};
