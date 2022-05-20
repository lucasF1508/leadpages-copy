import React from 'react';
import { Helmet } from 'react-helmet';

const LB_GetInspiredWithLandingPageExamples = () => {
  return (
    <Helmet>
      <script src="//static.leadpages.com/leadboxes/current/embed.js" async defer />
      <script>{`window.addEventListener('LPLeadboxesReady',function(){LPLeadboxes.addDelayedLeadbox('RsmtKyVagfD4H7Af4ua7NQ', { delay: '45s', views: 0, dontShowFor: '0d', domain: 'lps.lpages.co' }); });`}</script>
    </Helmet>
  );
};

export default LB_GetInspiredWithLandingPageExamples;
