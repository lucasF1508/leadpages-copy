import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { StoryHeader, StorySubHeader, StoryRow, StoryColumn } from '../../../story-helpers';

import FlyoutMenu from './FlyoutMenu';
import Option from '../../atoms/Option';
import IconButton from '../../molecules/IconButton';

class FlyoutMenuStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thing1IsOpen: false,
      thing2IsOpen: false,
      thing3IsOpen: false,
    };
  }

  closeThings() {
    this.setState({ thing1IsOpen: false, thing2IsOpen: false, thing3IsOpen: false });
  }

  render() {
    const { thing1IsOpen, thing2IsOpen, thing3IsOpen } = this.state;
    return (
      <div>
        <StoryHeader> ActionMenu </StoryHeader>
        <StoryRow>
          <StoryColumn>
            <StorySubHeader>Default</StorySubHeader>
            <div>
              Thing Number 1
              <FlyoutMenu
                options={
                  <React.Fragment>
                    <Option>Test 1</Option>
                    <Option>Test 2</Option>
                    <Option>Test 3</Option>
                  </React.Fragment>
                }
                isOpen={thing1IsOpen}
                onClickOutside={() => this.closeThings()}
              >
                <IconButton
                  icon="close"
                  onClick={() =>
                    this.setState(prevState => ({
                      thing1IsOpen: !prevState.thing1IsOpen,
                    }))
                  }
                />
              </FlyoutMenu>
            </div>
            <div>
              Thing Number 2
              <FlyoutMenu
                options={
                  <React.Fragment>
                    <Option>Test 1</Option>
                    <Option>Test 2</Option>
                    <Option>Test 3</Option>
                  </React.Fragment>
                }
                isOpen={thing2IsOpen}
                onClickOutside={() => this.closeThings()}
              >
                <IconButton
                  icon="close"
                  onClick={() =>
                    this.setState(prevState => ({
                      thing2IsOpen: !prevState.thing2IsOpen,
                    }))
                  }
                />
              </FlyoutMenu>
            </div>
            <div style={{ position: 'fixed', bottom: '50px' }}>
              <h3>Thing Near bottom</h3>
              <div style={{ postion: 'relative' }}>
                <FlyoutMenu
                  options={
                    <React.Fragment>
                      <Option>Test 1</Option>
                      <Option>Test 2</Option>
                      <Option>Test 3</Option>
                    </React.Fragment>
                  }
                  isOpen={thing3IsOpen}
                  onClickOutside={() => this.closeThings()}
                >
                  <IconButton
                    icon="close"
                    onClick={() =>
                      this.setState(prevState => ({
                        thing3IsOpen: !prevState.thing3IsOpen,
                      }))
                    }
                  />
                </FlyoutMenu>
              </div>
            </div>
          </StoryColumn>
        </StoryRow>
      </div>
    );
  }
}

const stories = storiesOf('Organisms/FlyoutMenu', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    A flyout menu is a simple menu that opens above the content, applies a click shield so it can close if clicked off of.
  `)(() => <FlyoutMenuStories />),
);
