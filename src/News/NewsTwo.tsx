import { NewsBoxTwoStyle } from "./NewsTwoStyle";



type newsPropsTwo = {
    linkTwo:string;
    imageTwo:string;
    titleTwo:string;
    titlelinkTwo:string;
  
  }



export default function NewsTwo({linkTwo, imageTwo, titleTwo, titlelinkTwo}:newsPropsTwo) {
    return (
      <NewsBoxTwoStyle>
         <a href={linkTwo}>
              <img  src={imageTwo}/>
          </a>
          <h2 className='TextClassTwoStyle'>
              <a href={titlelinkTwo}>{titleTwo}</a>
          </h2>
      </NewsBoxTwoStyle>
    )
  }
  
  