import React from 'react';
import { Helmet } from 'react-helmet';

const LB_DownloadUltimateWebsiteWorkbook = () => {
  return (
    <Helmet>
      <script src="//static.leadpages.com/leadboxes/current/embed.js" async defer />
      <script>{`window.addEventListener('LPLeadboxesReady',function(){LPLeadboxes.setExitIntent('xsYZAyvjTfTuHxGm76Kvvc',{dontShowFor:'2d',domain:'lps.lpages.co'});});`}</script>
    </Helmet>
  );
};

export default LB_DownloadUltimateWebsiteWorkbook;
