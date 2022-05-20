import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import {
  animateFailed,
  animateIntroSimple,
  animateScanning
} from './animations';

const rgb = (r, g, b) => `rgb(${r},${g},${b})`;

const darkBlue = rgb(71, 136, 199);
const lightBlue = rgb(194, 232, 255);

const initialGray = [121, 127, 137];

const ColorPage = ({
  previousColor,
  currentColor,
  pageRefFunction,
  currentColorPageRefFunction
}) => (
  <g
    id="ColorPage"
    ref={pageRefFunction}
    transform="translate(0 17)"
    style={{
      transformOrigin: '75px 2px 0px'
    }}
  >
    <rect
      width="108"
      height="81"
      style={{ fill: rgb(...previousColor) }}
      rx="3"
    />
    <rect
      ref={currentColorPageRefFunction}
      width="108"
      height="0"
      style={{ fill: rgb(...currentColor) }}
      rx="3"
    />
    <path
      fill="#FFF"
      fillOpacity=".88"
      d="M60,52 L60,53 L91,53 L91,52 L60,52 Z M60,46 L60,47 L96,47 L96,46 L60,46 Z M60,40 L60,41 L96,41 L96,40 L60,40 Z M60,34 L60,35 L96,35 L96,34 L60,34 Z M60,24 L60,27 L96,27 L96,24 L60,24 Z M2,11 L106,11 L106,78 C106,78.5522847 105.552285,79 105,79 L3,79 C2.44771525,79 2,78.5522847 2,78 L2,11 Z M12,20 L12,71 L51,71 L51,20 L12,20 Z M69,60 C67.3431458,60 66,61.3431458 66,63 C66,64.6568542 67.3431458,66 69,66 L87,66 C88.6568542,66 90,64.6568542 90,63 C90,61.3431458 88.6568542,60 87,60 L69,60 Z"
    />
    <path
      fill="#FFF"
      d="M14,22 L49,22 L49,69 L14,69 L14,22 Z M17,25 L17,66 L46,66 L46,25 L17,25 Z"
    />
    <polygon fill="#FFF" fillOpacity=".74" points="17 51 23 45 44 66 17 66" />
    <path
      fill="#FFF"
      fillOpacity=".42"
      d="M46,51 L46,66 L44,66 L34.5,56.5 L43,48 L46,51 Z"
    />
    <polygon
      fill="#FFF"
      fillOpacity=".88"
      points="17 51 17 25 46 25 45.988 50.967 43 48 34.5 56.5 23 45"
    />
    <circle cx="39" cy="32" r="4" fill="#FFF" />
    <path
      fill="#FFF"
      fillOpacity=".8"
      d="M3,2 L105,2 C105.552285,2 106,2.44771525 106,3 L106,9 L2,9 L2,3 C2,2.44771525 2.44771525,2 3,2 Z M7,7 C7.82842712,7 8.5,6.32842712 8.5,5.5 C8.5,4.67157288 7.82842712,4 7,4 C6.17157288,4 5.5,4.67157288 5.5,5.5 C5.5,6.32842712 6.17157288,7 7,7 Z M13,7 C13.8284271,7 14.5,6.32842712 14.5,5.5 C14.5,4.67157288 13.8284271,4 13,4 C12.1715729,4 11.5,4.67157288 11.5,5.5 C11.5,6.32842712 12.1715729,7 13,7 Z M19,7 C19.8284271,7 20.5,6.32842712 20.5,5.5 C20.5,4.67157288 19.8284271,4 19,4 C18.1715729,4 17.5,4.67157288 17.5,5.5 C17.5,6.32842712 18.1715729,7 19,7 Z"
    />
    <rect width="36" height="3" x="60" y="24" fill="#FFF" fillOpacity=".5" />
    <rect width="36" height="1" x="60" y="34" fill="#FFF" fillOpacity=".5" />
    <rect width="36" height="1" x="60" y="40" fill="#FFF" fillOpacity=".5" />
    <rect width="36" height="1" x="60" y="46" fill="#FFF" fillOpacity=".5" />
    <rect width="31" height="1" x="60" y="52" fill="#FFF" fillOpacity=".5" />
  </g>
);

