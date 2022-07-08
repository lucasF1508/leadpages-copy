'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var React = _interopDefault(require('react'));
var withColor = require('../Color');
var withColor__default = _interopDefault(withColor);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

/* eslint max-len: ['off'] */

var ABTesting = function ABTesting() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("rect", {
    x: "18.1",
    y: "8.3",
    width: "10",
    height: "12.9",
    fill: "#4692FF"
  }), React.createElement("polygon", {
    points: "8.5 8 2 21.2 15.1 21.2",
    fill: "#00044C"
  })));
};

var Aquisition = function Aquisition() {
  return React.createElement("svg", {
    width: "48px",
    height: "48px",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    id: "Group-11",
    transform: "translate(14.000000, 10.000000)",
    fillRule: "nonzero"
  }, React.createElement("circle", {
    id: "Oval",
    fill: "#00044C",
    cx: "10.27",
    cy: "5.11",
    r: "5"
  }), React.createElement("path", {
    d: "M19.47,26.89 L0.53,26.89 L10,14.42 L19.47,26.89 Z",
    id: "Shape",
    fill: "#4692FF",
    transform: "translate(10.000000, 20.655000) rotate(-180.000000) translate(-10.000000, -20.655000)"
  })));
};

/* eslint max-len: ['off'] */

var Arrow = function Arrow() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("polygon", {
    points: "25.4 22.8 22.9 25.4 13.5 16.1 16.1 13.6",
    style: {
      fill: '#00044C'
    }
  }), React.createElement("polygon", {
    transform: "translate(11.334975 11.334975)rotate(-45)translate(-11.334975 -11.334975)",
    points: "11.3 2.6 20.1 20.1 2.6 20.1",
    fill: "#3C87FD"
  })));
};

/* eslint max-len: ['off'] */

var Boxes = function Boxes() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 26 16"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("polygon", {
    fill: "#4692FF",
    points: "0 0 26 0 26 16 0 16"
  }), React.createElement("rect", {
    width: "18",
    height: "8",
    x: "4",
    y: "4",
    fill: "#00044C"
  })));
};

/* eslint max-len: ['off'] */

var Bars = function Bars() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 26 16"
  }, React.createElement("g", {
    fi: "none"
  }, React.createElement("polygon", {
    fill: "#4692FF",
    points: "0 0 26 0 26 16 0 16"
  }), React.createElement("rect", {
    width: "26",
    height: "4",
    fill: "#00044C"
  })));
};

/* eslint max-len: ['off'] */

var Cart = function Cart() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("polygon", {
    points: "23.5 19.7 7.4 19.7 4 6 26.9 6",
    fill: "#47C1BF"
  }), React.createElement("path", {
    d: "M11.6 21.7C11.5 22.7 10.7 23.4 9.7 23.4 8.7 23.4 7.9 22.7 7.8 21.7L11.6 21.7Z",
    fill: "#003135"
  }), React.createElement("path", {
    d: "M23.1 21.7C23 22.7 22.2 23.4 21.2 23.4 20.2 23.4 19.4 22.7 19.3 21.7L23.1 21.7Z",
    fill: "#003135"
  })));
};

/* eslint max-len: ['off'] */

var Contact = function Contact() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("circle", {
    cx: "15.5",
    cy: "8.7",
    r: "4.7",
    fill: "#00044C"
  }), React.createElement("path", {
    d: "M24.9 25.8L6 25.8C6 20.5 10.2 16.3 15.5 16.3 20.7 16.3 24.9 20.5 24.9 25.8Z",
    fill: "#4692FF"
  })));
};

/* eslint max-len: ['off'] */

var Digits = function Digits() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    d: "M7.7 5L7.7 5C10.8 8.1 10.8 13.2 7.7 16.3L2 10.7 7.7 5Z",
    fill: "#00044C"
  }), React.createElement("path", {
    d: "M17.7 26.3L17.7 26.3C14.8 23.4 13.1 19.3 13.1 15.2 13.1 11 14.8 7 17.7 4L28.9 15.2 17.7 26.3Z",
    fill: "#4692FF"
  })));
};

/* eslint max-len: ['off'] */

