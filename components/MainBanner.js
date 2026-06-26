import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../assets/scss/components/main-banner.scss"
import ClientsCarousel from "./ClientsCarousel"
import ExploreLink from "./ExploreLink"
import InitKoalendar from "./init-koalendar"

const MainBanner = () => {
  const data = useStaticQuery(graphql`
    query MyCombinedQuery {
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
      allSanityMainBanner {
        edges {
          node {
            id
            title
            subtitle
            mediaR2 {
              asset {
                fileURL
              }
            }
          }
        }
      }
    }
  `)
  
  const carouselData = data?.allSanityClientsCarousel?.edges[0]?.node || null
  
  const firstNode = data.allSanityMainBanner.edges[0]?.node
  if (!firstNode) return null

  const title = firstNode?.title
  const subtitle = firstNode?.subtitle

  return (
    <div className="banner-padding text-center scroll-show">
      <div className="banner-styling" key={firstNode?.id}>
        <h1 className="banner-title">
          {title}
        </h1>
        <p className="subtitle container">{subtitle}</p>
      </div>

      <div className="book-meeting d-flex justify-content-center">
        <div className="buttons">
          <InitKoalendar
            className="contact-us-link padding mob-width hover-state button-padding"
            showButton={true}
            iframeSrc="https://cal.com/sogody/30min"
          >
            Schedule a Strategy Call
          </InitKoalendar>
          <ExploreLink to="/work" text="Explore Our Work" />
        </div>
      </div>
      <div className="container-mainbanner banner-carousel-div">
        <video
          src={firstNode?.mediaR2?.asset?.fileURL}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          height="400px"
          className="border-radius"
          style={{ width: "100%", objectFit: "cover", pointerEvents: "none" }}
        ></video>
        <ClientsCarousel data={carouselData} />
      </div>
    </div>
  )
}

export default MainBanner
