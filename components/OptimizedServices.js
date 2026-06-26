import React, { useEffect, useRef, useState } from "react"
import "../assets/scss/components/optimized-services.scss"
import useDeviceCheck from "../deviceCheck"
import KoalendarSecond from "./KoalendarSecond"
import InitKoalendar from "./init-koalendar"

const OptimizedServices = ({ title, subtitle }) => {
  const cardsRef = useRef([])
  const isMobile = useDeviceCheck("mobile")
  const isTablet = useDeviceCheck("tablet")

    const [isVisible, setIsVisible] = useState(false);
   const [cardPosition, setCardPosition] = useState(null);
    const cardRef = useRef(null);
    const modalRef = useRef(null);
    const handleModalClick = (e) => {
      e.stopPropagation();
    };

  useEffect(() => {
    const cardHeights = cardsRef.current.map(card => card.offsetHeight)
    const maxHeight = Math.max(...cardHeights)
    cardsRef.current.forEach(card => {
      card.style.height = `${maxHeight}px`
    })
  }, [])
  const handleKoalendarPosition = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardPosition({
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
      });
    }
  };
  const cards = [
    {
      title: "Design / User-Centric Approach",
      subtitle:
        "We craft tailored digital experiences that align with your users’ needs and business goals.",
    },
    {
      title: "Development / End-to-End Solutions",
      subtitle:
        "From architecture to launch, we manage the full development cycle for high-impact delivery.",
    },
    {
      title: "Maintenance / Continuous Support",
      subtitle:
        "We provide ongoing technical support to ensure platform stability and long-term efficiency.",
    },
    {
      title: "Insights / Data-Driven Decisions",
      subtitle:
        "Leverage data and experimentation to uncover user behavior and optimize performance.",
    },
  ]

  const [scrollProgress, setScrollProgress] = useState(0)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current
      if (scrollContainer) {
        const scrollLeft = scrollContainer.scrollLeft
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        const progress = (scrollLeft / maxScrollLeft) * 100
        setScrollProgress(progress)
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="optimized-services-banner scroll-show">
      <div
        className={`banner-image background-image-settings justify-content-center align-items-start ${
          isMobile ? "p-3" : "p-5"
        }`}
        style={{
          backgroundImage: `url('https://cdn.sanity.io/images/${process.env.GATSBY_SANITY_PROJECT_ID}/${process.env.GATSBY_SANITY_DATASET}/c56762ec5ff0a0bdafcfbc823c37e699dd802a6e-4580x2508.webp')`,
        }}
      >
        <div className="content-wrapper d-flex justify-content-between w-100 mb-4">
          <h2 className="title pt-0 text-left m-0" dangerouslySetInnerHTML={{__html: title}} />
          <span>
            <p className="subtitle mt-1">{subtitle}</p>
						<InitKoalendar
							variant="green-white"
							showButton={true}
							blackButton={false}
							className="contact-us-link button-padding"
							buttonText="Schedule an Audit Call"
						/>
          </span>
        </div>

        <div
          className="cards-container d-flex justify-content-between w-100 mt-4"
          ref={scrollContainerRef}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="service-card d-flex flex-column"
            >
              <h3 className="card-title m-0">{card.title}</h3>
              <p className="subtitle mt-0">{card.subtitle}</p>
              <span className="card-index">0{index + 1}</span>
            </div>
          ))}
        </div>

        {isTablet && (
          <div className="horizontal-scroll-progress-bar mt-4 mb-3">
            <div
              className="horizontal-scroll-progress"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OptimizedServices
