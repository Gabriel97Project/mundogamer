import React from 'react'
import { SiteBestGamesContentImageStyle, SiteBestGamesContentStyle } from './SiteBestGamesContentStyle'


type SiteContentPropsOne={
    SiteContentImageOne :string;
    SiteContentTitleOne:string;
    SiteContentTitleLinkOne:string;
    SiteContentNoteOne:String;
    SiteContentTextOne:string;
    SiteContentSecondTitleOne:string;
    SiteContentSecondTextOne:string;
    SiteContentSecondImage:string;
}
type SiteContentPropsTwo={
  SiteContentImageTwo :string;
  SiteContentTitleTwo:string;
  SiteContentTitleLinkTwo:string;
  SiteContentNoteTwo:String;
  SiteContentTextTwo:string;
  SiteContentSecondTitleTwo:string;
  SiteContentSecondTextTwo:string;
  SiteContentSecondImageTwo:string;
}
type SiteContentPropsThree={
  SiteContentImageThree :string;
  SiteContentTitleThree:string;
  SiteContentTitleLinkThree:string;
  SiteContentNoteThree:String;
  SiteContentTextThree:string;
  SiteContentSecondTitleThree:string;
  SiteContentSecondTextThree:string;
  SiteContentSecondImageThree:string;
}
type SiteContentPropsFour={
  SiteContentImageFour :string;
  SiteContentTitleFour:string;
  SiteContentTitleLinkFour:string;
  SiteContentNoteFour:String;
  SiteContentTextFour:string;
  SiteContentSecondTitleFour:string;
  SiteContentSecondTextFour:string;
  SiteContentSecondImageFour:string;
}
type SiteContentPropsFive={
  SiteContentImageFive :string;
  SiteContentTitleFive:string;
  SiteContentTitleLinkFive:string;
  SiteContentNoteFive:String;
  SiteContentSecondTitleFive:string;
  SiteContentSecondTextFive:string;
  SiteContentSecondImageFive:string;
}



function SiteBestGamesContent({SiteContentImageOne,SiteContentTitleOne,SiteContentTitleLinkOne,
    SiteContentNoteOne,SiteContentTextOne,SiteContentSecondTitleOne,SiteContentSecondTextOne,SiteContentSecondImage}:SiteContentPropsOne) {
  return (
    <SiteBestGamesContentStyle>
        <h2>
          <a href={SiteContentTitleLinkOne}>{SiteContentTitleOne}</a> 
        </h2>
        <h3>{SiteContentNoteOne}</h3>
        <SiteBestGamesContentImageStyle>
          <img src={SiteContentImageOne}/>
          <img src={SiteContentSecondImage}/>
        </SiteBestGamesContentImageStyle>
        <p>{SiteContentTextOne}</p>
        <h3>{SiteContentSecondTitleOne}</h3>
        <p>{SiteContentSecondTextOne}</p>
        
    </SiteBestGamesContentStyle>
  )
}

export default SiteBestGamesContent

 export function SiteBestGamesContentTwo({SiteContentImageTwo,SiteContentTitleTwo,SiteContentTitleLinkTwo,
  SiteContentNoteTwo,SiteContentTextTwo,SiteContentSecondTitleTwo,SiteContentSecondTextTwo,SiteContentSecondImageTwo}:SiteContentPropsTwo) {
return (
  <SiteBestGamesContentStyle>
      <h2>
        <a href={SiteContentTitleLinkTwo}>{SiteContentTitleTwo}</a>
      </h2>
      <h3>{SiteContentNoteTwo}</h3>
      <SiteBestGamesContentImageStyle>
        <img src={SiteContentImageTwo}/>
        <img src={SiteContentSecondImageTwo}/>
      </SiteBestGamesContentImageStyle>
      <p>{SiteContentTextTwo}</p>
      <h3>{SiteContentSecondTitleTwo}</h3>
      <p>{SiteContentSecondTextTwo}</p>
      
  </SiteBestGamesContentStyle>
)
}

export function SiteBestGamesContentThree({SiteContentImageThree,SiteContentTitleThree,SiteContentTitleLinkThree,
  SiteContentNoteThree,SiteContentTextThree,SiteContentSecondTitleThree,SiteContentSecondTextThree,SiteContentSecondImageThree}:SiteContentPropsThree) {
return (
  <SiteBestGamesContentStyle>
      <h2>
        <a href={SiteContentTitleLinkThree}>{SiteContentTitleThree}</a>
      </h2>
      <h3>{SiteContentNoteThree}</h3>
      <SiteBestGamesContentImageStyle>
        <img src={SiteContentImageThree}/>
        <img src={SiteContentSecondImageThree}/>
      </SiteBestGamesContentImageStyle>
      <p>{SiteContentTextThree}</p>
      <h3>{SiteContentSecondTitleThree}</h3>
      <p>{SiteContentSecondTextThree}</p>
      
  </SiteBestGamesContentStyle>
)
}

export function SiteBestGamesContentFour({SiteContentImageFour,SiteContentTitleFour,SiteContentTitleLinkFour,
  SiteContentNoteFour,SiteContentTextFour,SiteContentSecondTitleFour,SiteContentSecondTextFour,SiteContentSecondImageFour}:SiteContentPropsFour) {
return (
  <SiteBestGamesContentStyle>
      <h2>
        <a href={SiteContentTitleLinkFour}>{SiteContentTitleFour}</a>
      </h2>
      <h3>{SiteContentNoteFour}</h3>
      <SiteBestGamesContentImageStyle>
        <img src={SiteContentImageFour}/>
        <img src={SiteContentSecondImageFour}/>
      </SiteBestGamesContentImageStyle>
      <p>{SiteContentTextFour}</p>
      <h3>{SiteContentSecondTitleFour}</h3>
      <p>{SiteContentSecondTextFour}</p>
      
  </SiteBestGamesContentStyle>
)
}

export function SiteBestGamesContentFive({SiteContentImageFive,SiteContentTitleFive,SiteContentTitleLinkFive,
  SiteContentNoteFive,SiteContentSecondTitleFive,SiteContentSecondTextFive,SiteContentSecondImageFive}:SiteContentPropsFive) {
return (
  <SiteBestGamesContentStyle>
      <h2>
        <a href={SiteContentTitleLinkFive}>{SiteContentTitleFive}</a>
      </h2>
      <h3>{SiteContentNoteFive}</h3>
      <SiteBestGamesContentImageStyle>
        <img src={SiteContentImageFive}/>
        <img src={SiteContentSecondImageFive}/>
      </SiteBestGamesContentImageStyle>
    
      <h3>{SiteContentSecondTitleFive}</h3>
      <p>{SiteContentSecondTextFive}</p>
      
  </SiteBestGamesContentStyle>
)
}