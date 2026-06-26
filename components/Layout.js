import React, { useCallback, useEffect, useState } from "react"
import { useLocation } from "@reach/router"
import Header from "./Header"
import Footer from "./Footer"
import KoalendarSidebar from "./KoalendarSidebar"
import KoalendarSidebarContext from "../context/KoalendarSidebarContext"
import "../assets/style.css"

const Layout = ({ children, hideFooter = false }) => {
  const slugLocation = useLocation()
  const [isKoalendarOpen, setIsKoalendarOpen] = useState(false)

  const openSidebar = useCallback(() => setIsKoalendarOpen(true), [])
  const closeSidebar = useCallback(() => setIsKoalendarOpen(false), [])

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-show")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach(el => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <KoalendarSidebarContext.Provider
      value={{
        isOpen: isKoalendarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      <div className="layout-container">
        <Header />
        <div>{children}</div>
        {!hideFooter && <Footer />}
        <KoalendarSidebar isOpen={isKoalendarOpen} onClose={closeSidebar} />
      </div>
    </KoalendarSidebarContext.Provider>
  )
}

export default Layout
