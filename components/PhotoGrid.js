import React from "react"
import { Row, Col } from "react-bootstrap"
import "../assets/scss/components/photo-grid.scss"
import useDeviceCheck from "../deviceCheck"

const mediaItems = [
  {
    src:
      "https://cdn.sanity.io/images/3hfxs7a8/production/66b79267d3977e3bcf9e4eac81729759e308ffb9-1227x1435.webp",
    alt: "photo 1",
    column: 1,
    type: "image",
  },
  {
    src:
      "https://cdn.sanity.io/images/3hfxs7a8/production/5f45b3a37d99633fab06695d0aaf6a45376f6e87-1216x1428.webp",
    alt: "photo 2",
    column: 1,
    type: "image",
  },
  {
    src:
      "https://cdn.sanity.io/images/3hfxs7a8/production/492a0da25ab2f3b10b4f91629179c84a44b11f9b-1232x680.webp",
    alt: "photo 3",
    column: 2,
    type: "image",
  },
  {
    src:
      "https://files.sogody.co.uk/2025-04-18T11-48-33.797Z-Optimized_grid-4-1.mp4",
    alt: "video 4",
    column: 2,
    type: "video",
  },
  {
    src:
      "https://cdn.sanity.io/images/3hfxs7a8/production/2b2f6329bb6b9ce522f98e4f0926295999e2dde4-1212x1024.webp",
    alt: "photo 5",
    column: 2,
    type: "image",
  },
  {
    src:
      "https://cdn.sanity.io/images/3hfxs7a8/production/fc963ed714fd48d674d2bbc6b1c903928b88fd71-1227x1435.webp",
    alt: "photo 6",
    column: 3,
    type: "image",
  },
  {
    src:
      "https://cdn.sanity.io/images/3hfxs7a8/production/82b85f096cba3fcf6d4a1a21ea9def67aa26b1de-1220x1428.webp",
    alt: "photo 7",
    column: 3,
    type: "image",
  },
]

const PhotoGrid = () => {
  const isSmallMobile = useDeviceCheck("small-mobile")
  const filteredItems = isSmallMobile ? mediaItems.slice(0, -2) : mediaItems

  const columns = [[], [], []]
  filteredItems.forEach(item => {
    columns[item.column - 1].push(item)
  })

  return (
    <Row className="photo-grid mt-2">
      {columns.map((columnItems, index) => (
        <Col
          key={index}
          xs={6}
          md={4}
          lg={4}
          className="photo-column d-flex flex-column justify-content-end"
        >
          {columnItems.map((item, idx) => (
            <div key={idx} className="photo">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="img-fluid"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  style={{ pointerEvents: "none" }}
                />
              ) : (
                <img src={item.src} alt={item.alt} className="img-fluid" />
              )}
            </div>
          ))}
        </Col>
      ))}
    </Row>
  )
}

export default PhotoGrid
