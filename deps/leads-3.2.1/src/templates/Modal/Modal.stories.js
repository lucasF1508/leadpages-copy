import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { css } from 'emotion';
import { typographyDefs } from '../../theme/Theme';

import { StoryHeader } from '../../../story-helpers';
import {
  Modal,
  ModalHeader,
  ModalIconHeader,
  ModalBody,
  ModalFooter,
  ModalPartition,
  ModalPartitionGroup
} from '../Modal';
import withColor from '../../theme/Color';
import Button from '../../atoms/Button';
import { TabLink, TabGroup } from '../../molecules/Tabs';

const BlueModalHeader = withColor(ModalHeader);
const { mediumDisplayHeading } = typographyDefs;

const imageCenterClassName = css`
  display: flex;
  margin: auto;
`;

const spacerDivClassName = css`
  display: flex;
  width: 10px;
  height: 400px;
`;

const customH1ClassName = css`
  ${mediumDisplayHeading}

  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export default class ModalStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basicModal: false,
      tabsModal: false,
      heroModal: false,
      partitionModal: false,
      fixedModal: false,
      view: 'url'
    };
  }

  setStateHelper(newState) {
    return this.setState(() => ({ ...newState }));
  }

  closeModal(modalType) {
    this.setState({ [modalType]: false });
  }

  openModal(modalType) {
    this.setState({ [modalType]: true });
  }

  renderTab(view) {
    return (
      <TabLink
        active={this.state.view === view}
        onClick={() => this.setStateHelper({ view })}
      >
        {view}
      </TabLink>
    );
  }

  render() {
    return (
      <div>
        <StoryHeader>Basic Usage</StoryHeader>

        <Button
          onClick={() => {
            this.openModal('basicModal');
          }}
        >
          Basic Modal
        </Button>
        {this.state.basicModal && (
          <Modal
            isOpen={this.state.basicModal}
            onRequestClose={() => this.closeModal('basicModal')}
          >
            <ModalHeader
              tabs
              onClose={() => {
                this.closeModal('basicModal');
              }}
            >
              <h1>Basic Modal</h1>
              <TabGroup small>
                {this.renderTab('url')}
                {this.renderTab('wordpress')}
                {this.renderTab('template')}
              </TabGroup>
            </ModalHeader>
            <ModalBody>
              <img
                className={imageCenterClassName}
                src="https://www.rover.com/blog/wp-content/uploads/2015/06/puppy-burrito-rollup-gif.gif"
                alt="Puppy Burrito"
              />
              <h1 className={customH1ClassName}> Scroll for more Puppies </h1>
              <div className={spacerDivClassName} />
              <img
                className={imageCenterClassName}
                src="http://i.imgur.com/0nbIBx6.gif"
                alt="Puppy Burrito"
              />
            </ModalBody>
            <ModalFooter>
              <Button
                isSecondary
                onClick={() => {
                  this.closeModal('basicModal');
                }}
              >
                Cancel
              </Button>
              <Button onClick={action('Save')}>Save</Button>
            </ModalFooter>
          </Modal>
        )}

        <StoryHeader>With Hero</StoryHeader>
        <Button
          onClick={() => {
            this.openModal('heroModal');
          }}
        >
          Hero Modal
        </Button>
        {this.state.heroModal && (
          <Modal
            isOpen={this.state.heroModal}
            onRequestClose={() => this.closeModal('heroModal')}
          >
            <BlueModalHeader
              backgroundColor="blueLight"
              onClose={() => {
                this.closeModal('heroModal');
              }}
              isHero
            />
            <ModalBody isHero>
              <h1 className={customH1ClassName}>Thank You</h1>
              <img
                className={imageCenterClassName}
                style={{ width: '300px', height: '200px' }}
                src="https://media.giphy.com/media/awpqNsKuFtXI4/giphy.gif"
                alt="thanks"
              />
            </ModalBody>
          </Modal>
        )}

        <StoryHeader>With side partition</StoryHeader>
        <Button
          onClick={() => {
            this.openModal('partitionModal');
          }}
        >
          Partition Modal
        </Button>
        {this.state.partitionModal && (
          <Modal
            isOpen={this.state.partitionModal}
            onRequestClose={() => this.closeModal('partitionModal')}
          >
            <ModalHeader
              onClose={() => {
                this.closeModal('partitionModal');
              }}
            >
              Fancy Partitions
            </ModalHeader>
            <ModalPartitionGroup>
              <ModalPartition>
                <ModalBody>
                  <h3>Favorite Media:</h3>
                  <input type="radio" /> Cable TV
                </ModalBody>
              </ModalPartition>
              <ModalPartition>
                <ModalBody>
                  <h1 className={customH1ClassName}>Thank You</h1>
                  <img
                    className={imageCenterClassName}
                    style={{ width: '300px', height: '200px' }}
                    src="https://media.giphy.com/media/awpqNsKuFtXI4/giphy.gif"
                    alt="thanks"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    isSecondary
                    onClick={() => {
                      this.closeModal('partitionModal');
                    }}
                  >
                    Cancel
                  </Button>
                  <Button onClick={action('Save')}>Save</Button>
                </ModalFooter>
              </ModalPartition>
            </ModalPartitionGroup>
          </Modal>
        )}

        <StoryHeader>Fullscreen</StoryHeader>
        <Button
          onClick={() => {
            this.openModal('fullscreenModal');
          }}
        >
          Fullscreen Modal
        </Button>
        {this.state.fullscreenModal && (
          <Modal
            isOpen={this.state.fullscreenModal}
            onRequestClose={() => this.closeModal('fullscreenModal')}
            isFullscreen
          >
            <ModalHeader
              tabs
              onClose={() => {
                this.closeModal('fullscreenModal');
              }}
            />
            <ModalBody isHero>
              <h2 className={customH1ClassName}>Thank You</h2>
              <img
                className={imageCenterClassName}
                style={{ width: '300px', height: '200px' }}
                src="https://media.giphy.com/media/awpqNsKuFtXI4/giphy.gif"
                alt="thanks"
              />
              <h2 className={customH1ClassName}>Thank You</h2>
              <img
                className={imageCenterClassName}
                style={{ width: '300px', height: '200px' }}
                src="https://media.giphy.com/media/awpqNsKuFtXI4/giphy.gif"
                alt="thanks"
              />
              <h2 className={customH1ClassName}>Thank You</h2>
              <img
                className={imageCenterClassName}
                style={{ width: '300px', height: '200px' }}
                src="https://media.giphy.com/media/awpqNsKuFtXI4/giphy.gif"
                alt="thanks"
              />
              <h2 className={customH1ClassName}>Thank You</h2>
              <img
                className={imageCenterClassName}
                style={{ width: '300px', height: '200px' }}
                src="https://media.giphy.com/media/awpqNsKuFtXI4/giphy.gif"
                alt="thanks"
              />
              <h2 className={customH1ClassName}>Thank You</h2>
              <img
                className={imageCenterClassName}
                style={{ width: '300px', height: '200px' }}
                src="https://media.giphy.com/media/awpqNsKuFtXI4/giphy.gif"
                alt="thanks"
              />
              <h2 className={customH1ClassName}>Thank You</h2>
              <img
                className={imageCenterClassName}
                style={{ width: '300px', height: '200px' }}
                src="https://media.giphy.com/media/awpqNsKuFtXI4/giphy.gif"
                alt="thanks"
              />
            </ModalBody>
          </Modal>
        )}
        <StoryHeader>Icon Header</StoryHeader>
        <Button
          onClick={() => {
            this.openModal('fixedModal');
          }}
        >
          Fixed Height Modal with Icon Header
        </Button>
        {this.state.fixedModal && (
          <Modal
            isOpen={this.state.fixedModal}
            onRequestClose={() => this.closeModal('fixedModal')}
            fixedHeight="600px"
          >
            <ModalIconHeader
              title="Congrats, you did it!"
              onClose={() => this.closeModal('fixedModal')}
            />
            <ModalBody>
              <img
                className={imageCenterClassName}
                src="https://media.giphy.com/media/bL6i8KRLAcSsw/giphy.gif"
                alt="totoro"
              />
            </ModalBody>
          </Modal>
        )}

        <StoryHeader>Modal Header with no background</StoryHeader>

        <Button
          onClick={() => {
            this.openModal('noBgHeader');
          }}
        >
          Header with no background
        </Button>
        {this.state.noBgHeader && (
          <Modal
            isOpen={this.state.noBgHeader}
            onRequestClose={() => this.closeModal('noBgHeader')}
          >
            <ModalHeader
              noBackground
              onClose={() => {
                this.closeModal('noBgHeader');
              }}
            >
              <h1>Header has no background</h1>
            </ModalHeader>
            <ModalBody>Body</ModalBody>
            <ModalFooter>
              <Button
                isSecondary
                onClick={() => {
                  this.closeModal('noBgHeader');
                }}
              >
                Cancel
              </Button>
              <Button onClick={action('Save')}>Save</Button>
            </ModalFooter>
          </Modal>
        )}
      </div>
    );
  }
}

const stories = storiesOf('Templates/Modal', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <ModalStory />)
);
