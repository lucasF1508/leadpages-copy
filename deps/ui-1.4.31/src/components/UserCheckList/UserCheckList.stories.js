import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { getThemeDecorator } from '../../utils/storybook';

import UserCheckList from './UserCheckList';
import ArrowPopper from '../ArrowPopper';

storiesOf('Components/UserCheckList', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Default', () => {
    return (
      <Box m={4}>
        <UserCheckList
          checklist={[
            { label: 'More than 3', passed: true },
            { label: 'Used Uppercase', passed: true },
            { label: 'Used Special charaters', passed: false },
          ]}
        />
      </Box>
    );
  })
  .add('In an ArrowPopper ', () => {
    const Tip = (
      <UserCheckList
        checklist={[
          { label: 'More than 3', passed: true },
          { label: 'Used Uppercase', passed: true },
          { label: 'Used Special charaters', passed: false },
        ]}
      />
    );

    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    return (
      <Box m={4}>
        <ArrowPopper title={Tip} open={isTooltipOpen} placement="right">
          <Button onClick={() => setIsTooltipOpen(!isTooltipOpen)}>Open Checklist</Button>
        </ArrowPopper>
      </Box>
    );
  });
