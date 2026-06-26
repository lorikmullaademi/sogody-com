import React from "react"
import { Nav } from "react-bootstrap"
import { useKoalendarSidebar } from "../context/KoalendarSidebarContext"

const ContactNav = () => {
  const { openSidebar } = useKoalendarSidebar()

  return (
    <Nav className="contact-div">
      <div className="nav-contact">
        <button
          className="contact-us-link pt-0"
          onClick={openSidebar}
        >
          <span className="c-us">Contact Us</span>
        </button>
      </div>
    </Nav>
  )
}

export default ContactNav
