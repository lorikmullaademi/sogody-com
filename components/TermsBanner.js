import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { createPortal } from "react-dom";
import closeBtn from "../assets/images/close-button-2.svg";

export default function TPBanner() {
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false); // 🔐 browser-only flag

  useEffect(() => {
    // Ensure we're in the browser
    setIsBrowser(typeof window !== "undefined");

    const idleCallback = window.requestIdleCallback || function (cb) {
      return setTimeout(cb, 3000);
    };

    const timeoutId = idleCallback(() => {
      if (!localStorage.getItem("pop_status")) {
        setVisible(true);
      }
      setShouldRender(true);
    });

    return () => {
      if (window.cancelIdleCallback) {
        window.cancelIdleCallback(timeoutId);
      } else {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!isBrowser || !shouldRender || !visible) return null;

  return createPortal(
    <div
      className="tp-banner"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "0 100px",
        visibility: "hidden",
        animation: "tpFadeIn 0.3s ease forwards",
      }}
    >
      <div className="tp-banner-container">
        <p className="tp-banner-text-1">
          By using our website, you acknowledge that you have read, and do
          hereby accept the terms and conditions contained in this.
        </p>
        <p className="tp-banner-text">
          Check out{" "}
          <Link to="/terms/" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
        </p>
        <a
          href="#"
          className="tp-close-icon"
          onClick={(e) => {
            e.preventDefault();
            localStorage.setItem("pop_status", 1);
            setVisible(false);
          }}
        >
          <img src={closeBtn} alt="close button" />
        </a>
      </div>
    </div>,
    document.body
  );
}