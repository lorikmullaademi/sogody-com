import React from "react"
import "../assets/scss/components/clients-carousel.scss"

const ClientsCarousel = ({ data }) => {
  if (!data || !data.clientsLogos || data.clientsLogos.length === 0) {
    return <div>No client logos available.</div>
  }

  return (
    <div className="clients-carousel">
      <div className="carousel-container">
        <div className="title-wrapper">
          <p className="title-styling subtitle">{data.title}</p>
        </div>
        <div className="carousel-slider-wrapper">
          <div className="logo-slider">
            <div className="slider-track">
              {data.clientsLogos.map((logo, index) =>
                logo.asset?.url ? (
                  <div key={index} className="logo-item">
                    <img
                      src={logo.asset.url}
                      alt={`Client logo ${index + 1}`}
                    />
                  </div>
                ) : null
              )}
              {data.clientsLogos.map((logo, index) =>
                logo.asset?.url ? (
                  <div key={`clone-${index}`} className="logo-item">
                    <img
                      src={logo.asset.url}
                      alt={`Client logo ${index + 1}`}
                    />
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientsCarousel
