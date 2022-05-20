import React from 'react';
import { storiesOf } from '@storybook/react';
import { css } from '@emotion/core';
import Illustration, { illustrationTypes } from './Illustration';
import { AllIllustrations } from './docHelper';

const stories = storiesOf('Illustrations', module);
stories.add('Basic use', () => <Illustration illustrationType={illustrationTypes.AlertBar} />);
stories.add('All of them', () => <AllIllustrations />);
stories.add('Styling', () => (
  <Illustration
    width={100}
    height={100}
    illustrationType={illustrationTypes.AlertBar}
    css={css`
      width: 200px !important;
      height: 200px !important;
      background: rebeccapurple;
    `}
  />
));
/*
---
name: Illustration
route: /atom/illustration
menu: Atoms
---

import { Playground, Props } from 'docz';


# Illustration

<Props of={Illustration} />

## Basic usage

To use this component import it from leads.

```
import Illustration, {illustrationTypes} from '@lp/leads/Illustration';
```

Then in your jsx use

```
<Illustration illustrationType={illustrationTypes.AlertBar}/>
```

<Playground>
  <Illustration illustrationType={illustrationTypes.AlertBar} />
</Playground>

## All illustrations

<AllIllustrations />

## Styling

By default all the illistration svgs have a default height of 72px. To override them you may pass in
`height` and `width` props as wells as use the `emotion` `css` prop to style them.

<Playground>
  <StylingExample />
</Playground>

```
<Illustration
  width={100}
  height={100}
  illustrationType={illustrationTypes.AlertBar}
  css={css`
    width: 200px !important;
    height: 200px !important;
    background: rebeccapurple;
  `}
/>
```
*/
