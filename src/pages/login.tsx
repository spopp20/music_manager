import { csrfToken } from 'next-auth/client';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LoginPage({ csrfToken }) {
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <Container className="panel-gradient">
      <Jumbotron className="panel-gradient">
        <h1>Login</h1>
        <p className="error">{errorMsg}</p>
      </Jumbotron>
      <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" required />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required />
        </Form.Group>
        <Button className=" m-1" variant="primary" type="submit">
          Login
        </Button>
        <Link href="/signup">
          <Button className=" m-1" variant="secondary">
            I do not have an account
          </Button>
        </Link>
      </form>
    </Container>
  );
}

LoginPage.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context),
  };
};
