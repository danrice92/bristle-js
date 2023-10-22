import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './App.scss';
import logo from './images/logo.svg';

function App() {
  return (
    <div id="app">
      <Container fluid className="public-container">
        <Row className="flex-column">
          <Col className="d-flex justify-content-center">
            <p>Launch your career with</p>
          </Col>
          <Col className="d-flex justify-content-center">
            <img src={logo} className="img-fluid" alt="Bristle logo" />
          </Col>
          <Col className="d-flex justify-content-center mt-4">
            <Button>Sign up</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
