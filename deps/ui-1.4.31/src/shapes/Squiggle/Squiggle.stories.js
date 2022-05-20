import React from 'react';

import { storiesOf } from '@storybook/react';

import Squiggle from '../Squiggle';

storiesOf('Shapes/Squiggle', module)
  .add('Simple example', () => <Squiggle />)
  .add('Put it in an svg', () => (
    <svg width="100%">
      <Squiggle component="g" />
    </svg>
  ))
  .add('Adjust repeat length', () => <Squiggle shellProps={{ width: '100%' }} repeatCount={5} />)
  .add('Lets get crazy', () => (
    <svg width="360px" height="100%" style={{ position: 'fixed', right: '15%' }}>
      <Squiggle
        component="g"
        shellProps={{
          transform: `
            translate(160 -120)
            rotate(90, 0, 80)
            scale(2, 2)
          `,
        }}
        pathProps={{
          strokeWidth: 10,
          stroke: 'aquamarine',
        }}
        repeatCount={10}
      />
    </svg>
  ));
