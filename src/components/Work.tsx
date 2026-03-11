import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Devtrios",
    category: "Web Development",
    tools: "React.js, Next.js, WordPress",
    image: "/images/Solidx.png",
    url: "https://devtrios.com/",
  },
  {
    title: "Berkana Capital",
    category: "Finance",
    tools: "React.js, Next.js",
    image: "/images/radix.png",
    url: "https://www.berkanacapital.com/",
  },
  {
    title: "Opto Health",
    category: "Healthcare",
    tools: "React.js, Next.js",
    image: "/images/bond.png",
    url: "https://optohealth.co.uk",
  },
  {
    title: "HyperLeague",
    category: "Gaming / Platform",
    tools: "React.js, Next.js",
    image: "/images/sapphire.png",
    url: "https://hyperleague.vercel.app",
  },
  {
    title: "Quick Growth",
    category: "Growth / AI",
    tools: "React.js, Next.js",
    image: "/images/Maxlife.png",
    url: "https://quickgrowth.ai",
  },
  {
    title: "Superb Property Management",
    category: "Real Estate",
    tools: "React.js, WordPress",
    image: "/images/Solidx.png",
    url: "https://superbproperties.ae/",
  },
  {
    title: "Amptech",
    category: "Technology",
    tools: "React.js, Next.js",
    image: "/images/radix.png",
    url: "https://amptech.uk",
  },
  {
    title: "GrowStack",
    category: "AI / Growth",
    tools: "React.js, Next.js",
    image: "/images/bond.png",
    url: "https://www.growstack.ai",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>
                          {project.url ? (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="disable"
                            >
                              {project.title}
                            </a>
                          ) : (
                            project.title
                          )}
                        </h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
