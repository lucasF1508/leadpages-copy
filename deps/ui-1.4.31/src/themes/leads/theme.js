import { createMuiTheme } from '@material-ui/core/styles';
import { deepmerge } from '@material-ui/utils';

import sharedOverrides from '../shared/overrides';
import sharedProps from '../shared/props';
import sharedShadows from '../shared/shadows';
import sharedShape from '../shared/shape';
import overrides from './overrides';
import palette from './palette';
import typography from './typography';

const defaultTheme = createMuiTheme();

const leadsThemeProps = {
  MuiFilledInput: {
    disableUnderline: true,
  },
  MuiSelect: {
    displayEmpty: true,
  },
  MuiAutocomplete: {
    blurOnSelect: true,
  },
};

const leadsTheme = createMuiTheme({
  palette,
  props: deepmerge(sharedProps, leadsThemeProps),
  typography: typography(defaultTheme),
  shadows: sharedShadows('#000000'),
  shape: sharedShape,
  spacing: 6,
});

leadsTheme.overrides = deepmerge(sharedOverrides(leadsTheme), overrides(leadsTheme));

export default leadsTheme;
