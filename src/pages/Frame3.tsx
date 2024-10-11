import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Frame3() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openPopup = (imageSrc :string) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };
  const navigation = useNavigate();
  const closePopup = () => {
    setIsOpen(false);
    setSelectedImage('');
  };
  const stars = Array.from({ length: 50 }, (_, i) => {
    // Generate random values for star properties
    const topOffset = Math.random() * 100; // Random offset in vh
    const fallDuration = Math.random() * (12 - 6) + 6; // Random duration between 6s and 12s
    const fallDelay = Math.random() * 10; // Random delay

    // Create a style object with custom properties
    const style: React.CSSProperties = {
      '--top-offset': `${topOffset}vh`,
      '--fall-duration': `${fallDuration}s`,
      '--fall-delay': `${fallDelay}s`,
    } as React.CSSProperties;

    return (
      <div
        key={i}
        className="star" // Using global class here
        style={style} // Use the style object with custom properties
      ></div>
    );
  });
  return (
    <>
    <div className="wrapper">
        <div className="stars">
          {stars}
        </div>
        <div className="flowerBody">
  <div className="layout hachi-maru-pop-font text-white text-6xl">
    <div className="text-left">
    You are My 
   
    {/* <br /><span  onClick={()=>{ navigation('/frame2')}} className='text-base pr-10 '>{`<----back`}</span> */}
    </div>
    <div className="gallery">
      <img
        src="/frame3/s1.jpg"
        alt="Image 1"
        onClick={() => openPopup('/frame3/s1.jpg')}
      />
      <img
        src="/frame3/s2.jpg"
        alt="Image 2"
        onClick={() => openPopup('/frame3/s2.jpg')}
      />
      <img
        src="/frame3/s5.jpg"
        alt="Image 5"
        onClick={() => openPopup('/frame3/s5.jpg')}
      />
      <img
        src="/frame3/s4.jpg"
        alt="Image 4"
        onClick={() => openPopup('/frame3/s4.jpg')}
      />
      <img
        src="/frame3/s3.jpg"
        alt="Image 3"
        onClick={() => openPopup('/frame3/s3.jpg')}
      />
      <img
        src="/frame3/s6.jpg"
        alt="Image 6"
        onClick={() => openPopup('/frame3/s6.jpg')}
      />
      <img
        src="/frame3/s7.jpg"
        alt="Image 7"
        onClick={() => openPopup('/frame3/s7.jpg')}
      />
      <img
        src="/frame3/s8.jpg"
        alt="Image 8"
        onClick={() => openPopup('/frame3/s8.jpg')}
      />
      <img
        src="/frame3/s9.jpg"
        alt="Image 9"
        onClick={() => openPopup('/frame3/s9.jpg')}
      />
    </div>
    <div className="text-right">Life
      <br />
      <span className='text-base'>{`(Click On Images)`}</span>
      {/* <span  onClick={()=>{ navigation('/frame4')}} className='text-base pr-10'>{`Next---->`}</span> */}
    </div>
  </div>
  <span
            onClick={() => navigation('/frame2')}
            className="absolute top-6 left-6 text-base pr-10 cursor-pointer text-white"
          >
            {'<----back'}
          </span>

          {/* Next button */}
          <span
            onClick={() => navigation('/frame4')}
            className="absolute bottom-6 right-6 text-base pr-10 cursor-pointer text-white"
          >
            {'Next---->'}
          </span>
  {isOpen && (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={closePopup}>
          &times;
        </button>
        <img src={selectedImage} alt="Selected" />
      </div>
    </div>
  )}
</div>

      </div>
    
    </>
  );
}

export default Frame3;
/*
    

     
*/