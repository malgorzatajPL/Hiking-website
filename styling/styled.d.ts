import 'styled-components';
declare module 'styled-components' {
  interface IPalette {
    main: string;
    secondary: string;
    third?: string;
  }
  export interface ThemeTypes {
    palette: {
      common: {
        black: string;
        white: string;
        lightGrey: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
    fontFamily: {
      main: string;
      secondary: string;
      third: string;
    };
  }
}
