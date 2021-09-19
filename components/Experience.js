import { Container, Row, Col } from 'reactstrap';
import ExpCard from './ExpCard';
import WorkExp from './WorkExp';

const Experience = () => {
  return (
    <div className="experience-container">
      <Container fluid>
        <Row className='section-title center'>Experience</Row>
        <Row className='exp-item'>
          <ExpCard
            src='/images/wish_logo.png' 
            alt='Wish Logo'
            imgWidth={150}
            imgHeight={150}
          >
            <WorkExp
              company="Wish"
              title="Software Engineering"
              location="Remote"
              duration="May 2021 - Aug 2021"
            >
              Worked as a software engineer on the Marketplace and Logistics Team
              using Python, MongoDB, React, and SQL. Built tools and features for 
              regulating content on the marketplace.
            </WorkExp>
          </ExpCard>
        </Row>
        <Row className='exp-item'>
          <ExpCard
            src='/images/fundthrough_logo.png' 
            alt='FundThrough Logo'
            imgWidth={200}
            imgHeight={200}
          >
             <WorkExp
              company="FundThrough"
              title="Software Engineering"
              location="Toronto, ON"
              duration="Jan 2020 - May 2020, Sept 2020 - Dec 2020"
            >
              Worked as a full-stack engineer on Client Pod using React, SQL, Ruby on Rails.
              Developed features for user-facing applications as well as 
              admin tools for managing clientele.
            </WorkExp>
          </ExpCard>
        </Row>
        <Row className='exp-item'>
          <ExpCard
            src='/images/stratus360_logo.png' 
            alt='Stratus360 Logo'
            imgWidth={150}
            imgHeight={150}
          >
            <WorkExp
              company="Stratus360"
              title="Full Stack Development"
              location="Toronto, ON"
              duration="May 2019 - Aug 2019"
            >
              Worked as full-stack developer using Salesforce's JS frameworks, SQL, and Java.
              Implemented custom Salesforce solutions for clientele.
            </WorkExp>
          </ExpCard>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
