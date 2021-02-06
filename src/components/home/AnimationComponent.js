import React, { Component } from 'react'
import { Lottie } from '@crello/react-lottie'
import animationData from './data.json'

class AnimationComponent extends Component {

  render() {
    const defaultOptions = {
      animationData: animationData,
      path: './data.json',
      renderer: 'svg',
      loop: false,
      autoplay: true,
      name: 'start',
      rendererSettings: 'SVGRendererConfig'
    }

    return (
      <div>
        <Lottie config={defaultOptions}/>
      </div>
    )
  }
}

export default AnimationComponent