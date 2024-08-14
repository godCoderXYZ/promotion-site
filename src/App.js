import './App.css';
import VideoPlayer from 'react-video-js-player';

const nextwaveLogo1 = require('./nextwave-logo1.png');


function App() {

  return (
    <div className="App">
      <div className="desktop">

        <header className="header-section">
          <div id="top-left-header-text" class="header-text">
            <p>Become a website developer.</p>
            <p>Become a game developer.</p>
            <p>Become a data scientist.</p>
            <p>Become an engineer.</p>
            <p>Become an entrepreneur.</p>
            <p>Expand your imagination.</p>
          </div>

          <div id="top-right-header-text" class="header-text">
            <p>Coding is the tool. You are the innovator.</p>
            <p>Coding is the tool. You are the creator.</p>
            <p>Coding is the tool. You are the designer.</p>
            <p>Coding is the tool. You are the limit.</p>
          </div>

          <div id="ascii-header-text" class="header-text">
            <p> _   _           _ __        __                _   _            _                 </p>
            <p>| \ | | _____  _| |\ \      / /_ ___   _____  | | | | __ _  ___| | _____ _ __ ___ </p>
            <p>|  \| |/ _ \ \/ / __\ \ /\ / / _` \ \ / / _ \ | |_| |/ _` |/ __| |/ / _ \ '__/ __|</p>
            <p>| |\  |  __/&gt;  &lt;| |_ \ V  V / (_| |\ V /  __/ |  _  | (_| | (__|   &lt;  __/ |  \__ \</p>
            <p>|_| \_|\___/_/\_\\__| \_/\_/ \__,_| \_/ \___| |_| |_|\__,_|\___|_|\_\___|_|  |___/</p>
          </div>

          <div id="bottom-header-text" class="header-text">
            <p>#Events   #Opportunities   #Resources   #Hackathons   #HackerMentality   #Programming</p>
            <p>#Competitions   #Guidance   #Community   #Challenges   #ProblemSolving   #Service</p>
            <p>#ComputerScience   #Passion   #Interaction   #HandsOn   #Coding   #Collaboration</p>
          </div>

        </header>

        <div class="hero-section">
            <img class="nextwave-hackers-icon" id="nextwave-hackers-icon1" src={nextwaveLogo1} alt="NextWave Hackers Logo"/>
            <p class="hero-section-body-text">Forerunners on the <b>next wave</b> of innovation and technology</p>
        </div>

        <div class="scrolling-marquee-bg">
              <p class="scrolling-marquee-text">Become a website developer. Become a game developer. Become an engineer. Become a data scientist. Become a physicist. Become an entrepreneur.</p>
        </div>

        <video
            class="promotion-video"
            src='https://ik.imagekit.io/ikmedia/example_video.mp4'
            width='1209'
            height='652'
            controls
        />
      </div>
    </div>
  );
}

export default App;
