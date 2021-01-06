import Image from 'next/image';

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
          <h1 className="nameHeader">Richie Shi</h1>
          <div className="subHeader">Software Engineer</div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
