type GenerateTypesResult<Sizes, Styles> = [
  {
    [Key in keyof Sizes]: Record<string, any> & Sizes[Key]
  },
  {
    [Key in keyof Sizes]: Record<string, any> & Styles
  }
]

type StyleKey<Sizes> = {
  [Key in keyof Sizes]?: Record<string, any>
} & {
  default?: Record<string, any>
}

type DefaultsKey<Sizes> = {
  [Key in keyof Sizes]?: string
}

export const prefixTypeObject = (obj: Record<string, any>, prefix: string) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({ ...acc, [`${prefix}${key}`]: value }),
    {}
  )

export const generateTypography = <
  Sizes extends Record<string, any>,
  Styles extends StyleKey<Sizes>
>({
  defaults,
  sizes,
  styles,
}: {
  defaults?: DefaultsKey<Sizes>
  sizes: Sizes
  styles?: Styles
}): GenerateTypesResult<Sizes, Styles> =>
  Object.keys(sizes).reduce(
    ([sizesAcc, stylesAcc], key) => [
      {
        ...sizesAcc,
        [key]: sizes[key],
        ...(defaults?.[key] ? { [defaults[key] as any]: sizes[key] } : {}),
      },
      {
        ...stylesAcc,
        [key]: { ...(styles?.default || {}), ...(styles?.[key] || {}) },
        ...(defaults?.[key]
          ? { [defaults[key] as any]: styles?.[key] || styles?.default }
          : {}),
      },
    ],
    [{}, {}] as GenerateTypesResult<Sizes, Styles>
  )
