import React from 'react';

import { storiesOf } from '@storybook/react';

import { getThemeDecorator } from '../../utils/storybook';
import Checklist from './Checklist';
import Button from '@material-ui/core/Button';

import ChecklistItemDetails from './ChecklistItemDetails';
import ChecklistCelebrationModal from './ChecklistCelebrationModal';

const celebrationGif =
  'https://storage.googleapis.com/leadpages-knowledge/Onboarding%20Checklist/celebration_checkmark.gif';

const ItemDetails = props => {
  return (
    <ChecklistItemDetails {...props}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor pretium viverra
        suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor pretium viverra
        suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </ChecklistItemDetails>
  );
};

const BottomItemDetails = () => (
  <div style={{ padding: `0 16px` }}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor pretium viverra
      suspendisse.
    </p>
  </div>
);

const listMock = [
  {
    name: 'getToKnow',
    label: 'Get to Know Leadpages',
    status: 'complete',
    DetailsComponent: ItemDetails,
  },
  {
    name: 'customizePage',
    label: 'Customize Your Page',
    status: 'incomplete',
    DetailsComponent: ItemDetails,
  },
  {
    name: 'Integrations',
    label: 'Integrations, Form & Follow-up',
    status: 'incomplete',
    DetailsComponent: ItemDetails,
  },
  {
    name: 'social details',
    label: 'Add Social Details',
    status: 'incomplete',
    DetailsComponent: ItemDetails,
  },
  {
    name: 'test page',
    label: 'Test Your Page',
    status: 'incomplete',
    DetailsComponent: ItemDetails,
  },
  {
    name: 'publish page',
    label: 'Publish Your Page',
    status: 'incomplete',
    DetailsComponent: ItemDetails,
  },
];

const ChecklistDefaultStory = () => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    if (open) {
      handleClickClose();
    } else {
      handleClickOpen();
    }
  };

  return (
    <>
      <Checklist
        open={open}
        list={listMock}
        bottomItemLabel="Get Support"
        bottomItemComponent={<BottomItemDetails />}
        onClose={handleClickClose}
        onStatusChange={() => {}}
      />
      <Button onClick={handleToggle} style={{ margin: '30px' }}>
        Open/Close Sidebar
      </Button>
    </>
  );
};

const ChecklistCelebrationModalStory = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Button onClick={() => setOpen(!open)} style={{ margin: '30px' }}>
        Open Celebration Modal
      </Button>
      <ChecklistCelebrationModal
        open={open}
        imgSrc={celebrationGif}
        imgAlt="Check mark celebration"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

storiesOf('Components/Checklist', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Default', () => <ChecklistDefaultStory />)
  .add('Celebration Modal', () => <ChecklistCelebrationModalStory />);
