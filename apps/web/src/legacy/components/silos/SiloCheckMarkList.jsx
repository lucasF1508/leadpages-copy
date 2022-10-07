import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
// Images
import purpleCheckSVG from '@legacy/assets/images/global/check_purple.svg'

const CheckListContainer = styled('div', {
  width: '100%',
  margin: '1rem 0 2.5rem 0',
})

const CheckListItem = styled('div', {
  display: 'flex',
  marginBottom: '1.25rem',
})

const PurpleCheck = styled('img', {
  width: '16px',
  height: '16px',
  display: 'inline',
  paddingTop: '0.3rem',
  marginRight: '0.8rem',

  '&.black-filter': {
    filter: 'brightness(0)',
  },
})

const CheckListText = styled('div', {
  fontSize: '18px',
  lineHeight: '30px',
  color: '$textAlt',
})

const SiloCheckMarkList = ({ checkList, competitor }) => (
  <CheckListContainer>
    {checkList.map((item) => (
      <CheckListItem key={item}>
        <PurpleCheck
          src={purpleCheckSVG.src}
          alt="purple check"
          className={competitor ? 'black-filter' : null}
        />
        <CheckListText>{item}</CheckListText>
      </CheckListItem>
    ))}
  </CheckListContainer>
)

SiloCheckMarkList.defaultProps = {
  competitor: false,
}

SiloCheckMarkList.propTypes = {
  checkList: PropTypes.arrayOf(PropTypes.string).isRequired,
  competitor: PropTypes.bool,
}

export default SiloCheckMarkList
