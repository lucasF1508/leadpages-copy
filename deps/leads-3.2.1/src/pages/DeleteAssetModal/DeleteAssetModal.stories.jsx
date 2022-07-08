import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Button from '../../atoms/Button';
import { StoryHeader } from '../../../story-helpers';
import DeleteAssetModal from '../DeleteAssetModal';

class DeleteAssetModalStories extends Component {
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
        <StoryHeader>Delete Asset Modal</StoryHeader>
        <Button onClick={this.openModal}>Delete Asset Modal</Button>
        <DeleteAssetModal
          isOpen={isOpen}
          assetType="Funnel"
          assetName="My Awesome Funnel"
          details={[
            'Pages in this funnel will be available with you other pages now',
            'This funnel\'s analytics will be removed, each page\'s analytics will be retained',
          ]}
          handleClose={this.closeModal}
          handleDelete={this.onConfirm}
          needsConfirmation
        />
      </div>
    );
  }
}

const stories = storiesOf('Pages/DeleteAssetModal', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <DeleteAssetModalStories />
  ))
);
