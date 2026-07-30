import { useState, useRef } from "react";
import "../index.css";

import puppyImg from "../assets/images/puppy.png";
import bearImg from "../assets/images/bear.png";
import capybaraImg from "../assets/images/capybara.png";
import cowImg from "../assets/images/cow.png";
import foxImg from "../assets/images/fox.png";
import flappybirdImg from "../assets/images/flappybird.png";

const projects = [
  {
    id: "tictactoe",
    title: "TIC-TAC-TOE",
    image: puppyImg,
    alt: "Puppy",
    href: "/projects/Tic-Tac-Toe/pages/playerPage.html",
  },
  {
    id: "todolist",
    title: "TO-DO LIST",
    image: bearImg,
    alt: "Bear",
    href: "/projects/todolist/pages/task.html",
  },
  {
    id: "calculator",
    title: "CALCULATOR",
    image: capybaraImg,
    alt: "Capybara",
    href: "/projects/calculator/index.html",
  },
  {
    id: "wordle",
    title: "WORDLE",
    image: cowImg,
    alt: "Cute cow",
    href: "/projects/Wordle/index.html",
  },
  {
    id: "flashcards",
    title: "FLASHCARDS",
    image: foxImg,
    alt: "Cute fox",
    href: "/projects/Flashcards/Flashcards/index.html",
  },
  {
    id: "flappybird",
    title: "FLAPPY BIRD",
    image: flappybirdImg,
    alt: "Flappy Bird",
    href: null,
  },
];

const Code = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false); // used only for the CSS class

  const dragStartX = useRef(null);

  const previousProject = () => {
    setCurrentIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  const nextProject = () => {
    setCurrentIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  };

  const getProjectPosition = (index) => {
    let position = index - currentIndex;

    const halfwayPoint = projects.length / 2;

    if (position > halfwayPoint) {
      position -= projects.length;
    }

    if (position < -halfwayPoint) {
      position += projects.length;
    }

    return position;
  };

  const getProjectStyle = (index) => {
    const position = getProjectPosition(index);
    const absolutePosition = Math.abs(position);

    const translateX = position * 290;
    const scale = Math.max(1 - absolutePosition * 0.17, 0.65);
    const opacity = Math.max(1 - absolutePosition * 0.28, 0);
    const blur = absolutePosition === 0 ? 0 : absolutePosition * 1.5;

    return {
      left: "50%",
      top: "50%",
      transform: `
        translate(-50%, -50%)
        translateX(${translateX}px)
        scale(${scale})
      `,
      opacity,
      filter: `blur(${blur}px)`,
      zIndex: projects.length - absolutePosition,
    };
  };

  const handlePointerDown = (event) => {
    dragStartX.current = event.clientX;
    setIsDragging(true);
  };

  // All click/drag decision-making happens here instead of relying on
  // the browser's synthetic "click" event, which was being suppressed.
  const handlePointerUp = (event) => {
    setIsDragging(false);

    if (dragStartX.current === null) {
      return;
    }

    const dragDistance = event.clientX - dragStartX.current;
    dragStartX.current = null;

    // Real drag/swipe: change the carousel, don't navigate.
    if (dragDistance > 60) {
      previousProject();
      return;
    }

    if (dragDistance < -60) {
      nextProject();
      return;
    }

    // Not a drag -> treat as a click/tap on whatever project element it was.
    const projectEl = event.target.closest(".project");
    if (!projectEl) {
      return;
    }

    const clickedIndex = projects.findIndex((p) => p.id === projectEl.id);
    if (clickedIndex === -1) {
      return;
    }

    if (clickedIndex !== currentIndex) {
      // Side card tapped: bring it to center, don't navigate yet.
      setCurrentIndex(clickedIndex);
      return;
    }

    const href = projects[clickedIndex].href;
    if (href) {
      window.location.href = href;
    }
  };

  const handlePointerCancel = () => {
    dragStartX.current = null;
    setIsDragging(false);
  };

  return (
    <main id="codePage">
      <div id="codeMain">
        <section className="projectCarousel">
          <div className="codeSection">INTERACTABLES</div>

          <div
            className={`projectStage ${isDragging ? "dragging" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            {projects.map((project, index) => (
              <a
                key={project.id}
                className={`project ${
                  index === currentIndex ? "active" : ""
                }`}
                id={project.id}
                href={project.href ?? "#"}
                style={getProjectStyle(index)}
                onClick={(event) => event.preventDefault()}
                aria-label={
                  project.href
                    ? `Open ${project.title}`
                    : `${project.title} coming soon`
                }
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  draggable="false"
                />

                <div className="projectTitle">{project.title}</div>
              </a>
            ))}
          </div>

          <div className="carouselControls">
            <button
              className="carouselArrow"
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
            >
              &#8592;
            </button>

            <div className="carouselDots">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  className={`carouselDot ${
                    index === currentIndex ? "active" : ""
                  }`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Show ${project.title}`}
                />
              ))}
            </div>

            <button
              className="carouselArrow"
              type="button"
              onClick={nextProject}
              aria-label="Next project"
            >
              &#8594;
            </button>
          </div>
        </section>

        <section id="bigProjectSection">
          <div className="codeSection">PROJECTS</div>

          <div id="bigProjectContainer">
            <article className="bigProject">
              <div className="bigProjectBox">TerraTech</div>

              <div className="bigProjectInfo">
                This is an MVP Recycling Assistance Project created for the
                2026 UConn Hackathon.
                <br />
                <br />
                It uses a YOLO object-detection model to analyze real-time
                images and provide feedback through a Tkinter interface.
                <br />
                <br />
                Goal: Provide helpful recycling information and let users know
                whether an item is recyclable.
              </div>
            </article>

            <article className="bigProject">
              <div className="bigProjectInfo">
                This is an AI-powered text study guide tool.
                <br />
                <br />
                It accepts text from the user and provides either a summary or
                quiz questions based on the entered text.
                <br />
                <br />
                Goal: Help users quickly understand long passages and reinforce
                what they learned.
              </div>

              <div className="bigProjectBox">Text Summarizer</div>
            </article>
          </div>
        </section>

        <section id="upcomingProjectSection">
          <div className="codeSection">COMING SOON...</div>

          <article className="bigProject">
            <div className="bigProjectBox">Roblox Game</div>

            <div className="bigProjectInfo">
              A game that incorporates what kids love—brain rot and obbies.
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default Code;