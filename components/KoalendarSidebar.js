import React, { useEffect } from "react"
import closeBtn from "../assets/images/close-button.svg"
import CalEmbed from "./CalEmbed"

const KoalendarSidebar = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="koalendar-sidebar-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <aside
        className="koalendar-sidebar"
        onClick={e => e.stopPropagation()}
      >
        <div className="koalendar-sidebar-header">
          <p>
            Contact
          </p>
          <button className="koalendar-close-btn" onClick={onClose}>
            <img src={closeBtn} alt="Close Koalendar" />
          </button>
        </div>
        <div className="koalendar-sidebar-content">
          <CalEmbed />
        </div>
      </aside>
    </div>
  )
}

export default KoalendarSidebar
