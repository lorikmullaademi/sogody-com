import React from "react"
import { Row, Col } from "react-bootstrap"
import { sanityClient } from "../../nodes/sanityClient"
import imageUrlBuilder from "@sanity/image-url"
import "../assets/scss/components/project-details.scss"
import ExploreLink from "./ExploreLink"
import LinkedIn from "../assets/images/social-icons/linkedin-black.svg"

export default function ({ data }) {
  const projectDetails = data

  if (!projectDetails) return <></>

  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <div className="project-details d-flex flex-column align-items-center scroll-show mt-5 mb-3 py-3">
      <Row className="w-100">
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-around gap"
        >
          {projectDetails.logo && (
            <img
              src={urlFor(projectDetails.logo).url()}
              alt="Project Logo"
              className="project-logo"
            />
          )}

          <div className="d-flex gap-3">
            {projectDetails.founded && (
              <p className="founded-year d-flex flex-column m-0 mr-5">
                <span>Founded</span>{" "}
                <span className="subtitle m-0">{projectDetails.founded}</span>
              </p>
            )}
            {projectDetails.partners && (
              <p className="partners d-flex flex-column m-0">
                <span>Partners</span>{" "}
                <span className="subtitle m-0">{projectDetails.partners}</span>
              </p>
            )}
          </div>

          {projectDetails.intro && (
            <p className="intro-description m-0">{projectDetails.intro}</p>
          )}

          {projectDetails.linkedinHref && projectDetails.websiteHref && (
            <div className="d-flex">
              <a
                href={projectDetails.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedIn}
                  alt="LinkedIn Logo"
                  className="social-icon mr-3"
                />
              </a>
              <ExploreLink
                href={projectDetails.websiteHref}
                openInNewTab
                text="Visit site"
              />
            </div>
          )}
        </Col>

        <Col xs={12} md={6} className="d-flex flex-column">
          {projectDetails.investedDescription && (
            <p className="invested-description d-flex flex-column m-0">
              <span>Why we invested</span>{" "}
              <span className="subtitle mt-1">
                {projectDetails.investedDescription}
              </span>
            </p>
          )}

          {projectDetails.image && (
            <img
              src={urlFor(projectDetails.image).url()}
              alt="Project Main"
              className="main-image mt-3"
            />
          )}
        </Col>
      </Row>
    </div>
  )
}
