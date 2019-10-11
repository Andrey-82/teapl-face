import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from '../i18n'
import 'materialize-css/dist/css/materialize.min.css'
import '../static/teapl.css'

class Teapl extends App {    
getInitialProps = async () => ({
  namespacesRequired: ['common', 'node']
});
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
            <title>Teapl</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <link rel="manifest" href="/static/manifest.json" />
            <link rel="shortcut icon" href="/static/favicon.png" type="image/x-icon" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <script src="/static/regSW.js"></script>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
};

export default appWithTranslation(Teapl)