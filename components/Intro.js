import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import ScramblingText from './ScramblingText';

const Intro = () => {
  return (
    <div className='intro-container'>
      <div className='intro-content'>
        <div className='avatar'>
          <Image 
            src='/animoji.png' 
            alt='animoji'
            width={165}
            height={210}
          />
        </div>
        <Container className='desc-box'>
          <Row><h1 className='name-header'>Richie Shi</h1></Row>
          <Row>
            <ScramblingText 
              id='scrambled-description'
              className='sub-header'
              defaultText='Software Engineer'
              phrases={[
                'Software Engineer',
                'UWaterloo',
                'Toronto, ON'
              ]}
            />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Intro;
