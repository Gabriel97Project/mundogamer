import React from 'react'
import { SideAnalysisBoxStyle, SideImageSizeStyle, SideTextSizeStyle } from './SideBottomBoxStyle'


type SideAnalysisProps = {
  SideAnalysisImageOne: string;
  SideAnalysisImageLinkOne: string;


}

type SideAnalysisTwoProps = {
  SideAnalysisImageTwo: string;
  SideAnalysisImageLinkTwo: string;


}

type SideAnalysisThreeProps = {
  SideAnalysisImageThree: string;
  SideAnalysisImageLinkThree: string;


}

type SideAnalysisFourProps = {
  SideAnalysisImageFour: string;
  SideAnalysisImageLinkFour: string;


}

type SideAnalysisFiveProps = {
  SideAnalysisImageFive: string;
  SideAnalysisImageLinkFive: string;


}

type SideAnalysisSixProps = {
  SideAnalysisImageSix: string;
  SideAnalysisImageLinkSix: string;


}

function SideBottomBoxOne({ SideAnalysisImageOne, SideAnalysisImageLinkOne }: SideAnalysisProps) {
  return (
    <SideAnalysisBoxStyle>
      <SideImageSizeStyle>
        <a href={SideAnalysisImageLinkOne}>
          <img src={SideAnalysisImageOne} />
        </a>
      </SideImageSizeStyle>
      <SideTextSizeStyle>
        <p>87</p>
      </SideTextSizeStyle>
    </SideAnalysisBoxStyle>
  )
}

export default SideBottomBoxOne


export function SideBottomBoxTwo({ SideAnalysisImageTwo, SideAnalysisImageLinkTwo }: SideAnalysisTwoProps) {
  return (
    <SideAnalysisBoxStyle>
      <SideImageSizeStyle>
        <a href={SideAnalysisImageLinkTwo}>
          <img src={SideAnalysisImageTwo} /> 
        </a>
      </SideImageSizeStyle>
      <SideTextSizeStyle>
        <p>89</p>
      </SideTextSizeStyle>
    </SideAnalysisBoxStyle>
  )
}


export function SideBottomBoxThree({ SideAnalysisImageThree, SideAnalysisImageLinkThree }: SideAnalysisThreeProps) {
  return (
    <SideAnalysisBoxStyle>
      <SideImageSizeStyle>
        <a href={SideAnalysisImageLinkThree}>
          <img src={SideAnalysisImageThree} />
        </a>
      </SideImageSizeStyle>
      <SideTextSizeStyle>
        <p>88</p>
      </SideTextSizeStyle>
    </SideAnalysisBoxStyle>
  )
}


export function SideBottomBoxFour({ SideAnalysisImageFour, SideAnalysisImageLinkFour }: SideAnalysisFourProps) {
  return (
    <SideAnalysisBoxStyle>
      <SideImageSizeStyle>
        <a href={SideAnalysisImageLinkFour}>
          <img src={SideAnalysisImageFour} />
        </a>
      </SideImageSizeStyle>
      <SideTextSizeStyle>
        <p>89</p>
      </SideTextSizeStyle>
    </SideAnalysisBoxStyle>
  )
}

export function SideBottomBoxFive({ SideAnalysisImageFive, SideAnalysisImageLinkFive }: SideAnalysisFiveProps) {
  return (
    <SideAnalysisBoxStyle>
      <SideImageSizeStyle>
        <a href={SideAnalysisImageLinkFive}>
          <img src={SideAnalysisImageFive} />
        </a>
      </SideImageSizeStyle>
      <SideTextSizeStyle>
        <p>87</p>
      </SideTextSizeStyle>
    </SideAnalysisBoxStyle>
  )
}

export function SideBottomBoxSix({ SideAnalysisImageSix, SideAnalysisImageLinkSix }: SideAnalysisSixProps) {
  return (
    <SideAnalysisBoxStyle>
      <SideImageSizeStyle>
        <a href={SideAnalysisImageLinkSix}>
          <img src={SideAnalysisImageSix} />
        </a>
      </SideImageSizeStyle>
      <SideTextSizeStyle>
        <p>87</p>
      </SideTextSizeStyle>
    </SideAnalysisBoxStyle>
  )
}