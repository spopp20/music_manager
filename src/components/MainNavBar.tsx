//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHome } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

const MainNavBar = () => {
  const router = useRouter();

  return (
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">Music Manager</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="align-items-end px-3">
          <NavItem>
            <NavLink
              href="/instruments"
              className={router.pathname == '/instruments' ? 'active' : ''}>
              Instruments
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/songs" className={router.pathname == '/songs' ? 'active' : ''}>
              Songs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/settings" className={router.pathname == '/settings' ? 'active' : ''}>
              Settings
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/login" className={router.pathname == '/login' ? 'active' : ''}>
              Login
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavBar;
