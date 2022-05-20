import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import {
  List,
  ListRow,
  ListColumn,
} from '../List';
import {
  StoryHeader,
  StoryRow,
} from '../../../story-helpers';
import Button from '../../atoms/Button';
import Tag from '../../molecules/Tag';
import Select from '../../molecules/Select';
import Option from '../../atoms/Option';
import {
  title,
  subtitle,
} from './List.stories.css';

const data = [
  {
    id: '1',
    type: 'search',
    title: 'This is a neat title',
    subtitle: 'it\'s very neat',
    visits: '23498',
    optIns: '34',
    conversionRate: '18.33%',
    earnings: '$30023',
  },
  {
    id: '2',
    type: 'search',
    title: 'This is a neat title',
    subtitle: 'it\'s very neat',
    visits: '23498',
    optIns: '34',
    conversionRate: '18.33%',
    earnings: '$30023',
    tag: {
      text: 'June Promo',
    },
  },
  {
    id: '3',
    type: 'search',
    title: 'This is a neat title',
    subtitle: 'it\'s very neat',
    visits: '23498',
    optIns: '34',
    conversionRate: '18.33%',
    earnings: '$30023',
    link: {
      url: 'www.goog.com',
      text: 'Google',
    },
  },
  {
    id: '4',
    type: 'search',
    title: 'This is a neat title',
    subtitle: 'it\'s very neat',
    visits: '23498',
    optIns: '34',
    conversionRate: '18.33%',
    earnings: '$30023',
  },
  {
    id: '5',
    type: 'search',
    title: 'This is a neat title',
    subtitle: 'it\'s very neat',
    visits: '23498',
    optIns: '34',
    conversionRate: '18.33%',
    earnings: '$30023',
  },
  {
    id: '6',
    type: 'search',
    title: 'This is a neat title',
    subtitle: 'it\'s very neat',
    visits: '23498',
    optIns: '34',
    conversionRate: '18.33%',
    earnings: '$30023',
  },
  {
    id: '7',
    type: 'search',
    title: 'This is a neat title',
    subtitle: 'it\'s very neat',
    visits: '23498',
    optIns: '34',
    conversionRate: '18.33%',
    earnings: '$30023',
  },
];

const LabelStory = () => (
  <div>
    <StoryHeader>Table List</StoryHeader>
    <StoryRow>
      <List className="iGetPassed">
        <ListRow className="iGetPassed" innerClassName="iGetPassed" isHeader>
          <ListColumn className="iGetPassed" flexBasis="46px" flexGrow="0">
            <i className="lp-icon">search</i>
          </ListColumn>
          <ListColumn flexBasis="33%">
            <Select
              placeholderText="Select an Option"
              onChange={action('select changed')}
              onClick={action('clicked select')}
              noBackground
              headerSelect
            >
              <Option onClick={action('clicked option')} primaryText="Option 1" secondaryText="foo" value="foo" />
              <Option onClick={action('clicked option')} primaryText="Option 2" secondaryText="bar" value="bar" />
              <Option onClick={action('clicked option')} primaryText="Option 3" secondaryText="baz" value="baz" />
            </Select>
          </ListColumn>
          <ListColumn flexBasis="85px" justifyContent="flex-end">Visits</ListColumn>
          <ListColumn flexBasis="85px" justifyContent="flex-end">Opt-Ins</ListColumn>
          <ListColumn flexBasis="85px" justifyContent="flex-end">Conversion Rate</ListColumn>
          <ListColumn flexBasis="92px" justifyContent="flex-end">Earnings</ListColumn>
          <ListColumn flexBasis="128px" />
        </ListRow>
        {data.map(asset => (
          <ListRow key={asset.id}>
            <ListColumn flexBasis="46px" flexGrow="0">
              <i className="lp-icon">{asset.type}</i>
            </ListColumn>
            <ListColumn flexBasis="33%">
              <div className={title}>
                {asset.title}
                {asset.tag &&
                  <Tag value={asset.tag.text} backgroundColor="blueLighter" borderColor="blueDark" color="blueDark" />
                }
              </div>
              <div className={subtitle}>
                {asset.subtitle}
                {asset.link &&
                  <Button href={asset.link.url} noBackground>{asset.link.text}</Button>}
              </div>
            </ListColumn>
            <ListColumn flexBasis="85px" justifyContent="flex-end">{asset.visits}</ListColumn>
            <ListColumn flexBasis="85px" justifyContent="flex-end">{asset.optIns}</ListColumn>
            <ListColumn flexBasis="85px" justifyContent="flex-end">{asset.conversionRate}</ListColumn>
            <ListColumn flexBasis="92px" justifyContent="flex-end">{asset.earnings}</ListColumn>
            <ListColumn flexBasis="128px" justifyContent="flex-end">
              <Button icon="analytics" noBackground />
              <Button icon="edit" noBackground />
              <Button icon="more" noBackground />
            </ListColumn>
          </ListRow>
        ))}
      </List>
    </StoryRow>
  </div>
);

const stories = storiesOf('Templates/Label', module);
stories.addDecorator(withKnobs);
stories.add(
  'Overview',
  withInfo(`
    Description or documentation about aaaa (supports markdown).
  `)(() => (
    <LabelStory />
  ))
);
