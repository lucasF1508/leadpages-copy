export const utils = {
  d: (value) => ({
    display: value,
  }),
  p: (value) => ({
    padding: value,
  }),
  pt: (value) => ({
    paddingTop: value,
  }),
  pr: (value) => ({
    paddingRight: value,
  }),
  pb: (value) => ({
    paddingBottom: value,
  }),
  pl: (value) => ({
    paddingLeft: value,
  }),
  px: (value) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  m: (value) => ({
    margin: value,
  }),
  mt: (value) => ({
    marginTop: value,
  }),
  mr: (value) => ({
    marginRight: value,
  }),
  mb: (value) => ({
    marginBottom: value,
  }),
  ml: (value) => ({
    marginLeft: value,
  }),
  mx: (value) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value) => ({
    marginTop: value,
    marginBottom: value,
  }),
  ta: (value) => ({ textAlign: value }),
  f: (value) => ({ flex: value }),
  fd: (value) => ({ flexDirection: value }),
  fw: (value) => ({ flexWrap: value }),
  ff: (value) => ({ flexFlow: value }),
  ai: (value) => ({ alignItems: value }),
  ac: (value) => ({ alignContent: value }),
  jc: (value) => ({ justifyContent: value }),
  as: (value) => ({ alignSelf: value }),
  fg: (value) => ({ flexGrow: value }),
  fs: (value) => ({ flexShrink: value }),
  fb: (value) => ({ flexBasis: value }),
  gtc: (value) => ({ gridTemplateColumns: value }),
  gc: (value) => ({ gridColumn: value }),
  gr: (value) => ({ gridRow: value }),
  gtr: (value) => ({ gridTemplateRows: value }),
  gg: (value) => ({ gridGap: value }),
  gcg: (value) => ({ gridColumnGap: value }),
  grg: (value) => ({ gridRowGap: value }),
  c: (value) => ({
    color: value,
  }),
  t: (value) => ({ transform: value }),
  v: (value) => ({ visibility: value }),
  w: (value) => ({
    width: value,
  }),
  mw: (value) => ({
    maxWidth: value,
  }),
  z: (value) => ({
    zIndex: value,
  }),
  h: (value) => ({
    height: value,
  }),
  bc: (value) => ({
    backgroundColor: value,
  }),
  b: (value) => ({
    border: value,
  }),
  bt: (value) => ({ borderTop: value }),
  bb: (value) => ({ borderBottom: value }),
  br: (value) => ({
    borderRadius: value,
  }),
  btrr: (value) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value) => ({
    borderTopLeftRadius: value,
  }),
  bs: (value) => ({ boxShadow: value }),
  lh: (value) => ({ lineHeight: value }),
  ox: (value) => ({ overflowX: value }),
  oy: (value) => ({ overflowY: value }),
  o: (value) => ({ overflow: value }),
  pe: (value) => ({ pointerEvents: value }),
  tt: (value) => ({ textTransform: value }),
  ls: (value) => ({ listStyle: value }),
  ws: (value) => ({ whiteSpace: value }),
  of: (value) => ({ objectFit: value }),
  us: (value) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),
  userSelect: (value) => ({
    WebkitUserSelect: value,
    userSelect: value,
  }),
  size: (value) => ({
    width: value,
    height: value,
  }),
  appearance: (value) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  backgroundClip: (value) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
  textGradient: (value) => ({
    backgroundImage: `linear-gradient(${value})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }),
}

export default utils
