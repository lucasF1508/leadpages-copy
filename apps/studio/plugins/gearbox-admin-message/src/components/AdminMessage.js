import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/index.css'

export const AdminMessage = React.forwardRef(({ type, parent }, ref) => {
  const { message } = type
  const { message: _message } = parent

  return (
    <div
      className={styles.message}
      dangerouslySetInnerHTML={{ __html: message || _message }}
    />
  )
})

AdminMessage.propTypes = {
  type: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
}

AdminMessage.displayName = 'AdminMessage'

export default AdminMessage
