import { createMuiTheme } from '@material-ui/core/styles';
import { deepmerge } from '@material-ui/utils';

import sharedOverrides from '../shared/overrides';
import sharedProps from '../shared/props';
import sharedShadows from '../shared/shadows';
import sharedShape from '../shared/shape';
import sharedZIndex from '../shared/zIndex';
import overrides from './overrides';
import palette from './palette';
import typography from './typography';

const defaultTheme = createMuiTheme();

const marketingTheme = createMuiTheme({
  palette,
  props: sharedProps,
  shape: sharedShape,
  typography: typography(defaultTheme),
  shadows: sharedShadows(palette.grey[100]),
  zIndex: sharedZIndex,
});
marketingTheme.overrides = deepmerge(sharedOverrides(marketingTheme), overrides(marketingTheme));

export default marketingTheme;
