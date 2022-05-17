export const reset = {
  [`
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    blockquote,
    p,
    pre,
    dl,
    dd,
    ol,
    ul,
    figure,
    hr,
    fieldset,
    legend
  `]: {
    m: 0,
    p: 0,
  },
  [`
    li > ol,
    li > ul
  `]: {
    mb: 0,
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: '0',
  },
  fieldset: {
    border: 0,
    'min-width': 0,
  },
}
