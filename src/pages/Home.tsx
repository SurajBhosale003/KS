import top from '../img/top.png'
import bottom from '../img/bottom.png'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigation = useNavigate();

  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
      {/* Image 1 */}
      <img
        src={top}
        alt="Top Left Image"
        className="absolute top-0 left-0  h-auto object-contain"
      />

      {/* Image 2 */}
      <img
        src={bottom}
        alt="Bottom Right Image"
        className="absolute bottom-0 right-0  h-auto object-contain"
      />

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center text-center hachi-maru-pop-font">
        {/* Scattered Text Above */}
        <div className="absolute top-[12rem] left-[1rem] text-[18px] text-red-500 transform rotate-[-10deg]">
          Kritika
        </div>
        <div className="absolute top-[18rem] left-[10rem] text-[14px] text-red-500 transform rotate-[15deg]">
          Kirito
        </div>
        <div className="absolute bottom-[14rem] left-[23rem] text-[42px] text-red-500 transform rotate-[15deg]">
          Krishu
        </div>
        <div className="absolute bottom-[13rem] right-[8rem] text-[20px] text-red-500 transform rotate-[20deg]">
          Love
        </div>

        {/* Centered Main Text */}
        <div>
        <h1 className="text-[100px] font-bold gwendolyn-font">
          Hey Kritika
        </h1>
        <button className="home-page-button" onClick={()=>{ navigation('/frame2')}}>Click Me</button>
        </div>

        {/* Scattered Text Below */}
        <div className="absolute bottom-[9rem] left-[-4rem] text-[36px] text-red-500 transform rotate-[-40deg]">
          hey
        </div>
        <div className="absolute bottom-[0rem] right-[1rem] text-[18px] text-red-500 transform rotate-[-15deg]">
          Darling
        </div>
        <div className="absolute top-[0rem] left-1/3 text-[24px] text-red-500 transform rotate-[-15deg]">
          Jaan
        </div>
        <div className="absolute top-[1rem] right-[-2rem] text-[16px] text-red-500 transform rotate-[19deg]">
          Sonu
        </div>
      </div>
    </div>
  );
}

export default Home;
