import { Analytics } from "@vercel/analytics/react"

import React, { useState } from "react"; 

import './App.css';

import YoutubeEmbed from "./YoutubeEmbed";

import treeImage from './tree.png';
import nextwaveLogo1 from './nextwave-logo1.png';
// import treeBranchImage from './tree-branch.png';

import branch1Icon from './branch1icon.png';
import branch2Icon from './branch2icon.png';
import branch3Icon from './branch3icon.png';
import branch4Icon from './branch4icon.png';
import branch5Icon from './branch5icon.png';

import ourObjectiveIcon from './our-objective-icon.png';
import whatAreHackersIcon from './what-are-hackers-icon.png';




function App() {
  // commented version of headerAnimText is with entities (i.e. &lt; and &gt;)
  //let headerAnimText = [[useState("Become a website developer."), useState("Become a game developer."), useState("Become a data scientist."), useState("Become an engineer."), useState("Become an entrepreneur."), useState("Expand your imagination.")], [useState("Coding is the tool. You are the innovator."), useState("Coding is the tool. You are the creator."), useState("Coding is the tool. You are the designer."), useState("Coding is the tool. You are the limit.")], [useState(" _   _           _ __        __                _   _            _                 "), useState("| \ | | _____  _| |\ \      / /_ ___   _____  | | | | __ _  ___| | _____ _ __ ___ "), useState("|  \| |/ _ \ \/ / __\ \ /\ / / _` \ \ / / _ \ | |_| |/ _` |/ __| |/ / _ \ '__/ __|"), useState("| |\  |  __/&gt;  &lt;| |_ \ V  V / (_| |\ V /  __/ |  _  | (_| | (__|   &lt;  __/ |  \__ \""), useState("|_| \_|\___/_/\_\\__| \_/\_/ \__,_| \_/ \___| |_| |_|\__,_|\___|_|\_\___|_|  |___/")]]

  let headerAnimText = [[useState("Become a website developer. "), useState("Become a game developer. "), useState("Become a data scientist. "), useState("Become an engineer. "), useState("Become an entrepreneur. "), useState("Expand your imagination. ")], [useState("Coding is the tool. You are the innovator. "), useState("Coding is the tool. You are the creator. "), useState("Coding is the tool. You are the designer. "), useState("Coding is the tool. You are the limit. ")], [useState(" _   _           _ __        __                _   _            _                 "), useState("| \\ | | _____  _| |\\ \\      / /_ ___   _____  | | | | __ _  ___| | _____ _ __ ___ "), useState("|  \\| |/ _ \\ \\/ / __\\ \\ /\\ / / _` \\ \\ / / _ \\ | |_| |/ _` |/ __| |/ / _ \\ '__/ __|"), useState('| |\\  |  __/>  <| |_ \\ V  V / (_| |\\ V /  __/ |  _  | (_| | (__|   <  __/ |  \\__ \\'), useState("|_| \\_|\\___/_/\\_\\\\__| \\_/\\_/ \\__,_| \\_/ \\___| |_| |_|\\__,_|\\___|_|\\_\\___|_|  |___/")]]

  const [callToActionPopupClasname, setCallToActionPopupClassname] = useState("call-to-action-popup-show");

  const closeCallToActionPopup = () => {
    alert("You Can Only Click this Button If You Will Join the Club. No backing out now. We will know.");
    setCallToActionPopupClassname("call-to-action-popup-hide");
  };

  // function shiftStrings(strings){
  //   for (let i=0; i<strings.length; i++){
  //     for (let j=0; j<strings[i].length; j++){
  //       const currentState = strings[i][j][0];
  //       strings[i][j][0] = shiftString(currentState);
  //       strings[i][j][1](shiftString(currentState));
  //     }
  //   }

  //   return strings;
  //   // return strings.map((text) => shiftString(text));
  // }

  // function shiftString(string){
  //   // return string[string.length-1] + string.substring(0, string.length-1);
  //   return string;
  // }

  // let startTime;
  // function step(timestamp) {
  //   if (startTime === undefined) {
  //     startTime = timestamp;
  //   }
  //   const elapsed = timestamp - startTime;

  //   if (elapsed > 50){
  //     startTime = timestamp;

  //     console.log(headerAnimText);
  //     headerAnimText = shiftStrings(headerAnimText);
  //   }
  //   window.requestAnimationFrame(step);
  // }




  // window.requestAnimationFrame(step);

  return (
    <div className="App">
      <Analytics />
      <div className="desktop">

        <header className="header-section">
          <div id="top-left-header-text" className="header-text">
            <div className="header-text-div1">
              <p className="left-header-anim-text1">{headerAnimText[0][0][0]}</p>
            </div>

            <div className="header-text-div1">
              <p className="right-header-anim-text1">{headerAnimText[0][1][0]}</p>
            </div>

            <div className="header-text-div1">
              <p className="left-header-anim-text1">{headerAnimText[0][2][0]}</p>
            </div>

            <div className="header-text-div1">
              <p className="right-header-anim-text1">{headerAnimText[0][3][0]}</p>
            </div>

            <div className="header-text-div1">
              <p className="left-header-anim-text1">{headerAnimText[0][4][0]}</p>
            </div>

            <div className="header-text-div1">
              <p className="right-header-anim-text1">{headerAnimText[0][5][0]}</p>
            </div>
          </div>

          <div id="top-right-header-text" className="header-text">
            <div className="header-text-div2">
              <p className="left-header-anim-text2">{headerAnimText[1][0][0]}</p>
            </div>

            <div className="header-text-div2">
              <p className="right-header-anim-text2">{headerAnimText[1][1][0]}</p>
            </div>

            <div className="header-text-div2">
              <p className="left-header-anim-text2">{headerAnimText[1][2][0]}</p>
            </div>

            <div className="header-text-div2">
              <p className="right-header-anim-text2">{headerAnimText[1][3][0]}</p>
            </div>
          </div>

          <div id="ascii-header-text" className="header-text">
            <p>     _       _         _   _       _____         _             </p>
            <p>    | | ___ (_)_ __   | | | |___  |_   _|__   __| | __ _ _   _ </p>
            <p> _  | |/ _ \| | '_ \  | | | / __|   | |/ _ \ / _` |/ _` | | | |</p>
            <p>| |_| | (_) | | | | | | |_| \__ \   | | (_) | (_| | (_| | |_| |</p>
            <p> \___/ \___/|_|_| |_|  \___/|___/   |_|\___/ \__,_|\__,_|\__, |</p>
            <p>                                                         |___/</p>
            {/* <p>{headerAnimText[2][0][0]}</p>
            <p>{headerAnimText[2][1][0]}</p>
            <p>{headerAnimText[2][2][0]}</p>
            <p>{headerAnimText[2][3][0]}</p>
            <p>{headerAnimText[2][4][0]}</p> */}
          </div>

          <div id="bottom-header-text" className="header-text">
            <p>#Events   #Opportunities   #Resources   #Hackathons   #HackerMentality   #Programming</p>
            <p>#Competitions   #Guidance   #Community   #Challenges   #ProblemSolving   #Service</p>
            <p>#ComputerScience   #Passion   #Interaction   #HandsOn   #Coding   #Collaboration</p>
          </div>

        </header>

        <div className="hero-section">
            <img className="nextwave-hackers-icon" id="nextwave-hackers-icon1" src={nextwaveLogo1} alt="NextWave Hackers Logo"/>
            <p className="hero-section-body-text">Forerunners on the <b>next wave</b> of innovation and technology</p>
        </div>

        <div className="scrolling-marquee-bg">
              <p className="scrolling-marquee-text">Become a website developer. Become a game developer. Become an engineer. Become a data scientist. Become a physicist. Become an entrepreneur.</p>
        </div>
        
        <div className="introduction-section">
          {/* change to better video player in the future: https://www.geeksforgeeks.org/how-to-create-video-player-in-reactjs/ */}
          {/* <video
              className="promotion-video"
              src='https://ik.imagekit.io/ikmedia/example_video.mp4'
              width='1209'
              height='652'
              controls
          /> */}

          
          <div className="video-responsive">
            <iframe src="https://drive.google.com/file/d/1WSejn_cn0wBwHMu6kRAjRIEsVofsgGtG/preview" allow="autoplay" allowFullScreen/>
          </div>
          {/* <YoutubeEmbed embedId="rokGy0huYEA"/> */}

          {/* <div className={callToActionPopupClasname}>
            <p>Join Us Today</p>
            <button onClick={closeCallToActionPopup}>X</button>
          </div> */}
          

          <div className="introduction">
            <p id="introduction-header">NextWave Hackers 💻</p>
            <p className="body-text1" id="introduction-body">
              A student-led, student-driven club that aims to inspire students to harness technology and innovation to cultivate their ideas and abilities, while simultaneously contributing to real-world issues.
              <br/><br/>
              We aim to build a student community for passionate innovators, providing them with guidance and resources to collaborate, develop, and explore different branches of computer science while raising awareness of the importance of information literacy and development in VSA to build the future generation. 
            </p>
          </div>

          <div className="objectives">
            <img className="objectives-icon" src={ourObjectiveIcon} alt="Objectives Icon"/>
            <p className="header-text1">Our Objective ⭐️</p>
            <p className="body-text1" id="objectives-body">
              Our objective is to create and foster a student community centered around applying programming and coding in real-world scenarios. We aim to promote innovation, develop projects, and highlight the importance of creativity in STEM fields of VSA.
            </p>
          </div>

          <div className="hackers-definition">
            <img className="hackers-definition-icon" src={whatAreHackersIcon} alt="Hackers Icon"/>
            <p className="header-text1">What are “Hackers”? 🥷🏻</p>
            <p className="body-text1" id="hackers-definition-body">
              In our club, we define "hackers" as individuals who employ creative and ingenious methods to discover innovative solutions. Essentially, we view hacking as the process of identifying effective, logical, and inventive solutions to problems within our community and globally, much like the concept of technical hacking.
            </p>
          </div>

        </div>

        <div className="branch-intro">
          <img id="tree-image" src={treeImage} alt="Tree"/>
          <p id="branch-intro-body">
            <span style={{fontSize: "36px", fontWeight: "normal"}}>Learning Programming is like <b>climbing a tree. </b></span>
            <span style={{fontSize: "20px", fontWeight: "normal"}}><br/><br/><br/></span>
            There are so many different aspects and skills of programming to learn, so many pathways to explore, and so many applications of programming in the real-world today.
            <span style={{fontSize: "25px"}}><br/><br/><br/></span>
            We call these aspects <b>BRANCHES</b>.<br/>
          </p>
        </div>

        <div className="individual-branch-intro">
            <p className="our-branches">OUR BRANCHES</p>

            <div className="branches">
              <div className="r-branch-block" id="branch-block-1">
                <p>
                  Website and Application Development
                </p>
              </div>

              <p className="r-branch-description" id="branch-description-1">
                The Website and Application Development branch aims to assist students in creating their own portfolios, platforms, and innovative applications by utilizing web development technologies and tools.
              </p>

              <img class="l-branch-icon" src={branch1Icon} alt="Branch 1 Icon"/>

              <div className="l-branch-block" id="branch-block-2">
                <p>
                  Game Development and Theory
                </p>
              </div>

              <p className="l-branch-description" id="branch-description-2">
                The Game Development and Theory branch offers students the opportunity to express their imagination, creativity, and ideas into something real and tangible, through the process of Game Development, by designing Video Games, participating in Esport and Game Development events and competitions, and collaborating in teams through a project based learning approach.
              </p>

              <img class="r-branch-icon" src={branch2Icon} alt="Branch 2 Icon"/>

              <div className="r-branch-block" id="branch-block-3">
                <p style={{width:"468px"}}>
                  STEAM x CS
                </p>
              </div>

              <p className="r-branch-description" id="branch-description-3">
                The STEAM x CS branch teaches students how to use Computer Science as a tool to enhance their understanding of the key concepts in science, engineering, and mathematics; applying their knowledge to real-life scenarios.
              </p>

              <img class="l-branch-icon" src={branch3Icon} alt="Branch 3 Icon"/>

              <div className="l-branch-block" id="branch-block-4" style={{width:"356px", backgroundColor:"#50008A99"}}>
                <p style={{width:"200px"}}>
                  Radiance
                </p>
              </div>

              <p className="l-branch-description" id="branch-description-4">
                The aim of RADIANCE is to provide girls with the courage, skills, guidance, and resources to pursue and exceed in traditionally male-dominated STEM fields through events and projects. By providing students with a solid foundation in computer programming concepts and introducing them to Python and APIs, this branch aspires to instigate project-based learning among members.
              </p>

              <img class="r-branch-icon" src={branch4Icon} alt="Branch 4 Icon" style={{transform:"translateY(-140%)"}}/>

              <div className="r-branch-block" id="branch-block-5">
                <p style={{width:"700px"}}>
                  Cybersecurity and Ethical Hacking
                </p>
              </div>

              <p className="r-branch-description" id="branch-description-5">
                This branch aims to educate students on cybersecurity; creating a more safe and secure digital world across VSA. Through learning, investigation, and experimentation, students can explore potential threats, key concepts, and enhance their digital security.
              </p>

              <img class="l-branch-icon" src={branch5Icon} alt="Branch 5 Icon"/>

              {/* <img id="tree-branch-img" src={treeBranchImage} alt="Tree Branches"/>

              <div className="branch-labels">
                <p className="branch-intro-individual-header">Website and Application Development</p>
                <p className="branch-intro-individual-description">hi</p>

                <p className="branch-intro-individual-header">Game Development and Theory</p>
                <p className="branch-intro-individual-description">
                  This branch provides students the opportunity to channel their <b>imagination</b> into <b>real</b> games that can be shared and played by others, extending their creativity into something tangible and realistic.
                </p>
                
                <p className="branch-intro-individual-header">STEAM Education</p>
                <p className="branch-intro-individual-description">hi</p>
                
                <p className="branch-intro-individual-header">Girls4Girls Coding</p>
                <p className="branch-intro-individual-description">hi</p>
                
                <p className="branch-intro-individual-header">Cybersecurity and Ethical Hacking</p>
                <p className="branch-intro-individual-description">hi</p>

              </div> */}

            </div>

        </div>

        <div className="call-to-action">

          <p id="join-us-header-info">Join Us Today</p>
          <p id="club-duration-info">October 2024 - May 2025</p>

          <img id="call-to-action-next-wave-logo" src={nextwaveLogo1} alt="NextWave Hackers Logo"/>

          <p id="other-inquires-info">
            For other inquiries, feel free to send us an email:
            <br/>
            {/* <a id="email-link" href="mailto:ps20133177@student.vsa.edu.hk" target="_blank" rel="noreferrer">ps20133177@student.vsa.edu.hk</a> (Chairperson) */}
            <a id="email-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=ps20133177@student.vsa.edu.hk" target="_blank" rel="noreferrer">ps20133177@student.vsa.edu.hk</a> (Chairperson)
            
          </p>

        </div>
      </div>
    </div>
  );
}

export default App;
