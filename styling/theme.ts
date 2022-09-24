import { ThemeTypes } from 'styled-components';

export const theme: ThemeTypes = {
  palette: {
    common: {
      black: '#000',
      white: '#ffffff',
      lightGrey: '#7f7770',
    },
    primary: {
      main: '#54524f',
      secondary: '#deb37e',
      third: '#e2a355',
    },
    secondary: {
      main: '#776c64',
      secondary: '',
    },
  },

  fontFamily: {
    main: 'Open Sans, sans-serif',
    secondary: ' ',
    third: '  ',
  },
};

const fontSizeBase = 16;
export const fontSize = (sizeInPx: number) => `${sizeInPx / fontSizeBase}rem`;
