import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import React from 'react';
import Component from 'react-component-component';
import Select from './Select';
import Option from '../../atoms/Option';
import RadioButton from '../../atoms/RadioButton';
import Input from '../../atoms/Input';
import Checkbox from '../../atoms/Checkbox';

import { StoryHeader, StoryRow, StoryColumn } from '../../../story-helpers';

const SelectStory = () => (
  <div>
    <StoryHeader>Select</StoryHeader>
    <StoryRow>
      <StoryColumn>
        <Select
          onChange={action('select changed')}
          onClick={action('clicked select')}
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            value="baz"
          />
        </Select>
      </StoryColumn>
      <StoryColumn>
        <Select
          onChange={action('select changed')}
          onClick={action('clicked select')}
          placeholderText="Select an option"
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            value="baz"
          />
        </Select>
      </StoryColumn>
      <StoryColumn>
        <Select
          disabled
          onChange={action('select changed')}
          onClick={action('clicked select')}
          placeholderText="Select an option"
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            value="baz"
          />
        </Select>
      </StoryColumn>
    </StoryRow>
    <StoryRow>
      <StoryColumn>
        <Select
          outerLabel="Select an option"
          onChange={action('select changed')}
          onClick={action('clicked select')}
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            value="baz"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 4"
            value="qux"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 5"
            value="quux"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 6"
            value="quuz"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 7"
            value="corge"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 8"
            value="grault"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 9"
            value="garply"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 10"
            value="waldo"
          />
        </Select>
      </StoryColumn>
      <StoryColumn>
        <Select
          outerLabel="Select an option"
          onChange={action('select changed')}
          onClick={action('clicked select')}
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            selected
            value="bar"
          />
          <Option
            disabled
            onClick={action('clicked option')}
            primaryText="Option 3"
            value="baz"
          />
        </Select>
      </StoryColumn>
      <StoryColumn>
        <Select
          disabled
          outerLabel="Select an option"
          onChange={action('select changed')}
          onClick={action('clicked select')}
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            value="baz"
          />
        </Select>
      </StoryColumn>
    </StoryRow>
    <StoryRow>
      <StoryColumn>
        <Select
          outerLabel="Select an option"
          onChange={action('select changed')}
          onClick={action('clicked select')}
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            secondaryText="foo"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            secondaryText="bar"
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            secondaryText="baz"
            value="baz"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 4"
            secondaryText="qux"
            value="qux"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 5"
            secondaryText="quux"
            value="quux"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 6"
            secondaryText="quuz"
            value="quuz"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 7"
            secondaryText="corge"
            value="corge"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 8"
            secondaryText="grault"
            value="grault"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 9"
            secondaryText="garply"
            value="garply"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 10"
            secondaryText="waldo"
            value="waldo"
          />
        </Select>
      </StoryColumn>
      <StoryColumn>
        <Select
          onChange={action('select changed')}
          onClick={action('clicked select')}
          outerLabel="Select an option"
          placeholderText="Select an option"
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            secondaryText="foo"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            secondaryText="bar"
            selected
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            secondaryText="baz"
            value="baz"
          />
        </Select>
      </StoryColumn>
      <StoryColumn>
        <Select
          disabled
          onChange={action('select changed')}
          onClick={action('clicked select')}
          outerLabel="Select an option"
          placeholderText="Select an option"
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            secondaryText="foo"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            secondaryText="bar"
            selected
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            secondaryText="baz"
            value="baz"
          />
        </Select>
      </StoryColumn>
    </StoryRow>
    <StoryRow>
      <StoryColumn>
        <Select
          onChange={action('select changed')}
          onClick={action('clicked select')}
          noBackground
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            secondaryText="foo"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            secondaryText="bar"
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            secondaryText="baz"
            value="baz"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 4"
            secondaryText="qux"
            value="qux"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 5"
            secondaryText="quux"
            value="quux"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 6"
            secondaryText="quuz"
            value="quuz"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 7"
            secondaryText="corge"
            value="corge"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 8"
            secondaryText="grault"
            value="grault"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 9"
            secondaryText="garply"
            value="garply"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 10"
            secondaryText="waldo"
            value="waldo"
          />
        </Select>
      </StoryColumn>
      <StoryColumn>
        <Select
          onChange={action('select changed')}
          onClick={action('clicked select')}
          placeholderText="Select an option"
          noBackground
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            secondaryText="foo"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            secondaryText="bar"
            selected
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            secondaryText="baz"
            value="baz"
          />
        </Select>
      </StoryColumn>
      <StoryColumn>
        <Select
          disabled
          onChange={action('select changed')}
          onClick={action('clicked select')}
          outerLabel="Select an option"
          placeholderText="Select an option"
          noBackground
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            secondaryText="foo"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            secondaryText="bar"
            selected
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            secondaryText="baz"
            value="baz"
          />
        </Select>
      </StoryColumn>
    </StoryRow>
    <StoryRow>
      <StoryColumn>
        <Select
          outerLabel="Select an option"
          onChange={action('select changed')}
          onClick={action('clicked select')}
          noBackground
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            secondaryText="foo"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            secondaryText="bar"
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            secondaryText="baz"
            value="baz"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 4"
            secondaryText="qux"
            value="qux"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 5"
            secondaryText="quux"
            value="quux"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 6"
            secondaryText="quuz"
            value="quuz"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 7"
            secondaryText="corge"
            value="corge"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 8"
            secondaryText="grault"
            value="grault"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 9"
            secondaryText="garply"
            value="garply"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 10"
            secondaryText="waldo"
            value="waldo"
          />
        </Select>
      </StoryColumn>
      <StoryColumn>
        <Select
          onChange={action('select changed')}
          onClick={action('clicked select')}
          outerLabel="Select an option"
          placeholderText="Select an option"
          noBackground
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            secondaryText="foo"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            secondaryText="bar"
            selected
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            secondaryText="baz"
            value="baz"
          />
        </Select>
      </StoryColumn>
      <StoryColumn>
        <Select
          disabled
          onChange={action('select changed')}
          onClick={action('clicked select')}
          outerLabel="Select an option"
          placeholderText="Select an option"
          noBackground
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            secondaryText="foo"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            secondaryText="bar"
            selected
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            secondaryText="baz"
            value="baz"
          />
        </Select>
      </StoryColumn>
    </StoryRow>
    <StoryRow>
      <StoryColumn>
        <Select
          placeholderText="Select an Option"
          onChange={action('select changed')}
          onClick={action('clicked select')}
          noBackground
          headerSelect
        >
          <Option
            onClick={action('clicked option')}
            primaryText="Option 1"
            secondaryText="foo"
            value="foo"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 2"
            secondaryText="bar"
            value="bar"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 3"
            secondaryText="baz"
            value="baz"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 4"
            secondaryText="qux"
            value="qux"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 5"
            secondaryText="quux"
            value="quux"
          />
          <Option
            onClick={action('clicked option')}
            primaryText="Option 6"
            secondaryText="quuz"
            value="quuz"
          />
        </Select>
      </StoryColumn>
    </StoryRow>
  </div>
);

