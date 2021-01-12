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
      <Container fluid style={{width: '90%'}}>
        <Col md='11'>
          <Row className='section-title'>About Me</Row>
          <br/>
          <Row>
            <p>Hey there! I'm a 3rd year Computer Science student at 
            the University of Waterloo. I am </p>
          </Row>
        </Col>
        <Col md='1'>
          <Container>
            <Row>
              <Col>
                <a href="http://www.github.com/rhjshi" target="_blank" >
                  <GitHubIcon style={iconStyle}/>
                </a>
              </Col>
              <Col>
                <a href="http://www.linkedin.com/in/rhjshi" target="_blank" >
                  <LinkedInIcon style={iconStyle}/>
                </a>
              </Col>
              <Col>
                <a href="mailto: rhjshi@uwaterloo.ca" >
                  <EmailIcon style={iconStyle}/>
                </a>
              </Col>
              <Col>
                <a href="richie_shi_resume.pdf" target="_blank" >
                  <ResumeIcon style={iconStyle}/>
                </a>
              </Col>
            </Row>
          </Container>
        </Col>
      </Container>
    </div>
  );
}

export default AboutMe;
