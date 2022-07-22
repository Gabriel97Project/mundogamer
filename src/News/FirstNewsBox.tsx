import React from 'react'

import { FirstNewsBoxStyle, FirstNewsSideBoxStyle } from './FirstNewsBoxStyle'

type FirstNewsProps = {
    link:string;
    image:string;
    title:string;
    titlelink:string;
  
  }
  type SecondNewsProps = {
    linkSideTwo:string;
    imageSideTwo:string;
    titleSideTwo:string;
    titlelinkSideTwo:string;
  
  }
  type ThirdNewsProps = {
    linkSideThree:string;
    imageSideThree:string;
    titleSideThree:string;
    titlelinkSideThree:string;
  
  }
  type FourthNewsProps = {
    linkSideFour:string;
    imageSideFour:string;
    titleSideFour:string;
    titlelinkSideFour:string;
  
  }
  type FifthNewsProps = {
    linkSideFive:string;
    imageSideFive:string;
    titleSideFive:string;
    titlelinkSideFive:string;
  
  }

function FirstNewsBox({link,image,title,titlelink}:FirstNewsProps) {
    return (
        <FirstNewsBoxStyle>
            <a href={link}>
                <img src={image} />
            </a>
            <div className="HomeFrontPostDiv">
                < a href={titlelink}>
                     {title}
                </a>
            </div>
        </FirstNewsBoxStyle>
    )
}

export default FirstNewsBox

export function FirstNewsSideBox({link,image,titlelink,title}:FirstNewsProps){
    return(
        <FirstNewsSideBoxStyle>
            <a href={link}>
                <img src={image}/>
            </a>
            <a href={titlelink}>
                {title}
            </a>
        </FirstNewsSideBoxStyle>
    )
}
export function SecondNewsSideBox({linkSideTwo,imageSideTwo,titlelinkSideTwo,titleSideTwo}:SecondNewsProps){
    return(
        <FirstNewsSideBoxStyle>
            <a href={linkSideTwo}>
                <img src={imageSideTwo}/>
            </a>
            <a href={titlelinkSideTwo}>
                {titleSideTwo}
            </a>
        </FirstNewsSideBoxStyle>
    )
}
export function ThirdNewsSideBox({linkSideThree,imageSideThree,titlelinkSideThree,titleSideThree}:ThirdNewsProps){
    return(
        <FirstNewsSideBoxStyle>
            <a href={linkSideThree}>
                <img src={imageSideThree}/>
            </a>
            <a href={titlelinkSideThree}>
                {titleSideThree}
            </a>
        </FirstNewsSideBoxStyle>
    )
}
export function FourthNewsSideBox({linkSideFour,imageSideFour,titlelinkSideFour,titleSideFour}:FourthNewsProps){
    return(
        <FirstNewsSideBoxStyle>
            <a href={linkSideFour}>
                <img src={imageSideFour}/>
            </a>
            <a href={titlelinkSideFour}>
                {titleSideFour}
            </a>
        </FirstNewsSideBoxStyle>
    )
}
export function FifthNewsSideBox({linkSideFive,imageSideFive,titlelinkSideFive,titleSideFive}:FifthNewsProps){
    return(
        <FirstNewsSideBoxStyle>
            <a href={linkSideFive}>
                <img src={imageSideFive}/>
            </a>
            <a href={titlelinkSideFive}>
                {titleSideFive}
            </a>
        </FirstNewsSideBoxStyle>
    )
}