var DragAndDrop = function DragAndDrop() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("polygon", {
    points: "14.9 2 9.6 7.6 20.2 7.6",
    fill: "#4692FF"
  }), React.createElement("polygon", {
    points: "14.9 27.8 20.2 22.1 9.6 22.1",
    fill: "#4692FF"
  }), React.createElement("polygon", {
    points: "27.8 14.9 22.1 9.6 22.1 20.2",
    fill: "#00044C"
  }), React.createElement("polygon", {
    points: "2 14.9 7.6 20.2 7.6 9.6",
    fill: "#00044C"
  })));
};

/* eslint max-len: ['off'] */

var Ecommerce = function Ecommerce() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("rect", {
    transform: "translate(14.69 17.41)rotate(180)",
    x: "-8.7",
    y: "-8.7",
    width: "17.4",
    height: "17.4",
    style: {
      fill: '#47C1BF'
    }
  }), React.createElement("path", {
    d: "M10 8.7C10 6.1 12.1 4 14.7 4 17.3 4 19.4 6.1 19.4 8.7L10 8.7Z",
    fill: "#003135"
  })));
};

var Engagement = function Engagement() {
  return React.createElement("svg", {
    width: "48px",
    height: "48px",
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    id: "Base-Styles",
    transform: "translate(-732.000000, -2894.000000)"
  }, React.createElement("g", {
    id: "Icons",
    transform: "translate(129.000000, 2309.000000)"
  }, React.createElement("g", {
    id: "Webinar",
    transform: "translate(603.000000, 585.000000)"
  }, React.createElement("g", {
    id: "Engagement"
  }, React.createElement("rect", {
    id: "Rectangle-5-Copy-17",
    fill: "#DAD9FF",
    x: "0",
    y: "0",
    width: "48",
    height: "48",
    rx: "3"
  }), React.createElement("path", {
    d: "M35.65,15 L35.65,15 C38.7717228,18.1237697 38.7717228,23.1862303 35.65,26.31 L30,20.67 L35.65,15 Z",
    id: "Shape",
    fill: "#24235B",
    fillRule: "nonzero",
    transform: "translate(33.995646, 20.655000) rotate(-180.000000) translate(-33.995646, -20.655000) "
  }), React.createElement("path", {
    d: "M12.6237103,36.32 L12.6237103,36.32 C9.66325131,33.3605253 8,29.3460253 8,25.16 C8,20.9739747 9.66325131,16.9594747 12.6237103,14 L23.8237103,25.2 L12.6237103,36.32 Z",
    id: "Shape",
    fill: "#A09EE8",
    fillRule: "nonzero",
    transform: "translate(15.911855, 25.160000) rotate(-180.000000) translate(-15.911855, -25.160000) "
  }))))));
};

/* eslint max-len: ['off'] */

var Email = function Email() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("rect", {
    x: "3",
    y: "7",
    width: "23.7",
    height: "15.6",
    fill: "#4692FF"
  }), React.createElement("polygon", {
    points: "14.8 16.5 26.6 7 3 7",
    fill: "#00044C"
  })));
};

/* eslint max-len: ['off'] */

var Filter = function Filter() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("circle", {
    cx: "21.7",
    cy: "10.8",
    r: "2.8",
    fill: "#00044C"
  }), React.createElement("path", {
    d: "M17 10.8C17 10.1 17.2 9.4 17.5 8.8L6 8.8 6 12.8 17.5 12.8C17.2 12.2 17 11.5 17 10.8L17 10.8Z",
    fill: "#4692FF"
  }), React.createElement("circle", {
    cx: "8.8",
    cy: "18.8",
    r: "2.8",
    fill: "#00044C"
  }), React.createElement("path", {
    d: "M13.5 18.8C13.5 19.5 13.4 20.2 13.1 20.8L24.5 20.8 24.5 16.8 13.1 16.8C13.4 17.4 13.5 18.1 13.5 18.8L13.5 18.8Z",
    fill: "#4692FF"
  })));
};

/* eslint max-len: ['off'] */

var Forms = function Forms() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("rect", {
    transform: "translate(15.13 18.985)rotate(180)",
    x: "-13.1",
    y: "-2.5",
    width: "26.2",
    height: "5",
    style: {
      fill: '#4692FF'
    }
  }), React.createElement("rect", {
    transform: "translate(9.73 11.495)rotate(180)",
    x: "-7.7",
    y: "-2.5",
    width: "15.5",
    height: "5",
    fill: "#00044C"
  })));
};

