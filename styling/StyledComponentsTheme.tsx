import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

const StyledComponentsThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <div>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
);

export default StyledComponentsThemeProvider;
