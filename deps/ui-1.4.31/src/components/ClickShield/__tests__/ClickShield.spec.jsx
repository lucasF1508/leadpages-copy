import React from 'react';
import { render } from '@testing-library/react';

import ClickShield from '../ClickShield';

const START_STATE = "I haven't been clicked!";
const CLICKED_STATE = 'WHY DID YOU CLICK ME!';

const ClickyButton = () => (
  <div>
    <button onClick={e => (e.currentTarget.innerHTML = CLICKED_STATE)}>{START_STATE}</button>
  </div>
);

describe('ClickShield', () => {
  it('should render the child component', () => {
    const { findByText } = render(
      <ClickShield isActive>
        <ClickyButton />
      </ClickShield>,
    );
    const button = findByText(START_STATE);
    expect(button).toBeTruthy();
  });

  // TODO: I tried testing that the clickshield prevents clicking, but because it's more of a
  // z-index and HTML solution, I don't think React testing realy works for it.  I'm open to
  // suggestions.
});
