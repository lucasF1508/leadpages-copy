export const componentQueries = `
  testimonials[]->,
  faqs[]->,
`

export const componentsQuery = `
  components[] {
    ...,
    ${componentQueries}
    _type == 'section' => {
      ...,
      components[] {
        ...,
        ${componentQueries}
      }
    },
  }
`