import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Public from 'layouts/Public';

function SignUp() {
  return (
    <Public>
      <Row className="flex-column">
        <Form>
          <h1>Sign up</h1>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <FloatingLabel label="Email address">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Public>
  );
}

export default SignUp;
