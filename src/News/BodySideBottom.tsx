import React from 'react'
import { BodySideBottomStyle, SideAnalysisTitle, SideFirstOneStyle, SideFirstStyle, /*  SideFiveStyle, SideFourStyle, SideThreeStyle, SideTwoStyle */ } from './BottomBodyStyle'
import SideBottomBox from "../mock/SideBottomBox.json"
import SideBottomBoxOne, { SideBottomBoxFive, SideBottomBoxFour, SideBottomBoxSix, SideBottomBoxThree, SideBottomBoxTwo } from '../utils/SideBottomBoxOne';

type NewsBottomProps = {
  children: React.ReactNode;
};

function BodySideBottom(props: NewsBottomProps) {
  return (
    <BodySideBottomStyle>
      <SideAnalysisTitle>
        <h1>Análises</h1>
      </SideAnalysisTitle>
      <SideFirstStyle>
        <SideFirstOneStyle>
          {SideBottomBox.SideBottomAnalysis.SideImageOne.map((SideBottomOneUnit, index: number) => {
            return (
              <SideBottomBoxOne key={`${index}-SideBottomOneUnit-key`} SideAnalysisImageLinkOne={SideBottomOneUnit.SideAnalysisImageLinkOne} SideAnalysisImageOne={SideBottomOneUnit.SideAnalysisImageOne} />
            )
          })}
        </SideFirstOneStyle>
        <SideFirstOneStyle>
          {SideBottomBox.SideBottomAnalysis.SideImageTwo.map((SideBottomTwoUnit, index: number) => {
            return (
              <SideBottomBoxTwo key={`${index}-SideBottomTwoUnit-key`} SideAnalysisImageLinkTwo={SideBottomTwoUnit.SideAnalysisImageLinkTwo}
                SideAnalysisImageTwo={SideBottomTwoUnit.SideAnalysisImageTwo} />
            )
          })}
        </SideFirstOneStyle>
        <SideFirstOneStyle>
          {SideBottomBox.SideBottomAnalysis.SideImageThree.map((SideBottomThreeUnit, index: number) => {
            return (
              <SideBottomBoxThree key={`${index}-SideBottomThreeUnit-key`} SideAnalysisImageLinkThree={SideBottomThreeUnit.SideAnalysisImageLinkThree}
                SideAnalysisImageThree={SideBottomThreeUnit.SideAnalysisImageThree} />
            )
          })}
        </SideFirstOneStyle>
        <SideFirstOneStyle>
          {SideBottomBox.SideBottomAnalysis.SideImageFour.map((SideBottomFourUnit, index: number) => {
            return (
              <SideBottomBoxFour key={`${index}-SideBottomFour-key`} SideAnalysisImageLinkFour={SideBottomFourUnit.SideAnalysisImageLinkFour}
                SideAnalysisImageFour={SideBottomFourUnit.SideAnalysisImageFour} />
            )
          })}
        </SideFirstOneStyle>
        <SideFirstOneStyle>
          {SideBottomBox.SideBottomAnalysis.SideImageFive.map((SideBottomFiveUnit, index: number) => {
            return (
              <SideBottomBoxFive key={`${index}-SideBottomBoxFive-key`} SideAnalysisImageLinkFive={SideBottomFiveUnit.SideAnalysisImageLinkFive}
                SideAnalysisImageFive={SideBottomFiveUnit.SideAnalysisImageFive} />
            )
          })}
        </SideFirstOneStyle>
        <SideFirstOneStyle>
          {SideBottomBox.SideBottomAnalysis.SideImageSix.map((SideBottomSixUnit, index: number) => {
            return (
              <SideBottomBoxSix key={`${index}-SideBottomBoxSix-key`} SideAnalysisImageLinkSix={SideBottomSixUnit.SideAnalysisImageLinkSix}
                SideAnalysisImageSix={SideBottomSixUnit.SideAnalysisImageSix} />
            )
          })}
        </SideFirstOneStyle>
      </SideFirstStyle>
      {/*  <SideTwoStyle></SideTwoStyle>
        <SideThreeStyle></SideThreeStyle>
        <SideFourStyle></SideFourStyle>
        <SideFiveStyle></SideFiveStyle> */}
    </BodySideBottomStyle>
  )
}

export default BodySideBottom
