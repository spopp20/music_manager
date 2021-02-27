import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { useUser } from '~/lib/hooks';

export default function SignupPage() {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e) {
    e.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
      name: e.currentTarget.name.value,
    };

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match.`);
      return;
    }

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 201) {
      const userObj = await res.json();
      // set user to useSWR state
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
  }

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.push('/');
  }, [user]);

  return (
    <Container className="panel-gradient">
      <Jumbotron className="panel-gradient">
        <h1>Sign up</h1>
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
        <Form.Group controlId="rpassword">
          <Form.Label>Repeat password</Form.Label>
          <Form.Control type="password" name="rpassword" required />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required />
        </Form.Group>
        <Button className=" m-1" variant="primary" type="submit">
          Sign up
        </Button>
        <Link href="/login">
          <Button className=" m-1" variant="secondary">
            I already have an account
          </Button>
        </Link>
      </Form>
    </Container>
  );
}
