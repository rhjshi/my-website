import { Container, Row } from 'reactstrap';
import ScramblingText from './ScramblingText';

const Intro = () => {
  return (
    <div className='intro-container'>
      <div className='intro-content'>
        <Container className='desc-box'>
          <Row><h1 className='name-header'>Richie Shi</h1></Row>
          <Row>
            <ScramblingText 
              className='sub-header'
              defaultText='Software Dev'
              phrases={[
                'UWaterloo CS',
                'Toronto, ON',
                'Software Dev',
              ]}
            />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Intro;
