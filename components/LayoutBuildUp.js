import React from "react"
import Footer from "./Footer"
import "../assets/style.css"
import HeaderBuildUp from "./Header_BuilUp"
import BupExpectations from "./buildup/BupExpectations"

const LayoutBuildUp = ({ children }) => {
  return (
    <div className="layout-container">
      <HeaderBuildUp />
      {children}
      <BupExpectations />
      <Footer />
    </div>
  )
}

export default LayoutBuildUp
