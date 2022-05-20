import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField, useMediaQuery, IconButton, Theme } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

const useStyles = makeStyles(
  ({ breakpoints, spacing }) => ({
    searchContainer: {
      paddingBottom: spacing(3),

      [breakpoints.down(480)]: {
        width: 'calc(100% - 60px)',
      },

      [breakpoints.between(480, 767)]: {
        width: 292,
      },

      [breakpoints.between(768, 1024)]: {
        width: 'calc(50% - 12px)',
      },

      [breakpoints.between(1024, 1025)]: {
        width: 340,
      },

      [breakpoints.up(1025)]: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 240,
        spacing: 0,
        paddingBottom: 0,
      },
    },

    clearIconButton: {
      backgroundColor: 'inherit',

      '&:hover': {
        backgroundColor: 'inherit',
      },
    },
    clearIcon: { fontSize: '16px', transform: 'rotate(45deg)' },
  }),
  { classNamePrefix: 'TemplateSearch' },
);

export type TemplateSearchProps = {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  onChange: () => void;
  onClear: () => void;
  disabled: boolean;
};

const TemplateSearch: React.FC<TemplateSearchProps> = ({
  inputRef,
  onChange,
  onClear,
  disabled,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <div className={classes.searchContainer}>
      <TextField
        disabled={disabled}
        size={isDesktop ? 'small' : 'medium'}
        fullWidth
        placeholder="Search"
        onChange={onChange}
        inputProps={{ 'aria-label': 'Template Search' }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        InputProps={{
          inputRef,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: inputRef.current?.value && (
            <InputAdornment position="end">
              <IconButton
                className={classes.clearIconButton}
                disableRipple
                disableFocusRipple
                onClick={onClear}
                size="small"
              >
                <AddCircleRoundedIcon className={classes.clearIcon} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default TemplateSearch;
