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
      {titlePosition === "top" && (
        videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            style={{
              width: "min(550px, 50%)",
              height: "360px",
              boxSizing: "border-box",
              borderRadius: "20px",
              objectFit: "cover",
              boxShadow: "0 20px 45px rgba(0, 0, 0, 0.25)",
            }}
          />
        ) : (
          <div className="bigProjectBox">{title}</div>
        )
      )}

      <div className="bigProjectInfo">
        {description}
      </div>

      {titlePosition === "bottom" && (
        videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            style={{
              width: "min(550px, 50%)",
              height: "360px",
              boxSizing: "border-box",
              borderRadius: "20px",
              objectFit: "cover",
              boxShadow: "0 20px 45px rgba(0, 0, 0, 0.25)",
            }}
          />
        ) : (
          <div className="bigProjectBox">{title}</div>
        )
      )}
    </article>
  );
};

export default ProjectCard;
