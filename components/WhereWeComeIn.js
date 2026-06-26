import React from "react"
import "../assets/scss/components/where-we-come-in.scss"
import { graphql, useStaticQuery } from "gatsby"

const WhereWeComeIn = () => {
  const data = useStaticQuery(graphql`
    query WhereWeComeInQuery {
      allSanityWhereWeComeIn {
        edges {
          node {
            id
            label
            darkText
            lightText
          }
        }
      }
    }
  `);
  
  const { label, darkText, lightText } = data?.allSanityWhereWeComeIn?.edges?.[0]?.node;

  return (
    <section className="where-we-come-in-section">
      <div className="where-we-come-in-wrapper">
        <p className="where-we-come-in-text">
          <span className="where-we-come-in-label">
            {label}
          </span>

          <span className="where-we-come-in-text-strong">
            {darkText}
          </span>

          <span className="where-we-come-in-text-light">
            {" "}
            {lightText}
          </span>
        </p>
      </div>
    </section>
  )
}

export default WhereWeComeIn
