import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Images
import purpleCheckSVG from '../../assets/images/global/check_purple.svg';

const CheckListContainer = styled.div`
  width: 100%;
  margin: 1rem 0 2.5rem 0;
`;

const CheckListItem = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
`;

const PurpleCheck = styled.img`
  width: 16px;
  height: 16px;
  display: inline;
  padding-top: 0.3rem;
  margin-right: 0.8rem;

  &.black-filter {
    filter: brightness(0);
  }
`;

const CheckListText = styled.div`
  font-size: 18px;
  line-height: 30px;
  color: #575452;
`;

const SiloCheckMarkList = ({ checkList, competitor }) => {
  return (
    <CheckListContainer>
      {checkList.map(item => (
        <CheckListItem key={item}>
          <PurpleCheck
            src={purpleCheckSVG}
            alt="purple check"
            className={competitor ? 'black-filter' : null}
          />
          <CheckListText>{item}</CheckListText>
        </CheckListItem>
      ))}
    </CheckListContainer>
  );
};

SiloCheckMarkList.defaultProps = {
  competitor: false,
};

SiloCheckMarkList.propTypes = {
  checkList: PropTypes.arrayOf(PropTypes.string).isRequired,
  competitor: PropTypes.bool,
};

export default SiloCheckMarkList;
