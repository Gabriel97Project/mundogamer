import React from 'react'
import { /* FifthDivSeparateStyle */ DivSeparateStyle, /* FourtDivSeparateStyle,
     SecondDivSeparateStyle, SixthDivSeparateStyle, ThirdDivSeparateStyle  */} 
from './ThreeDivsOneStyle'


type FirstDivProps = {
    titleOne: string;
    imageOne: string;
    linkOne: string;
    imageLink: string;

}

type SecondDivProps = {
    titleTwo: string;
    imageTwo: string;
    linkTwo: string;
    imageLinkTwo: string;

}

type ThirdDivProps = {
    titleThree: string;
    imageThree: string;
    linkThree: string;
    imageLinkThree: string;

}

type FourthDivProps = {
    titleFour: string;
    imageFour: string;
    linkFour: string;
    imageLinkFour: string;

}

type FifthDivProps={
    imageFive:string;
    imageLinkFive:string;
    linkFive:string;
    titleFive:string;
}

type SixthDivProps={
    imageSix:string;
    imageLinkSix:string;
    linkSix:string;
    titleSix:string;
}


function ThreeDivsFirst({ titleOne, imageOne, imageLink, linkOne }: FirstDivProps) {
    return (

        <DivSeparateStyle>
            
            <a href={imageLink}>
                <img src={imageOne}/>
            </a>
            <h2 className='TitleOneClass'> 
                <a href={linkOne}>{titleOne}</a>
            </h2>
        </DivSeparateStyle>


    )
}

export default ThreeDivsFirst

export function ThreeDivsSecond({ titleTwo, imageTwo, imageLinkTwo, linkTwo }: SecondDivProps) {
    return (

        <DivSeparateStyle>
            <a href={imageLinkTwo}>
                <img src={imageTwo}/>
            </a>
            <h2 className='TitleFirstClass'>
                <a href={linkTwo}>{titleTwo} </a>
            </h2>
        </DivSeparateStyle>

    )
}

export function ThreeDivsThird({ titleThree, imageThree, imageLinkThree, linkThree}: ThirdDivProps) {
    return (

        <DivSeparateStyle>
            <a href={imageLinkThree}>
                <img src={imageThree}/>
            </a>
            <h2 className='TitleFirstClass'>
                <a href={linkThree}>{titleThree} </a>
            </h2>
        </DivSeparateStyle>
    )
}


export function ThreeDivsFour({ titleFour, imageFour, imageLinkFour, linkFour}: FourthDivProps) {
    return (

        <DivSeparateStyle>
            <a href={imageLinkFour}>
                <img src={imageFour}/>
            </a>
            <h2 className='TitleFirstClass'>
                <a href={linkFour}>{titleFour} </a>
            </h2>
        </DivSeparateStyle>

    )
}

export function ThreeDivsFive({imageLinkFive,linkFive,imageFive,titleFive}:FifthDivProps) {
    return (

        <DivSeparateStyle>
            <a href={imageLinkFive}>
                <img src={imageFive}/>
            </a>
            <h2 className='TitleFirstClass'>
                <a href={linkFive}>{titleFive} </a>
            </h2>
      </DivSeparateStyle>

    )
}

export function ThreeDivsSix({imageLinkSix,linkSix,imageSix,titleSix}:SixthDivProps) {
    return (

        <DivSeparateStyle>
            <a href={imageLinkSix}>
                <img src={imageSix}/>
            </a>
            <h2 className='TitleFirstClass'>
                <a href={linkSix}>{titleSix} </a>
            </h2>
        </DivSeparateStyle>

    )
}

