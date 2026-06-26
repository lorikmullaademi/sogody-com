import React, { useState } from "react"
import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from "react-share"
import { CopyToClipboard } from "react-copy-to-clipboard"
import shareIcon from "../assets/svgs/share.svg"

const ShareLinks = ({ title, url, summary, body }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="networks d-flex">
      <div className="d-flex">
        <CopyToClipboard
          className="share-network"
          text={url}
          onCopy={handleCopy}
        >
          <div className="d-flex">
            <p className="text-green underlined mb-0">
              {copied ? "Link copied" : "Share link"}
            </p>
            <img className="share-icon" src={shareIcon} alt="Share Icon" />
          </div>
        </CopyToClipboard>
      </div>
      <div>
        <FacebookShareButton
          className="share-network-img"
          url={url}
          title={title}
        >
          <img
            src={require("../assets/images/social-icons/facebook.svg").default}
            alt="Logo"
          />
        </FacebookShareButton>
      </div>
      <div>
        <TwitterShareButton
          className="share-network-img"
          url={url}
          title={title}
        >
          <img
            src={
              require("../assets/images/social-icons/x-logo-footer-transparent.svg")
                .default
            }
            alt="Logo"
          />
        </TwitterShareButton>
      </div>
      <div>
        <LinkedinShareButton
          className="share-network-img"
          url={url}
          title={title}
          summary={summary}
        >
          <img
            src={require("../assets/images/social-icons/linkedin.svg").default}
            alt="Logo"
          />
        </LinkedinShareButton>
      </div>
    </div>
  )
}

export default ShareLinks
