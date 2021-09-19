import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';

const ExpCard = props => {
  return (
    <div className="exp-card-container">
      <Container fluid className="full-height">
        <Row className="full-height">
          <Col xs='12' md='6' className="right-border">
            <div className="img-section">
              <div style={{width: props.imgWidth, height: props.imgHeight}}>
                <Image
                  src={props.src}
                  alt={props.alt}
                  width={props.imgWidth}
                  height={props.imgHeight}
                />
              </div>
            </div>
          </Col>
          <Col xs='12' md='6'>
            <div className="text-section">
              {props.children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExpCard;
