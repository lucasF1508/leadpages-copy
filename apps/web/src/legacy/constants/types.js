import PropTypes from 'prop-types'

/* eslint-disable import/prefer-default-export */
export const RPImage = PropTypes.shape({
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  className: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.string,
  layout: PropTypes.string,
  priority: PropTypes.bool,
  condition: PropTypes.oneOf(['internal', 'external', 'download', 'modal']),
  hasPlaceholder: PropTypes.bool,
})

export const RPIcon = PropTypes.shape({
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
})

export const GATSBY_IMAGE = PropTypes.shape({
  uri: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  headers: PropTypes.objectOf(PropTypes.string),
})
