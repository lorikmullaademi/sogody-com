import React from "react"
import { Row, Col } from "react-bootstrap"
import ClientsCarousel from "./ClientsCarousel"
import useDeviceCheck from "../deviceCheck"
import InitKoalendar from "./init-koalendar"

const BannerWork = ({
  title,
  subtitle,
  carouselData,
  bgImage,
  href,
  buttonText = "Schedule an Audit Call",
}) => {
  const isMobile = useDeviceCheck("mobile")
  const isTablet = useDeviceCheck("tablet")
  return (
    <div className="container-mainbanner">

      <div
        className="banner-work text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Row>
          <Col xs={12} className="banner-title">
            <h1 className="name mb-1 h2-styling">{title}</h1>
            <p
              className={`subtitle margin-addition ${
                isMobile ? "w-100" : isTablet ? "w-70" : "w-50"
              }`}
            >
              {subtitle}
            </p>
            <InitKoalendar
              showButton={true}
              variant="green-white"
              className="contact-us-link button-padding"
              buttonText={buttonText}
            ></InitKoalendar>
          </Col>
        </Row>
        {!isMobile && (
          <hr
            className="mx-5"
            style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
          />
        )}
        {carouselData && <ClientsCarousel data={carouselData} />}
      </div>
    </div>
  )
}

export default BannerWork
