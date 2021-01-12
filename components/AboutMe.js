import { Container, Row, Col } from 'reactstrap';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import ResumeIcon from '@material-ui/icons/Description';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const iconStyle = {
  width: '30px',
  height: '30px',
  fill: '#444',
}

const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <Container fluid style={{width: '80%'}}>
        <Row>
          <Col md='11'>
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
                    Currently seeking a <span className='emp-text-color'>Summer 2021</span> internship!
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
          <Col md='1'>
            <Container>
              <Row>
                <Col md='12' xs='3'>
                  <a href="http://www.github.com/rhjshi" target="_blank" >
                    <GitHubIcon style={iconStyle}/>
                  </a>
                </Col>
                <Col md='12' xs='3'>
                  <a href="http://www.linkedin.com/in/rhjshi" target="_blank" >
                    <LinkedInIcon style={iconStyle}/>
                  </a>
                </Col>
                <Col md='12' xs='3'>
                  <a href="mailto: rhjshi@uwaterloo.ca" >
                    <EmailIcon style={iconStyle}/>
                  </a>
                </Col>
                <Col md='12' xs='3'>
                  <a href="richie_shi_resume.pdf" target="_blank" >
                    <ResumeIcon style={iconStyle}/>
                  </a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
