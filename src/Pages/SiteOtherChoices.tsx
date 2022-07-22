import React from 'react'
import { OtherChoicesPageContentStyle, OtherChoicesPagesContentImageStyle } from './SiteOtherBestContent'

type SiteOtherChoicesProps = {
    SiteOtherContentTextOne:string;
    SiteOtherContentNoteOne:string;
    SiteOtherContentTitleLinkOne:string;
    SiteOtherContentSecondImageOne:string;
    SiteOtherContentImageOne:string;
    SiteOtherContentTitleOne:string;
    SiteOtherContentSecondTitleOne:string;

}
type SiteOtherChoicesTwoProps = {
    SiteOtherContentTextTwo:string;
    SiteOtherContentNoteTwo:string;
    SiteOtherContentTitleLinkTwo:string;
    SiteOtherContentSecondImageTwo:string;
    SiteOtherContentImageTwo:string;
    SiteOtherContentTitleTwo:string;
    SiteOtherContentSecondTitleTwo:string;

}
type SiteOtherChoicesThreeProps = {
    SiteOtherContentTextThree:string;
    SiteOtherContentNoteThree:string;
    SiteOtherContentTitleLinkThree:string;
    SiteOtherContentSecondImageThree:string;
    SiteOtherContentImageThree:string;
    SiteOtherContentTitleThree:string;
    SiteOtherContentSecondTitleThree:string;

}
type SiteOtherChoicesFourProps = {
    SiteOtherContentTextFour:string;
    SiteOtherContentNoteFour:string;
    SiteOtherContentTitleLinkFour:string;
    SiteOtherContentSecondImageFour:string;
    SiteOtherContentImageFour:string;
    SiteOtherContentTitleFour:string;
    SiteOtherContentSecondTitleFour:string;

}
type SiteOtherChoicesFiveProps = {
    SiteOtherContentTextFive:string;
    SiteOtherContentNoteFive:string;
    SiteOtherContentTitleLinkFive:string;
    SiteOtherContentSecondImageFive:string;
    SiteOtherContentImageFive:string;
    SiteOtherContentTitleFive:string;
    SiteOtherContentSecondTitleFive:string;

}

function SiteOtherChoices({SiteOtherContentTitleOne,SiteOtherContentImageOne,SiteOtherContentSecondImageOne,
    SiteOtherContentTitleLinkOne,SiteOtherContentNoteOne,SiteOtherContentTextOne,SiteOtherContentSecondTitleOne}:SiteOtherChoicesProps) {
  return (
    <OtherChoicesPageContentStyle>
        <h2>
            <a href={SiteOtherContentTitleLinkOne}>
                {SiteOtherContentTitleOne}
            </a>
        </h2>
        <h3>{SiteOtherContentNoteOne}</h3>
        <OtherChoicesPagesContentImageStyle>
            <img src ={SiteOtherContentImageOne}/>
            <img src ={SiteOtherContentSecondImageOne}/>
        </OtherChoicesPagesContentImageStyle>
        <h3>{SiteOtherContentSecondTitleOne}</h3>
        <p>{SiteOtherContentTextOne}</p>
    </OtherChoicesPageContentStyle>
  )
}

export default SiteOtherChoices

export function SiteOtherChoicesTwo({SiteOtherContentTitleTwo,SiteOtherContentImageTwo,SiteOtherContentSecondImageTwo,
    SiteOtherContentTitleLinkTwo,SiteOtherContentNoteTwo,SiteOtherContentTextTwo,SiteOtherContentSecondTitleTwo}:SiteOtherChoicesTwoProps) {
  return (
    <OtherChoicesPageContentStyle>
        <h2>
            <a href={SiteOtherContentTitleLinkTwo}>
                {SiteOtherContentTitleTwo}
            </a>
        </h2>
        <h3>{SiteOtherContentNoteTwo}</h3>
        <OtherChoicesPagesContentImageStyle>
            <img src ={SiteOtherContentImageTwo}/>
            <img src ={SiteOtherContentSecondImageTwo}/>
        </OtherChoicesPagesContentImageStyle>
        <h3>{SiteOtherContentSecondTitleTwo}</h3>
        <p>{SiteOtherContentTextTwo}</p>
    </OtherChoicesPageContentStyle>
  )
}


export function SiteOtherChoicesThree({SiteOtherContentTitleThree,SiteOtherContentImageThree,SiteOtherContentSecondImageThree,
    SiteOtherContentTitleLinkThree,SiteOtherContentNoteThree,SiteOtherContentTextThree,SiteOtherContentSecondTitleThree}:SiteOtherChoicesThreeProps) {
  return (
    <OtherChoicesPageContentStyle>
        <h2>
            <a href={SiteOtherContentTitleLinkThree}>
                {SiteOtherContentTitleThree}
            </a>
        </h2>
        <h3>{SiteOtherContentNoteThree}</h3>
        <OtherChoicesPagesContentImageStyle>
            <img src ={SiteOtherContentImageThree}/>
            <img src ={SiteOtherContentSecondImageThree}/>
        </OtherChoicesPagesContentImageStyle>
        <h3>{SiteOtherContentSecondTitleThree}</h3>
        <p>{SiteOtherContentTextThree}</p>
    </OtherChoicesPageContentStyle>
  )
}

export function SiteOtherChoicesFour({SiteOtherContentTitleFour,SiteOtherContentImageFour,SiteOtherContentSecondImageFour,
    SiteOtherContentTitleLinkFour,SiteOtherContentNoteFour,SiteOtherContentTextFour,SiteOtherContentSecondTitleFour}:SiteOtherChoicesFourProps) {
  return (
    <OtherChoicesPageContentStyle>
        <h2>
            <a href={SiteOtherContentTitleLinkFour}>
                {SiteOtherContentTitleFour}
            </a>
        </h2>
        <h3>{SiteOtherContentNoteFour}</h3>
        <OtherChoicesPagesContentImageStyle>
            <img src ={SiteOtherContentImageFour}/>
            <img src ={SiteOtherContentSecondImageFour}/>
        </OtherChoicesPagesContentImageStyle>
        <h3>{SiteOtherContentSecondTitleFour}</h3>
        <p>{SiteOtherContentTextFour}</p>
    </OtherChoicesPageContentStyle>
  )
}

export function SiteOtherChoicesFive({SiteOtherContentTitleFive,SiteOtherContentImageFive,SiteOtherContentSecondImageFive,
    SiteOtherContentTitleLinkFive,SiteOtherContentNoteFive,SiteOtherContentTextFive,SiteOtherContentSecondTitleFive}:SiteOtherChoicesFiveProps) {
  return (
    <OtherChoicesPageContentStyle>
        <h2>
            <a href={SiteOtherContentTitleLinkFive}>
                {SiteOtherContentTitleFive}
            </a>
        </h2>
        <h3>{SiteOtherContentNoteFive}</h3>
        <OtherChoicesPagesContentImageStyle>
            <img src ={SiteOtherContentImageFive}/>
            <img src ={SiteOtherContentSecondImageFive}/>
        </OtherChoicesPagesContentImageStyle>
        <h3>{SiteOtherContentSecondTitleFive}</h3>
        <p>{SiteOtherContentTextFive}</p>
    </OtherChoicesPageContentStyle>
  )
}
