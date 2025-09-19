import clsx from 'clsx';

const SubFooterGradient = ({ className = '' }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={clsx('pointer-events-none', className)}
    preserveAspectRatio="none"
    viewBox="0 0 2400 900"
  >
    <defs>
      <radialGradient cx="50%" cy="100%" gradientUnits="userSpaceOnUse" id="sfPurple" r="95%">
        <stop offset="0"   stopColor="#7B61FF" stopOpacity=".40" />
        <stop offset=".30" stopColor="#7B61FF" stopOpacity=".22" />
        <stop offset=".65" stopColor="#7B61FF" stopOpacity=".10" />
        <stop offset="1"   stopColor="#7B61FF" stopOpacity="0" />
      </radialGradient>

      <radialGradient cx="50%" cy="86%" gradientUnits="userSpaceOnUse" id="sfHighlight" r="32%">
        <stop offset="0"   stopColor="#FFFFFF" stopOpacity=".26" />
        <stop offset=".45" stopColor="#E6DEFF" stopOpacity=".16" />
        <stop offset="1"   stopColor="#C8B2FF" stopOpacity="0" />
      </radialGradient>

      <filter height="160%" id="sfSoft" width="160%" x="-30%" y="-30%">
        <feGaussianBlur stdDeviation="90" />
      </filter>
    </defs>


    <g filter="url(#sfSoft)" style={{ mixBlendMode: 'screen' as const }}>
      <ellipse cx="1200" cy="1020" fill="url(#sfPurple)" rx="1280" ry="600" />
      <ellipse cx="1200" cy="880"  fill="url(#sfHighlight)"  rx="940" ry="500" />
    </g>
  </svg>
);

export default SubFooterGradient;
