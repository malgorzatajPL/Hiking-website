import { ThemeTypes } from 'styled-components';

export const theme: ThemeTypes = {
  palette: {
    common: {
      black: '#000',
      white: '#ffffff',
    },
    primary: {
      main: '#54524f',
      secondary: '#deb37e',
    },
    secondary: {
      main: '  ',
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
