import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { StoryHeader, StoryRow } from '../../../story-helpers';
import Button from '../../atoms/Button';
import Link from '../../atoms/Link';
import Tooltip from '../Tooltip';
import IconButton from '../IconButton';

const TooltipStory = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const tooltipProps = [
    {
      tip: text('tip', 'Tip on top'),
      top: boolean('top', false),
      bottom: boolean('bottom', false),
      left: boolean('left', false),
      right: boolean('right', false),
      hover: boolean('hover', false),
      hidden: boolean('hidden', false),
      isDiv: boolean('isDiv', false)
    }
  ];

  return (
    <div>
      <StoryHeader>Tooltip</StoryHeader>
      <StoryRow>
        <Tooltip tip="Tip on the right" right hover={false}>
          Right
        </Tooltip>

        <Tooltip
          tip={tooltipProps[0].tip}
          top={tooltipProps[0].top}
          bottom={tooltipProps[0].bottom}
          left={tooltipProps[0].left}
          right={tooltipProps[0].right}
          hover={tooltipProps[0].hover}
          hidden={tooltipProps[0].hidden}
          isDiv={tooltipProps[0].isDiv}
        >
          Top
        </Tooltip>

        <Tooltip tip="Tip on the bottom" bottom isDiv hover={false}>
          Bottom
        </Tooltip>

        <Tooltip tip="Tip on the left" left isDiv hover={false}>
          Left
        </Tooltip>
      </StoryRow>
      <StoryHeader>Tooltip with multi-line</StoryHeader>
      <StoryRow>
        <Tooltip
          tip={
            <div>
              <div>Tip on the right</div>
              <div>Tip on the right but I got more to say :P</div>
            </div>
          }
          right
        >
          Right
        </Tooltip>
        <Tooltip
          tip={
            <div>
              <div>Tip on the top</div>
              <div>Tip on the top but I got more to say :P</div>
            </div>
          }
        >
          Top
        </Tooltip>
        <Tooltip
          tip={
            <div>
              <div>Tip on the bottom</div>
              <div>Tip on the bottom but I got more to say :P</div>
            </div>
          }
          bottom
        >
          Bottom
        </Tooltip>
        <Tooltip
          tip={
            <div>
              <div>Tip on the left</div>
              <div>Tip on the left but I got more to say :P</div>
            </div>
          }
          left
        >
          Left
        </Tooltip>
      </StoryRow>
      <StoryHeader>Tooltip with No arrow</StoryHeader>
      <StoryRow>
        <Tooltip
          withArrow={false}
          tip={
            <div>
              <div>Tip on the Right</div>
              <div>Tip on the right but I got more to say :P</div>
            </div>
          }
          right
        >
          Right tip with no arrow
        </Tooltip>
      </StoryRow>
      <StoryHeader>Tooltip on IconButton</StoryHeader>
      <StoryRow>
        <Tooltip
          right
          tip="Create Facebook Ad"
          data-qa-selector="facebook-ad-button-tooltip"
        >
          <IconButton
            href="https://my-fb-ad.co"
            icon="facebook"
            data-qa-selector="facebook-ad-button"
            isHighlighted
            noBackground
            component="a"
          />
        </Tooltip>
      </StoryRow>
      <StoryHeader>Tooltip with a click trigger</StoryHeader>
      <StoryRow>
        <Tooltip
          hover={false}
          hidden={!tooltipVisible}
          right
          tip={
            <div>
              <p>Hey Now</p>
              <p>
                <Link target="_blank" href="https://leadpages.net/legal">
                  Leadpages Link
                </Link>
              </p>
            </div>
          }
        >
          <Button onClick={() => setTooltipVisible(!tooltipVisible)}>
            Click to trigger tooltip
          </Button>
        </Tooltip>
      </StoryRow>
    </div>
  );
};

const stories = storiesOf('Molecules/Tooltip', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <TooltipStory />)
);
