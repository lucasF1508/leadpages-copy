import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { getThemeDecorator } from '../../utils/storybook';

const ExclusiveIconStory = () => {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment) setAlignment(newAlignment);
  };

  return (
    <Box m={4} maxWidth="550px">
      <Typography style={{ marginBottom: 8 }}>Icon Buttons</Typography>
      <ToggleButtonGroup
        size="small"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon fontSize="small" />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon fontSize="small" />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon fontSize="small" />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifyIcon fontSize="small" />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

const ExclusiveTextStory = () => {
  const [buttonStyle, setButtonStyle] = React.useState('flat');

  const handleButtonStyle = (event, newButtonStyle) => {
    if (newButtonStyle) setButtonStyle(newButtonStyle);
  };

  return (
    <Box m={4} maxWidth="550px">
      <Typography style={{ marginBottom: 8 }}>Text buttons</Typography>
      <ToggleButtonGroup
        exclusive
        size="large"
        value={buttonStyle}
        onChange={handleButtonStyle}
        aria-label="button style"
      >
        <ToggleButton value="flat" aria-label="flat">
          Flat
        </ToggleButton>
        <ToggleButton value="line" aria-label="line">
          Line
        </ToggleButton>
        <ToggleButton value="gradient" aria-label="gradient">
          Gradient
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

const MultipleIconStory = () => {
  const [bold, setBold] = useState(true);
  const [italic, setItalic] = useState(true);
  const [underline, setUnderline] = useState(false);
  const [strikethrough, setStrikethrough] = useState(false);

  return (
    <Box m={4} maxWidth="550px">
      <Typography style={{ marginBottom: 8 }}>Multi-Select (Ungrouped)</Typography>
      <ToggleButton selected={bold} onChange={() => setBold(!bold)} aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton selected={italic} onChange={() => setItalic(!italic)} aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton
        selected={underline}
        onChange={() => setUnderline(!underline)}
        aria-label="underlined"
      >
        <FormatUnderlinedIcon />
      </ToggleButton>
      <ToggleButton
        selected={strikethrough}
        onChange={() => setStrikethrough(!strikethrough)}
        aria-label="strikethrough"
      >
        <FormatStrikethroughIcon />
      </ToggleButton>
      <ToggleButton aria-label="color" disabled>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </Box>
  );
};

storiesOf('Themes/Leads', module)
  .addDecorator(getThemeDecorator('leads'))
  .add('Toggle Buttons', () => (
    <>
      <Typography variant="h3" style={{ marginBottom: 20, marginLeft: 24 }}>
        Toggle Buttons
      </Typography>
      <ExclusiveIconStory />
      <ExclusiveTextStory />
      <MultipleIconStory />
    </>
  ));
