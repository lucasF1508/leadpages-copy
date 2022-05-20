import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import RatioCard from '../RatioCard';
import { StoryHeader } from '../../../story-helpers';
import styles from './RatioCard.stories.css';

const RatioCardStory = () => (
  <div>
    <StoryHeader>Ratio Cards</StoryHeader>
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <div className={styles.cardContainer}>
        <RatioCard
          loading
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 1"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          loading
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 2"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          loading
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 3"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          loading
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 2 yo yo yo"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 3 I just wnt a longer name"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 1"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 2"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 3"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 2 yo yo yo"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 3 I just wnt a longer name"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 1"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 2"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 3"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 2 yo yo yo"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="My favorite animal 3 I just wnt a longer name"
          primary={{
            text: 'Use',
            href: 'http://google.com/',
          }}
          secondary={{
            text: 'View',
            href: 'http://google.com/',
          }}
        />
      </div>
      <div className={styles.cardContainer}>
        <RatioCard
          thumbnailFullUrl="http://lorempixel.com/324/324/cats/"
          name="No Items, Just OnClick"
          onClick={() => alert('Hi There')}
        />
      </div>
    </div>
  </div>
);

const stories = storiesOf('Molecules/RatioCard', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <RatioCardStory />
  ))
);
