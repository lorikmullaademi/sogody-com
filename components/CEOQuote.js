import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../assets/scss/components/ceo-quote.scss"
import InitKoalendar from "./init-koalendar"

const CEOQuote = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityCeoQuote {
        nodes {
          mainText
          image {
            asset {
              url
            }
          }
          authorReference1 {
            author
            authorPosition
          }
        }
      }
    }
  `)

  const { mainText, image, authorReference1 } = data.allSanityCeoQuote.nodes[0]

  return (
    <div className="ceo-quote-container">
      <div className="image-container">
        {image?.asset?.url && (
          <div
            className="image-wrapper w-75"
            style={{
              backgroundImage: `url(${image.asset.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        )}
      </div>
      <div className="text-container">
        <div className="small-text-container">
          <p className="small-text subtitle smaller2 mb-1">
            {authorReference1?.author} / {authorReference1?.authorPosition}
          </p>
        </div>
        <div className="main-text">
          <p>{mainText}</p>
        </div>
        <InitKoalendar
          showButton={true}
          className="contact-us-link button-padding"
          buttonText="Set up a Meeting"
        ></InitKoalendar>
      </div>
    </div>
  )
}

export default CEOQuote
