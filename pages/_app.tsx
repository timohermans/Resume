import '../styles/globals.css';
import App from 'next/app'

import i18n from '../i18n';

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default i18n.appWithTranslation(MyApp);
