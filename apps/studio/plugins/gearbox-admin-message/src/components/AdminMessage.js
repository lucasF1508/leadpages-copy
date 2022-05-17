import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/index.css'

export const AdminMessage = React.forwardRef(({ type }, ref) => {
  const { message } = type
  return (
    <div
      className={styles.message}
      dangerouslySetInnerHTML={{ __html: message }}
    />
  )
})

AdminMessage.propTypes = {
  type: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
}

export default AdminMessage
