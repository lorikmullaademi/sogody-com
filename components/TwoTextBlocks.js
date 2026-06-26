import React from "react"
import { Col, Container, Row } from "react-bootstrap"

export default function (props) {
  const { rightText, leftText } = props
  return (
    <div className="two-texts">
      <Container>
        <div className="two-texts-container">
          <Row>
            <Col xs={12} md="12" lg="6">
              <Row>
                <div className="left-text-b">
                  <p>{leftText}</p>
                </div>
              </Row>
            </Col>
            <Col xs={12} md="12" lg="6" style={{ padding: "unset" }}>
              <div className="right-text-b">
                <p>{rightText}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
