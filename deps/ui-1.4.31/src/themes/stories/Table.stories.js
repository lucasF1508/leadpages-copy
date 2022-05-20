import React from 'react';
import clsx from 'clsx';
import { storiesOf } from '@storybook/react';
import { getThemeDecorator } from '../../utils/storybook';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const BasicTable = () => (
  <Box mb={6}>
    <Typography variant="h3" style={{ marginBottom: 20 }}>
      Basic Table
    </Typography>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Receipt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>09/01/2020</TableCell>
            <TableCell>$321.00 USD</TableCell>
            <TableCell>Leadpages Monthly Advanced Subscription</TableCell>
            <TableCell>Successful</TableCell>
            <TableCell>
              <Link href="#">Download</Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>07/14/2020</TableCell>
            <TableCell>$79.00 USD</TableCell>
            <TableCell>Leadpages Monthly Pro Subscription</TableCell>
            <TableCell>Successful</TableCell>
            <TableCell>
              <Link href="#">Download</Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>05/20/2020</TableCell>
            <TableCell>$37.00 USD</TableCell>
            <TableCell>Leadpages Monthly Standard Subscription</TableCell>
            <TableCell>Successful</TableCell>
            <TableCell>
              <Link href="#">Download</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

const DenseTable = () => (
  <Box mb={6}>
    <Typography variant="h3" style={{ marginBottom: 20 }}>
      Dense Table
    </Typography>
    <Box mb={6}>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Receipt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>09/01/2020</TableCell>
              <TableCell>$321.00 USD</TableCell>
              <TableCell>Leadpages Monthly Advanced Subscription</TableCell>
              <TableCell>Successful</TableCell>
              <TableCell>
                <Link href="#">Download</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>07/14/2020</TableCell>
              <TableCell>$79.00 USD</TableCell>
              <TableCell>Leadpages Monthly Pro Subscription</TableCell>
              <TableCell>Successful</TableCell>
              <TableCell>
                <Link href="#">Download</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>05/20/2020</TableCell>
              <TableCell>$37.00 USD</TableCell>
              <TableCell>Leadpages Monthly Standard Subscription</TableCell>
              <TableCell>Successful</TableCell>
              <TableCell>
                <Link href="#">Download</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </Box>
);

const useEnhancedTableStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const EnhancedTableHead = props => {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {[
          { label: 'Email Address', id: 'email', disablePadding: true },
          { label: 'Source', disablePadding: false },
          { label: 'Form Name', disablePadding: false },
          { label: 'Date Added', id: 'createdDate', disablePadding: false },
          { label: 'Spam', id: 'isSpam', disablePadding: false },
        ].map(({ id, label, disablePadding }) => (
          <TableCell
            key={id}
            sortDirection={orderBy === id ? order : false}
            padding={disablePadding ? 'none' : 'default'}
          >
            {id ? (
              <TableSortLabel
                active={orderBy === id}
                direction={orderBy === id ? order : 'asc'}
                onClick={createSortHandler(id)}
              >
                {label}
                {orderBy === id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            ) : (
              label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

function createData(email, source, formName, createdDate, isSpam) {
  return { email, source, formName, createdDate, isSpam };
}

const rows = [
  createData('person1@test.com', 'Page 1', 'Form 1', '2020-08-13T17:07:59+00:00', 'No'),
  createData('person2@test.com', 'Page 1', 'Form 1', '2020-08-13T17:08:00+00:00', 'No'),
  createData('bot1@test.com', 'Page 1', 'Form 1', '2020-08-13T17:09:10+00:00', 'Yes'),
  createData('person3@test.com', 'Page 2', 'Form 2', '2020-08-14T17:08:00+00:00', 'No'),
  createData('person4@test.com', 'Page 2', 'Form 2', '2020-08-14T18:08:00+00:00', 'No'),
  createData('person5@test.com', 'Page 2', 'Form 2', '2020-08-14T19:08:00+00:00', 'No'),
  createData('bot2@test.com', 'Page 2', 'Form 2', '2020-08-14T17:09:02+00:00', 'Yes'),
  createData('bot3@test.com', 'Page 3', 'Form 3', '2020-08-15T17:07:00+00:00', 'Yes'),
  createData('person6@test.com', 'Page 3', 'Form 3', '2020-08-15T17:08:00+00:00', 'No'),
  createData('person7@test.com', 'Page 3', 'Form 3', '2020-08-13T17:09:00+00:00', 'No'),
  createData('person8@test.com', 'Page 4', 'Form 4', '2020-09-16T17:06:00+00:00', 'No'),
  createData('person9@test.com', 'Page 4', 'Form 4', '2020-09-16T17:05:00+00:00', 'No'),
  createData('bot4@test.com', 'Page 4', 'Form 4', '2020-09-16T17:04:00+00:00', 'Yes'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const EnhancedTable = () => {
  const classes = useEnhancedTableStyles();
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.email);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, email) => {
    const selectedIndex = selected.indexOf(email);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, email);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = email => selected.indexOf(email) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Box>
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Sorting, Selecting & Pagination
      </Typography>
      <Box mb={6}>
        <TableContainer className={classes.container} component={Paper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.email);
                  const createdDate = new Date(row.createdDate).toLocaleString(
                    window.navigator.language,
                  );
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.email)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.email}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.email}
                      </TableCell>
                      <TableCell>{row.source}</TableCell>
                      <TableCell>{row.formName}</TableCell>
                      <TableCell>{createdDate}</TableCell>
                      <TableCell>{row.isSpam}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  className={clsx('align-left', 'selectable-rows')}
                  rowsPerPageOptions={[5, 10, 25]}
                  // colSpan={6}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box>
    </Box>
  );
};

const TableStory = () => (
  <Box m={4} maxWidth={900}>
    <BasicTable />
    <DenseTable />
    <EnhancedTable />
  </Box>
);

storiesOf('Themes/Product', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Tables', () => <TableStory />);

storiesOf('Themes/Marketing', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Tables', () => <TableStory />);
