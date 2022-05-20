import React from 'react';

import { storiesOf } from '@storybook/react';

import UpgradeTeaseModal from './UpgradeTeaseModal';
import { VERBIAGE } from './constants';


storiesOf('UpgradeTeaseModal', module)
  .add('Landing Pages', () => <UpgradeTeaseModal {...VERBIAGE.pages} />)
  .add('Pop-Ups', () => <UpgradeTeaseModal {...VERBIAGE.popups} />)
  .add('Alert Bars', () => <UpgradeTeaseModal {...VERBIAGE.bars} />)
  .add('Checkouts', () => <UpgradeTeaseModal {...VERBIAGE.checkouts} />)
  .add('Split Tests', () => <UpgradeTeaseModal {...VERBIAGE.splitTests} />)
  .add('HTML Widget', () => <UpgradeTeaseModal {...VERBIAGE.htmlWidget} />)
  .add('Countdown Timer', () => <UpgradeTeaseModal {...VERBIAGE.countdownTimer} />)
  .add('Lead Magnet', () => <UpgradeTeaseModal {...VERBIAGE.leadMagnet} />)
  .add('Mobile size', () =>
    <UpgradeTeaseModal {...VERBIAGE.pages} />, { viewport: { defaultViewport: 'iphonex' }}
  )
  .add('Tablet size', () =>
    <UpgradeTeaseModal {...VERBIAGE.pages} />, { viewport: { defaultViewport: 'ipad10p' }}
  )
  .add('1200x900', () =>
    <UpgradeTeaseModal {...VERBIAGE.pages} />, { viewport: { defaultViewport: 'laptop' }}
  );

