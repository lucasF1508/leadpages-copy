import React, { useEffect } from 'react';
import { Box, Paper, Tabs, Tab, useMediaQuery, Theme } from '@material-ui/core';
import PreviewTemplate, { Device } from './PreviewTemplate';

const PreviewTemplateStory: React.FC = () => {
  const matchesSmallBreakpoint = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'));
  const [device, setDevice] = React.useState(
    matchesSmallBreakpoint ? Device.Mobile : Device.Desktop,
  );

  const handleChange = (_, newValue) => {
    setDevice(newValue);
  };

  useEffect(() => {
    if (matchesSmallBreakpoint) {
      setDevice(Device.Mobile);
    }
  }, [matchesSmallBreakpoint]);

  return (
    <Box height="100%">
      {!matchesSmallBreakpoint && (
        <Paper>
          <Tabs
            value={device}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Desktop" value={Device.Desktop} />
            <Tab label="Mobile" value={Device.Mobile} />
          </Tabs>
        </Paper>
      )}
      <Box display="flex" height="100%" marginTop="24px">
        <PreviewTemplate
          previewUrl="https://api.leadpages.io/template/v2/templates/wszPGCvaqxemzfc6crzA5F/preview.html"
          device={device}
        />
      </Box>
    </Box>
  );
};

export default {
  title: 'Components',
};

const StoryTemplate = () => <PreviewTemplateStory />;

export const Story = StoryTemplate.bind({});
Story.storyName = 'Preview Template';
