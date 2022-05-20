import { getTrialId } from '../trials';

const mockTrialIdMap = {
  default: 'mock-default-trial-id',
  nonDefault: 'mock-non-default-trial-id',
};

const mockDefaultTrialLength = 'default';

describe('trials: get trial ids', () => {
  it('should return trial id if passed valid non-default trial length', () => {
    expect(getTrialId('nonDefault', mockTrialIdMap, mockDefaultTrialLength)).toEqual(
      'mock-non-default-trial-id',
    );
  });

  it('should return default trial id if passed invalid non-default trial length', () => {
    expect(getTrialId('some-nonsense', mockTrialIdMap, mockDefaultTrialLength)).toEqual(
      'mock-default-trial-id',
    );
  });

  it('should return default trial id if not passed trial length', () => {
    expect(getTrialId(undefined, mockTrialIdMap, mockDefaultTrialLength)).toEqual(
      'mock-default-trial-id',
    );
  });
});
