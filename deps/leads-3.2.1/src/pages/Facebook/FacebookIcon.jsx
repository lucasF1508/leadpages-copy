/* eslint max-len: [0] */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './FacebookIcon.css';

const FacebookIcon = ({ imgSrc }) => (
  <div style={{ position: 'relative', height: '36px' }}>
    {
      !imgSrc &&
      <svg width="36px" height="36px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Facebook-Ad" transform="translate(0.000000, -2.000000)">
            <g id="facebook_integration">
              <g transform="translate(0.000000, 2.000000)">
                <rect id="Rectangle-1" fill="#4477BD" x="0" y="0" width="24" height="24" rx="3" />
                <path d="M15.5341797,6.71386719 L15.5341797,8.56738281 L14.4296875,8.56738281 C14.2265615,8.56738281 14.0572923,8.58854146 13.921875,8.63085938 C13.7864577,8.67317729 13.6848962,8.73665322 13.6171875,8.82128906 C13.5494788,8.9059249 13.4965822,9.01171812 13.4584961,9.13867188 C13.42041,9.26562563 13.4013672,9.4095044 13.4013672,9.5703125 L13.4013672,10.9033203 L15.4580078,10.9033203 L15.1914062,12.9726562 L13.4013672,12.9726562 L13.4013672,18.2919922 L11.2558594,18.2919922 L11.2558594,12.9726562 L9.46582031,12.9726562 L9.46582031,10.9033203 L11.2558594,10.9033203 L11.2558594,9.37988281 C11.2558594,8.93977645 11.3172194,8.55045742 11.4399414,8.21191406 C11.5626634,7.8733707 11.7467436,7.58561316 11.9921875,7.34863281 C12.2291679,7.11165246 12.5105778,6.931804 12.8364258,6.80908203 C13.1622738,6.68636006 13.5283183,6.625 13.9345703,6.625 C14.2731137,6.625 14.5756823,6.63346346 14.8422852,6.65039062 C15.1088881,6.66731779 15.3395173,6.68847644 15.5341797,6.71386719 Z" id="facebook" fill="#FFFFFF" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    }
    {
      imgSrc &&
      <img
        alt="facebook ad thumbnail"
        className={classNames(styles.thumbnail, {
          [`${styles.hasImage}`]: !!imgSrc,
        })}
        height="36px"
        width="36px"
        src={imgSrc}
      />
    }
  </div>
);

FacebookIcon.propTypes = {
  imgSrc: PropTypes.string,
};

FacebookIcon.defaultProps = {
  imgSrc: null,
  showStatus: false,
  status: '',
};

export default FacebookIcon;
