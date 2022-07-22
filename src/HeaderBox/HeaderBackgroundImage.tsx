import React from 'react'
import ControlSiteImage from "../../src/ImageBackHeader/ControlSiteImage.png"
import { ImageBackHeader, TitleBoxBackHeader, TitleOneBackHeader, TitleTwoBackHeader } from './HeaderBackgroundImageStyle'
import { HeaderboxStyle } from './HeaderBoxStyle'
import HeaderIcons from './HeaderIcons'

function HeaderBackImage() {
  return (
    <ImageBackHeader>
      <img src={ControlSiteImage} alt="Control png Image" />

      <TitleBoxBackHeader>
        <TitleOneBackHeader>
          <h1 className='titleHeaderOne'>MUNDO</h1>
        </TitleOneBackHeader>
        <TitleTwoBackHeader>
          <h1 className='titleHeaderTwo' >GAMER</h1>
        </TitleTwoBackHeader>
      </TitleBoxBackHeader>
      <HeaderboxStyle>
        <HeaderIcons />
      </HeaderboxStyle>
    </ImageBackHeader>
  )
}

export default HeaderBackImage
