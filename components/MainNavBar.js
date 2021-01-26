import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
//import { faSearch } from "@fortawesome/free-solid-svg-icons"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Search from '~/components/Search';

const MainNavBar = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/" style={{ width: 30, marginTop: -8 }}>
        <FontAwesomeIcon icon={faHome} className="mr-1" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto align-items-end px-3">
          <NavItem>
            <NavLink href="/instruments">Instruments</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/songs">Songs</NavLink>
          </NavItem>
          <Search />
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavBar;
