import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { css } from 'emotion';
import CardListItem from '../CardListItem';

const colorCard = css`
  width: 100%;
  height: 100%;
  background-color: rebeccapurple;
`;

const stories = storiesOf('Molecules/CardListItem', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about CardListItem (supports markdown).

    ~~~js
    <CardListItem>Render this</CardListItem>
    ~~~

  `)(() => (
    <div
      style={{
        display: 'flex',
        justifyContnet: 'flex-start',
        alignItems: 'center'
      }}
    >
      <CardListItem />
      <CardListItem>
        <div className={colorCard} />
      </CardListItem>
    </div>
  ))
);
