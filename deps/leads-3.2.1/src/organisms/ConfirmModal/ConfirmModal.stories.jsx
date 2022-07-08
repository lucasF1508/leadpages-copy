import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { StoryHeader } from '../../../story-helpers';
import ConfirmModal from '../ConfirmModal';
import Button from '../../atoms/Button';

class ConfirmModalStory extends Component {
  constructor(props) {
    super(props);

    this.onConfirm = this.onConfirm.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      isConfirmed: false,
      isOpen: true,
    };
  }

  onConfirm(e) {
    e.preventDefault();
    console.warn('Implement confirmation logic here');
    this.closeModal();
  }

  openModal() {
    this.setState(() => ({ isOpen: true }));
  }

  closeModal() {
    this.setState(() => ({ isOpen: false }));
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <StoryHeader>Confirm Modal</StoryHeader>
        <Button onClick={this.openModal}>Open Modal</Button>
        <ConfirmModal isOpen={isOpen} onCanceled={this.closeModal} onConfirmDelete={this.onConfirm}>
          Are you sure you want to delete <strong>Home</strong>?
        </ConfirmModal>
      </div>
    );
  }
}

class ConfirmModalShellStory extends Component {
  constructor(props) {
    super(props);

    this.onConfirm = this.onConfirm.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      isConfirmed: false,
      isOpen: true,
    };
  }

  onConfirm(e) {
    e.preventDefault();
    console.warn('Implement confirmation logic here');
    this.closeModal();
  }

  openModal() {
    this.setState(() => ({ isOpen: true }));
  }

  closeModal() {
    this.setState(() => ({ isOpen: false }));
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <StoryHeader>Confirm Modal Shell</StoryHeader>
        <div style={{ position: 'relative' }}>
          <Button onClick={this.openModal}>Open Modal</Button>
          <ConfirmModal
            isOpen={isOpen}
            onCanceled={this.closeModal}
            onConfirmDelete={this.onConfirm}
            component={props => (
              <div
                {...props}
                style={{
                  position: 'absolute',
                  borderRadius: '3px',
                  background: '#fff',
                  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.25), 0 12px 18px 0 rgba(0, 0, 0, 0.3)',
                  display: isOpen ? 'block' : 'none',
                }}
              />
            )}
          >
            Are you sure you want to delete <strong>Home</strong>?
          </ConfirmModal>
        </div>
      </div>
    );
  }
}

const stories = storiesOf('Organisms/ConfirmModal', module);
stories.add(
  'Overview',
  withInfo(`
    The ConfirmModalStory.
  `)(() => <ConfirmModalStory />),
);
stories.add(
  'Modal Shell',
  withInfo(`
    The ConfirmModalShellStory.
  `)(() => <ConfirmModalShellStory />),
);