/* eslint max-len: ['off'] */

var Funnels = function Funnels() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("polygon", {
    points: "14.6 16.3 25.2 5 4 5",
    fill: "#4692FF"
  }), React.createElement("polygon", {
    points: "14.6 19.7 9.3 25.3 19.9 25.3",
    fill: "#00044C"
  })));
};

/* eslint max-len: ['off'] */

var Help = function Help() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M15 27C8.372583 27 3 21.627417 3 15S8.372583 3 15 3s12 5.372583 12 12-5.372583 12-12 12zm0-6c3.3137085 0 6-2.6862915 6-6s-2.6862915-6-6-6-6 2.6862915-6 6 2.6862915 6 6 6z",
    fill: "#4692FF"
  }), React.createElement("path", {
    d: "M15.3333333 21.9889012v4.0661232M22 15h4M4 15h4M15.3333333 3.98617337V8.0110988",
    stroke: "#00044C",
    strokeWidth: "4",
    strokeLinecap: "round"
  })));
};

/* eslint max-len: ['off'] */

var Integrations = function Integrations() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("path", {
    fill: "#4692FF",
    d: "M23.6445376 13.19349994l4.44770165 4.44770165L17.64120103 28.0922398l-8.6974134-8.6974134 4.44770164-4.44770166 4.24971176 4.24971175"
  }), React.createElement("path", {
    fill: "#00044C",
    d: "M7.2255184 17.67655706L2.77781677 13.2288554 13.228855 2.77781718l8.69741342 8.69741342-4.44770167 4.44770166-4.24971177-4.24971177"
  })));
};

/* eslint max-len: ['off'] */

var Links = function Links() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("path", {
    fill: "#4692FF",
    d: "M15.5 10.5L11 6l-9 9 9 9 4.5-4.5L11 15M29 15l-9-9-4.5 4.5L20 15l-4.5 4.5L20 24"
  }), React.createElement("path", {
    fill: "#00044C",
    d: "M10.99635266 14.99372593l4.49719913-4.49719913 4.49719912 4.49719913-4.49719913 4.49719913z"
  })));
};

var Monetization = function Monetization() {
  return React.createElement("svg", {
    width: "48px",
    height: "48px",
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    id: "Base-Styles",
    transform: "translate(-1134.000000, -2894.000000)"
  }, React.createElement("g", {
    id: "Icons",
    transform: "translate(129.000000, 2309.000000)"
  }, React.createElement("g", {
    id: "Money",
    transform: "translate(1005.000000, 585.000000)"
  }, React.createElement("g", {
    id: "Monetization"
  }, React.createElement("rect", {
    id: "Rectangle-5-Copy-10",
    fill: "#E0F5F5",
    x: "0",
    y: "0",
    width: "48",
    height: "48",
    rx: "3"
  }), React.createElement("g", {
    id: "Asset-46",
    transform: "translate(10.000000, 16.000000)",
    fillRule: "nonzero"
  }, React.createElement("g", {
    id: "Group-16"
  }, React.createElement("rect", {
    id: "Rectangle-path",
    fill: "#47C1BF",
    x: "0",
    y: "0",
    width: "28",
    height: "16"
  }), React.createElement("circle", {
    id: "Oval",
    fill: "#003135",
    cx: "14",
    cy: "8",
    r: "5"
  }))))))));
};

/* eslint max-len: ['off'] */

var NoCode = function NoCode() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("path", {
    fill: "#4692FF",
    d: "M14.68 1L6 16.57h8.68"
  }), React.createElement("path", {
    fill: "#00044C",
    d: "M14.68 28.01l8.69-15.56h-8.69"
  })));
};

/* eslint max-len: ['off'] */

var Pages = function Pages() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 18 23"
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    fill: "#4692FF",
    fillRule: "nonzero",
    d: "M11.25,-1.84741111e-13 L18,6.9 L18,23 L-3.55271368e-15,23 L-7.10542736e-15,1.95754524e-12 L11.25,7.29638572e-13 Z"
  }), React.createElement("polygon", {
    fill: "#00044C",
    points: "0 0 6.75 6.9 0 6.9",
    transform: "translate(11.25)"
  })));
};

