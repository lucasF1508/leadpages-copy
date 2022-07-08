import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Button from '../../atoms/Button';
import Option from '../../atoms/Option';
import { StoryHeader } from '../../../story-helpers';
import PublishOptionsModal, { defaultTabs } from './PublishOptionsModal';
import UrlTabStories from './UrlTab.stories';
import WordpressTabStories from './WordpressTab.stories';

// tab views That are already build
import Url from './UrlTab';
import Template from './TemplateTab';
// import Promote from './Promote'; // Not used for now
import Wordpress from './WordpressTab';
import Bar from './EmbedTab';

export default class PublishOptionsModalStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PublishOptionsModalOpen: false,
      publishModalTab: defaultTabs.url,
      slugValue: 'my-slug-value',
      selectedUrl: 'bar',
      hideFromSearchChecked: false,
      redirectPageChecked: false,
      redirectUrl: 'https://google.com/',
      isEditingPageUrl: false
    };

    this.getPublishModal = this.getPublishModal.bind(this);
    this.setTabView = this.setTabView.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onHideFromSearchChecked = this.onHideFromSearchChecked.bind(this);
    this.onRedirectPageChecked = this.onRedirectPageChecked.bind(this);
    this.onRedirectUrlChange = this.onRedirectUrlChange.bind(this);
    this.onRedirectToDesktopChanged = this.onRedirectToDesktopChanged.bind(
      this
    );
  }

  onHideFromSearchChecked({ target }) {
    this.setState(() => ({ hideFromSearchChecked: target.checked }));
  }
  onRedirectPageChecked(checked) {
    console.log('CHECKED', checked);
    this.setState(() => ({ redirectPageChecked: checked }));
  }
  onRedirectUrlChange({ target }) {
    this.setState(() => ({ redirectUrl: target.value }));
  }

  onRedirectToDesktopChanged(checked) {
    console.log('Redirect to desktop: ', checked);
    this.setState(() => ({ redirectToDesktop: checked }));
  }

  getPublishModal() {
    // The User Should pass all relevant props and funcs to the views
    const views = {
      [defaultTabs.url]: (
        <Url
          assetName="Quick Opt-in May campaign is Published"
          assetUrl="http://mypage.leadpages.net/seger/serhserhs/erhser/hserthdfgdrtjdrj/rtjdr/tjdrt/jdrt/jdrtjdrjt"
          assetLastUpdated={`updated on this date ${new Date()}`}
          isEditingPageUrl={this.state.isEditingPageUrl}
          onEditClick={() =>
            this.setState(state => ({
              isEditingPageUrl: !state.isEditingPageUrl
            }))
          }
          onHideFromSearchChecked={this.onHideFromSearchChecked}
          onRedirectPageChecked={this.onRedirectPageChecked}
          hideFromSearchChecked={this.state.hideFromSearchChecked}
          redirectPageChecked={this.state.redirectPageChecked}
          redirectUrl={this.state.redirectUrl}
          onRedirectUrlChange={this.onRedirectUrlChange}
          onRedirectToDesktopChanged={this.onRedirectToDesktopChanged}
          shouldRedirectDesktopOnly={this.state.redirectToDesktop}
          onPageUrlSaveClick={() =>
            this.setState(state => ({
              isEditingPageUrl: !state.isEditingPageUrl
            }))
          }
          onSlugChange={({ target }) =>
            this.setState(() => ({ slugValue: target.value }))
          }
          slugValue={this.state.slugValue}
          onSelectChange={({ value }) =>
            this.setState(() => ({ selectedUrl: value }))
          }
          selectPlaceHolder
          selectValue={this.state.selectedUrl}
          selectOptions={[
            <Option
              key="1"
              primaryText="my Option 1"
              value="foo"
              selected={this.state.selectedUrl === 'foo'}
            />,
            <Option
              key="2"
              primaryText="my Option 2"
              value="bar"
              selected={this.state.selectedUrl === 'bar'}
            />,
            <Option
              key="3"
              primaryText="my Option 3"
              value="baz"
              selected={this.state.selectedUrl === 'baz'}
            />
          ]}
        />
      ),
      [defaultTabs.template]: (
        <Template
          assetName="http://mypage.leadpages.net/my-shared-page-url-that-is-really-long-and-needs-to-overflow"
          assetUrl="http://mypage.leadpages.net/my-shared-page-url-that-is-really-long-and-needs-to-overflow"
        />
      ),
      [defaultTabs.wordpress]: <Wordpress assetName="My Wordpress Name" />
    };

    return (
      <PublishOptionsModal
        tabViews={defaultTabs}
        tabView={defaultTabs.url}
        isOpen={this.state.PublishOptionsModalOpen}
        setTabView={this.setTabView}
        onRequestClose={() => this.closeModal('PublishOptionsModalOpen')}
        openModal={() => this.openModal('PublishOptionsModalOpen')}
      >
        {views[this.state.publishModalTab] || null}
      </PublishOptionsModal>
    );
  }

  setTabView(view) {
    this.setState(() => ({ publishModalTab: view }));
  }

  openModal(modalName) {
    this.setState({ [modalName]: true });
  }

  closeModal(modalName) {
    this.setState(() => ({ [modalName]: false }));
  }

  render() {
    return (
      <div>
        <StoryHeader> Publish Options Modal </StoryHeader>
        <Button onClick={() => this.openModal('PublishOptionsModalOpen')}>
          Publish Options Modal
        </Button>
        {this.getPublishModal()}

        <UrlTabStories />
        <WordpressTabStories />
      </div>
    );
  }
}
export class SinglePublishOptionsModalStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SinglePublishOptionsModalOpen: false
    };

    this.getPublishModal = this.getPublishModal.bind(this);
    this.setTabView = this.setTabView.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getPublishModal() {
    // The User Should pass all relevant props and funcs to the views
    const views = {
      bar: <Bar embedCode={'<script></script>'} />
    };

    return (
      <PublishOptionsModal
        tabViews={{}}
        isOpen={this.state.SinglePublishOptionsModalOpen}
        onRequestClose={() => this.closeModal('SinglePublishOptionsModalOpen')}
      >
        {views.bar || null}
      </PublishOptionsModal>
    );
  }

  setTabView(view) {
    this.setState(() => ({ publishModalTab: view }));
  }

  openModal(modalName) {
    this.setState({ [modalName]: true });
  }

  closeModal(modalName) {
    this.setState(() => ({ [modalName]: false }));
  }

  render() {
    return (
      <div>
        <StoryHeader> Publish Options Modal </StoryHeader>
        <Button onClick={() => this.openModal('SinglePublishOptionsModalOpen')}>
          Publish Options Modal
        </Button>
        {this.getPublishModal()}
      </div>
    );
  }
}

const stories = storiesOf('Pages/PublishOptionsModal', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <PublishOptionsModalStory />)
);
stories.add(
  'Single Tab',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <SinglePublishOptionsModalStory />)
);
