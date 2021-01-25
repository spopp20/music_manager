import React from 'react';
import CustomHeader from '~/components/Head';
import MainNavBar from '~/components/MainNavBar';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import '~/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomHeader />
      <Container fluid>
        <MainNavBar />
        <Component {...pageProps} />
      </Container>
    </>
  );
}

MyApp.propTypes = {
  //Component: PropTypes.func.isOptional,
  pageProps: PropTypes.object
};
