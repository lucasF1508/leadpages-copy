import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../theme/Icon';
import styles from './ListingCard.css';

const ListingCard = ({
  isActive,
  onClick,
  title,
  description,
  icon,
  subTitle,
  className,
}) => (
  <div
    className={classNames(className,
      `${styles.calloutCard}`,
      {
        [`${styles.calloutCardActive}`]: isActive,
      },
    )}
    role="button"
    tabIndex="0"
    onClick={onClick}
  >
    <div>
      <h2 className={styles.title}>
        {title}
      </h2>

      <div className={styles.description}>
        {description}
      </div>
    </div>

    { !icon ? null : <div
      className={styles.icon}
    >
      {icon ? <Icon icon={icon} /> : null}
      <div className={styles.subtitle}>
        {subTitle}
      </div>
    </div>}
  </div>
);

ListingCard.propTypes = {
  className: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

ListingCard.defaultProps = {
  className: null,
  subTitle: '',
  title: '',
  description: '',
  icon: null,
  onClick: () => {},
  isActive: false,
};

export default ListingCard;
