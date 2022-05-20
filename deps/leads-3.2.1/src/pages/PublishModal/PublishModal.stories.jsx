import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Button from '../../atoms/Button';
import { StoryHeader } from '../../../story-helpers';
import PublishModal from '../PublishModal';

export default class PublishModalStories extends Component {
  constructor(props) {
    super(props);

    this.onConfirm = this.onConfirm.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      isConfirmed: false,
      isOpen: false,
    };
  }

  onConfirm(e) {
    e.preventDefault();
    console.warn('implement confimation logic here');
    this.closeModal();
  }

  openModal() {
    this.setState(() => ({ isOpen: true }));
  }

  closeModal() {
    this.setState(() => ({ isOpen: false }));
  }

  render() {
    const {
      isOpen,
    } = this.state;

    return (
      <div>
        <StoryHeader>Publish Modal</StoryHeader>
        <Button onClick={this.openModal}>Publish Modal</Button>
        <PublishModal
          pageUrl="https://mysiteurl.com/12345678324567832456783245678234567892345678345678?foo=bar&baz=qux#/new/?tab=spaces"
          viewOnClick={() => {}}
          linkOnClick={() => {}}
          isOpen={isOpen}
          onClose={this.closeModal}
          onOpenAdvancedPublishingOptions={() => {}}
          className="MONKEY"
        />
      </div>
    );
  }
}

const stories = storiesOf('Pages/PublishModalStories', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <PublishModalStories />
  ))
);
