import React from 'react';
import Option from '../../atoms/Option';
import { LOADING_STATES } from '../../molecules/LoadingState';
import { StoryHeader, StoryRow } from '../../../story-helpers';

// tab views That are already build
import Url from './UrlTab';


const DEFAULT_PROPS = {
  assetName: 'Quick Opt-in May campaign is Published',
  assetUrl: 'http://mypage.leadpages.net',
  assetLastUpdatedString: 'updated on this date DERP-DATE',
  onHideFromSearchChecked: () => console.log('onHideFromSerachChecked callback'),
  onRedirectPageChecked: () => console.log('onRedirectPageChecked callback'),
  hideFromSearchChecked: () => console.log('hideFromSearchChecked callback'),
  redirectPageChecked: false,
  onRedirectUrlChange: () => console.log('onRedirectUrlChange callback'),
  onRedirectUrlSave: () => console.log('onRedirectUrlSave callback'),
  onRedirectToDesktopChanged: () => console.log('onRedirectToDesktopChanged callback'),
  shouldRedirectDesktopOnly: false,
  onPageUrlSaveClick: () => console.log('saveUrl callback'),
  onSlugChange: () => console.log('onSlugChange callback'),
  slugValue: 'my-slug',
  onSelectChange: () => console.log('onSelectChange callback'),
  selectValue: 'foo',
  onEditClick: () => console.log('onEditClick callback'),
  selectOptions: [
    <Option key="1" primaryText="my Option 1" value="foo" />,
    <Option key="2" primaryText="my Option 2" value="bar" />,
    <Option key="3" primaryText="my Option 3" value="baz" />,
  ],
};

export default () => (
  <div>
    <StoryHeader>UrlTabs</StoryHeader>
    <h2>Default</h2>
    <StoryRow>
      <Url {...DEFAULT_PROPS} />
    </StoryRow>
    <h2>Editing Page Url</h2>
    <StoryRow>
      <Url {...{
        ...DEFAULT_PROPS,
        isEditingPageUrl: true,
      }}
      />
    </StoryRow>

    <h2>With slug name taken error</h2>
    <StoryRow>
      <Url {...{
        ...DEFAULT_PROPS,
        slugMessage: () => 'Sorry, pick another name',
        hasSlugError: true,
        isEditingPageUrl: true,
      }}
      />
    </StoryRow>

    <h2>With custom slug error</h2>
    <StoryRow>
      <Url {...{
        ...DEFAULT_PROPS,
        slugMessage: () => <span>Name <strong>BLAH BLAH BLAH</strong> has been taken</span>,
        hasSlugError: true,
        isEditingPageUrl: true,
      }}
      />
    </StoryRow>

    <h2>With Page URL saving</h2>
    <StoryRow>
      <Url {...{
        ...DEFAULT_PROPS,
        pageUrlLoadingState: LOADING_STATES.loading,
        isEditingPageUrl: true,
      }}
      />
    </StoryRow>
  </div>
);

