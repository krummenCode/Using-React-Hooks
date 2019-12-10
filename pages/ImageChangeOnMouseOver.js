import React from 'react'
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver"

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver primaryImg="/static/react-img/black-white/react-code-2-BW.jpg"
                              secondaryImg="/static/react-img/color/react-code-2.png"
                              alt="" />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver primaryImg="/static/react-img/black-white/react-logo-bw.jpg"
                              secondaryImg="/static/react-img/color/react-logo.jpg"
                              alt="" />
    </div>
  )
}

export default ImageChangeOnMouseOver
