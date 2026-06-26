import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import metaImageOg from "../assets/images/overall.png"

export const Seo = ({ description, keywords, title, image, url, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = url || data.site.siteMetadata.url
        const metaImage = image || metaImageOg
        const metaKeywords = keywords || ["Sogody site", "Sogody web"]

        return (
          <Helmet
            title={title}
            htmlAttributes={{ lang: "en" }}
            defer={false}
            meta={[
              // {
              //     name :`google-site-verification`,
              //     content:`8dM3PjygVN2ThyAbbl7api4ajMTPwlT8zG0wN2tpJ-8`
              // },
              {
                name: `title`,
                content: metaTitle,
              },
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: metaAuthor,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
              {
                name: `linkedin:image`,
                content: metaImage,
              },
            ].concat(
              metaImage
                ? [
                    {
                      property: "og:image",
                      content: image,
                    },
                    {
                      property: "og:image:width",
                      content: "1200",
                      //content: metaImage.width,
                    },
                    {
                      property: "og:image:height",
                      content: "630",
                      //content: metaImage.height,
                    },
                    {
                      name: "twitter:card",
                      content: "summary_large_image",
                    },
                  ]
                : [
                    {
                      name: "twitter:card",
                      content: "summary",
                    },
                  ]

              // .concat(
              //     metaKeywords && metaKeywords.length > 0 ? {
              //         name:`keywords`,
              //         content: metaKeywords.join(`, `),
              //     }:[]
            )}
          >
            <link rel="canonical" href={metaUrl} />
          </Helmet>
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOquery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`
