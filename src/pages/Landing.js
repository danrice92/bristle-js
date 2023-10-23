import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import logo from 'images/logo.svg';
import Public from 'layouts/Public';

function Landing() {
  return (
    <Public>
      <Row className="flex-column">
        <Col className="d-flex justify-content-center">
          <p role="heading">Launch your career with</p>
        </Col>
        <Col>
          <img src={logo} className="img-fluid" alt="Bristle" />
        </Col>
        <Col className="d-flex justify-content-center mt-4">
          <Link to="/sign-up" className="btn btn-primary">
            Sign up
          </Link>
        </Col>
      </Row>
    </Public>
  );
}

export default Landing;
