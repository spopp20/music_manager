import React from 'react';
import { Provider } from 'next-auth/client';
import CustomHeader from '@components/Head';
import MainNavBar from '@components/MainNavBar';
import Container from 'react-bootstrap/Container';

// Application styles
import '~/styles.scss';

// Customize Bootstrap theme colors
import '~/bootstrap-theme.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <CustomHeader />
      <Container className="blue-gradient">
        <MainNavBar />
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}
