import type { ClassValue } from "clsx";
import clsx from "clsx"

const HeroGradientPricing = ({className}: {className: ClassValue}) => (
  <svg className={clsx(className)} fill="none" height="859" viewBox="0 0 1165 859" width="1165" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_f_53_3158)">
      <ellipse cx="582.208" cy="429.458" fill="#6D15FF" rx="214.464" ry="386.735" transform="rotate(76.758 582.208 429.458)"/>
    </g>
    <g filter="url(#filter1_f_53_3158)">
      <ellipse cx="429.078" cy="414.802" fill="#E4D1FF" rx="241.174" ry="266.587" transform="rotate(59.5329 429.078 414.802)"/>
    </g>
    <defs>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="857.91" id="filter0_f_53_3158" width="1163.61" x="0.405182" y="0.503754">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_53_3158" stdDeviation="101.058"/>
      </filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="817.572" id="filter1_f_53_3158" width="842.286" x="7.93521" y="6.0159">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
        <feGaussianBlur result="effect1_foregroundBlur_53_3158" stdDeviation="80.4003"/>
      </filter>
    </defs>
  </svg>
)

export default HeroGradientPricing
