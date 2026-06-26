import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Container } from "react-bootstrap"

const Footer = () => {
  const data = useStaticQuery(query)
  const today = new Date()

  const careers = data.allSanityCareers.nodes
  const total = careers.filter(
    careers => new Date(careers.date) >= today || careers.hideDate
  ).length

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-block">
            <p className="title-white bolder-font">
              <Link href="/contact">General Enquiries</Link>
            </p>
            <p className="title-white bolder-font">
              <Link href="/careers/">Careers</Link>
            </p>
          </div>

          <div className="footer-block">
            <p className="title-gray">
              <Link href="/privacy/">Privacy</Link>
            </p>
            <p className="title-gray">
              <Link href="/terms/">Terms</Link>
            </p>
          </div>

          <div className="footer-block">
            <p className="title-gray">+383 49 460 555</p>
            <p className="title-gray">
              <a
                href="https://maps.app.goo.gl/ZEHEmCnksmfbmTTe6"
                target="_blank"
                rel="noreferrer"
              >
                Prishtina, Kosovo
              </a>
            </p>
          </div>

          <div className="footer-block">
            <p className="title-gray">+44 20 8133 3315</p>
            <p className="title-gray">
              <a
                href="https://maps.app.goo.gl/KrzqzpbgdJtJ121C6"
                target="_blank"
                rel="noreferrer"
              >
                London, United Kingdom
              </a>
            </p>
          </div>

          <div className="footer-block">
            <p className="title-gray">
              <a href="mailto:info@sogody.com">info@sogody.com</a>
            </p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/sogodycom/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../assets/images/social-icons/facebook.svg")
                      .default
                  }
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/sogodycom/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../assets/images/social-icons/instagram.svg")
                      .default
                  }
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/sogody"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../assets/images/social-icons/linkedin.svg")
                      .default
                  }
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://bsky.app/profile/sogody.bsky.social"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={
                    require("../assets/images/social-icons/bluesky.svg")
                      .default
                  }
                  alt="Bluesky"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="title-gray">
            &copy; {today.getFullYear()} Sogody. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export const query = graphql`
  {
    allSanityCareers {
      nodes {
        date
        hideDate
      }
    }
  }
`

export default Footer
