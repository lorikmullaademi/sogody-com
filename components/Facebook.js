import React from "react"
import { FacebookProvider, EmbeddedPost } from "react-facebook"

export default function (props) {
  const { link } = props
  return (
    <div className="fb-post">
      <FacebookProvider appId="137216658270071">
        <EmbeddedPost href={link} />
      </FacebookProvider>
    </div>
  )
}
