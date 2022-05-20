import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import ListingCard from '../ListingCard';
import { StoryHeader, StoryRow } from '../../../story-helpers';
import { icons } from '../../theme/Icon';
import styles from './ListingCard.stories.css';

const ListingCardStory = () => {
  const cardProps = [{
    subTitle: text('subTitle', 'Webinar'),
    title: text('title', 'Live Webinar Funnel'),
    description: text('description', 'Convert visitors into leads.'),
    icon: text('icon', icons.Webinar),
  }];

  return (
    <div>
      <StoryHeader>Listing Cards</StoryHeader>
      <StoryRow>
        <div className={styles.cardContainer}>
          <ListingCard
            subTitle={cardProps[0].subTitle}
            title={cardProps[0].title}
            description={cardProps[0].description}
            icon={cardProps[0].icon}
            onClick={() => { console.warn('card clicked'); }}
          />
        </div>
        <div className={styles.cardContainer}>
          <ListingCard
            subTitle="Webinar"
            title="Live Webinar Funnel For all Your Conversion Needs"
            description="Convert visitors into leads with clear call to action."
            icon={icons.Webinar}
            onClick={() => { console.warn('card clicked'); }}
          />
        </div>
        <div className={styles.cardContainer}>
          <ListingCard
            subTitle="Webinar"
            title="Live Webinar Funnel"
            description="Convert visitors into leads with clear call to action."
            icon={icons.Webinar}
            onClick={() => { console.warn('card clicked'); }}
          />
        </div>
      </StoryRow>
    </div>
  );
};

const stories = storiesOf('Molecules/ListingCard', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <ListingCardStory />
  ))
);
