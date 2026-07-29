import { useEffect } from "react";
import "../index.css";

import homepageBg from "../assets/images/homepagebg.jpg";
import headshotImg from "../assets/images/aboutmepage/headshotnew.jpg";

import pythonImg from "../assets/images/aboutmepage/python.png";
import htmlImg from "../assets/images/aboutmepage/html.png";
import cssImg from "../assets/images/aboutmepage/css.png";
import cImg from "../assets/images/aboutmepage/c.png";
import javascriptImg from "../assets/images/aboutmepage/js.png";

import yangkarImg from "../assets/images/aboutmepage/ybgirls.jpg";
import tibetanKidsImg from "../assets/images/aboutmepage/tibetankids.jpg";

import arrowsImg from "../assets/images/aboutmepage/arrows.jpg";
import skiingImg from "../assets/images/aboutmepage/skiing.jpg";
import canadaGirlsImg from "../assets/images/aboutmepage/canadagirls.jpg";
import koreanFoodImg from "../assets/images/aboutmepage/meandkorean.jpg";
import elevatorImg from "../assets/images/aboutmepage/elevatorme.jpg";
import moheganSunImg from "../assets/images/aboutmepage/mohegansun.jpg";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("inView");
          } else {
            entry.target.classList.remove("inView");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const animatedElements = document.querySelectorAll(
      "#homepgHeader, #infoParagraph, #backgroundContainer, .language, .course, .timelineItem"
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      {/* Hero */}
      <section
        id="portfolio"
        style={{ backgroundImage: `url(${homepageBg})` }}
      >
        <div id="homepgContainer">
          <div id="homepgHeader">
            <div className="homepgHeaderLine" id="lineTop" />

            <div id="homepgHeaderText">
              ASPIRING
              <br />
              DEVELOPER
            </div>

            <div className="homepgHeaderLine" id="lineBottom" />
          </div>
        </div>

        <div id="spacer" />

        <div id="infoParagraphContainer">
          <div id="infoParagraphHeader">
            <div id="infoParagraphLine" />

            <div id="infoParagraphMask">
              <div id="infoParagraph">
                My name is Pema Tashi, and I am a Computer Science major at the
                University of Connecticut, with a concentration in Software
                Design &amp; Development.
                <br />
                <br />
                Keep scrolling to learn more!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About introduction */}
      <section id="backgroundContainer">
        <img id="headshot" src={headshotImg} alt="Pema Tashi" />

        <div id="greeting">Hi, I'm Pema, nice to meet you!</div>
        <div id="greetingDivider" />
        <div id="greetingText">
          Hi, my name is Pema Tashi, and I am a Computer Science major at the
          University of Connecticut.
          <br />
          <br />
          I recently completed my Digital Technology internship at Synchrony,
          where I continued developing my technical and professional skills.
          <br />
          <br />
          Outside of my academic work, I founded an online clothing business
          called Yangkar Bhoeche, focused on traditional × modern Tibetan
          clothing and accessories.
          <br />
          <br />
          Outside of tech, I enjoy acting and teaching! Keep scrolling to take a
          peek into my life!
        </div>
      </section>

      {/* Qualifications */}
      <section id="qualificationContainer">
        <div id="experience">
          <div className="title">LANGUAGES</div>

          <div id="languageContainer">
            <div className="language">
              <img src={pythonImg} alt="Python logo" />
              <span>PYTHON</span>
            </div>

            <div className="language">
              <img src={htmlImg} alt="HTML logo" />
              <span>HTML</span>
            </div>

            <div className="language">
              <img src={cssImg} alt="CSS logo" />
              <span>CSS</span>
            </div>

            <div className="language">
              <img src={cImg} alt="C programming language logo" />
              <span>C</span>
            </div>

            <div className="language">
              <img src={javascriptImg} alt="JavaScript logo" />
              <span>JAVASCRIPT</span>
            </div>
          </div>
        </div>

        <div id="courseContainer">
          <div className="title" id="courseTitle">
            RELEVANT COURSEWORK
          </div>

          <div id="courses">
            <div className="course">Algorithms &amp; Complexity</div>
            <div className="course">Systems Programming</div>
            <div className="course">Data Structures &amp; OOP</div>
            <div className="course">Intro to Cybersecurity</div>
            <div className="course">Intro to Discrete Systems</div>
          </div>
        </div>
      </section>

      <hr style={{ color: "rgb(134, 132, 132)" }} />

      {/* Yangkar Bhoeche */}
      <section className="aboutMeInfoContainer">
        <div id="businessSection">
          <div className="aboutMeInfoTitle">Yangkar Bhoeche</div>

          <div className="aboutMeInfoText">
            Yangkar Bhoeche is a growing online retail business I founded
            toward the end of 2025.
            <br />
            <br />
            Growing up in the U.S., I noticed how many of us in the Tibetan
            community—especially younger generations—can feel disconnected
            from our roots. Cultural traditions are rich and meaningful, yet
            they are not always accessible, especially in a foreign country.
            <br />
            <br />
            I started this business as a way to bridge traditional Tibetan
            culture with modern expression. The name itself is rooted in
            Tibetan symbolism, where "yangkar" represents pure prosperity and
            good fortune.
            <br />
            <br />
            Alongside my partner, we have been working diligently in the
            Tri-State Area and growing our network across the country.
          </div>

          <div
            className="aboutMeInfoText"
            style={{ fontSize: "15px" }}
          >
            Click the picture to check out our website!
          </div>
        </div>

        
          href="https://yangkarbhoeche.com/products"
          target="_blank"
          rel="noopener noreferrer"
        <a>
          <img
            className="aboutMeInfoImage"
            src={yangkarImg}
            alt="Yangkar Bhoeche clothing collection"
          />
        </a>
      </section>

      {/* Teaching */}
      <section className="aboutMeInfoContainer">
        <img
          className="aboutMeInfoImage"
          src={tibetanKidsImg}
          alt="Students from my Tibetan language and arts class"
        />

        <div id="teachingSection">
          <div id="teachingTitle" className="aboutMeInfoTitle">
            Language and Arts Teaching
          </div>

          <div id="teachingInfo" className="aboutMeInfoText">
            I have been volunteering for the Tibetan American Community of
            Connecticut for over five years, working with young students to
            teach Tibetan language, culture, and traditions.
            <br />
            <br />
            It has been one of my greatest joys to see these generations grow
            and build a stronger connection to their identity. As a teacher, I
            have never been prouder.
            <br />
            <br />
            I have always focused on creating a space where learning is
            engaging, adapting lessons in ways that encourage students to
            continue building their knowledge.
            <br />
            <br />
            ← These are my students from last year, and I hope they aren't the
            last!
          </div>
        </div>
      </section>

      <hr style={{ color: "rgb(134, 132, 132)" }} />

      {/* Timeline */}
      <section id="timelineSection">
        <div className="title">MY JOURNEY</div>

        <div id="timeline">
          <div className="timelineItem">
            <div className="timelineDot" />

            <div className="timelineContent">
              <div className="timelineYear">2006</div>
              <div className="timelineTitle">Birth</div>
              <div className="timelineText">
                Pema Tashi bursts onto the scene.
              </div>
            </div>
          </div>

          <div className="timelineItem">
            <div className="timelineDot" />

            <div className="timelineContent">
              <div className="timelineYear">2017</div>
              <div className="timelineTitle">Began Teaching</div>
              <div className="timelineText">
                Began teaching Tibetan language and arts.
              </div>
            </div>
          </div>

          <div className="timelineItem">
            <div className="timelineDot" />

            <div className="timelineContent">
              <div className="timelineYear">2020</div>
              <div className="timelineTitle">Started High School</div>
            </div>
          </div>

          <div className="timelineItem">
            <div className="timelineDot" />

            <div className="timelineContent">
              <div className="timelineYear">2024</div>
              <div className="timelineTitle">Started at UConn</div>
              <div className="timelineText">
                Began my Computer Science degree at the University of
                Connecticut.
              </div>
            </div>
          </div>

          <div className="timelineItem">
            <div className="timelineDot" />

            <div className="timelineContent">
              <div className="timelineYear">2025</div>
              <div className="timelineTitle">
                Founded Yangkar Bhoeche
              </div>
              <div className="timelineText">
                Launched an online clothing business focused on traditional ×
                modern Tibetan fashion.
              </div>
            </div>
          </div>

          <div className="timelineItem">
            <div className="timelineDot" />

            <div className="timelineContent">
              <div className="timelineYear">2026</div>
              <div className="timelineTitle">
                Digital Technology Intern at Synchrony
              </div>
              <div className="timelineText">
                Expanded my technical and professional experience through the
                Digital Technology Center.
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr style={{ color: "rgb(134, 132, 132)" }} />

      {/* Gallery */}
      <section id="galleryContainer">
        <div className="title">GALLERY</div>

        <div id="galleryGrid">
          <img src={arrowsImg} alt="Arrows on a board" />
          <img src={skiingImg} alt="My group skiing" />
          <img src={canadaGirlsImg} alt="My friends in Canada" />
          <img src={koreanFoodImg} alt="Eating Korean food" />
          <img src={elevatorImg} alt="Standing in an elevator with coffee" />
          <img src={moheganSunImg} alt="My friends at Mohegan Sun" />
        </div>
      </section>
    </>
  );
};

export default Home;