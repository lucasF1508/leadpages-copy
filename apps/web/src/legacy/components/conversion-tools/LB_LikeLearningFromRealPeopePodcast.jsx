import React from 'react';
import { Helmet } from 'react-helmet';

const LB_LikeLearningFromRealPeoplePodcast = () => {
  return (
    <Helmet>
      <script src="//static.leadpages.com/leadboxes/current/embed.js" async defer />
      <script>{`window.addEventListener('LPLeadboxesReady',function(){LPLeadboxes.addDelayedLeadbox('jnmnYq2ya2xgCgeHaYfuWW', { delay: '20s', views: 0, dontShowFor: '30d', domain: 'lps.lpages.co' }); });`}</script>
    </Helmet>
  );
};

export default LB_LikeLearningFromRealPeoplePodcast;
