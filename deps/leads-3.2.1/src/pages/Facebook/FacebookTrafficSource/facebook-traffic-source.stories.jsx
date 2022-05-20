/* eslint max-len: [0] */
import React from 'react';
import PropTypes from 'prop-types';
import { StoryHeader, StoryRow, StoryColumn } from '../../../../story-helpers';

import FacebookTrafficSource from './FacebookTrafficSource';

const ad = {
  id: 'fakeId',
  name: 'Lead Gathering Marketing Campaign',
  impressions: 22,
  clicks: 14,
};

const longAd = {
  id: 'fake123',
  name: 'Supercalifragilisticexpialidocious Even Though The Sound Of It Is Something',
};

const adWithThumbNail = {
  imgSrc: 'http://fillmurray.com/200/300',
  id: 'fakeId',
  name: 'Lead Gathering Marketing Campaign',
  impressions: 22,
  clicks: 14,
};


const longAdWithThumbnail = {
  imgSrc: 'http://fillmurray.com/200/300',
  id: 'fake123',
  name: 'Supercalifragilisticexpialidocious Even Though The Sound Of It Is Something',
};

const BoldText = ({ text }) => (
  <span style={{ 'font-weight': 'bold', color: '#4c515d' }}>{text}</span>
);

BoldText.propTypes = {
  text: PropTypes.string.isRequired,
};

const analyticsDisplay = (status, clicks, ctr, cpc) =>
  (
    <span>
      {status} • <BoldText text={clicks} /> Clicks • <BoldText text={ctr} />% CTR • <BoldText text={cpc} /> CPC
    </span>
  );

const FacebookTrafficSourceStories = () => (
  <div>
    <StoryRow>
      <StoryColumn>
        <StoryHeader> Empty - Disabled - Traffic Source </StoryHeader>
        <FacebookTrafficSource />
      </StoryColumn>
      <StoryColumn>
        <StoryHeader> Empty - Enabled - Traffic Source </StoryHeader>
        <FacebookTrafficSource enabled />
      </StoryColumn>
    </StoryRow>
    <StoryRow>
      <StoryColumn>
        <StoryHeader> Populated - Enabled (No Analytics) - Traffic Source </StoryHeader>
        <FacebookTrafficSource enabled ad={ad} />
      </StoryColumn>
      <StoryColumn>
        <StoryHeader> Populated Long Name - Enabled (No Analytics) - Traffic Source </StoryHeader>
        <FacebookTrafficSource enabled ad={longAd} />
      </StoryColumn>
    </StoryRow>
    <StoryRow>
      <StoryColumn>
        <StoryHeader> Populated - Enabled - Traffic Source </StoryHeader>
        <FacebookTrafficSource
          enabled
          ad={ad}
          adStatus="Active"
          analyticsDisplay={analyticsDisplay('Active', ad.clicks, 0.10, '$1.00')}
        />
      </StoryColumn>
      <StoryColumn>
        <StoryHeader> Populated Long Name - Enabled - Traffic Source </StoryHeader>
        <FacebookTrafficSource
          enabled
          ad={longAd}
          adStatus="Not Approved"
          analyticsDisplay={analyticsDisplay('Not Approved', longAd.clicks, 0.99, '$0.50')}
        />
      </StoryColumn>
    </StoryRow>
    <StoryRow>
      <StoryColumn>
        <StoryHeader> Populated - Enabled - Thumbnail - Traffic Source </StoryHeader>
        <FacebookTrafficSource
          enabled
          analyticsDisplay={analyticsDisplay('Active', adWithThumbNail.click, 0.17, '$2.00')}
          ad={adWithThumbNail}
          adStatus="Active"
        />
      </StoryColumn>
      <StoryColumn>
        <StoryHeader> Populated Long Name - Enabled - Thumbnail - Traffic Source </StoryHeader>
        <FacebookTrafficSource
          enabled
          analyticsDisplay={analyticsDisplay('Not Approved', longAdWithThumbnail.clicks, 0, '$0')}
          ad={longAdWithThumbnail}
          adStatus="Not Approved"
        />
      </StoryColumn>
    </StoryRow>
  </div>
);

export default FacebookTrafficSourceStories;
