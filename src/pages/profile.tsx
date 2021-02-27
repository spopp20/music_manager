import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { useState, useRef } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { useUser } from '~/lib/hooks';

export default function ProfileEdit() {
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState('');
  const nameRef = useRef();

  //useEffect(() => {
  //if (!user) return
  //nameRef.current.value = user.name
  //}, [user])

  async function handleEditProfile(e) {
    e.preventDefault();

    const body = {
      //name: nameRef.current.value,
    };
    const res = await fetch(`/api/user`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const updatedUser = await res.json();

    //mutate(updatedUser)
  }

  async function handleDeleteProfile() {
    const res = await fetch(`/api/user`, {
      method: 'DELETE',
    });

    if (res.status === 204) {
      //mutate({ user: null })
      Router.replace('/');
    }
  }

  return (
    <Container className="panel-gradient">
      <Jumbotron className="panel-gradient">
        <h1>Edit Profile</h1>
        <p className="error">{errorMsg}</p>
      </Jumbotron>
      <Form onSubmit={handleEditProfile}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" required />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required />
        </Form.Group>
        <Button className=" m-1" variant="primary" type="submit">
          Edit Profile
        </Button>
        <Link href="/delete">
          <Button className=" m-1" variant="secondary">
            Delete my account
          </Button>
        </Link>
      </Form>
      <style jsx>{`
        .delete {
          color: #f44336;
          cursor: pointer;
        }
        .delete:hover {
          color: #b71c1c;
        }
      `}</style>
    </Container>
  );
}
