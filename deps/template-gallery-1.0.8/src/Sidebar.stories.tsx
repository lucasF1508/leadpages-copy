import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilterSidebar from './components/FilterSidebar';
import { mockGroupedTaxons } from './__fixtures__/taxon';

const currentFilters = {
  categories: 'about',
  tags: '',
  order_by: '-release_date',
};

const useStyles = makeStyles({
  sidebarRoot: {
    width: 268,
  },
});

export const Sidebar: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Sidebar</h1>
      <div className={classes.sidebarRoot}>
        <FilterSidebar
          groupedTaxonData={mockGroupedTaxons}
          currentFilters={currentFilters}
          onFilterSelect={() => {}}
          onSortSelect={() => {}}
          onClearFilter={() => {}}
        />
      </div>
    </>
  );
};

export default {
  title: 'Sidebar',
  component: Sidebar,
};
