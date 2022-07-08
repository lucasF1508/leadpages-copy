import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

import ShadowBox from '../ShadowBox';

const useStyles = makeStyles(
  ({ spacing, typography }) => ({
    root: ({ overflowX }) => ({
      padding: 0,
      overflowX,

      '& [class*="MuiTableCell-head"]': {
        whiteSpace: 'nowrap',
        width: 'auto',
        '&.title': {
          width: '100%',
        },
        '&.icon, &.icon-button': {
          padding: 0,
        },
      },
      '& [class*="MuiTableCell-body"]': {
        fontSize: typography.pxToRem(15),
        lineHeight: typography.pxToRem(19),
        paddingTop: spacing(4),
        paddingBottom: spacing(4),
        width: 'auto',
        '&.title': {
          width: '100%',
        },
        '&.icon, &.icon-button': {
          padding: 0,
        },
        '&.icon-button': {
          width: 40,
          textAlign: 'center',
          paddingLeft: 22,
          '& [class*="MuiIconButton-root"]': {
            marginLeft: 2,
            marginRight: 2,
          },
          '&:last-child': {
            paddingRight: 22,
          },
        },
        // Sets styles on all that come after the first
        '&.icon-button ~ .icon-button': {
          paddingLeft: 0,
        },
        '&:first-child': {
          paddingLeft: spacing(3),
        },
        '&:last-child': {
          paddingRight: spacing(3),
        },
        '&.no-vertical-padding': {
          paddingTop: 0,
          paddingBottom: 0,
        },
        '&.no-horizontal-padding': {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    }),
  }),
  { classNamePrefix: 'EntityTable' },
);

const EntityTable = props => {
  const { className, children, overflowX, TableProps, ...other } = props;
  const classes = useStyles({ overflowX });

  return (
    <TableContainer className={clsx(classes.root, className)} component={ShadowBox} {...other}>
      <Table {...TableProps}>{children}</Table>
    </TableContainer>
  );
};

EntityTable.propTypes = {
  className: PropTypes.string,
  overflowX: PropTypes.oneOf(['hidden', 'auto']),
  TableProps: PropTypes.object,
};

EntityTable.defaultProps = {
  className: '',
  overflowX: 'auto',
  TableProps: {},
};

export default EntityTable;
