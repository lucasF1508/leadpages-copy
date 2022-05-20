import React from 'react';
import { useInView } from 'react-intersection-observer';

const ComponentInView = props => {
  const [ref, inView] = useInView(ref, {
    triggerOnce: true,
  });
  const [children] = props;

  return <div ref={ref}>{children}</div>;
};

export default ComponentInView;
