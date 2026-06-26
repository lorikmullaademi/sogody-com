import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import Link from "react-bootstrap"

const LinkHeader = ({ mark, children }) => (
  <span id={mark?.href} className="link">
    {children}
  </span>
)

const smallText = ({ mark, children }) => (
  <small id={mark?.small} className="small-text">
    {children}
  </small>
)

const ImageRenderer = ({ node }) => {
  return (
    // <img className="img" srcSet={getImagePath(node, true)} alt={node.alt} />
    <img className="img" srcSet={node} alt={node.alt} />
  )
}

const ButtonRenderer = ({ node: { btnLink, btnTitle } }) => (
  <Link to={btnLink} className="button">
    {btnTitle}
  </Link>
)

const highlight = props => (
  <span style={{ backgroundColor: props.mark.color }}>{props.children}</span>
)

const ColorRender = node => {
  return React.createElement(node._type, { style: { color: node.mark.hex } }, [
    ...node.children,
  ])
}

const serializers = {
  types: {
    image: ImageRenderer,
    limitedImage: ImageRenderer,
    button: ButtonRenderer,
  },
  marks: {
    sectionHeader: LinkHeader,
    color: ColorRender,
    highlight: highlight,
    small: smallText,
  },
}

const RichText = ({ className, blocks, _serializers }) => {
  return (
    <BlockContent
      className={className}
      blocks={blocks}
      serializers={_serializers || serializers}
    />
  )
}

export default RichText
