import Container from 'react-bootstrap/Container';

function Public(props) {
  const { children } = props;

  return (
    <Container fluid className="public-container">
      {children}
    </Container>
  );
}

export default Public;
