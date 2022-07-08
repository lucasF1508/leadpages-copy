import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import { COLORS } from '../constants';
import RadioInput from './RadioInput';

const radioGroupClass = css`
  display: flex;
  height: 36px;
  width: 194px;
  flex-wrap: nowrap;
  background: ${COLORS.bg.midGrey};
  justify-content: space-between;
  border-radius: 100px;

  &__btn {
    display: flex;
    align-items: center;
    color: ${COLORS.text.tundora};
    font-family: 'Apercu Pro';
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;

    height: 36px;
    border-radius: 100px;
    padding: 0 24px;
    cursor: pointer;

    &.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  & input[type='radio'] {
    opacity: 0;
    position: absolute;

    &:checked + [class$='__btn'] {
      background: #ffffff;
      box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.25);
      color: ${COLORS.lp};
    }
  }

  @media (max-width: 1100px) {
    width: 164px;
    &__btn {
      padding: 0 16px;
    }
  }
`;

const RadioButtonGroup = ({
  items,
  onChange,
  selectedValue,
  rootPlans,
  isBottom,
}) => (
  <div className={radioGroupClass}>
    {Object.keys(items).map(key => {
      const { label, value, id } = items[key];
      return (
        <RadioInput
          key={label}
          labelText={label}
          labelClass={`${radioGroupClass}__btn`}
          value={value}
          isChecked={selectedValue === value}
          id={isBottom ? id + '1' : id}
          onChange={onChange}
          disabled={!rootPlans[value]}
        />
      );
    })}
  </div>
);

RadioButtonGroup.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
};

RadioButtonGroup.defaultProps = {
  selectedValue: '',
};

export default RadioButtonGroup;
