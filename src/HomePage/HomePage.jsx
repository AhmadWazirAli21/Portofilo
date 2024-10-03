import "./HomePage.css";
import { FaReact } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { FaLinux } from "react-icons/fa";
import { SiIonic } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import laptop from '../assets/laptop.jpg'
import skills from '../assets/skills.avif'
export default function HomePage() {
  //const windowWidth = null;
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  },[])
  const [windowwidth , setWindowWidth] = useState(null);
  const [readMore , setReadMore] = useState(false);
  const about = " Hi! I am Ahmed Wazir Ali, a Full Stack Developer with extensive experience in developing web design software. I have a strong background in all front-end and back-end, which enables me to build web applications that truly meet the needs of users for a seamless experience,  Proficiency in JavaScript, HTML, CSS, and Typescript ,C#. - Frameworks and Technologies, Experience in using React,  Node.js, and Express, as well as data requirements such as MongoDB and MySQL"
  return (
    <div className="home-page-container" >
      <div className="nav-bar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#porto">Portofilo</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ahmad-wazir-ali-99a4b332a/" target="_blank"><FaLinkedin size={20} color="#000" cursor="pointer"/></a>
          <a href="https://www.facebook.com/profile.php?id=100037529912472" target="_blank">
          <FaFacebook size={20} color="#000" cursor="pointer"/>
          </a>
          <a href="https://www.instagram.com/ahmad_wazir_ali/" target="_blank">
          <FaInstagram size={20} color="#000" cursor="pointer"/>
          </a>
        </div>
      </div>
      <div className="intro">
        <div className="rigth">
        <p className="name">

         <span>Hi</span>, <br /> I'M <span> Ahmad Wazir ali</span>
        </p>
        <p>A Software developer</p>
        <a href="#contact">Contact Me</a>
        </div>
        <div className="left">
            <img src={laptop} alt="" />
        </div>
      </div>
      <div id="about"className="about">
        <div className="left">
            <img src={skills} alt="" />
        </div>
        <div className="rigth">
        <p className="About">About</p>
            { windowwidth >= 510 || !readMore ? 
            <p onClick={() => setReadMore(true)}>   Hi! I am Ahmed Wazir Ali, a Full Stack Developer with extensive
            experience in developing web design software. I have a strong background
            in all front-end and back-end, which enables me to build web
            applications that truly meet the needs of users for a seamless
            experience,  Proficiency in JavaScript, HTML, CSS,
            and Typescript ,C#. - Frameworks and Technologies, Experience in using React,
            Node.js, and Express, as well as data requirements such as MongoDB and
            MySQL, Ability to design user-friendly interfaces,
            with a focus on improving the user experience , Creating a
            variety of projects, thus, from simple web applications to complex  
            systems. Belief in the importance of teamwork. We collaborate to achieve
            project goals ,I am constantly striving to improve my skills
            and keep up with the latest developments in the world of programming. I
            believe that continuous learning is the key to success in this dynamic
            field. If you have any questions or desire to collaborate, do not
            hesitate to contact me!</p> : <p onClick={() => setReadMore(false)}>{about}..Read More</p>}

      </div>  
      </div>
      <div className="skills">
           <div className="left">
           <p>Skills</p>
            <p>Take a look about my skills and tell me how amazing Im </p>
           </div>
            <div className="right">
            <div className="skill-container">
          <FaReact size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>React</p>
        </div>
        <div className="skill-container">
          <FaJsSquare size={windowwidth <= 510 ? 50: 65}  color="#000" />
          <p>Javascript</p>
        </div>
        <div className="skill-container">
          <BiLogoTypescript size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>Typescript</p>
        </div>
        <div className="skill-container">
          <DiMongodb size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>MongoDB </p>
        </div>
        <div className="skill-container">
          <DiPostgresql size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>PostgresQL</p>
        </div>
        <div className="skill-container">
          <FaNode size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>Nodejs</p>
        </div>
        <div className="skill-container">
          <FaHtml5 size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>HTML</p>
        </div>
        <div className="skill-container">
          <FaCss3Alt size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>Css</p>
        </div>
        <div className="skill-container">
          <FaGitAlt size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>Git & Github</p>
        </div>
        <div className="skill-container">
          <SiCsharp size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>.NET</p>
        </div>
        <div className="skill-container">
          <TbBrandNextjs size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>Nextjs</p>
        </div>
        <div className="skill-container">
          <TbBrandReactNative size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>React native</p>
        </div>
        <div className="skill-container">
          <FaLinux size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>Linux</p>
        </div>
        <div className="skill-container">
          <SiIonic size={windowwidth <= 510 ? 50: 65} color="#000" />
          <p>Ionic</p>
        </div>
            </div>
      </div>
        <div className="projects">
          <div className="left">
          <p className="pp">Projects</p>
          </div>
          <div className="right">
            <div className="project">
              <p className="title">Pinterest Clone</p>
              <p className="desc">
                I made a Pinterest clone with MERN that simulate the main actions in the real one such as login and logout,
                update profile, post a pin , comment a pin , save a pin , delete one and update one also visit aother 
                users accounts, Im looking forward to add more features , by the end of the day Im sure that i make a realy nice clone which look like the same as
                the real one. You can see the full repo from here :

              </p>
              <a href="https://github.com/AhmadWazirAli21/Pinterest-clone-client" target="_blank" className="link">See full project in Github
              <FaArrowRight size={20} color="#000"/>
              </a>
              
            </div>
            <div className="project">
              <p className="title">Online Academy</p>
              <p className="desc">
                I built an Online educational academy that can the student get started with his favorite lessons and make some
                useful time learning on it, so the student can over look at the content without create an accoutn on the academey
                but he need one to start studying ,also update his profile and put his best skills to show other students and buy courses
              </p>
              <a href="https://github.com/AhmadWazirAli21/knoz-academy-client" target="_blank" className="link">See full project in Github
              <FaArrowRight size={20} color="#000"/>
              </a>
            </div>
            <div className="project">
              <p className="title">Whatsapp clone</p>
              <p className="desc">
                So i built a Whatsapp clone with MERN which is pretty same as the real one and i made that happen by using the web socket
                connection so the each user can send messages to another one in real time , login an logout , update profile informations and 
                offcourse see the online friends.
              </p>
              <a href="https://github.com/AhmadWazirAli21/whatsapp-clone-client" target="_blank" className="link">See full project in Github
              <FaArrowRight size={20} color="#000"/>
              </a>
            </div>
              <a href="https://github.com/AhmadWazirAli21/" target="_blank" className="more">
              see more in Github
              <FaArrowRight size={15} color="#000" />
              </a>
          </div>
        </div>
      <div id="contact" className="contact-me">
        <p className="p">Contact Me</p>

            <div className="way">
              <IoIosMail size={20} color="#000"/>
              <p>ahmadprogrammer21@gmail.com</p>
            </div>
            <div className="way">
              <FaPhoneAlt size={20} color="#000"/>
              <p>+963 934 124 282</p>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ahmad-wazir-ali-99a4b332a/" target="_blank">
              <FaLinkedin size={20} color="#000" cursor="pointer"/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100037529912472" target="_blank">
                <FaFacebook size={20} color="#000" cursor="pointer"/>
                </a>
                <a href="https://www.instagram.com/ahmad_wazir_ali/" target="_blank">
                  <FaInstagram size={20} color="#000" cursor="pointer"/>
                </a>

        </div>
      </div>
    </div>
  );
}
