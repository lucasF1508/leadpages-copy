// TODO: Fetch from plans API via gatsby-node.js instead of hardcoding
// Only 14-day and 60-day trials are currently supported by the app
const TRIAL_ID_MAP = {
  '14': 'd3yy2ARDnfEVTPU7',
  '60': '39N2nxA2PJj2',
};

export const defaultTrialLength = '14';

export const getTrialId = (
  trialLength = defaultTrialLength,
  trialIdMap = TRIAL_ID_MAP,
  defaultLength = defaultTrialLength,
) => {
  return trialIdMap?.[trialLength] || trialIdMap[defaultLength];
};
