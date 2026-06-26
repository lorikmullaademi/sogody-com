import React, { useState, useEffect } from "react"
import useServicesPageModules from "../queries/useServicesPageModules"
import componentMap from "../utils/componentMap"

const Module = ({ moduleData, type }) => {
  const [currentHandle, setCurrentHandle] = useState(null)
  const pages = useServicesPageModules()

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/").filter(Boolean)
    const handlePath = `/${pathSegments.join("/")}/`
    setCurrentHandle(handlePath)
  }, [])

  const normalize = str => str?.replace(/^\/|\/$/g, "")

  let servicesPageBannerData = null

  if (currentHandle && pages.length > 0) {
    const matchedPage = pages.find(node => {
      const sanityHandle = normalize(node.handle?.current)
      const localHandle = normalize(currentHandle)
      return sanityHandle === localHandle
    })

    servicesPageBannerData = matchedPage?.modules?.find(
      mod => mod._type === "servicesPageBanner"
    )
  }

  const RequestedModule = componentMap[type]

  if (!RequestedModule) return <span>{type}</span>

  const extraProps = {
    "bookMeetHomepage": {
      hasPadding: false
    }
  }

  const passedData =
    type === "servicesPageBanner"
      ? servicesPageBannerData || moduleData
      : moduleData

  if (type === "technologiesUsed") {
    return (
      <div
        className="section-technologies-used"
      >
        <div className="container-mainbanner">
          <RequestedModule data={passedData} {...extraProps[type]} />
        </div>
      </div>
    )
  }

  return (
    <div
      className={
        type === "managedSharedServices"
          ? ""
          : "container-mainbanner"
      }
    >
      <RequestedModule data={passedData} {...extraProps[type]} />
    </div>
  )
}

export default Module
