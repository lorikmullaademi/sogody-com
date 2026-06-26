import React, { useEffect, useState, useRef } from "react";
import { navigate } from "gatsby";
import "../assets/scss/components/service-category-card.scss";
import ExploreLink from "./ExploreLink";
import useDeviceCheck from "../deviceCheck";
import InitKoalendar from "./init-koalendar";

const ServiceCategoryCard = ({
  category,
  hireUs = "Schedule an Audit Call",
  exploreLinkText = "Explore more",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardPosition, setCardPosition] = useState(null);
  const cardRef = useRef(null);
  const modalRef = useRef(null);
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  const isMobile = useDeviceCheck("mobile");
  const isTablet = useDeviceCheck("tablet");
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  useEffect(() => {
    if (!category.techSlider || category.techSlider.length <= 1) return;

    const interval = setInterval(() => {
      setActiveTechIndex(
        (prevIndex) => (prevIndex + 1) % category.techSlider.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [category.techSlider]);

  const handleKoalendarPosition = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardPosition({
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="service-category-card w-100"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        opacity: isVisible ? 1 : 0,
        transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
      }}
    >
       <div
        className={`card-content justify-content-between d-flex w-100 ${
          isMobile ? "p-4" : "p-5"
        }`}
        role="button"
        tabIndex={0}
        onClick={(e) => {
          if (!e.target.closest("a, button")) {
            navigate(`/services/${category.slug.current}/`)
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.target.closest("a, button")) {
            navigate(`/services/${category.slug.current}/`);
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex flex-column justify-content-between max-width-50 small-desktop-width-55">
          <div className="category-header d-flex justify-content-between">
            <div className="category-title">
              <h2 className="smaller-title title mb-0 pt-0 text-left justify-content-start">
                {category.category}
              </h2>
            </div>
          </div>

          <div className="category-keypoints">
            <ul
              className={`keypoints-grid ${
                category.keyPoints.length === 3 || isMobile ? "three-items" : ""
              }`}
            >
              {category.keyPoints.map(
                (point, index) =>
                  point.children[0].text && (
                    <li key={index} className="subtitle mt-2">
                      {point.children[0].text}
                    </li>
                  )
              )}
            </ul>
          </div>

          {!isTablet && (
            <ExploreLink
              to={`/services/${category.slug.current}/`}
              text={exploreLinkText}
            />
          )}
        </div>

        {category.cardVideosR2?.length > 0 && (
          <div className="card-videos-grid d-flex">
            {category.cardVideosR2[0] && (
              <video
                src={category.cardVideosR2?.[0]?.video?.asset?.fileURL}
                autoPlay
                loop
                muted
                playsInline
                className="video-wide"
                controls={false}
                style={{ pointerEvents: "none" }}
              />
            )}

            {category.techSlider?.length > 0 && !isTablet && (
              <div>
                <div className="tech-slider-box p-2 d-flex flex-column mb-1">
                  <p className="tech-title m-0 text-center subtitle w-75 mx-auto">
                    Technologies we use:
                  </p>
                  <div className="tech-item-wrapper position-relative overflow-hidden">
                    <div
                      key={activeTechIndex}
                      className="tech-item fade-transition d-flex flex-column text-center"
                    >
                      {category.techSlider[activeTechIndex]?.techIcon?.asset
                        ?.url && (
                        <img
                          src={
                            category.techSlider[activeTechIndex].techIcon.asset
                              .url
                          }
                          alt={category.techSlider[activeTechIndex].techName}
                          className="tech-icon mb-2"
                        />
                      )}
                      <p className="tech-name m-0 subtitle">
                        {category.techSlider[activeTechIndex].techName}
                      </p>
                      <p className="tech-description m-0 subtitle">
                        {
                          category.techSlider[activeTechIndex]
                            .techDescription
                        }
                      </p>
                    </div>
                  </div>
                </div>
                
								<InitKoalendar
									showButton={true}
									blackButton={false}
									className="contact-us-link button-padding test"
									buttonText="Hire us"
								/>
              </div>
            )}
          </div>
        )}

        {isTablet && (
          <>
            <div className="my-3">
              <InitKoalendar
								showButton={true}
								blackButton={false}
								className="contact-us-link button-padding"
								buttonText="Hire us"
							/>
            </div>
            <ExploreLink
              to={`/services/${category.slug.current}/`}
              text={exploreLinkText}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceCategoryCard;