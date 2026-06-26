import React, { useState } from "react"
import { Badge, Col, Container, Row } from "react-bootstrap"

import {
  LinkedinShareButton,
  EmailShareButton,
  TwitterShareButton,
} from "react-share"

import { CopyToClipboard } from "react-copy-to-clipboard"

const ShareButtons = ({
  title,
  url,
  summary,
  body,
  shareText = "Share this job posting",
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <div className="networks">
      <Container>
        <div className="our-networks">
          <p className="subtitle">{shareText}</p>
        </div>
        <Row className="text-center share-networks-row">
          <Col className="d-flex justify-content-center" md={2} lg={2}>
            <EmailShareButton
              className="share-network"
              subject={title}
              body={body}
              separator=" "
            >
              <img
                src={require("../assets/images/networks/email.svg").default}
                alt="Logo"
              />
              <span className="subtitle p-0 green">Email</span>
            </EmailShareButton>
          </Col>
          <Col className="d-flex justify-content-center" md={2} lg={2}>
            <LinkedinShareButton
              className="share-network"
              url={url}
              title={title}
              summary={summary}
            >
              <img
                src={require("../assets/images/networks/linkedin.svg").default}
                alt="Logo"
              />
              <span className="subtitle p-0 green">Share</span>
            </LinkedinShareButton>
          </Col>
          <Col className="d-flex justify-content-center" md={2} lg={2}>
            <CopyToClipboard
              className="share-network"
              text={url}
              onCopy={() => setCopied(!copied)}
            >
              <div>
                <img
                  className="share-link-img"
                  src={require("../assets/images/networks/share.svg").default}
                  alt="Logo"
                />
                <span className="subtitle p-0 green" onClick={handleCopy}>
                  {copied ? "Link copied" : "Share link"}
                </span>
              </div>
            </CopyToClipboard>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default ShareButtons
