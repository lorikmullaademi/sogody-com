import React, { useState } from "react"
import { Link } from "gatsby"
import blackArrow from "../assets/svgs/black-arrow.svg"
import greenArrow from "../assets/svgs/Arrow.svg"
import { useKoalendarSidebar } from "../context/KoalendarSidebarContext"

const ExploreLink = ({
  to,
  href,
  underlined = true,
  text = "Explore Our Work",
  openInNewTab = false,
  className = "",
  openCalendar = false,
}) => {
  const [hovered, setHovered] = useState(false)
  const { openSidebar } = useKoalendarSidebar();

  const commonProps = {
    className: "explore-link green-hover",
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    "aria-label": text,
  }

  const content = (
    <>
      <span
        className={`text-padding d-flex align-items-center explore-link-text ${
          underlined ? "underlined" : ""
        } ${className}`}
      >
        {text}
      </span>
      <span className="arrow-icon arrow-span-styling">
        <img src={hovered ? greenArrow : blackArrow} alt="Arrow Icon" />
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} {...commonProps}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target={openInNewTab ? "_blank" : "_self"}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        {...commonProps}
      >
        {content}
      </a>
    )
  }

  if (openCalendar) {
    return (
      <button type="button" {...commonProps} className={commonProps.className + ' explore-button'} onClick={openSidebar}>
        {content}
      </button>
    )
  }

  return null
}

export default ExploreLink
