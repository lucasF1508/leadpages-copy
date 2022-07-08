import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import Component from 'react-component-component';
import tinycolor from 'tinycolor2';
import { css } from 'emotion';
import CardList from '../CardList';
import ColorPicker from '../../organisms/ColorPicker';

const stories = storiesOf('Organisms/CardList', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about CardList (supports markdown).

    ~~~js
    <CardList>Render this</CardList>
    ~~~

  `)(() => (
    <Component
      initialState={{
        items: []
      }}
    >
      {({ state, setState }) => {
        const activeColor = state.items[state.activeItem] || '#FF00E8';
        const color = tinycolor(activeColor);
        const hasPreviousItem = state.previousItem || state.previousItem === 0;
        let presetColors = [];
        let previousColor = tinycolor(state.items[state.previousItem]);
        if (hasPreviousItem) {
          presetColors = [].concat([
            ...new Set([
              ...previousColor.tetrad().map(c => c.toHexString()),
              ...previousColor.triad().map(c => c.toHexString()),
              ...previousColor.monochromatic().map(c => c.toHexString()),
              ...previousColor.analogous().map(c => c.toHexString())
            ])
          ]);
        }

        return (
          <CardList
            label="HELLO"
            itemSize={90}
            itemMargin={5}
            addItem={() =>
              setState(state => ({
                previousLength: state.items.length,
                previousItem: state.activeItem,
                activeItem: state.items.length,
                items: state.items.concat([
                  tinycolor(state.items[state.activeItem] || '#FF00E8')
                    .tetrad()[3]
                    .toHexString()
                ])
              }))
            }
            removeItem={index =>
              setState(state => {
                const newItems = [...state.items];
                newItems.splice(index, 1);
                return {
                  items: newItems,
                  previousLength: state.items.length,
                  activeItem: null
                };
              })
            }
            activeItem={state.activeItem}
            setActiveItem={activeItem =>
              setState(state => ({
                previousItem: state.activeItem,
                activeItem: state.activeItem === activeItem ? null : activeItem
              }))
            }
            previousLength={state.previousLength}
            items={state.items.map(color => (
              <div
                className={css`
                  width: 100%;
                  height: 100%;
                  background-color: ${color};
                `}
              />
            ))}
          >
            <ColorPicker
              disableAlpha
              color={color.toHexString()}
              presetColors={presetColors}
              onChange={color =>
                setState(() => {
                  const newItems = [...state.items];
                  newItems.splice(state.activeItem, 1, color.hex);
                  return {
                    items: newItems,
                    previousLength: state.items.length
                  };
                })
              }
            />
          </CardList>
        );
      }}
    </Component>
  ))
);
