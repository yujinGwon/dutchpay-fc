import { Container, Row, Col } from 'react-bootstrap';

export const Test = () => (
  <Container>
    <Row className="align-items-center">
      <Col>
        <Row>
          <Col>Column A</Col>
        </Row>
        <Row>
          <Col>Column B</Col>
        </Row>
      </Col>
      <Col>Column 2</Col>
    </Row>
    <hr />
    <Row className='justify-content-start'>
      <Col sm={2} md={6}>
        <div>Column 1</div>
      </Col>
      <Col sm={2}>
        <div>Column 2</div>
      </Col>
      <Col sm={{ offset:2, span:2 }} md={6}>
        <div>Column 3</div>
      </Col>
    </Row>
  </Container>
);
