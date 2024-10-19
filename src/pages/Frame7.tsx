import { useNavigate } from 'react-router-dom';
function Frame7() {
    const navigation = useNavigate();
  return (
    <div
    className="frame-7-back w-full h-screen animate-frame-7-slidein"
    style={{
      backgroundImage: "url('https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg')",
    }}
  >
    
    <div className="frame-7-center flex items-center justify-center absolute inset-0 m-auto bg-[rgba(75,75,250,0.3)] rounded-md">
    <span
            onClick={() => navigation('/frame4')}
            className="absolute top-6 left-6 text-base pr-10 cursor-pointer text-white"
          >
            {'<----back'}
          </span>
      <h1 className="text-center text-white font-mono uppercase pl-72 pr-72">
        I Am sorry Love It Take me This long To understand Yo💖
        <br />
        <br />
        "I am sorry, love. I never intended to hurt you like this. Now I understand how much I love you and how much I should have cherished and valued you. I have made the biggest mistakes—trust, love, misunderstandings—everything. I can't change that, and I am sorry. But no matter what, I am changing for the sake of my love. I promise I'll never repeat the same mistakes again. I hope you can accept my immature behavior, my biggest mistakes, and accept me into your heart. I would love to be the perfect partner for us. I hope we can help each other, hold each other's hands, and build something together. I will listen to everything you say, adapt, change, and become a better person. Together, we can be the one—the caring one."
        <br /><br />
        <span className="text-pink-600">I am Waiting For your call</span> , I cant Face you As I am a VILLAIN In your eyes and it hurts my soul to bother you. I Dont know What to do, Please Call me When you see all the website , I cant Do Much For you right now , But Trust me you will never regret accepting me and loving again. 
        <br /><br />
        Lets Start With Trust, Love , and faith . <span className="text-pink-600">I Love You infinite Times "JAAN". </span>
        <br /><br />
        Send Me message as Video send karo , I'll send video , A small 1 . 
      </h1>
    </div>
  </div>
  
  )
}

export default Frame7