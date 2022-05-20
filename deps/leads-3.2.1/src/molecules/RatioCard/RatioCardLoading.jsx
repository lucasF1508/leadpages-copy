import React from 'react';

import styles from './RatioCard.css';

export const RatioCardLoading = ({ isLoading }) => (
  <div className={`${styles.cardRatioLoadingContainer} ${isLoading ? '' : styles.loaded}`}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 367 207"
      style={{
        opacity: 0.3,
      }}
    >
      <rect
        id="Rectangle-2-Copy"
        fill="#E4E7ED"
        x="0"
        y="-1"
        width="367"
        height="207"
      />

      <rect
        id="Rectangle-23-Copy"
        fill="#FFFFFF"
        x="0"
        y="18"
        width="367"
        height="207"
      />


      <path
        d="M183.5,47
        L182.548852,46.1419973
        C179.173811,43.0777018
        176.964693,41.0859097
        176.964693,38.6038304
        C176.964693,36.5813953
        178.529485,35.0186047
        180.55451,35.0186047
        C181.689751,35.0186047
        182.79431,35.5701778
        183.5,36.3975376
        C184.20569,35.5701778
        185.310249,35.0186047
        186.44549,35.0186047
        C188.470515,35.0186047
        190.035307,36.5813953
        190.035307,38.6038304
        C190.035307,41.0859097
        187.826189,43.1083447
        184.451148,46.1726402
        L183.5,47
        Z"
        id="Favorite/fill-Copy"
        fill="#B1BACC"
        fillRule="nonzero"
      />

      <rect
        id="Rectangle-3-Copy"
        fill="#E4E7ED"
        x="34.9930233"
        y="61.4511628"
        width="297.013953"
        height="117.781395"
        rx="3.41395349"
      />

      <rect
        id="Rectangle-3-Copy-3"
        fill="#B1BACC"
        x="147.653488"
        y="145.946512"
        width="71.6930233"
        height="17.0697674"
        rx="8.53488372"
      />

      <rect
        id="Rectangle-3-Copy-4"
        fill="#FFFFFF"
        x="84.4953488"
        y="96.227907"
        width="198.009302"
        height="21.3372093"
        rx="3.41395349"
      />

      <rect
        id="Rectangle-Copy"
        fill="#B1BACC"
        x="7.68139535"
        y="7.68139535"
        width="4.26744186"
        height="4.26744186"
        rx="2.13372093"
      />

      <rect
        id="Rectangle-Copy-2"
        fill="#B1BACC"
        x="14.5093023"
        y="7.68139535"
        width="4.26744186"
        height="4.26744186"
        rx="2.13372093"
      />

      <rect
        id="Rectangle-Copy-3"
        fill="#B1BACC"
        x="22.1906977"
        y="7.68139535"
        width="4.26744186"
        height="4.26744186"
        rx="2.13372093"
      />


      <defs>
        <polygon id="polyclip" points="-242.167,270 -330,270 -90,0 -2.167,0" />
      </defs>
      <clipPath id="clipper">
        <use xlinkHref="#polyclip" style={{ overflow: 'visible' }} />
      </clipPath>
      <g style={{ opacity: 0.5, clipPath: 'url(#clipper)' }}>
        {/* <path style={{ fill: '#222222' }} d="M200,20c0,11.046-8.954,20-20,20H20C8.954,40,0,31.046,0,20l0,0C0,8.954,8.954,0,20,0h160C191.046,0,200,8.954,200,20L200,20z" /> */}
        <rect
          id="Rectangle-237-Copy"
          fill="#ffffff"
          x="0"
          y="-1"
          width="367"
          height="207"
        />
      </g>
      {isLoading && <animateTransform xlinkHref="#polyclip" attributeName="transform" type="translate" from="-200 0" to="3200 0" begin="0s" dur="3s" repeatCount="indefinite" />}
    </svg>
  </div>
);

export const RatioCardLoadingName = ({ isLoading }) => (
  <div className={`${styles.cardRatioLoadingName} ${isLoading ? '' : styles.loaded}`}>
    <svg
      width="367px"
      height="50px"
      viewBox="0 0 367 50"
      style={{
        width: '70%',
        margin: '0 auto',
      }}
    >
      <rect
        id="Rectangle-2-Copy"
        fill="#E4E7ED"
        x="0"
        y="0"
        width="367"
        height="50"
        rx="3"
      />
    </svg>
  </div>
);
