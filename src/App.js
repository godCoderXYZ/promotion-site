import './App.css';

import YoutubeEmbed from "./YoutubeEmbed";

import treeImage from './tree.png';
import nextwaveLogo1 from './nextwave-logo1.png';


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
        
        <div class="introduction-section">
          {/* change to better video player in the future: https://www.geeksforgeeks.org/how-to-create-video-player-in-reactjs/ */}
          {/* <video
              class="promotion-video"
              src='https://ik.imagekit.io/ikmedia/example_video.mp4'
              width='1209'
              height='652'
              controls
          /> */}
          <YoutubeEmbed embedId="rokGy0huYEA"/>

          <div class="introduction">
            <p id="introduction-header">NextWave Hackers 💻</p>
            <p class="body-text1" id="introduction-body">
              A student-led, student-driven club that aims to inspire students to harness technology and innovation to cultivate their ideas and abilities, while simultaneously contributing to real-world issues.
              <br/><br/>
              We aim to build a student community for passionate innovators, providing them with guidance and resources to collaborate, develop, and explore different branches of computer science while raising awareness of the importance of information literacy and development in VSA to build the future generation. 
            </p>
          </div>

          <div class="objectives">
            <p class="header-text1">Our Objective ⭐️</p>
            <p class="body-text1" id="objectives-body">
              Our objective is to create and foster a student community centered around applying programming and coding in real-world scenarios. We aim to promote innovation, develop projects, and highlight the importance of creativity in STEM fields of VSA.
            </p>
          </div>

          <div class="hackers-definition">
            <p class="header-text1">What are “Hackers”? 🥷🏻</p>
            <p class="body-text1" id="hackers-definition-body">
              In our club, we define "hackers" as individuals who employ creative and ingenious methods to discover innovative solutions. Essentially, we view hacking as the process of identifying effective, logical, and inventive solutions to problems within our community and globally, much like the concept of technical hacking.
            </p>
          </div>

        </div>

        <div class="branch-intro">
          <img id="tree-image" src={treeImage} alt="Tree"/>
          <p id="branch-intro-body">
            <span style={{fontSize: "36px", fontWeight: "normal"}}>Learning Programming is like <b>climbing a tree. </b></span>
            <span style={{fontSize: "34.88px", fontWeight: "normal"}}><br/><br/></span>
            There are so many different aspects and skills of programming to learn, so many pathways to explore, and so many applications of programming in the real-world today.
            <span style={{fontSize: "34.88px"}}><br/><br/></span>
            We call these aspects <b>BRANCHES</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
