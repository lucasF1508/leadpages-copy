import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import styles from './DrawerCard.css';

const DrawerCard = ({ item, imageRef }) => (
  <div className={styles.templateCard}>
    <div className={styles.templateCardPreview}>
      <div className={styles.cardRatioManager}>
        <div className={styles.cardRatioContainer}>
          <img
            ref={imageRef}
            className={styles.cardThumbnail}
            src={item.thumbnailFullUrl}
            alt={item.name}
          />
        </div>
        <div className={styles.overlay}>
          <div className={styles.overlayContainer}>
            {item.primary && (
              <Button href={item.primary.href} to={item.primary.to}>
                {item.primary.text}
              </Button>
            )}
            {item.secondary && (
              <Button
                className={item.primary ? styles.overlayButton : ''}
                isSecondary
                href={item.secondary.href}
                to={item.secondary.to}
              >
                {item.secondary.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className={styles.templateCardText}>{item.name}</div>
  </div>
);

DrawerCard.propTypes = {
  item: PropTypes.shape({
    thumbnailFullUrl: PropTypes.string,
    name: PropTypes.string,
    primary: PropTypes.shape({
      text: PropTypes.string,
      to: PropTypes.string,
      href: PropTypes.string
    }),
    secondary: PropTypes.shape({
      text: PropTypes.string,
      to: PropTypes.string,
      href: PropTypes.string
    })
  }),
  imageRef: PropTypes.func
};

DrawerCard.defaultProps = {
  item: {
    thumbnailFullUrl: '',
    name: '',
    primary: null,
    secondary: null
  },
  imageRef: () => {}
};

export default DrawerCard;
