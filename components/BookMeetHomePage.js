import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Row } from "react-bootstrap"
import InitKoalendar from "./init-koalendar"
import "../assets/scss/components/book-meet.scss"

const BookMeetHomepage = ({ hasPadding = true }) => {
  const data = useStaticQuery(query)
  const {
    allSanityBookMeetHomepage: { nodes: bookMeet },
  } = data
  const extraPadding = bookMeet[0].extraPadding

  const containerPadding = !hasPadding 
   ? {
    paddingLeft: 0,
    paddingRight: 0
   } : 
   {};
  return (
    <div
      className={`cta-meet`}
    >
      <div className="cta-meet-container" style={containerPadding}>
        <div className="cta-meet-content">
          <div className="cta-meet-content-column">
            <h2 className="cta-meet-content--title">{bookMeet[0].title}</h2>
          </div>
          <div className="cta-meet-content-column">
            <p className="cta-meet-content--description">
              {bookMeet[0].description}
            </p>
          </div>
          <div className="cta-meet-content-column">
            <InitKoalendar
              showButton={true}
              className="contact-us-link button-padding"
              buttonText={bookMeet[0].aText}
              iframeSrc={bookMeet[0].aHref}
            ></InitKoalendar>
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allSanityBookMeetHomepage {
      nodes {
        title
        author
        authorPosition
        description
        aHref
        aText
        extraPadding
        image {
          asset {
            url
          }
        }
      }
    }
  }
`
export default BookMeetHomepage
