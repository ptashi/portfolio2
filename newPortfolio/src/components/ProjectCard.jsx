import { useEffect, useRef } from "react";

const ProjectCard = ({ title, description, titlePosition = "top", videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoSrc) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoSrc]);

  return (
    <article className="bigProject">
      {titlePosition === "top" && <div className="bigProjectBox">{title}</div>}

      <div className="bigProjectInfo">
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 20px 45px rgba(0, 0, 0, 0.25)",
              marginBottom: "16px",
              display: "block",
            }}
          />
        )}
        {description}
      </div>

      {titlePosition === "bottom" && <div className="bigProjectBox">{title}</div>}
    </article>
  );
};

export default ProjectCard;
