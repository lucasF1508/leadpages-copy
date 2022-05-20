const mockData = {
  populatedPill: [
    {
      text: 'Webinar Form',
      conversion: 50,
    },
  ],
  populatedPillWithMultipleConversions: [
    {
      text: 'Webinar Form',
      conversion: 50,
    },
    {
      text: 'Webinar Form',
      conversion: 50,
    },
  ],
  withSplitTest: {
    data: [
      0.10,
      0.10,
      0.10,
    ],
  },
  withSplitTestOneVariation: {
    data: [
      0.10,
      0.10,
    ],
  },
  withMultipleSplitTests: {
    data: [
      0.10,
      0.10,
      0.10,
      0.10,
      0.10,
      0.10,
      0.10,
      0.10,
      0.10,
      0.10,
    ],
  },
};

export default mockData;
