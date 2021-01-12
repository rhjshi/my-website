import { Container, Row, Col } from 'reactstrap';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import ResumeIcon from '@material-ui/icons/Description';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const iconStyle = {
  width: '40px',
  height: '40px',
  fill: '#444',
}

const ContactList = props => {
  return ( 
    <Container className='contact-list'>
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
  );
};

export default ContactList;
