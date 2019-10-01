import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { appWithTranslation } from '../i18n'
import 'materialize-css/dist/css/materialize.min.css'
import '../static/teapl.css'

class Teapl extends App {
    
    componentDidMount() {
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker
            .register("/service-worker.js")
            .then(registration => {
              console.log("service worker registration successful: ", registration);
            })
            .catch(err => {
              console.warn("service worker registration failed", err.message);
            });
        }
    }
    
    static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
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
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
};

export default appWithTranslation(Teapl)