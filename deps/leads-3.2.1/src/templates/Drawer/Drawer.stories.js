import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Button from '../../atoms/Button';
import Toggle from '../../atoms/Toggle';
import { StoryHeader, StoryRow } from '../../../story-helpers';
import Drawer from '../Drawer';
import DrawerCard from './DrawerCard';
import ListingCard from '../../molecules/ListingCard';
import { icons } from '../../theme/Icon';
import withTypography, { types } from '../../theme/Typography';

const Label = withTypography(props => <span {...props} />);

class DrawerStory extends Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

    let isOpen = true;
    if (localStorage.getItem('storybookDrawerExample') === 'closed') {
      isOpen = false;
    }

    this.state = {
      isOpen,
      toggle1: true,
    };
  }

  onClose() {
    this.setState(() => ({ isOpen: false }), () => {
      localStorage.setItem('storybookDrawerExample', 'closed');
    });
  }

  onOpen() {
    this.setState(() => ({ isOpen: true }), () => {
      localStorage.setItem('storybookDrawerExample', 'open');
    });
  }

  handleOnChange({ target }) {
    this.setState(() => ({ [target.id]: target.checked }));
  }

  render() {
    return (
      <div>
        <StoryHeader>Drawer</StoryHeader>
        <StoryRow>
          <Button
            onClick={this.onOpen}
          > Open Drawer </Button>
          <Button
            onClick={this.onClose}
          > Close Drawer </Button>
          <StoryRow>
            <Toggle checked={this.state.toggle1} onChange={this.handleOnChange} id="toggle1" />
            <Label type={types.supportContent} style={{ paddingLeft: '12px' }}>Toggle Card Type</Label>
          </StoryRow>
        </StoryRow>
        <Drawer
          isPaged
          isOpen={this.state.isOpen}
          onClose={this.onClose}
          onOpen={this.onOpen}
          header="Welcome, Staci!"
          subheader={`
            Try starting with one of
            these recommended high-converting
            templates to help you sell your
            product or service.
          `}
          closeTip="Hide recommended templates"
          footerText="Browse All Templates"
          footerHref="http://google.com"
          footerLink={undefined}
          items={[{
            id: '1',
            thumbnailFullUrl: 'http://lorempixel.com/324/324/cats/',
            name: 'My favorite animal 1',
            icon: icons.Webinar,
            subTitle: 'Webinar',
            description: 'Convert visitors into leads with clear call to action.',
            primary: {
              text: 'Use Template',
              href: 'http://google.com/',
            },
            secondary: {
              text: 'Preview Template',
              href: 'http://google.com/',
            },
          }, {
            id: '2',
            thumbnailFullUrl: 'http://lorempixel.com/324/324/cats/',
            name: 'My favorite animal 2',
            icon: icons.Webinar,
            subTitle: 'Webinar',
            description: 'Convert visitors into leads with clear call to action.',
            primary: {
              text: 'Use Template',
              href: 'http://google.com/',
            },
            secondary: {
              text: 'Preview Template',
              href: 'http://google.com/',
            },
          }, {
            id: '3',
            thumbnailFullUrl: 'http://lorempixel.com/324/324/cats/',
            name: 'My favorite animal 3',
            icon: icons.Webinar,
            subTitle: 'Webinar',
            description: 'Convert visitors into leads with clear call to action.',
            primary: {
              text: 'Use Template',
              href: 'http://google.com/',
            },
            secondary: {
              text: 'Preview Template',
              href: 'http://google.com/',
            },
          }, {
            id: '4',
            thumbnailFullUrl: 'http://lorempixel.com/324/324/animals/',
            name: 'My favorite animal 4',
            icon: icons.Webinar,
            subTitle: 'Webinar',
            description: 'Convert visitors into leads with clear call to action.',
            primary: {
              text: 'Use Template',
              href: 'http://google.com/',
            },
            secondary: {
              text: 'Preview Template',
              href: 'http://google.com/',
            },
          }, {
            id: '5',
            thumbnailFullUrl: 'http://lorempixel.com/324/324/animals/',
            name: 'My favorite animal 5',
            icon: icons.Webinar,
            subTitle: 'Webinar',
            description: 'Convert visitors into leads with clear call to action.',
            primary: {
              text: 'Use Template',
              href: 'http://google.com/',
            },
            secondary: {
              text: 'Preview Template',
              href: 'http://google.com/',
            },
          }].map((item, i) => {
            if (this.state.toggle1) {
              return (
                <DrawerCard
                  item={item}
                  key={item.id}
                  imageRef={i === 0 ? (el) => { this.imageElement = el; } : null}
                />
              );
            }
            return (
              <ListingCard
                subTitle={item.subTitle}
                title={item.name}
                description={item.description}
                icon={item.icon}
                onClick={() => { console.warn('card clicked'); }}
              />
            );
          })}
        />
      </div>
    );
  }
}

const stories = storiesOf('Templates/Drawer', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <DrawerStory />
  ))
);
