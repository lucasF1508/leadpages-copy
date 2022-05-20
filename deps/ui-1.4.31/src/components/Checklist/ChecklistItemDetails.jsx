import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { LIST_ITEM_STATUS } from './ChecklistItem';

function ChecklistItemDetails({
  children,
  itemName,
  itemStatus,
  nextButtonLabel,
  onStatusChange,
  onOpenNextItem,
}) {
  const handleClickNext = () => {
    if (itemStatus !== LIST_ITEM_STATUS.COMPLETE) {
      onStatusChange(itemName, LIST_ITEM_STATUS.COMPLETE);
    }
    onOpenNextItem(itemName);
  };

  return (
    <div>
      {children}
      <Grid container justify="flex-end">
        <Button onClick={handleClickNext} data-qa-selector={`${itemName}-next-button`}>
          {nextButtonLabel}
        </Button>
      </Grid>
    </div>
  );
}

ChecklistItemDetails.propTypes = {
  children: PropTypes.node.isRequired,
  itemName: PropTypes.string.isRequired,
  itemStatus: PropTypes.oneOf([LIST_ITEM_STATUS.COMPLETE, LIST_ITEM_STATUS.INCOMPLETE]),
  nextButtonLabel: PropTypes.string,
  onStatusChange: PropTypes.func.isRequired,
  onOpenNextItem: PropTypes.func.isRequired,
};

ChecklistItemDetails.defaultProps = {
  nextButtonLabel: 'Next',
};

export default ChecklistItemDetails;
