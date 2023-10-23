import Container from 'react-bootstrap/Container';

function Public(props) {
  const { children } = props;

  return (
    <Container
      fluid
      className="public-container d-flex align-items-center justify-content-center"
    >
      {children}
    </Container>
  );
}

export default Public;
