import React from "react"
import { Col, Container, Row, Card } from "react-bootstrap"

const CardComponent = ({ title, cards }) => {
  return (
    <div className="card-component mt-5">
      <h2 className="title pt-0 flex-grow-1 text-left w-100 justify-content-start">
        {title}
      </h2>
      <Row className="card-component-row">
        {cards.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={6} className="mb-4">
            <Card className="location-cards px-3">
              <Row>
                <Col xs={12} md={8} lg={6}>
                  <img
                    src={card.imageUrl}
                    className="location-card-img mx-auto d-flex"
                    alt={`Card image ${index + 1}`}
                  />
                </Col>
                <Col
                  xs={12}
                  md={6}
                  className="d-flex flex-column justify-content-center align-items-start"
                >
                  <p
                    className="card-title pr-4 mt-0"
                    style={{ lineHeight: "22px" }}
                  >
                    {card.text1}
                  </p>
                  <div
                    className="d-flex flex-column justify-content-between"
                    style={{ gap: "5px" }}
                  >
                    {card.text2Link ? (
                      <a
                        href={card.text2Link}
                        className="subtitle font-difference dark-green-hover"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {card.text2}
                      </a>
                    ) : (
                      <p className="subtitle font-difference dark-green-hover">
                        {card.text2}
                      </p>
                    )}
                    {card.text3 && (
                      <a
                        href={`https://wa.me/${card.text3.replace(/\D/g, "")}`}
                        className="subtitle font-difference dark-green-hover"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {card.text3}
                      </a>
                    )}
                    <p className="subtitle font-difference">{card.text4}</p>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default CardComponent
