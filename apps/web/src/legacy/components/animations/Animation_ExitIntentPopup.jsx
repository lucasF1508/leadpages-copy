import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { InView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { useAnimationPlayPause, useAnimationCanceled } from './animationHooks';
import styled from 'styled-components';

function AnimationTimeline({
  svg,
  cursorDefault,
  popupContainer,
  popup,
  duration,
  transitionTime,
  cb = () => {},
}) {
  const intro = anime.timeline({
    complete: cb,
  });
  return intro
    .add({
      targets: [svg],
      opacity: [0, 1],
      duration: transitionTime,
      easing: 'easeInOutSine',
    })
    .add({
      targets: [cursorDefault],
      translateX: [510, 0],
      translateY: [90, -20],
      duration: 2000,
      easing: 'easeInOutSine',
    })
    .add({
      targets: [popupContainer],
      opacity: [0, 1],
      duration: 300,
      easing: 'easeInOutSine',
    })
    .add(
      {
        targets: [popup],
        translateX: [121, 121],
        translateY: [194 + 50, 86],
        duration: 300,
        easing: 'easeInOutSine',
      },
      '-=300',
    )
    .add({
      targets: [svg],
      opacity: [1, 1],
      duration: duration,
      easing: 'easeInOutSine',
    })
    .add({
      targets: [svg],
      opacity: [1, 0],
      duration: transitionTime,
      easing: 'easeInOutSine',
    });
}

function Animation({ cb, active, canceled, duration, transitionTime, siloVariant }) {
  const images = useStaticQuery(graphql`
    query ExitIntentPopupAnimationQuery {
      tomatoBasil: file(
        relativePath: { eq: "assets/images/animations/exit-intent-popup_tomato-basil.jpg" }
      ) {
        ...fixed
      }
    }
  `);
  const tomatoBasilSrc = getSrc(images.tomatoBasil);
  const [animation, setAnimation] = useState(null);
  const svg = useRef(null);
  const site = useRef(null);
  const cursorDefault = useRef(null);
  const popupContainer = useRef(null);
  const popup = useRef(null);

  useEffect(() => {
    if (svg.current && cursorDefault.current && popupContainer.current && popup.current) {
      const anim = AnimationTimeline({
        svg: svg.current,
        cursorDefault: cursorDefault.current,
        popupContainer: popupContainer.current,
        popup: popup.current,
        duration,
        transitionTime,
        cb,
      });
      if (!active) {
        anim.restart();
        anim.pause();
      }
      setAnimation(anim);
    }
  }, [svg.current, cursorDefault.current, popupContainer.current, popup.current]);

  useAnimationPlayPause({ active, animation });
  useAnimationCanceled({ active, canceled, animation, transitionTime });

  return (
    <svg
      ref={svg}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 630 455"
      opacity="0"
      style={{
        background: '#fff',
        borderRadius: '5px',
      }}
      // only if silo variant
      style={siloVariant ? { visibility: active ? 'visible' : 'hidden' } : {}}
      // only if not silo variant
      style={!siloVariant ? { display: active ? 'block' : 'none' } : {}}
    >
      <g transform="translate(3 22)">
        <defs>
          <filter
            id="exit-1-a"
            width="153.8%"
            height="133.7%"
            x="-26.9%"
            y="-16.8%"
            filterUnits="objectBoundingBox"
          >
            <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2" />
            <feColorMatrix
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.65 0"
            />
            <feMerge>
              <feMergeNode in="shadowMatrixOuter1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
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

            <rect width="201" height="155" x="92" y="100" fill="#E7E6E6" />
            <rect width="201" height="26" x="92" y="265" fill="#E7E6E6" />
            <rect width="201" height="155" x="327" y="100" fill="#E7E6E6" />
            <rect width="201" height="26" x="327" y="265" fill="#E7E6E6" />

            <rect width="201" height="155" x="92" y="312" fill="#E7E6E6" />
            <rect width="201" height="155" x="327" y="312" fill="#E7E6E6" />
          </g>

          <g id="pop-up" ref={popupContainer} opacity={0}>
            <rect width="624" height="431" fill="#0F0C09" fillOpacity=".7" />
            <g ref={popup} transform="translate(121 104)">
              <rect width="380.1" height="232.05" fill="#FFF" />
              <g transform="translate(280.35)">
                <image width="342.232" height="236" x="-82.35" y="-2" href={tomatoBasilSrc} />
                <g transform="translate(113 6)">
                  <circle cx="9" cy="9" r="9" fill="#F2F4F7" />
                  <polygon
                    fill="#878584"
                    fillRule="nonzero"
                    points="13 5.805 9.805 9 13 12.195 12.195 13 9 9.805 5.805 13 5 12.195 8.195 9 5 5.805 5.805 5 9 8.195 12.195 5"
                  />
                </g>
              </g>
              <g transform="translate(31.5 32.6)">
                <text fill="#0F0C09" fontFamily="Poppins-Regular, Poppins" fontSize="19">
                  <tspan x="12.569" y="20.924">
                    Before you go, grab&nbsp;
                  </tspan>
                  &nbsp;
                  <tspan x="16.53" y="47.924">
                    our free cookbook!
                  </tspan>
                </text>
                <g transform="translate(0 73.45)">
                  <rect
                    width="208.294"
                    height="28.744"
                    x=".591"
                    y=".591"
                    fill="#FFF"
                    stroke="#979797"
                    strokeWidth="1.181"
                    rx="2.115"
                  />
                  <text
                    fill="#B3B3B3"
                    fontFamily="Poppins-Regular, Poppins"
                    fontSize="14"
                    letterSpacing="-.336"
                  >
                    <tspan x="6.3" y="17.725">
                      email
                    </tspan>
                  </text>
                </g>
                <g transform="translate(0 112.825)">
                  <rect width="209.475" height="40.95" fill="#F65B1C" rx="1.536" />
                  <text
                    fill="#FFF"
                    fontFamily="Poppins-Regular, Poppins"
                    fontSize="13"
                    letterSpacing=".31"
                  >
                    <tspan x="67.825" y="24.025">
                      YES, PLEASE!
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
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
          <g transform="translate(10.947 -16)">
            <ellipse fill="#C3C2C1" cx="5.474" cy="5.468" rx="5.474" ry="5.468" />
            <ellipse fill="#C3C2C1" cx="23.719" cy="5.468" rx="5.474" ry="5.468" />
            <ellipse fill="#C3C2C1" cx="41.965" cy="5.468" rx="5.474" ry="5.468" />
          </g>
          <g transform="translate(12 0)">
            <g
              id="cursorDefault"
              ref={cursorDefault}
              filter="url(#exit-1-a)"
              transform="translate(511.857 88.5)"
            >
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M33.1428571,58.5576923 C33.7942679,60.1361106 33.1682565,66.1142457 29.7142857,67.5 C26.260315,68.8857543 21.8473023,67.5 21.8473023,67.5 L13.8396088,51.3306189 L-1.31957937e-14,65.3033009 L-1.31957937e-14,2.19669914 L42.3956504,45 L26.599911,45 C27.3751204,46.5006887 32.3152585,56.552357 33.1428571,58.5576923 Z"
              />
              <path
                fill="#000"
                d="M3.71428571,11.25 L3.71428571,56.25 L14.8571429,45 L24.1428571,63.75 C24.1428571,63.75 26.654854,64.5592329 27.8571429,63.75 C29.0594317,62.9407671 30.2553094,61.310942 29.7142857,60 C27.1600714,53.810942 20.4285714,41.25 20.4285714,41.25 L33.4285714,41.25 L3.71428571,11.25 Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

Animation.defaultProps = {
  cb: () => {},
  active: false,
  canceled: false,
  duration: 86400000,
  transitionTime: 175,
  siloVariant: false,
};

Animation.propTypes = {
  cb: PropTypes.func,
  active: PropTypes.bool,
  canceled: PropTypes.bool,
  duration: PropTypes.number,
  transitionTime: PropTypes.number,
  siloVariant: PropTypes.bool,
};

const Container = styled.div`
  display: column;
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  position: relative;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 652px;
  margin-top: 27px;
  margin-bottom: 72px;
`;

const twentyFourHours = 86400000;

const Animation_ExitIntentPopup = props => {
  if (props.siloVariant) {
    return (
      <InView triggerOnce rootMargin="300px 0px 0px 0px">
        {({ inView, ref }) => (
          <div ref={ref}>
            <Container>
              <div style={{ background: '#fff' }}>
                <Animation
                  active={inView}
                  canceled={false}
                  duration={twentyFourHours}
                  transitionTime={300}
                  siloVariant={props.siloVariant}
                />
              </div>
            </Container>
          </div>
        )}
      </InView>
    );
  } else return <Animation {...props} />;
};

export default Animation_ExitIntentPopup;
