import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import anime from 'animejs'
import {
  useAnimationPlayPause,
  useAnimationCanceled,
} from '@legacy/components/animations/animationHooks'
// images
import furniture from '@legacy/assets/images/animations/time-delayed-popup_furniture.jpg'

const AnimationTimeline = ({
  svg,
  site,
  timer,
  popupContainer,
  popup,
  duration,
  transitionTime,
  cb = () => {},
}) => {
  const intro = anime.timeline({
    complete: cb,
  })

  return intro
    .add({
      targets: [svg],
      opacity: [0, 1],
      duration: transitionTime,
      easing: 'easeInOutSine',
    })
    .add({
      targets: [site],
      translateY: [0, -535],
      duration: 2500,
      easing: 'easeInOutSine',
    })
    .add(
      {
        targets: [timer],
        strokeDashoffset: [0, 475],
        duration: 2500,
        easing: 'linear',
      },
      '-=2500'
    )
    .add({
      targets: [popupContainer],
      opacity: [0, 1],
      duration: 300,
      easing: 'easeInOutSine',
    })
    .add(
      {
        targets: [popup],
        translateY: [50, 0],
        duration: 300,
        easing: 'easeInOutSine',
      },
      '-=300'
    )
    .add({
      targets: [svg],
      opacity: [1, 1],
      duration,
      easing: 'easeInOutSine',
    })
    .add({
      targets: [svg],
      opacity: [1, 0],
      duration: transitionTime,
      easing: 'easeInOutSine',
    })
}

const $Animation_TimeDelayedPopupSvg = styled('svg', {
  background: '$white',
  borderRadius: '5px',

  variants: {
    active: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
})

const Animation_TimeDelayedPopup = ({
  cb,
  active = false,
  canceled = false,
  duration = 12000,
  transitionTime = 175,
}) => {
  const [animation, setAnimation] = useState(null)
  const svg = useRef(null)
  const site = useRef(null)
  const timer = useRef(null)
  const popupContainer = useRef(null)
  const popup = useRef(null)
  useEffect(() => {
    if (
      svg.current &&
      site.current &&
      popupContainer.current &&
      popup.current &&
      timer.current
    ) {
      const anim = AnimationTimeline({
        svg: svg.current,
        site: site.current,
        timer: timer.current,
        popupContainer: popupContainer.current,
        popup: popup.current,
        duration,
        transitionTime,
        cb,
      })
      if (!active) {
        anim.restart()
        anim.pause()
      }
      setAnimation(anim)
    }
  }, [
    svg.current,
    site.current,
    timer.current,
    popupContainer.current,
    popup.current,
  ])

  useAnimationPlayPause({ active, animation })
  useAnimationCanceled({ active, canceled, animation, transitionTime })

  return (
    <$Animation_TimeDelayedPopupSvg
      ref={svg}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 630 455"
      opacity="0"
      active={active}
    >
      <g transform="translate(3 22)">
        <g fill="none" fillRule="evenodd">
          <g id="site" ref={site}>
            <rect width="624" height="60" fill="#E7E6E6" rx="1.5" />
            <path
              fill="#FFF"
              d="M53,30 C53,38.2835821 46.2870578,45 37.9977609,45 C29.7174205,45 23,38.2835821 23,30 C23,21.7164179 29.7174205,15 37.9977609,15 C46.2870578,15 53,21.7164179 53,30"
            />
            <rect width="68" height="10" x="448" y="25" fill="#FFF" />
            <rect width="68" height="10" x="533" y="25" fill="#FFF" />
            <rect width="68" height="10" x="364" y="25" fill="#FFF" />
            <rect width="123" height="15" x="63" y="23" fill="#FFF" />

            <rect
              width="436"
              height="173"
              x="92"
              y="100"
              fill="#E7E6E6"
              rx="1.5"
            />
            <rect
              width="390"
              height="36"
              x="117"
              y="313"
              fill="#E7E6E6"
              rx="1.5"
            />
            <rect
              width="274"
              height="36"
              x="175"
              y="363"
              fill="#E7E6E6"
              rx="1.5"
            />

            <rect width="201" height="155" x="92" y="439" fill="#E7E6E6" />
            <rect width="201" height="26" x="92" y="614" fill="#E7E6E6" />
            <rect width="201" height="155" x="327" y="439" fill="#E7E6E6" />
            <rect width="201" height="26" x="327" y="614" fill="#E7E6E6" />

            <rect width="201" height="155" x="92" y="680" fill="#E7E6E6" />
            <rect width="201" height="26" x="92" y="855" fill="#E7E6E6" />
            <rect width="201" height="155" x="327" y="680" fill="#E7E6E6" />
            <rect width="201" height="26" x="327" y="855" fill="#E7E6E6" />

            <rect width="624" height="26" x="0" y="941" fill="#E7E6E6" />
          </g>
          <g transform="translate(485 296) scale(.4)">
            <circle cx="150" cy="150" r="150" fill="#8FEFEF" />
            <path
              id="timer"
              ref={timer}
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              fill="none"
              stroke="#43E0F0"
              strokeWidth="150"
              strokeDasharray="0 475 475 0"
              strokeDashoffset="0"
              transform="translate(50,50) rotate(90,100,100) "
            />
          </g>
          <g id="pop-up" ref={popupContainer} opacity={0}>
            <rect width="624" height="431" fill="#0F0C09" fillOpacity=".7" />
            <image
              ref={popup}
              width="420"
              height="341.091"
              x="102.153"
              y="44.955"
              href={furniture.src}
            />
          </g>
          <path
            fill="#FFF"
            stroke="#575452"
            strokeWidth="3"
            d="M630.973684,-42 L630.973684,-1 L-10.622807,-1 L-10.622807,-42 L630.973684,-42 Z"
          />
          <rect
            width="627"
            height="452"
            x="-1.5"
            y="-20.5"
            stroke="#575452"
            strokeWidth="3"
            rx="5.474"
            fill="rgba(0,0,0,0)"
          />
          &nbsp;
          <g transform="translate(10.947 -16)">
            <ellipse
              fill="#C3C2C1"
              cx="5.474"
              cy="5.468"
              rx="5.474"
              ry="5.468"
            />
            <ellipse
              fill="#C3C2C1"
              cx="23.719"
              cy="5.468"
              rx="5.474"
              ry="5.468"
            />
            <ellipse
              fill="#C3C2C1"
              cx="41.965"
              cy="5.468"
              rx="5.474"
              ry="5.468"
            />
          </g>
        </g>
      </g>
    </$Animation_TimeDelayedPopupSvg>
  )
}

Animation_TimeDelayedPopup.propTypes = {
  cb: PropTypes.func,
}

Animation_TimeDelayedPopup.defaultProps = {
  cb: () => {},
}

export default Animation_TimeDelayedPopup