/* eslint max-len: ['off'] */

var Payments = function Payments() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("path", {
    fill: "#47C1BF",
    d: "M2 8h26.71v14.57H2z"
  }), React.createElement("path", {
    fill: "#003135",
    d: "M28.72 14.98H2.01v-3.12h26.71z"
  })));
};

/* eslint max-len: ['off'] */

var Promote = function Promote() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    fill: "#4692FF",
    d: "M5 5h21v11H5z"
  }), React.createElement("path", {
    fill: "#00044C",
    fillRule: "nonzero",
    d: "M7.89819336 27.2861328l-2.86097014-.0237354L5 3l2.86097014.02373545"
  })));
};

/* eslint max-len: ['off'] */

var Publish = function Publish() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("path", {
    d: "M25 11.2864888C25 16.9674649 15 29 15 29S5 16.9548124 5 11.2864888C5.00000008 5.6054179 9.47715256 1 15 1c5.5228474 0 9.9999999 4.6054179 10 10.2864888z",
    fill: "#4692FF"
  }), React.createElement("circle", {
    fill: "#00044C",
    cx: "15",
    cy: "12",
    r: "4"
  })));
};

/* eslint max-len: ['off'] */

var ROI = function ROI() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("path", {
    d: "M15 3C8.372583 3 3 8.372583 3 15s5.372583 12 12 12 12-5.372583 12-12H15V3z",
    fill: "#4692FF"
  }), React.createElement("path", {
    d: "M15 3v12h12c0-6.627417-5.372583-12-12-12z",
    fill: "#00044C"
  })));
};

/* eslint max-len: ['off'] */

var Responsive = function Responsive() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("path", {
    fill: "#4692FF",
    d: "M11.09 4h7.5v22h-7.5z"
  }), React.createElement("path", {
    fill: "#00044C",
    d: "M21.71 15l4.97 4.68v-9.36M7.97 15L3 10.32v9.36"
  })));
};

/* eslint max-len: ['off'] */

var Search = function Search() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    fill: "#4C515D",
    fillRule: "nonzero",
    d: "M25.9908747 23.2564877l-2.6756405 2.6756405-9.7576715-9.7576715 2.6756405-2.6756404"
  }), React.createElement("circle", {
    fill: "#B1BACC",
    cx: "12.7055889",
    cy: "12.7055889",
    r: "7.70558886"
  })));
};

/* eslint max-len: ['off'] */

var Share = function Share() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("path", {
    fill: "#4692FF",
    d: "M24.66 25.44H10.37V8.37h14.29z"
  }), React.createElement("path", {
    fill: "#4692FF",
    d: "M20.29 21.07H6V4h14.29z"
  }), React.createElement("path", {
    fill: "#00044C",
    d: "M10.37 8.37h9.92v12.7h-9.92z"
  })));
};

/* eslint max-len: ['off'] */

var Sites = function Sites() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 18 23"
  }, React.createElement("g", {
    fill: "none",
    transform: "matrix(1 0 0 -1 0 23)"
  }, React.createElement("polygon", {
    fill: "#00044C",
    points: "0 2.3 15.75 2.3 15.75 23 0 23",
    transform: "rotate(180 7.875 12.65)"
  }), React.createElement("polygon", {
    fill: "#4692FF",
    points: "2.25 0 18 0 18 20.7 2.25 20.7",
    transform: "rotate(180 10.125 10.35)"
  })));
};

/* eslint max-len: ['off'] */

var StandardBox = function StandardBox() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 26 16"
  }, React.createElement("g", {
    fill: "none"
  }, React.createElement("polygon", {
    fill: "#47C1BF",
    points: "0 0 26 0 26 16 0 16"
  }), React.createElement("rect", {
    width: "18",
    height: "8",
    x: "4",
    y: "4",
    fill: "#003135"
  })));
};

/* eslint max-len: ['off'] */

var StandardPage = function StandardPage() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 18 23"
  }, React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    fill: "#47C1BF",
    fillRule: "nonzero",
    d: "M11.25,-1.84741111e-13 L18,6.9 L18,23 L-3.55271368e-15,23 L-7.10542736e-15,1.95754524e-12 L11.25,7.29638572e-13 Z"
  }), React.createElement("polygon", {
    fill: "#003135",
    points: "0 0 6.75 6.9 0 6.9",
    transform: "translate(11.25)"
  })));
};

