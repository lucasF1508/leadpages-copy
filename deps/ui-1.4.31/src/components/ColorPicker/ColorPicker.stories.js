import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import colors from './colors';
import ColorPickerLabel from './ColorPickerLabel';
import ColorPicker from './index';
import { getThemeDecorator } from '../../utils/storybook';

const useStyles = makeStyles({
  wrapper: props => ({
    width: `${props.width}px`,
    backgroundColor: colors.backgroundColor,
    padding: '18px 0',
    borderRadius: '24px',
    '& > div > div': {
      width: props.width === 252 ? '210px' : '252px',
    },
  }),
});

const stories = storiesOf('Components/ColorPicker', module);

const brandColors = [
  '#2f3A0E',
  '#62EAB5',
  '#037CBA',
  '#1D5ED5',
  '#F03BA1',
  'rgba(29,34,102, 0.75)',
];

const ColorPickerWrapper = props => {
  const [color, setColor] = useState('#D0021B');
  const [isTitleShowing, setIsTitleShowing] = useState(true);
  const onOpenCustomColorPicker = () => setIsTitleShowing(!isTitleShowing);

  const onChange = (colorObj, event) => {
    const { r, g, b, a } = colorObj.rgb;
    action(`Color is now ${colorObj.hex}, opacity ${a * 100}%`);
    setColor(`rgba(${r},${g},${b},${a})`);
  };
  const classes = useStyles(props);

  return (
    <div className={classes.wrapper}>
      {isTitleShowing && (
        <ColorPickerLabel
          text="Color Picker Stories"
          style={{ textAlign: 'center', color: colors.labelColor }}
        />
      )}
      <ColorPicker
        color={color}
        onChange={onChange}
        onOpenCustomColorPicker={onOpenCustomColorPicker}
        {...props}
      />
    </div>
  );
};

stories.addDecorator(getThemeDecorator('marketing'));

stories.add('With brand colors', () => {
  return (
    <ColorPickerWrapper
      brandColors={brandColors}
      brandColorsAction={action('Edit brand colors')}
      width={288}
    />
  );
});

stories.add('With brand colors, five across', () => {
  return (
    <ColorPickerWrapper
      brandColors={brandColors}
      brandColorsAction={action('Edit brand colors')}
      width={252}
    />
  );
});

stories.add('Without brand colors', () => {
  return <ColorPickerWrapper brandColorsAction={action('Add brand colors')} width={288} />;
});

stories.add('With Custom Title', () => {
  return (
    <ColorPickerWrapper
      brandColors={brandColors}
      brandColorsAction={action('Edit brand colors')}
      width={288}
      renderCustomTitle={({ onClose }) => (
        <>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography style={{ color: 'white ' }}>Custom Title</Typography>
            </Grid>
            <Grid item>
              <Button onClick={onClose} variant="text">
                Go Back
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    />
  );
});
