import { getLocalPreviousPlan, PREV_PLAN_KEY } from '../previous-plan';

const PREV_PLAN = 'fake_previous_plan';

describe('getLocalPreviousPlan', () => {
  beforeEach(() => {
    // Add prev plan to url
    window.history.replaceState({}, '', `?prev_plan=${PREV_PLAN}`);
  });

  it('should set plan into local storage and return the previous plan', () => {
    const prevPlan = getLocalPreviousPlan();
    const localPrevPlan = JSON.parse(localStorage.getItem(PREV_PLAN_KEY));

    expect(prevPlan.id).toEqual(PREV_PLAN);
    expect(localPrevPlan).toEqual(prevPlan);
  });
});
