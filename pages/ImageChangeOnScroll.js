import React from 'react'
import ImageToggleOnScroll from "../src/ImageToggleOnScroll"

const ImageChangeOnScroll = () => {
  return (
    <div>
      {["react-code-2.jpg", "react-logo.jpg", "nodejs.jpg"].map(imgId => {
        return (
          <div key={imgId}>
            <ImageToggleOnScroll
              primaryImg={`/static/react-img/black-white/${imgId}`}
              secondaryImg={`/static/react-img/color/${imgId}`}
              alt=""
            />
          </div>
        )
      })}
    </div>
  )
}

export default ImageChangeOnScroll
