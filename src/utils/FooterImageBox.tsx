import React from 'react'
import { FooterImageStyle } from './FooterImageBoxStyted'


type ImageFooterProps={
    FooterImage:string;
}

type ImageFooterTwoProps={
  SecondFooterImage:string;
}

type ImageFooterThreeProps={
  ThirdFooterImage:string;
}


function FooterImageBox({FooterImage}:ImageFooterProps) {
  return (
    <FooterImageStyle>
        <img src={FooterImage}/>
    </FooterImageStyle>
  )
}

export default FooterImageBox


export function FooterImageBoxTwo({SecondFooterImage}:ImageFooterTwoProps) {
  return (
    <FooterImageStyle>
        <img src={SecondFooterImage}/>
    </FooterImageStyle>
  )
}



export function FooterImageBoxThree({ThirdFooterImage}:ImageFooterThreeProps) {
  return (
    <FooterImageStyle>
        <img src={ThirdFooterImage}/>
    </FooterImageStyle>
  )
}
