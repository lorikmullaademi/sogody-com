import React from "react"
import "../assets/scss/components/what-we-build.scss"
import { graphql, useStaticQuery } from "gatsby";

const WhatWeBuild = () => {
  const data = useStaticQuery(graphql`
    query WhatWeBuildQuery {
      allSanityWhatWeBuild {
        edges {
          node {
            id
            title
            mediaR2 {
              asset {
                fileURL
              }
            }
            items {
              description
              title
              label
            }
          }
        }
      }
    }
  `);

  const { title, mediaR2, items } = data?.allSanityWhatWeBuild?.edges?.[0]?.node

  return (
    <section className="what-we-build-section">
      <div className="what-we-build-wrapper">
        <div className="what-we-build-header">
          <p className="what-we-build-eyebrow">{title}</p>
        </div>
        <div className="what-we-build-card">
          <div className="what-we-build-left">
            <video
              className="what-we-build-video"
              src={mediaR2?.asset?.fileURL}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="what-we-build-right">
            {items.map(item => (
              <div className="what-we-build-row" key={item.label}>
                <div className="what-we-build-row-index">
                  <span>({item.label})</span>
                </div>
                <div className="what-we-build-row-main">
                  <h3 className="what-we-build-row-title">{item.title}</h3>
                </div>
                <div className="what-we-build-row-description">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuild


