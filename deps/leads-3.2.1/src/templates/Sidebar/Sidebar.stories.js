import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import PropTypes from 'prop-types';
import Sidebar, { SidebarHeader, SidebarContent } from '../Sidebar';
import SlideInOutWrapper from '../../molecules/SlideInOutWrapper';
import { StoryHeader, StoryRow } from '../../../story-helpers';

import Button from '../../atoms/Button';
import styles from './Sidebar.stories.css';

const BlueBox = ({ val, pointer, onClick }) => (
  <div
    role="presentation"
    style={{
      margin: '10px',
      height: '100px',
      backgroundColor: '#c8dfff',
      borderRadius: '3px',
      boxShadow: '0px 3px 6px rgba(36, 11, 11, 0.39)',
      fontSize: '48px',
      lineHeight: '100px',
      textAlign: 'center',
      cursor: pointer ? 'pointer' : 'initial'
    }}
    onClick={onClick}
  >
    {val}
  </div>
);

BlueBox.propTypes = {
  onClick: PropTypes.func,
  val: PropTypes.string,
  pointer: PropTypes.bool
};

BlueBox.defaultProps = {
  onClick: () => {},
  val: '',
  pointer: false
};

class MySidebarWrapper extends Component {
  static propTypes = {
    subtitle: PropTypes.string,
    showGoBack: PropTypes.bool
  };
  static defaultProps = {
    subtitle: '',
    showGoBack: 'false'
  };
  constructor(props) {
    super(props);

    this.toggleIsOpen = this.toggleIsOpen.bind(this);
    this.toggleShowPageTwo = this.toggleShowPageTwo.bind(this);

    this.state = {
      isOpen: false,
      showPageTwo: false,
      isAnimating: false
    };
  }

  toggleIsOpen() {
    this.setState(
      () => ({
        isOpen: !this.state.isOpen,
        isAnimating: true
      }),
      () => {
        // TODO: This stops wierd behavior if the user clicks
        // the button over and over again. It would be nice to
        // find a better way.
        this.setState(() => ({
          isAnimating: false
        }));
      }
    );
  }

  toggleShowPageTwo() {
    this.setState(() => ({
      showPageTwo: !this.state.showPageTwo
    }));
  }

  render() {
    return (
      <div>
        <Button disabled={this.state.isAnimating} onClick={this.toggleIsOpen}>
          Click to {this.state.isOpen ? 'Close' : 'Open'}
        </Button>
        <MySidebar
          title="Davy Jones"
          subtitle={this.props.subtitle}
          showGoBack={this.props.showGoBack}
          toggleShowPageTwo={this.toggleShowPageTwo}
          showPageTwo={this.state.showPageTwo}
          isOpen={this.state.isOpen}
          onClose={this.toggleIsOpen}
        />
      </div>
    );
  }
}

const MySidebar = ({
  className,
  title,
  subtitle,
  toggleShowPageTwo,
  showPageTwo,
  showGoBack,
  isOpen,
  onClose
}) => (
  <Sidebar isOpen={isOpen} className={className}>
    <SidebarHeader
      title={title}
      subtitle={!showPageTwo ? false : subtitle}
      onClose={onClose}
      onGoBack={!showPageTwo ? false : toggleShowPageTwo}
    />
    <SidebarContent>
      <h3>My Content</h3>
      <BlueBox
        onClick={showGoBack ? toggleShowPageTwo : false}
        val={showGoBack ? 'Click Me' : '1'}
        pointer
      />
      <BlueBox val="2" />
      <BlueBox val="3" />
      <BlueBox val="4" />
      <BlueBox val="5" />
      <BlueBox val="6" />
      <BlueBox val="7" />
      <BlueBox val="8" />
      <BlueBox val="9" />
      <BlueBox val="10" />
      <BlueBox val="11" />
      <BlueBox val="12" />
    </SidebarContent>

    <SlideInOutWrapper
      isShowing={showPageTwo}
      useDiv
      className={styles.pageTwo}
      style={{
        position: 'absolute',
        top: '75px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        background: '#fff'
      }}
    >
      <SidebarContent>
        <h3>MY content Other content</h3>
        <BlueBox val="10" />
        <BlueBox val="20" />
        <BlueBox val="30" />
        <BlueBox val="40" />
        <BlueBox val="50" />
        <BlueBox val="60" />
        <BlueBox val="70" />
        <BlueBox val="80" />
        <BlueBox val="90" />
        <BlueBox val="100" />
        <BlueBox val="110" />
        <BlueBox val="120" />
      </SidebarContent>
    </SlideInOutWrapper>
  </Sidebar>
);

MySidebar.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  showPageTwo: PropTypes.bool,
  showGoBack: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClose: PropTypes.func,
  toggleShowPageTwo: PropTypes.func
};

MySidebar.defaultProps = {
  className: '',
  isOpen: false,
  showPageTwo: false,
  showGoBack: false,
  title: '',
  subtitle: '',
  onClose: () => {},
  toggleShowPageTwo: () => {}
};

const SidebarStory = () => (
  <div>
    <StoryHeader>Sidebar</StoryHeader>
    <StoryRow>
      <MySidebarWrapper />
    </StoryRow>
  </div>
);

const stories = storiesOf('Templates/Sidebar', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <SidebarStory />
  ))
);
