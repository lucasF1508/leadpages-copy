export const author = (value) => {
  const ref = {
    'sprice@delivra.com': {
      _ref: '847f573d-21da-4363-9aa5-78110779e3aa',
      _type: 'reference',
    },
    'bberry@delivra.com': {
      _ref: 'a5a28a99-ea09-4c7a-a7da-df412ed6e1d4',
      _type: 'reference',
    },
  }[value]

  return ref
}
