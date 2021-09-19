import { Container, Row, Col } from 'reactstrap';

const WorkExp = props => {
  return (
    <Container fluid className="work-exp">
      <Row className="company">{props.company}</Row>
      <Row className="title">{props.title}</Row>
      <Row className="location">{props.location}</Row>
      <Row className="duration">{props.duration}</Row>
      <Row className="desc">{props.children}</Row>
    </Container>
  );
};

export default WorkExp;
