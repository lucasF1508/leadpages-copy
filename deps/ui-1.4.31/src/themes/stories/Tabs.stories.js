import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { getThemeDecorator } from '../../utils/storybook';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} bgcolor="rgba(0,0,0,0.15)">
          {children}
        </Box>
      )}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const SimpleTabStory = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m={4}>
      <Box mb={6} maxWidth={600}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Simple Tabs
        </Typography>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Tab One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Tab Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Tab Three
        </TabPanel>
      </Box>
    </Box>
  );
};

const FullWidthTabStory = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m={4}>
      <Box mb={6} maxWidth={600}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Full Width Tabs
        </Typography>
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Tab One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Tab Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Tab Three
        </TabPanel>
      </Box>
    </Box>
  );
};

const ScrollableTabStory = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m={4}>
      <Box mb={6} maxWidth={600}>
        <Typography variant="h3" style={{ marginBottom: 20 }}>
          Scrollable Tabs
        </Typography>
        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="on">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Tab One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Tab Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Tab Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Tab Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Tab Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Tab Six
        </TabPanel>
      </Box>
    </Box>
  );
};

storiesOf('Themes/Product', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Tabs', () => (
    <>
      <SimpleTabStory />
      <ScrollableTabStory />
    </>
  ));

storiesOf('Themes/Marketing', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Tabs', () => (
    <>
      <SimpleTabStory />
      <ScrollableTabStory />
    </>
  ));

storiesOf('Themes/Leads', module)
  .addDecorator(getThemeDecorator('leads'))
  .add('Tabs', () => (
    <>
      <SimpleTabStory />
      <FullWidthTabStory />
    </>
  ));
