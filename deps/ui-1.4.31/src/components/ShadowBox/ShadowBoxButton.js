import {
  borders,
  compose,
  display,
  flexbox,
  palette,
  positions,
  shadows,
  sizing,
  spacing,
  typography,
  css,
} from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

export const styleFunction = css(
  compose(borders, display, flexbox, positions, palette, shadows, sizing, spacing, typography),
);

const ShadowBoxButton = styled(ButtonBase)(styleFunction, { name: 'ShadowBoxButton' });

export default ShadowBoxButton;
