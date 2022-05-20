import React from 'react';
import clsx from 'clsx';
import { storiesOf } from '@storybook/react';

import Box from '@material-ui/core/Box';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ActionMenuIcon from '@material-ui/icons/MoreHoriz';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import AnalyticsIcon from '@material-ui/icons/TrendingUp';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useTheme } from '@material-ui/core/styles';

import { getThemeDecorator } from '../../utils/storybook';

import EntityTable from './EntityTable';

const LandingPageRow = ({
  title,
  published,
  createdDate,
  visitors,
  conversions,
  conversionRate,
  earnings,
}) => {
  const theme = useTheme();

  return (
    <TableRow>
      <TableCell className="icon">
        <Box bgcolor={theme.palette.grey[10]} width={48} height={48}></Box>
      </TableCell>
      <TableCell className={clsx('title', 'no-vertical-padding')}>
        <div style={{ minWidth: 150 }}>
          <Link
            component="button"
            variant="body1"
            style={{
              color: theme.palette.greyTransparent[100],
              textDecoration: 'none',
              textAlign: 'left',
            }}
          >
            {title}
          </Link>
          <Typography style={{ fontSize: 13, color: theme.palette.greyTransparent[50] }}>
            {published ? 'Published' : 'Draft'} | {createdDate}
          </Typography>
        </div>
      </TableCell>
      <TableCell align="right">{visitors}</TableCell>
      <TableCell align="right">{conversions}</TableCell>
      <TableCell align="right">{conversionRate}</TableCell>
      <TableCell align="right">{earnings}</TableCell>
      <TableCell className="icon-button">
        {published && (
          <Tooltip title="Create Facebook Ad">
            <IconButton aria-label="Create Facebook Ad">
              <FacebookIcon />
            </IconButton>
          </Tooltip>
        )}
      </TableCell>
      <TableCell className="icon-button">
        <Tooltip title="Analytics">
          <IconButton aria-label="View Analytics">
            <AnalyticsIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
      <TableCell className="icon-button">
        <Tooltip title="Edit">
          <IconButton aria-label="Edit Landing Page">
            <EditIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
      <TableCell className="icon-button">
        <Tooltip title="Actions">
          <IconButton aria-label="Additional Actions">
            <ActionMenuIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

const LandingPageTable = () => {
  return (
    <Box m={4}>
      <Typography variant="h3" style={{ marginBottom: 10 }}>
        Entity Table: Landing Pages
      </Typography>
      <Typography variant="body1" style={{ marginBottom: 30 }}>
        NOTE: For illustrative purposes only. Not the actual Landing Page listing implementation.
      </Typography>
      <Box mb={6}>
        <EntityTable>
          <TableHead>
            <TableRow>
              <TableCell className="icon" />
              <TableCell className="title" />
              <TableCell align="right">Unique Visitors</TableCell>
              <TableCell align="right">Conversions</TableCell>
              <TableCell align="right">Conversion Rate</TableCell>
              <TableCell align="right">Earnings</TableCell>
              <TableCell className="icon-button" />
              <TableCell className="icon-button" />
              <TableCell className="icon-button" />
              <TableCell className="icon-button" />
            </TableRow>
          </TableHead>
          <TableBody>
            <LandingPageRow
              title="Landing Page #3"
              createdDate="06/20/20"
              visitors="10"
              conversions="10"
              conversionRate="100%"
              earnings="$0.00"
              published
            />
            <LandingPageRow
              title="Landing Page #2"
              createdDate="01/20/20"
              visitors="100"
              conversions="80"
              conversionRate="80%"
              earnings="$120.00"
              published
            />
            <LandingPageRow
              title="Landing Page #1"
              createdDate="08/10/19"
              visitors="—"
              conversions="—"
              conversionRate="—"
              earnings="—"
            />
          </TableBody>
        </EntityTable>
      </Box>
    </Box>
  );
};

const OptInTextRow = ({ title, created, number, optIns }) => {
  const theme = useTheme();

  return (
    <TableRow>
      <TableCell className="icon">
        <Box bgcolor={theme.palette.grey[10]} width={48} height={48}></Box>
      </TableCell>
      <TableCell className={clsx('title', 'no-vertical-padding')}>
        <div style={{ minWidth: 150 }}>
          <Link
            component="button"
            variant="body1"
            style={{
              color: theme.palette.greyTransparent[100],
              textDecoration: 'none',
              textAlign: 'left',
            }}
          >
            {title}
          </Link>
          <Typography style={{ fontSize: 13, color: theme.palette.greyTransparent[50] }}>
            Created {created}
          </Typography>
        </div>
      </TableCell>
      <TableCell align="right">{number}</TableCell>
      <TableCell align="right">{optIns}</TableCell>
      <TableCell className="icon-button">
        <Tooltip title="Edit">
          <IconButton aria-label="Edit Opt-In Text">
            <EditIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
      <TableCell className="icon-button">
        <Tooltip title="Delete">
          <IconButton aria-label="Delete Opt-In Text">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

const OptInTextTable = () => {
  return (
    <Box m={4}>
      <Typography variant="h3" style={{ marginBottom: 10 }}>
        Entity Table: Opt-In Texts
      </Typography>
      <Typography variant="body1" style={{ marginBottom: 30 }}>
        NOTE: For illustrative purposes only. Not the actual Opt-In Text listing implementation.
      </Typography>
      <Box mb={6}>
        <EntityTable>
          <TableHead>
            <TableRow>
              <TableCell className="icon" />
              <TableCell className="title" />
              <TableCell align="right">Number</TableCell>
              <TableCell align="right">Opt-Ins</TableCell>
              <TableCell className="icon-button" />
              <TableCell className="icon-button" />
            </TableRow>
          </TableHead>
          <TableBody>
            <OptInTextRow
              title="My Opt-In Text #1"
              created="01/20/20"
              number="+16122555027"
              optIns={1234}
            />
            <OptInTextRow
              title="My Opt-In Text #2"
              created="03/04/20"
              number="+16122555027"
              optIns={30}
            />
            <OptInTextRow
              title="My Opt-In Text #3"
              created="07/10/20"
              number="+16122555029"
              optIns={130}
            />
          </TableBody>
        </EntityTable>
      </Box>
    </Box>
  );
};

const IntegrationRow = ({ title, status, date, isHidden }) => {
  return (
    <TableRow>
      <TableCell className="title">
        <span style={{ marginRight: 8 }}>{title}</span>
        {isHidden && <Chip label="Hidden" size="small" />}
      </TableCell>
      <TableCell className="no-vertical-padding" align="right" width={180}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {status === 'Disconnected' && <ErrorIcon style={{ color: '#BF0711', marginRight: 8 }} />}
          {status}
        </div>
      </TableCell>
      <TableCell align="right" width={120}>
        {date}
      </TableCell>
      <TableCell className="icon-button">
        <Tooltip title="Actions">
          <IconButton aria-label="Open actions menu">
            <ActionMenuIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

const IntegrationManagerTable = () => {
  return (
    <Box m={4}>
      <Typography variant="h3" style={{ marginBottom: 10 }}>
        Entity Table: Integration Accounts
      </Typography>
      <Typography variant="body1" style={{ marginBottom: 30 }}>
        NOTE: For illustrative purposes only. Not the actual integration account management
        implementation.
      </Typography>
      <Box mb={6}>
        <EntityTable>
          <TableHead>
            <TableRow>
              <TableCell className="title">Account Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Connected</TableCell>
              <TableCell className="icon-button"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <IntegrationRow title="AWeber Account #3" status="Connected" date="04/26/2020" />
            <IntegrationRow title="AWeber Account #2" status="Disconnected" date="03/22/2020" />
            <IntegrationRow
              title="AWeber Account #1"
              status="Connected"
              date="01/22/2020"
              isHidden="true"
            />
          </TableBody>
        </EntityTable>
      </Box>
    </Box>
  );
};

storiesOf('Components/EntityTable', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Landing Pages', () => <LandingPageTable />)
  .add('Opt-In Texts', () => <OptInTextTable />)
  .add('Integration Accounts', () => <IntegrationManagerTable />);
