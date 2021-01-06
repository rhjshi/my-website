import Image from 'next/image';

const Intro = () => {
  return (
    <div className='intro-container'>
      <div className='intro-content'>
        
          <Image 
          src='/animoji.png' 
          alt='animoji'
          width={220}
          height={280}
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