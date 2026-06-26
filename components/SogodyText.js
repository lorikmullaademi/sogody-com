import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../assets/style.css"
import { PortableText } from "@portabletext/react"
import InitKoalendar from "./init-koalendar"

export default function SogodyText() {
  const data = useStaticQuery(query)
  const {
    allSanitySogodyIntro: { nodes: si },
  } = data

  const myPortableTextComponents = {
    block: {
      normal: ({ children }) => <p className="title">{children}</p>,
    },
  }

  return (
    <div className="sogody-text">
      <div className="title-container scroll-show">
        <h2 className="story-title">Our Story</h2>
      </div>
      <div className="content-container">
        {si.map(si => (
          <PortableText
            key={si.id}
            value={si._rawTitle}
            components={myPortableTextComponents}
          />
        ))}

        <InitKoalendar
          showButton={true}
          className="contact-us-link button-padding"
          buttonText="Work with us"
        ></InitKoalendar>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allSanitySogodyIntro {
      nodes {
        _rawTitle
        id
      }
    }
  }
`