export default class Robie extends React.Component {
  constructor(props) {
    super(props);

    this.animateIntroSimple = null;
    this.animateScanning = null;
    this.animateFailed = null;
    this.animateParams = null;

    this.initTimeout = null;

    this.state = {
      hasFailed: props.hasFailed,
      currentColor: 1,
      previousColor: 0,
      updateColors: false,
      colors:
        props.colors && props.colors.length
          ? [initialGray, ...props.colors]
          : [
              initialGray,
              [94, 92, 196],
              [0, 132, 142],
              [191, 7, 17],
              [4, 105, 255]
            ]
    };
  }

  componentDidMount() {
    this.animateParams = {
      robie: this.robie,
      leftArm: this.leftArm,
      rightArm: this.rightArm,
      scanner: this.scanner,
      currentColorPage: this.currentColorPage,
      nonColorPage: this.nonColorPage,
      eyes: this.eyes,
      head: this.head,
      cb: this.nextColor
    };
    this.initTimeout = setTimeout(() => {
      if (this.props.hasFailed) {
        return (this.animateFailed = animateFailed({
          ...this.animateParams,
          cb: null
        }));
      }
      this.animateIntroSimple = animateIntroSimple({
        ...this.animateParams,
        cb: () => {
          this.animateScanning = animateScanning(this.animateParams);
        }
      });
    }, 500);
  }
  componentDidUpdate(prevProps) {
    if (this.props.hasFailed && !prevProps.hasFailed) {
      this.setState(() => ({ hasFailed: true }));
      this.animateIntroSimple && this.animateIntroSimple.pause();
      this.animateScanning && this.animateScanning.pause();
      this.animateParams.cb = null;
      this.animateFailed = animateFailed({ ...this.animateParams });
    }
    if (
      !this.state.updateColors &&
      this.props.colors.length > 0 &&
      !isEqual(prevProps.colors, this.props.colors)
    ) {
      this.setState(() => ({
        updateColors: true
      }));
    }
  }
  componentWillUnmount() {
    clearTimeout(this.initTimeout);
    this.animateIntroSimple && this.animateIntroSimple.pause();
    this.animateScanning && this.animateScanning.pause();
    this.animateFailed && this.animateFailed.pause();
  }
  updateColors = () => {
    return new Promise(resolve => {
      this.setState(
        state => {
          // TODO: Keep this feature to show actual brand colors mid-flight for now,
          // but remove it if it doesn't end up getting used in future releases.
          const colors = state.colors;
          colors.splice(
            state.currentColor + 1,
            state.colors.length - 1,
            ...this.props.colors
          );

          return {
            colors,
            updateColors: false
          };
        },
        () => {
          resolve();
        }
      );
    });
  };
  nextColor = async () => {
    if (typeof this.props.onComplete === 'function') {
      this.animateParams.cb = null;
      this.animateIntroSimple && this.animateIntroSimple.pause();
      this.animateScanning && this.animateScanning.pause();
      return this.props.onComplete();
    }
    if (this.state.updateColors) {
      await this.updateColors();
    }
    if (this.state.currentColor + 1 >= this.state.colors.length) {
      return this.setState(
        state => ({
          currentColor: 0,
          previousColor: state.currentColor
        }),
        () => {
          this.animateScanning = animateScanning(this.animateParams);
        }
      );
    }
    this.setState(
      state => ({
        currentColor: state.currentColor + 1,
        previousColor: state.currentColor
      }),
      () => {
        this.animateScanning = animateScanning(this.animateParams);
      }
    );
  };
  render() {
    return (
      <svg
        width="314px"
        height="190px"
        viewBox="0 -30 314 190"
        style={{
          margin: '38px 0px 80px',
          fillRule: 'evenodd',
          clipRule: 'evenodd'
        }}
      >
        <g id="Group-5">
          <ColorPage
            pageRefFunction={nonColorPage => {
              this.nonColorPage = nonColorPage;
            }}
            currentColorPageRefFunction={currentColorPage => {
              this.currentColorPage = currentColorPage;
            }}
            previousColor={
              this.state.hasFailed
                ? initialGray
                : this.state.colors[this.state.previousColor]
            }
            currentColor={
              this.state.hasFailed
                ? initialGray
                : this.state.colors[this.state.currentColor]
            }
          />
          <g
            ref={robie => (this.robie = robie)}
            id="Robie"
            style={{
              transformOrigin: '190px 154px 0px'
            }}
          >
            <g
              id="Head"
              ref={head => (this.head = head)}
              style={{
                transformOrigin: '202px 48px'
              }}
            >
              <g id="Neck">
                <rect
                  id="NeckStem"
                  x="199"
                  y="30"
                  width="8"
                  height="12"
                  style={{ fill: darkBlue }}
                />
                <g id="NeckJoint" transform="matrix(1,0,0,1,191,36)">
                  <circle
                    id="NeckJointOuter"
                    cx="12"
                    cy="12"
                    r="12"
                    style={{ fill: darkBlue }}
                  />
                  <circle
                    id="NeckJointInner"
                    cx="12"
                    cy="12"
                    r="8"
                    style={{ fill: lightBlue }}
                  />
                </g>
              </g>
              <g id="Face">
                <g id="OuterHead" transform="matrix(1,0,0,1,171,0)">
                  <rect
                    x="0"
                    y="0"
                    width="64"
                    height="32"
                    style={{ fill: darkBlue }}
                  />
                </g>
                <g id="InnerHead" transform="matrix(1,0,0,1,171,0)">
                  <rect
                    x="4"
                    y="4"
                    width="56"
                    height="24"
                    style={{ fill: lightBlue }}
                  />
                </g>
                <g
                  id="Eyes"
                  ref={eyes => (this.eyes = eyes)}
                  style={{
                    transformOrigin: '200px 17px'
                  }}
                >
                  <circle
                    id="RightEye"
                    cx="189"
                    cy="16"
                    r="4"
                    style={{ fill: darkBlue }}
                  />
                  <circle
                    id="LeftEye"
                    cx="217"
                    cy="16"
                    r="4"
                    style={{ fill: darkBlue }}
                  />
                </g>
              </g>
            </g>
            <path
              id="Scan"
              ref={scanner => {
                this.scanner = scanner;
              }}
              d="M 210.043,20 L 107.72,18 L 0,18 L 182.479,20 L 210.043,20 Z"
              style={{ fill: 'url(#_Linear1)' }}
            />
            <g id="Tire" transform="matrix(1,0,0,1,187,116)">
              <path
                id="OuterTire"
                d="M0,2L32,2L32,28C32,33.523 27.523,38 22,38L10,38C4.477,38 0,33.523 0,28L0,2Z"
                style={{ fill: darkBlue }}
              />
              <path
                id="InnerTire"
                d="M4,0L28,0L28,28C28,31.314 25.314,34 22,34L10,34C6.686,34 4,31.314 4,28L4,0Z"
                style={{ fill: lightBlue }}
              />
              <g id="TireTreads" transform="matrix(1,0,0,1,-187,-116)">
                <rect
                  id="Rectangle-31-Copy-16"
                  x="191"
                  y="124"
                  width="8"
                  height="4"
                  style={{ fill: darkBlue }}
                />
                <rect
                  id="Rectangle-31-Copy-17"
                  x="207"
                  y="124"
                  width="8"
                  height="4"
                  style={{ fill: darkBlue }}
                />
                <rect
                  id="Rectangle-31-Copy-18"
                  x="207"
                  y="132"
                  width="8"
                  height="4"
                  style={{ fill: darkBlue }}
                />
                <rect
                  id="Rectangle-31-Copy-19"
                  x="191"
                  y="132"
                  width="8"
                  height="4"
                  style={{ fill: darkBlue }}
                />
                <rect
                  id="Rectangle-31-Copy-20"
                  x="191"
                  y="140"
                  width="8"
                  height="4"
                  style={{ fill: darkBlue }}
                />
                <rect
                  id="Rectangle-31-Copy-21"
                  x="207"
                  y="140"
                  width="8"
                  height="4"
                  style={{ fill: darkBlue }}
                />
              </g>
            </g>
            <g id="UpperBody">
              <g id="Body">
                <g id="OuterChest" transform="matrix(1,0,0,1,163,48)">
                  <path
                    d="M-0.457,0L79.546,0L75.966,64.444C75.731,68.683 72.224,72 67.979,72L11.114,72C6.868,72 3.362,68.683 3.126,64.444L-0.457,0Z"
                    style={{ fill: darkBlue }}
                  />
                </g>
                <g id="Chest" transform="matrix(1,0,0,1,163,48)">
                  <path
                    d="M3.589,4L75.501,4L72.117,64.224C71.998,66.343 70.246,68 68.124,68L10.969,68C8.847,68 7.095,66.343 6.975,64.225L3.589,4Z"
                    style={{ fill: rgb(223, 240, 254) }}
                  />
                </g>
                <rect
                  id="InnerChest"
                  x="183"
                  y="72"
                  width="40"
                  height="24"
                  style={{ fill: lightBlue }}
                />
              </g>
              <path
                id="LeftForeArm"
                ref={leftArm => {
                  this.leftArm = leftArm;
                }}
                d="M245.99,89.967C252.333,91.718 256.99,97.529 256.99,104.428L252.99,104.428C252.99,98.353 248.066,93.428 241.99,93.428C235.915,93.428 230.99,98.353 230.99,104.428L226.99,104.428C226.99,97.529 231.648,91.718 237.99,89.967L237.99,49.428L245.99,49.428L245.99,89.967Z"
                style={{
                  fill: darkBlue,
                  transformOrigin: '242px 48px 0px',
                  transform: 'rotateZ(-30deg)'
                }}
              />
              <path
                id="RightForeArm"
                ref={rightArm => {
                  this.rightArm = rightArm;
                }}
                d="M167.206,89.915C173.548,91.665 178.206,97.477 178.206,104.376L174.206,104.376C174.206,98.301 169.281,93.376 163.206,93.376C157.131,93.376 152.206,98.3 152.206,104.376L148.206,104.376C148.206,97.477 152.863,91.665 159.206,89.915L159.206,49.376L167.206,49.376L167.206,89.915Z"
                style={{
                  fill: darkBlue,
                  transformOrigin: '164px 49px 0px',
                  transform: 'rotateZ(30deg)'
                }}
              />
              <g id="LeftShoulder" transform="matrix(1,0,0,1,226.99,40.4282)">
                <circle
                  id="LeftShoulderOuter"
                  cx="15"
                  cy="8"
                  r="8"
                  style={{ fill: darkBlue }}
                />
                <circle
                  id="LeftShoulderInner"
                  cx="15"
                  cy="8"
                  r="4"
                  style={{ fill: lightBlue }}
                />
              </g>
              <g id="RightShoulder">
                <g
                  id="RightShoulderOuter"
                  transform="matrix(1,1.73472e-18,-1.73472e-18,1,148.206,40.3756)"
                >
                  <circle cx="15" cy="8" r="8" style={{ fill: darkBlue }} />
                </g>
                <g
                  id="RightShoulderInner"
                  transform="matrix(1,1.73472e-18,-1.73472e-18,1,148.206,40.3756)"
                >
                  <circle cx="15" cy="8" r="4" style={{ fill: lightBlue }} />
                </g>
              </g>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="_Linear1"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(2.80844e-15,45.8652,-45.8652,2.80844e-15,105.021,20)"
          >
            <stop offset="0" style={{ stopColor: darkBlue, stopOpacity: 0 }} />
            <stop
              offset="1"
              style={{ stopColor: darkBlue, stopOpacity: 0.498039 }}
            />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}

Robie.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  hasFailed: PropTypes.bool,
  onComplete: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])])
};

Robie.defaultProps = {
  colors: [],
  hasFailed: false,
  onComplete: null
};
