import React from "react"
import { TwitterTweetEmbed } from "react-twitter-embed"

export default function (props) {
  const { link } = props
  return (
    <div className="tweet-post">
      <TwitterTweetEmbed tweetId={link} />
    </div>
  )
}
