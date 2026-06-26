import React, { useState } from "react"
import CircularButton from "./CircularButton"
import { useKoalendarSidebar } from "../context/KoalendarSidebarContext"

const InitKoalendar = ({
  buttonText,
  className,
  children,
  fromNavbar = false,
  showButton = false,
  href,
  variant = "green-black",
  blackButton = false,
}) => {
  const { openSidebar } = useKoalendarSidebar()

  const [isHovered, setIsHovered] = useState(false)

  const handleClick = event => {
    if (!href) {
      event?.preventDefault()
      openSidebar()
    }
  }

  return (
    <>
      <div className="d-flex init-circular-div">
        {showButton && (
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ marginRight: "-35px" }}
          >
            <CircularButton
              rotated={true}
              variant={variant}
              onClick={handleClick}
              isHovered={isHovered}
            />
          </div>
        )}
        <a
          href={href}
          className={`${className} ${
            blackButton ? "black-button" : ""
          } d-flex align-items-center justify-content-center`}
          onClick={href ? undefined : handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {buttonText}
          {children}
        </a>
      </div>
    </>
  )
}

export default InitKoalendar
