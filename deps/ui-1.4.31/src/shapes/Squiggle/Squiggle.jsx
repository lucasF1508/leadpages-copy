import React from 'react';
import PropTypes from 'prop-types';

export default function Squiggle({
  component: SquiggleComponent,
  pathProps,
  repeatCount,
  shellProps,
}) {
  const repeatDef = [...Array(repeatCount)].map(() => ' t 90 0').join('');
  return (
    <SquiggleComponent {...shellProps}>
      <path fill="transparent" d={`M0 80 Q 45 40, 90 80${repeatDef}`} {...pathProps} />
    </SquiggleComponent>
  );
}

Squiggle.propTypes = {
  component: PropTypes.node,
  pathProps: PropTypes.shape({}),
  repeatCount: PropTypes.number,
  shellProps: PropTypes.shape({}),
};

Squiggle.defaultProps = {
  component: 'svg',
  pathProps: {
    stroke: 'rebeccapurple',
    strokeWidth: '2',
  },
  repeatCount: 1,
  shellProps: {},
};
