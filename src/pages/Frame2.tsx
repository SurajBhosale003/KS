import { useNavigate } from 'react-router-dom';
function Frame2() {
  const navigation = useNavigate();
  return (
<div className='bdiv cursor-pointer'>
  <p className='highest-z p-2 cursor-pointer hachi-maru-pop-font' onClick={()=>{ navigation('/')}}>Back</p>
<section className="sticky-section">
      <div className="bubbles-container">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className={`bubble bubble-${index + 1}`}></div>
        ))}
      </div>
      <div className="flex justify-center items-center h-screen ">
      <div className="flex max-w-[50rem] w-full bg-white shadow-md rounded-lg overflow-hidden hachi-maru-pop-font leading-loose highest-z">
        <img
          className="w-1/3 object-cover"
          src="/frame2/frame2-img1.jpg"
          alt="Placeholder"
        />
        <div className="w-2/3 p-4">
          <h2 className="text-3xl font-semibold text-gray-800 ">To Love of my life</h2>
          <p className="mt-2 text-gray-600 ">
             <span className="text-red-700">Dear</span> kritika,
            <br />
            I am so sorry that you are going through this. I never intended to hurt you like this, and I sincerely <span className="text-red-700">apologize</span> from the bottom of my heart 💖.
            <br />
            <br />
            
            Please look at the <span className="text-red-700">memories and love </span> we share.   <br />
            <br />I know I can be a bit clueless, and I may not have many ways to show my affection, but I am trying my best. <span className="text-red-700">I love you Kritika </span> , I’d be more than happy, Kritika.
          </p>
          <p className="  text-right  text-gray-600 "  onClick={()=>{ navigation('/frame3')}}>{`Click me ---->`}</p>
        </div>
      </div>
    </div>
    </section>
</div>
  )
}

export default Frame2



  