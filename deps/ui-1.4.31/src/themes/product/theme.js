import { createMuiTheme } from '@material-ui/core/styles';
import { deepmerge } from '@material-ui/utils';
import sharedShadows from '../shared/shadows';
import sharedOverrides from '../shared/overrides';
import sharedProps from '../shared/props';
import sharedShape from '../shared/shape';
import sharedZIndex from '../shared/zIndex';
import typography from './typography';
import palette from './palette';
import overrides from './overrides';

const defaultTheme = createMuiTheme();

const productTheme = (options = {}) => {
  const { variant = 'light' } = options;
  const theme = createMuiTheme({
    palette,
    props: sharedProps,
    shape: sharedShape,
    typography: typography(defaultTheme),
    zIndex: sharedZIndex,
  });
  theme.shadows = sharedShadows(theme.palette.grey[100]);
  theme.overrides = deepmerge(sharedOverrides(theme), overrides({ theme, variant }));

  return theme;
};

export default productTheme;
