import type { AppProps } from 'next/app';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
import { colors } from 'src/theme';

const customTheme = {
  ...theme,
  colors,
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
