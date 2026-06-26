import React from "react"
import "../assets/style.css"
import { Row, Col, Container } from "react-bootstrap"
import { sanityClient } from "../../nodes/sanityClient"
import imageUrlBuilder from "@sanity/image-url"

export default function ({ data }) {
  const pageImage = data?.Images

  if (!pageImage) return <></>

  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <div className="platforms">
      <Container>
        <div className="content-box">
          <p className="title">{data?.title}</p>
          <div className="platforms-col">
            {pageImage?.map((pageImage, index) => {
              return (
                <div className="platform">
                  <img
                    src={urlFor(pageImage?.asset).url()}
                    alt="Logo"
                    key={index}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}
