import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { StoryHeader, StoryRow } from '../../../story-helpers';
import SubNavigation, {
  SubNavigationControls,
  SubNavigationMain,
  SubNavigationTabs
} from '../SubNavigation';
import Button from '../../atoms/Button';
import IconButton from '../../molecules/IconButton';
import { TabGroup, TabLink } from '../../molecules/Tabs';
import withTypography, { types } from '../../theme/Typography';
import withColor, { colors } from '../../theme/Color';

import styles from './SubNavigation.stories.css';

const ThemeDisplay = withColor(withTypography(props => <div {...props} />));

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.setActive = this.setActive.bind(this);
    this.state = {
      active: 1
    };
  }
  setActive(active) {
    this.setState(() => ({
      active
    }));
  }
  render() {
    const { active } = this.state;

    return (
      <TabGroup small>
        <TabLink active={active === 1} onClick={() => this.setActive(1)}>
          Test 1
        </TabLink>
        <TabLink active={active === 2} onClick={() => this.setActive(2)}>
          Test 2
        </TabLink>
        <TabLink active={active === 3} onClick={() => this.setActive(3)}>
          Test 3
        </TabLink>
      </TabGroup>
    );
  }
}

const SubNavigationStory = () => (
  <div>
    <StoryHeader>SubNavigation</StoryHeader>
    <ThemeDisplay color={colors.red} type={types.supportContent}>
      v3 Deprecation Warning: SubNavigationMain prop to, href, and clickBack are
      being deprecated in favor of children
    </ThemeDisplay>
    <ThemeDisplay color={colors.red} type={types.supportContent}>
      v3 Deprecation Warning: SubNavigationMain prop name is being deprecated in
      favor of children
    </ThemeDisplay>
    <ThemeDisplay color={colors.red} type={types.supportContent}>
      v3 Deprecation Warning: SubNavigationMain prop editText is being
      deprecated in favor of children
    </ThemeDisplay>
    <StoryRow>
      <SubNavigation>
        <SubNavigationMain
          name="My Lead Page"
          isNameEditable
          onSave={action('Saved')}
          href="www.google.com"
          editText={() => {}}
        />
        <SubNavigationTabs>
          <Tabs />
        </SubNavigationTabs>
        <SubNavigationControls>
          <Button onClick={action('Clicked Edit')}>Edit</Button>
          <IconButton onClick={action('Clicked Options')} icon="ellipsis" />
        </SubNavigationControls>
      </SubNavigation>
    </StoryRow>

    <StoryRow>
      <SubNavigation>
        <SubNavigationMain
          name="My Lead Page"
          isNameEditable
          onSave={action('Saved')}
          href="www.google.com"
        />
        <SubNavigationTabs>
          <Tabs />
        </SubNavigationTabs>
        <SubNavigationControls>
          <Button onClick={action('Clicked Edit')}>Edit</Button>
          <IconButton onClick={action('Clicked Options')} icon="ellipsis" />
        </SubNavigationControls>
      </SubNavigation>
    </StoryRow>

    <StoryRow>
      <SubNavigation>
        <SubNavigationMain
          name="My Lead Page"
          isNameEditable
          onSave={action('Saved')}
          href="www.google.com"
        >
          <ThemeDisplay
            className={styles.subnavMainChildren}
            hoverColor={colors.greyDarker}
            type={types.supportContent}
          >
            <i className="lp-icon">edit</i>
            <span>Rename Campaign</span>
          </ThemeDisplay>
        </SubNavigationMain>
        <SubNavigationTabs>
          <Tabs />
        </SubNavigationTabs>
        <SubNavigationControls>
          <Button onClick={action('Clicked Edit')}>Edit</Button>
          <IconButton onClick={action('Clicked Options')} icon="ellipsis" />
        </SubNavigationControls>
      </SubNavigation>
    </StoryRow>
  </div>
);

const stories = storiesOf('Templates/SubNavigation', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <SubNavigationStory />)
);
