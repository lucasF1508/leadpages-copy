import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react';

import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';

import InputLabelWithTooltip from '../../components/InputLabelWithTooltip';
import InputLabelWithCount from '../../components/InputLabelWithCount';
import { getThemeDecorator } from '../../utils/storybook';
import { legacyColors } from '../colors';

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

const TextFieldStory = ({ theme }) => {
  const [values, setValues] = useState({
    showPassword: false,
    textMask: '(   )    -    ',
    numberFormat: '1500',
    withCount: 'InputLabelWithCount',
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleInputChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  return (
    <Box m={4} maxWidth="550px">
      <Typography variant="h3" style={{ marginBottom: 20 }}>
        Default TextField
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={6}>
        <Grid item xs={6}>
          <TextField
            label="Default"
            placeholder="Placeholder Text"
            helperText="Helper text"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Disabled With Placeholder"
            placeholder="Placeholder Text"
            helperText="Helper text"
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Disabled With Value"
            value="Text"
            helperText="Helper text"
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Default Value" defaultValue="Text" helperText="Helper text" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Required"
            placeholder="Placeholder Text"
            helperText="Helper text"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Error"
            placeholder="Placeholder Text"
            helperText="Helper text"
            fullWidth
            required
            error
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Linked Helper Text"
            helperText={
              <span>
                Check it out{' '}
                <Link
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  here
                </Link>
              </span>
            }
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={values.withCount.length >= 20}
            label={<InputLabelWithCount label="With Count" value={values.withCount} />}
            helperText="Try to keep this under 20 characters"
            onChange={handleInputChange('withCount')}
            value={values.withCount}
            fullWidth
          />
        </Grid>
        {theme !== 'leads' && (
          <>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label={<InputLabelWithTooltip label="With tooltip" tooltip="Tooltip" />}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                InputLabelProps={{
                  // This prop prevents a duplicate asterisk from being
                  // displayed on the line after the label and tooltip icon
                  required: false,
                }}
                label={
                  <InputLabelWithTooltip
                    label="Required input with Tooltip"
                    tooltip="Tooltip"
                    required
                  />
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                error
                fullWidth
                label={<InputLabelWithTooltip label="Error with tooltip" tooltip="Tooltip" />}
              />
            </Grid>
          </>
        )}
      </Grid>
      {theme === 'leads' && (
        <>
          <Typography variant="h3" style={{ marginTop: 50, marginBottom: 20, paddingBottom: 20 }}>
            Secondary color styles
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={6}
            mb={50}
            style={{ backgroundColor: legacyColors.greyLighter }}
          >
            <Grid item xs={6}>
              <TextField
                color="secondary"
                label="Secondary"
                placeholder="Placeholder Text"
                helperText="Helper text"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                disabled
                color="secondary"
                label="Disabled With Placeholder"
                placeholder="Placeholder Text"
                helperText="Helper text"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                disabled
                color="secondary"
                label="Disabled With Value"
                placeholder="Placeholder Text"
                helperText="Helper text"
                fullWidth
                value="Text"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                color="secondary"
                label="Required"
                placeholder="Placeholder Text"
                helperText="Helper text"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                color="secondary"
                label="Error"
                placeholder="Placeholder Text"
                helperText="Helper text"
                fullWidth
                required
                error
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                color="secondary"
                label="Linked Helper Text"
                helperText={
                  <span>
                    Check it out{' '}
                    <Link
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      here
                    </Link>
                  </span>
                }
                fullWidth
              />
            </Grid>
          </Grid>
        </>
      )}
      <Typography variant="h3" style={{ marginTop: 50, marginBottom: 20 }}>
        Other Field Types
      </Typography>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={6}
        mb={50}
      >
        <Grid item xs={6}>
          <TextField label="Password" helperText="Helper text" type="password" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Number" helperText="Helper text" type="number" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Read Only"
            defaultValue="Text"
            helperText="Helper text"
            InputProps={{ readOnly: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField type="search" label="Search" helperText="Helper text" fullWidth />
        </Grid>
      </Grid>
      <Typography variant="h3" style={{ marginTop: 50, marginBottom: 20 }}>
        Input Adornments
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={6}>
        <Grid item xs={6}>
          <TextField
            label="Start Position Text"
            defaultValue="2000.00"
            helperText="The cost of your ticket"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="End Position Text"
            defaultValue="150"
            helperText="How fast you were driving"
            inputProps={{
              readOnly: true,
            }}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            InputProps={{
              endAdornment: <InputAdornment position="end">mph</InputAdornment>,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="text"
            label="Start Position Icon"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type={values.showPassword ? 'text' : 'password'}
            label="End Position Icon Button"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="body2" style={{ margin: '12px 0 30px' }}>
            NOTE: <LinkTo kind="components-passwordtextfield">PasswordTextField</LinkTo> is
            available for this specific use case.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Start Position Loader"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CircularProgress />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="End Position Loader"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CircularProgress />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
      </Grid>
      {theme !== 'leads' && (
        <>
          <Typography variant="h3" style={{ marginTop: 50, marginBottom: 20 }}>
            Sizes
          </Typography>
          <Typography variant="body1" style={{ marginBottom: 20 }}>
            NOTE: Normal is the default size
          </Typography>
          <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={6}>
            <Grid item xs={6}>
              <TextField
                size="normal"
                label="Default"
                placeholder="Placeholder Text"
                helperText="Helper text"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                label="Small"
                placeholder="Placeholder Text"
                helperText="Helper text"
                fullWidth
              />
            </Grid>
          </Grid>
        </>
      )}
      <Typography variant="h3" style={{ marginTop: 50, marginBottom: 20 }}>
        Input Masking/Formatting
      </Typography>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={6}>
        <Grid item xs={6}>
          <TextField
            label="Phone Number"
            value={values.textMask}
            helperText={
              <span>
                Using{' '}
                <Link
                  href="https://github.com/text-mask/text-mask"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  react-text-mask
                </Link>
              </span>
            }
            InputProps={{
              inputComponent: TextMaskCustom,
            }}
            onChange={handleInputChange('textMask')}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Amount"
            value={values.numberFormat}
            helperText={
              <span>
                Using{' '}
                <Link
                  href="https://github.com/s-yadav/react-number-format"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  react-number-format
                </Link>
              </span>
            }
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            onChange={handleInputChange('numberFormat')}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};

storiesOf('Themes/Product/Inputs', module)
  .addDecorator(getThemeDecorator('product'))
  .add('Text Fields', () => <TextFieldStory theme="product" />);

storiesOf('Themes/Marketing/Inputs', module)
  .addDecorator(getThemeDecorator('marketing'))
  .add('Text Fields', () => <TextFieldStory theme="marketing" />);

storiesOf('Themes/Leads/Inputs', module)
  .addDecorator(getThemeDecorator('leads'))
  .add('Text Fields', () => <TextFieldStory theme="leads" />);
