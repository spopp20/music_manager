import React from 'react';
import CustomHeader from '~/components/Head';
import MainNavBar from '~/components/MainNavBar';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomHeader />
      <Container fluid>
        <MainNavBar {...pageProps} />
        <Component {...pageProps} />
      </Container>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.object.isOptional,
  pageProps: PropTypes.object.isOptional
};
