import React, { useState } from "react"
import "../assets/scss/components/book-banner.scss"
import InitKoalendar from "./init-koalendar"
import ExploreLink from "./ExploreLink"

const BookMeeting = ({ sendProjectDetailsText = "Schedule an Audit Call" }) => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div className="container book-banner">
      <p className="text-green cta-description2 font-increase scroll-show">
        Book a <span className="italic">Free</span> 30-minute strategy session
      </p>
      <div className="buttons">
        <InitKoalendar
          className="contact-us-link padding mob-width hover-state button-padding"
          onClick={() => setModalShow(true)}
          showButton={true}
          iframeSrc="https://cal.com/sogody/30min"
        >
          Set up a Meeting
        </InitKoalendar>

        <ExploreLink to="/contact" text={sendProjectDetailsText} />
      </div>
    </div>
  )
}

export default BookMeeting
