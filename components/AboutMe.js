import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import ContactList from './ContactList';

const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <Container fluid style={{ maxWidth: 1200 }}>
        <Row>
          <Col md='12' lg='3'>
            <div className='animoji-avatar'>
              <Image 
                src='/images/animoji.png' 
                alt='animoji'
                width={220}
                height={280}
              />
            </div>
          </Col>
          <Col md='2' lg='1'>
            <ContactList/>
          </Col>
          <Col md='10' lg='8'>
            <Container fluid>
              <Row className='section-title'>About Me</Row>
              <br/>
              <Row>
                <p>
                  Hey there! I'm a 3rd year Computer Science student at 
                  the University of Waterloo with a background
                  in <b>full stack software development</b>. 
                  I'm always looking for new things to learn and ways 
                  to improve my skills as a developer. I'm hoping to 
                  meet many people along the way and leave a
                  positive change wherever I go.
                </p>
                <p>
                  Apart from coding, I love to cook and play sports
                  like ultimate frisbee. Pre-lockdown you might have found me at the
                  gym or grabbing food with my friends. 
                </p>
                <p>
                  <b>
                    Currently seeking a <span className='emp-text-color'>Winter 2022</span> internship!
                  </b> 
                </p>
                <p>
                  This project is currently being reconstructed with Next.js
                  which has the benefit of SSR and improved SEO. 
                  I will be continuing to make improvements to the page, 
                  but please feel free to contact me via any of the listed methods! 
                </p>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
