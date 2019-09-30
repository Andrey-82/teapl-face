import React from 'react'
import App, { Container } from 'next/app'
import { appWithTranslation } from '../i18n'
import 'materialize-css/dist/css/materialize.min.css'
import '../static/teapl.css'

class Teapl extends App {
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
        <Component {...pageProps} />
      </Container>
    );
  }
};

export default appWithTranslation(Teapl)