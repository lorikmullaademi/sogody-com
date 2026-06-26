import React from "react"
import { Row, Col, Container, Button } from "react-bootstrap"
import { sanityClient } from "../../../nodes/sanityClient"
import imageUrlBuilder from "@sanity/image-url"

export default function ({ data }) {
  const dataImage = data.Images
  const builder = imageUrlBuilder(sanityClient)
  function urlFor(source) {
    return builder.image(source)
  }

  const [modalShow, setModalShow] = React.useState(false)

  return (
    <div className="services-banner">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6} className="banner-title">
            <h1 className="name">{data?.title}</h1>
            {data?.highlightedHeading && (
              <span> {data?.highlightedHeading} </span>
            )}
            <p> {data?.description} </p>
            {data?.href ? (
              <Button href={data?.href} className="banner-btn">
                {" "}
                {data?.btnText}{" "}
              </Button>
            ) : (
              <Button onClick={() => setModalShow(true)} className="banner-btn">
                {" "}
                {data?.btnText}{" "}
              </Button>
            )}
          </Col>
          <Col xs={12} md={12} lg={6} className="banner-img-ctn">
            {dataImage?.map(dataImage => {
              return (
                <div>
                  <img
                    src={urlFor(dataImage?.asset).url()}
                    alt="banner image"
                  />
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
