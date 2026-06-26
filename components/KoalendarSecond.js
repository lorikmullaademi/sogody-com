import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import closeBtn from "../assets/images/close-button-2.svg";
import CircularButton from "./CircularButton";
import useDeviceCheck from "../deviceCheck";
import CalEmbed from "../components/CalEmbed";

const KoalendarSecond = ({
  buttonText,
  className,
  children,
  fromNavbar = false,
  showButton = false,
  href,
  variant = "green-black",
  blackButton = false,
  onButtonClick = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useDeviceCheck("mobile");

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = ""; 
  };

  const handleClick = () => {
    if (!href) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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
          className={`${className} ${blackButton ? "black-button" : ""} d-flex align-items-center justify-content-center`}
          onClick={href ? undefined : handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {buttonText}
          {children}
        </a>
      </div>

      {isOpen &&
  createPortal(
    <div
      style={getPopupStyles(fromNavbar, isMobile).overlay}
      onClick={(e) => e.stopPropagation()} 
    >
      <div
        style={getPopupStyles(fromNavbar, isMobile).modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={getPopupStyles(fromNavbar, isMobile).closeButton}
          onClick={handleClose}
        >
          <img
            src={closeBtn}
            alt="close button"
            style={{ maxWidth: "17px" }}
          />
        </button>
        <CalEmbed />
      </div>
    </div>,
    document.body
  )}
    </>
  );
};

const getPopupStyles = (fromNavbar, isMobile) => ({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: fromNavbar ? 80 : 0,
    background: fromNavbar ? "transparent" : "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContainer: {
    position: "relative",
    width: isMobile ? "90vw" : "70vw",
    paddingTop: "2rem",
    maxWidth: "1000px",
    height: "98vh",
    maxHeight: isMobile ? "500px" : "610px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    backgroundColor: "#0F0F0F",
    flexDirection: "column",
  },
  closeButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    top: "5px",
    right: "10px",
    zIndex: 1001,
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
    boxShadow: "none",
    pointerEvents: "auto",
  },
});

export default KoalendarSecond;