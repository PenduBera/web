import React from 'react';
import { Helmet } from 'react-helmet';
import './home.css';

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Adept Intent Eland</title>
        <meta property="og:title" content="Adept Intent Eland" />
      </Helmet>
      <div className="home-container01">
        <img alt="image" src="/img_0029-200h.png" className="home-image" />
      </div>
      <div className="home-container02">
        <h1 className="home-text">The Last Bera</h1>
      </div>
      <div className="home-container03">
        <div className="home-container04">
          <img alt="image" src="/img_0014-500w.png" className="home-image1" />
          <span className="home-text01">
            <span className="home-text02">Rugs...? Nah bro.</span>
          </span>
        </div>
        <div className="home-container05">
          <img alt="image" src="/img_0021-300w.png" className="home-image2" />
          <span className="home-text04">
            <span>Getting ready for the bulla?</span>
            <br />
            <span>Let's team up</span>
            <br />
          </span>
        </div>
        <div className="home-container06">
          <img alt="image" src="/img_0028-200h.png" className="home-image3" />
          <span className="home-text04">
            <span>100% pure bred autistic</span>
            <br />
          </span>
        </div>
      </div>
      <div className="home-container07">
        <img src="/img_0036-800h.png" className="home-image4" />
      </div>
      <div className="home-container08">
        <div className="home-container09">
          <h1 className="home-text16">
            <span>In the bleak midwinter...</span>
            <br /><br />
            <span className="home-text20">
              Pendu The Bera makes his appearance once every 4 years to mark the halving. Everyone knows that it is the last bera of the season before summer, yet some still capitulate his arrival.
              This year we celebrate, for we know what comes next.
            </span>
            <br /><br /><br />
          </h1>
        </div>
      </div>
      <div className="home-container10">
        <div className="home-container11">
          <div className="home-container12">
            <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
              <img alt="Dexscreener logo" src="/dexscreener-logo-200h.png" className="home-image5 cursor-pointer" />
            </a>
          </div>
          <div className="home-container13">
            <a href="https://twitter.com/PenduBera" target="_blank" rel="noopener noreferrer">
              <img alt="Twitter logo" src="/twitter-logo-200h.png" className="home-image6 cursor-pointer" />
            </a>
          </div>
          <div className="home-container14">
            <a href="https://t.me/PenduPortal" target="_blank" rel="noopener noreferrer">
              <img alt="Telegram logo" src="/telegram-logo-200h.png" className="home-image7 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