/* eslint max-len: ['off'] */
var StandardSplitTestBox = (function () {
  return React.createElement("svg", {
    width: "48px",
    height: "48px",
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    id: "Icons/In-SplitTest-B2-Box"
  }, React.createElement("g", {
    id: "Group",
    transform: "translate(-0.823529, 0.000000)"
  }, React.createElement("g", {
    id: "standard-split-test-box",
    transform: "translate(-0.000000, 0.000000)"
  }, React.createElement("g", {
    id: "Group-5",
    transform: "translate(10.000000, 16.000000)",
    fillRule: "nonzero"
  }, React.createElement("polygon", {
    id: "Shape",
    fill: "#003135",
    points: "11.2734838 6.35947606 0.494342324 6.36601507 5.86542852 0.376983496"
  }), React.createElement("polygon", {
    id: "Shape",
    fill: "#47C1BF",
    points: "11.3137002 6.36601507 11.2978563 14.0558914 0.478498412 14.0558914 0.494342324 6.36601507"
  })), React.createElement("g", {
    id: "Group-3",
    transform: "translate(26.676471, 16.000000)",
    fillRule: "nonzero"
  }, React.createElement("polygon", {
    id: "Shape",
    fill: "#003135",
    points: "12.9317291 4.06184887 6.7196588 7.67792125 0.46483089 4.0679571 6.67690119 0.451884713"
  }), React.createElement("polygon", {
    id: "Shape",
    fill: "#47C1BF",
    points: "12.9317291 4.06184887 12.9134044 11.251236 6.70133411 14.8612002 6.7196588 7.67792125"
  }), React.createElement("polygon", {
    id: "Shape",
    fill: "#47C1BF",
    points: "6.7196588 7.67792125 6.70133411 14.8612002 0.446506199 11.251236 0.46483089 4.0679571"
  })))))));
});

/* eslint max-len: ['off'] */
var StandardSplitTestPage = (function () {
  return React.createElement("svg", {
    width: "48px",
    height: "48px",
    viewBox: "0 0 48 48",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    id: "Icons/In-SplitTest-standard-page"
  }, React.createElement("g", {
    id: "standard-split-test"
  }, React.createElement("rect", {
    id: "Rectangle-path",
    fill: "#47C1BF",
    fillRule: "nonzero",
    x: "26.05",
    y: "16.69",
    width: "10.01",
    height: "12.93"
  }), React.createElement("polygon", {
    id: "Shape",
    fill: "#003135",
    fillRule: "nonzero",
    points: "16.48 16.39 9.94 29.61 23.01 29.61"
  })))));
});

/* eslint max-len: ['off'] */

var Templates = function Templates() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("path", {
    fill: "#00044C",
    d: "M24.66 25.44H10.37V8.37h14.29z"
  }), React.createElement("path", {
    fill: "#4692FF",
    d: "M20.29 21.07H6V4h14.29z"
  })));
};

/* eslint max-len: ['off'] */

var ThankYou = function ThankYou() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("path", {
    d: "M25 11.2864888C25 16.9674649 15 29 15 29S5 16.9548124 5 11.2864888C5.00000008 5.6054179 9.47715256 1 15 1c5.5228474 0 9.9999999 4.6054179 10 10.2864888z",
    fill: "#FEAF9A"
  }), React.createElement("path", {
    fill: "#330101",
    d: "M20.30330086 9.43933983l-6.36396103 6.36396103-4.2426407-4.2426407 1.70097393-1.7009739 2.1865858 2.1865858 4.66298712-4.6629871"
  })));
};

/* eslint max-len: ['off'] */

var Webinar = function Webinar() {
  return React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    fillRule: "nonzero",
    fill: "none"
  }, React.createElement("path", {
    fill: "#A09EE8",
    d: "M3 7h23.65v15.59H3z"
  }), React.createElement("path", {
    fill: "#24235B",
    d: "M17.99 14.79l-4.96-4.68v9.36"
  })));
};

