// Available Components => https://react-select.com/components
const InputSelectStylesOverrides = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: 'none',
    padding: `0 1rem`,
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  }),
  option: () => ({}), // Return empty object (no styles). Custom Component used.
  container: () => ({
    width: '100%',
    height: '100%',
  }),
  placeholder: (provided) => ({
    ...provided,
    margin: 0,
    color: 'var(--colors-grey700)',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    alignSelf: 'flex-start',
  }),
  valueContainer: (provided) => ({
    ...provided,
    width: '100%',
    height: '100%',
    padding: 0,
    position: 'relative',
  }),
  input: (provided) => ({
    ...provided,
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
  }),
  singleValue: () => ({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'var(--colors-white)',
    borderRadius: 0,
    left: 0,
    marginLeft: 0,
    color: 'var(--colors-text)',
    zIndex: 'var(--zIndices-header)',
  }),

  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
}

export default InputSelectStylesOverrides
