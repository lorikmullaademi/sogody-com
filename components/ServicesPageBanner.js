import React, { useEffect, useRef, useState } from "react"
import "../assets/style.css"
import ClientsCarousel from "./ClientsCarousel"
import { useStaticQuery, graphql } from "gatsby"
import "../assets/scss/components/banners/single-service-banner.scss"
import BlockContent from "@sanity/block-content-to-react"
import useDeviceCheck from "../deviceCheck"
import KoalendarSecond from "./KoalendarSecond"

export default function ServicesPageBanner({ data }) {
  const carousel = useStaticQuery(graphql`
    query MyCombinedQuery2 {
      allSanityClientsCarousel(filter: { title: { eq: "Trusted by:" } }) {
        edges {
          node {
            _id
            title
            clientsLogos {
              _key
              asset {
                _id
                url
              }
            }
          }
        }
      }
    }
  `)
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
  const carouselData =
    carousel?.allSanityClientsCarousel?.edges[0]?.node || null
  const { title, subtitle, videoR2, gradientColor } = data

  if (!carouselData) {
    return null
  }

  return (
    <div
      className="d-flex flex-column scroll-show margin-top services-single-banner text-white"
      style={{
        background: `linear-gradient(180deg, #2b2b2b 0%, ${gradientColor?.hex} 100%)`,
      }}
    >
      <div
        className={`desktop-row d-flex align-items-center justify-content-between desktop-padding mb-4 ${
          !isMobile ? "pt-5 px-5" : "pt-4 px-4"
        }`}
      >
        <div className="d-flex flex-column gap">
          <h1 className="title my-0 p-0 d-flex justify-content-start text-left h2-styling">
            <BlockContent
              blocks={title}
              serializers={{
                marks: {
                  strong: props => (
                    <span
                      className="mb-0 h2-styling"
                      style={{ color: "#67BE83" }}
                    >
                      {props.children}
                    </span>
                  ),
                },
              }}
            />
          </h1>
          <p className="subtitle banner-sub mt-0">{subtitle}</p>
          <KoalendarSecond
                buttonText="Schedule an Audit Call"
                showButton={true}
                onClick={handleModalClick}
                className="contact-us-link button-padding"
                onButtonClick={handleKoalendarPosition}
                positionStyles={
                  cardPosition
                    ? {
                        top: `${cardPosition.top}px`,
                        left: `${cardPosition.left}px`,
                        transform: "translate(-50%, -50%)",
                      }
                    : {}
                }
              />
        </div>

        {videoR2 && (
          <div className="video-container">
            <video
              src={videoR2?.asset?.fileURL}
              width="100%"
              height="100%"
              autoPlay
              playsInline
              loop
              muted
              controls={false}
              style={{ pointerEvents: "none" }}
            ></video>
          </div>
        )}
      </div>
      {!isMobile && (
        <hr
          className="mx-5"
          style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
        />
      )}
      <ClientsCarousel data={carouselData} />
    </div>
  )
}
