import { AppProps } from 'next/app';
import '../src/App.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