const stories = storiesOf('Molecules/Select', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => <SelectStory />)
);

stories.add(
  'Testing a11n',
  withInfo(`
    Just trying to test a11n.
  `)(() => (
    <div>
      <div>
        <h3>Native</h3>
        <form>
          <div>
            <label htmlFor="text-input"> text-input </label>
            <input id="text-input" type="text" />
          </div>
          <div>
            <label htmlFor="checkbox-input"> checkbox-input </label>
            <input id="checkbox-input" type="checkbox" />
          </div>
          <div>
            <input name="rad-input" id="radio-input-1" type="radio" />
            <label htmlFor="radio-input-1"> radio-input-1 </label>
            <br />
            <input name="rad-input" id="radio-input-2" type="radio" />
            <label htmlFor="radio-input-2"> radio-input-2 </label>
            <br />
            <input name="rad-input" id="radio-input-3" type="radio" />
            <label htmlFor="radio-input-3"> radio-input-3 </label>
            <br />
          </div>
          <div>
            <label htmlFor="select-input"> select-input </label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option disabled>5</option>
              <option disabled>6</option>
            </select>
          </div>
        </form>
      </div>
      <div>
        <h3>Leads</h3>
        <Component
          initialState={{
            input1: '',
            checkbox1: false,
            radioButtonGroup: null,
            select1: 'option 14'
          }}
        >
          {({ state, setState }) => (
            <form>
              <div>
                <Input
                  id="input1"
                  subContent="I am helper text"
                  placeholder="Placeholder text"
                  value={state.input1}
                  onChange={({ target }) =>
                    setState(() => ({ input1: target.value }))
                  }
                  labelContent="single input field"
                />
              </div>
              <div>
                <Checkbox
                  id="checkbox1"
                  checked={state.checkbox1}
                  labelContent="checkbox-input"
                  onChange={({ target }) =>
                    setState(() => ({ checkbox1: target.checked }))
                  }
                />
              </div>
              <div>
                <RadioButton
                  name="radioButtonGroup"
                  id="1"
                  value="1"
                  checked={state.radioButtonGroup === '1'}
                  onChange={({ target }) => {
                    console.log({ radioButtonGroup: target.value });
                    setState(() => ({ radioButtonGroup: target.value }));
                  }}
                  labelContent="Radio Button"
                />
                <br />
                <RadioButton
                  name="radioButtonGroup"
                  id="2"
                  value="2"
                  checked={state.radioButtonGroup === '2'}
                  isActive
                  onChange={({ target }) =>
                    setState(() => ({ radioButtonGroup: target.value }))
                  }
                  labelContent="Radio Hover"
                />
                <br />
                <RadioButton
                  name="radioButtonGroup"
                  id="3"
                  value="3"
                  checked={state.radioButtonGroup === '3'}
                  onChange={({ target }) =>
                    setState(() => ({ radioButtonGroup: target.value }))
                  }
                  labelContent="Radio Select"
                />
                <br />
                <RadioButton
                  name="radioButtonGroup"
                  id="4"
                  value="4"
                  checked={state.radioButtonGroup === '4'}
                  disabled
                  onChange={({ target }) =>
                    setState(() => ({ radioButtonGroup: target.value }))
                  }
                  labelContent="Disabled"
                />
              </div>
              <div>
                <label htmlFor="select-input"> select-input </label>
                <Select
                  outerLabel="Select an option"
                  onChange={({ value }) => setState(() => ({ select1: value }))}
                  onClick={action('clicked select')}
                >
                  {[
                    'option 0',
                    'option 1',
                    'option 2',
                    'option 3',
                    'option 4',
                    'option 5',
                    'option 6',
                    'option 7',
                    'option 8',
                    'option 9',
                    'option 10',
                    'option 11',
                    'option 12',
                    'option 13',
                    'option 14',
                    'option 15'
                  ].map((opt, index) => (
                    <Option
                      disabled={[3, 5, 6, 9, 10].indexOf(index) >= 0}
                      onClick={action('clicked option')}
                      primaryText={opt}
                      selected={state.select1 === opt}
                      value={opt}
                      key={opt}
                    />
                  ))}
                </Select>
              </div>
            </form>
          )}
        </Component>
      </div>
    </div>
  ))
);
