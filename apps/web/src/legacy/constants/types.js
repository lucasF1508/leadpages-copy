import PropTypes from 'prop-types';

/* eslint-disable import/prefer-default-export */
export const GATSBY_IMAGE = PropTypes.shape({
  uri: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  headers: PropTypes.objectOf(PropTypes.string),
});
