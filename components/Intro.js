import Image from 'next/image';
import ScramblingText from './ScramblingText';

const IMG_SCALE = 3/4;

const Intro = () => {
  return (
    <div className='intro-container'>
      <div className='intro-content'>
        
          <Image 
          src='/animoji.png' 
          alt='animoji'
          width={220 * IMG_SCALE}
          height={280 * IMG_SCALE}
        />
        
        <div className='desc-box'>
          <h1 className='name-header'>Richie Shi</h1>
          <ScramblingText 
            id='scrambled-description'
            className='sub-header'
            phrases={[
              'Software Engineer',
              'Full Stack Dev',
              'UWaterloo',
              'Toronto, ON'
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
