import React, { useState, useEffect } from "react"
import blackArrow from "../assets/svgs/black-arrow.svg"
import whiteArrow from "../assets/svgs/white-arrow.svg"
import greenArrow from "../assets/svgs/Arrow.svg"

const CircularButton = ({
  isHovered,
  type,
  slug,
  variant = "default",
  onClick,
  rotated = false,
}) => {
  const [absoluteUrl, setAbsoluteUrl] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined" && slug) {
      const url =
        type === "custom"
          ? `${slug}`
          : type === "work"
          ? `/work/${slug}/`
          : type === "services"
          ? `/services/${slug}/`
          : `/updates/${slug}/`

      setAbsoluteUrl(url?.startsWith("/") ? window.location.origin + url : url)
    }
  }, [slug, type])

  const circularBtnContainerClass =
    variant === "green-black" || variant === "green-white"
      ? "circular-btn-container green-black"
      : "circular-btn-container"

  const handleClick = e => {
    if (onClick) {
      e.preventDefault()
      onClick(e)
    }
  }

  return (
    <a
      href={slug ? absoluteUrl : "#"}
      className={`circular-btn-container circular-custom ${variant}`}
      onClick={handleClick}
    >
      <div
        className={`circular-btn circular-btn-default ${variant} ${
          isHovered ? "hovered" : ""
        }`}
      >
        <span
          className="arrow-icon"
          style={{
            transform: rotated ? "rotate(40deg)" : "none",
          }}
        >
          <img
            src={
              variant === "green-black" || variant === "green-white"
                ? isHovered
                  ? whiteArrow
                  : greenArrow
                : variant === "black"
                ? isHovered
                  ? greenArrow
                  : whiteArrow
                : isHovered
                ? whiteArrow
                : blackArrow
            }
            alt="Arrow Icon"
          />
        </span>
      </div>
    </a>
  )
}

export default CircularButton
