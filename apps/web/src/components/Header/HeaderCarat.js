import { styled } from '@design'

const $HeaderCarat = styled('svg', {
  transition: 'all $base',
  transform: 'rotateX(180deg)',

  variants: {
    active: {
      true: {
        transform: 'rotateX(0deg)',
      },
    },
  },
})

const $HeaderCaratPath = styled('path', {
  fill: '$colors$textAlt',

  variants: {
    active: {
      true: {
        fill: '$colors$primary',
      },
    },
  },
})

const HeaderCarat = ({ active }) => (
  <$HeaderCarat
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    active={active}
  >
    <g clipPath="url(#clip0_38_1535)">
      <$HeaderCaratPath
        d="M5.32935 9.83337L8.66268 6.50004L11.996 9.83337H5.32935Z"
        active={active}
      />
    </g>
    <defs>
      <clipPath id="clip0_38_1535">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="matrix(1 0 0 -1 0.66272 16.5)"
        />
      </clipPath>
    </defs>
  </$HeaderCarat>
)

export default HeaderCarat
