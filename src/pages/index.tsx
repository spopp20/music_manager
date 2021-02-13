import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function HomePage() {
  return (
    <Container className="panel-gradient">
      <Jumbotron className="panel-gradient">
        <h1>Music Manager</h1>
        <p>Place your our branding slogan here</p>
      </Jumbotron>
      <Nav defaultActiveKey="/" className="flex-column">
        <NavItem>
          <NavLink href="/settings">
            <Button className="glass btn-hover color-5">Get Started</Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/songs">
            <Button className="glass btn-hover color-9">Songs</Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/playlists" eventKey="disabled" disabled>
            <Button className="glass btn-hover color-7">Play Lists</Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/collections" eventKey="disabled" disabled>
            <Button className="glass btn-hover color-4">Song Collections</Button>
          </NavLink>
        </NavItem>
      </Nav>
    </Container>
  );
}
