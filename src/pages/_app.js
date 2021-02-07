import React from 'react';
import CustomHeader from '@components/Head';
import MainNavBar from '@components/MainNavBar';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

// Application styles
import '~/styles.scss';

// Customize Bootstrap theme colors
import '~/bootstrap-theme.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomHeader />
      <Container className="blue-gradient">
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