var icons = {
  ABTesting: 'ABTesting',
  Aquisition: 'Aquisition',
  Arrow: 'Arrow',
  Boxes: 'Boxes',
  Bars: 'Bars',
  Cart: 'Cart',
  Contact: 'Contact',
  Digits: 'Digits',
  DragAndDrop: 'DragAndDrop',
  Ecommerce: 'Ecommerce',
  Engagement: 'Engagement',
  Email: 'Email',
  Filter: 'Filter',
  Forms: 'Forms',
  Funnels: 'Funnels',
  Help: 'Help',
  Integrations: 'Integrations',
  Links: 'Links',
  Money: 'Monetization',
  Monetization: 'Monetization',
  NoCode: 'NoCode',
  Pages: 'Pages',
  Payments: 'Payments',
  Promote: 'Promote',
  Publish: 'Publish',
  ROI: 'ROI',
  Responsive: 'Responsive',
  Search: 'Search',
  Share: 'Share',
  Sites: 'Sites',
  StandardBox: 'StandardBox',
  StandardPage: 'StandardPage',
  StandardSplitTestBox: 'StandardSplitTestBox',
  StandardSplitTestPage: 'StandardSplitTestPage',
  Templates: 'Templates',
  ThankYou: 'ThankYou',
  Webinar: 'Webinar'
};

var Icons = /*#__PURE__*/Object.freeze({
  icons: icons,
  ABTesting: ABTesting,
  Aquisition: Aquisition,
  Arrow: Arrow,
  Boxes: Boxes,
  Bars: Bars,
  Cart: Cart,
  Contact: Contact,
  Digits: Digits,
  DragAndDrop: DragAndDrop,
  Ecommerce: Ecommerce,
  Engagement: Engagement,
  Email: Email,
  Filter: Filter,
  Forms: Forms,
  Funnels: Funnels,
  Help: Help,
  Integrations: Integrations,
  Links: Links,
  Monetization: Monetization,
  NoCode: NoCode,
  Pages: Pages,
  Payments: Payments,
  Promote: Promote,
  Publish: Publish,
  ROI: ROI,
  Responsive: Responsive,
  Search: Search,
  Share: Share,
  Sites: Sites,
  StandardBox: StandardBox,
  StandardPage: StandardPage,
  StandardSplitTestBox: StandardSplitTestBox,
  StandardSplitTestPage: StandardSplitTestPage,
  Templates: Templates,
  ThankYou: ThankYou,
  Webinar: Webinar
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".Icon_icon__1iDzJ {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n\n  width: 48px;\n  height: 48px;\n\n  border-radius: 3px\n}\n.Icon_icon__1iDzJ.Icon_iconCircle__2Fess {\n  border-radius: 50%;\n}\n";
var styles = {"icon":"Icon_icon__1iDzJ","iconCircle":"Icon_iconCircle__2Fess"};
styleInject(css);

var iconColors = function iconColors(icon) {
  var icons$$1 = icons;

  switch (icon) {
    case icons$$1.Search:
      return withColor.colors.greyLight;

    case icons$$1.Webinar:
      return withColor.colors.purpleLighter;

    case icons$$1.ThankYou:
      return withColor.colors.redLighter;

    case icons$$1.Cart:
    case icons$$1.Ecommerce:
    case icons$$1.Money:
    case icons$$1.Payments:
    case icons$$1.StandardBox:
    case icons$$1.StandardPage:
    case icons$$1.StandardSplitTestPage:
    case icons$$1.StandardSplitTestBox:
      return withColor.colors.greenLighter;

    default:
      return withColor.colors.blueLighter;
  }
};

var IconShell = withColor__default(function (props) {
  return React.createElement("div", props);
});

var Icon = function Icon(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      isCircle = _ref.isCircle,
      noBackground = _ref.noBackground,
      backgroundColor = _ref.backgroundColor;
  var IconComp = Icons[icon];
  return React.createElement(IconShell, {
    className: classNames(className, styles.icon, defineProperty({}, "".concat(styles.iconCircle), isCircle)),
    backgroundColor: backgroundColor ? withColor.colors[backgroundColor] : !noBackground && iconColors(icon)
  }, React.createElement(IconComp, null));
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  isCircle: PropTypes.bool,
  noBackground: PropTypes.bool,
  backgroundColor: PropTypes.string
};
Icon.defaultProps = {
  className: null,
  isCircle: false,
  noBackground: false,
  backgroundColor: null
};

exports.default = Icon;
exports.icons = icons;
