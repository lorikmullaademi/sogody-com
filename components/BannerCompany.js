import React, { useRef, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import useDeviceCheck from "../deviceCheck"
import ExploreLink from "./ExploreLink"
import { Container } from "react-bootstrap"
import { VscMute, VscUnmute } from "react-icons/vsc"
import "../assets/scss/components/banners/banner-company.scss"

export default function BannerCompany() {
  const data = useStaticQuery(graphql`
    {
      allSanityBannerCompany {
        nodes {
          title
          youtubeURL
          bannerVideo {
            asset {
              fileURL
            }
          }
        }
      }
    }
  `)

  const isMobile = useDeviceCheck()
  const banner = data.allSanityBannerCompany.nodes[0]
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  if (!banner) return null

  return (
    <>
      <div className="banner-company video-wrapper">
        <video
          ref={videoRef}
          src={banner?.bannerVideo?.asset?.fileURL}
          autoPlay
          loop
          muted
          playsInline
          className="border-radius"
          height={isMobile? "auto": 500}
          style={{ width: "100%", objectFit: isMobile ? "contain" : "cover" }}
        />
        <div className="mute-toggle" onClick={toggleMute}>
          {isMuted ? <VscMute size={32} /> : <VscUnmute size={32} />}
        </div>
      </div>
      <div className="youtube-section-container">
        <div className="youtube-section">
          <div className="youtube-container">
            <p className="title">
              Check our latest campaign{" "}
              {/* <span className="quote">"By 2030, average won’t be enough."</span> */}
            </p>
            <ExploreLink href={banner?.youtubeURL} text="Watch on YouTube" openInNewTab />
          </div>
        </div>
      </div>
    </>
  )
}
