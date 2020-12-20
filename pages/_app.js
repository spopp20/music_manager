
import React, { useState } from "react";
import Head from '../components/Head';
import MainNavBar from '../components/MainNavBar';
import { useUser } from '../lib/hooks';

import { Container, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles.css';

export default function MyApp({ Component, pageProps }) {

  const [user, { mutate }] = useUser();

  return (
    <>
    <Head />
    <Container fluid>
    <MainNavBar {...pageProps} />
      <Component {...pageProps} />
    </Container>
    </>
  )
};
