import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/NavLink';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function SettingsPage({ instruments }) {
  return (
    <Container className="panel-gradient">
      <Jumbotron className="panel-gradient">
        <h1>Settings</h1>
        <p></p>
      </Jumbotron>
      Future settings page
    </Container>
  );
}
