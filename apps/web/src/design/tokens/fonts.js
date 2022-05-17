import { GTAmericaMediumBase64, GTAmericaLightBase64 } from './fontFiles'

export const fonts = {
  //FONT
  '@font-face': [
    {
      fontFamily: 'GT America',
      src: `local("GTAmerica"), local("GTAmericaWeb-Medium"), ${GTAmericaMediumBase64}`,
      fontWeight: 500,
      fontStyle: 'normal',
      fontDisplay: 'auto',
    },
    {
      fontFamily: 'GT America',
      src: `local("GTAmerica"), local("GTAmericaWeb-Light"), ${GTAmericaLightBase64}`,
      fontWeight: 300,
      fontStyle: 'normal',
      fontDisplay: 'auto',
    },
  ],
}
