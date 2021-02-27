import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { useUser } from '~/lib/hooks';

export default function LoginPage() {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e) {
    e.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const userObj = await res.json();
      // set user to useSWR state
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try better!');
    }
  }

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.push('/');
  }, [user]);

  return (
    <Container className="panel-gradient">
      <Jumbotron className="panel-gradient">
        <h1>Login</h1>
        <p className="error">{errorMsg}</p>
      </Jumbotron>
      <Form onSubmit={onSubmit}>
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
      </Form>
    </Container>
  );
}
