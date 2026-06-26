import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import "../assets/scss/components/services-categories.scss"
import ExploreLink from "./ExploreLink"
import ServiceCategoryCard from "./ServiceCategoryCard"
import useDeviceCheck from "../deviceCheck"

const ServicesCategories = () => {
  const data = useStaticQuery(graphql`
    query servicesQuery {
      allSanityServicesCategories {
        nodes {
          mainTitle
          subtitle
          categories {
            category
            slug {
              current
            }
            keyPoints {
              children {
                text
              }
            }
            cardVideosR2 {
              video {
                asset {
                  fileURL
                }
              }
            }
            techSlider {
              techDescription
              techIcon {
                asset {
                  url
                }
              }
              techName
            }
          }
          buttonText
        }
      }
    }
  `)
  const isMobile = useDeviceCheck()

  return (
    <div className="services-categories">
      {data.allSanityServicesCategories.nodes.map((categoryData, index) => (
        <div key={index} className="category-item">
          <div className="content-wrapper d-flex justify-content-between w-100 mb-3">
            <h1 className="title h2-styling">{categoryData.mainTitle}</h1>
            <span>
              <ExploreLink openCalendar text={categoryData.buttonText} />
              {!isMobile && <p className="subtitle">{categoryData.subtitle}</p>}
            </span>
          </div>
          <div className="categories-list">
            {categoryData.categories.map((category, categoryIndex) => (
              <ServiceCategoryCard
                key={categoryIndex}
                category={category}
                categoryIndex={categoryIndex}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServicesCategories
