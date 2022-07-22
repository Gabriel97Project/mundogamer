import React from 'react'
import { NewsBoxStyle } from './NewsOneStyle';
type newsProps = {
    link: string;
    image: string;
    title: string;
    titlelink: string;
 }   


function NewsOne({link, image, title, titlelink}:newsProps) {
  return (
   <NewsBoxStyle>

        <a href={link}>
            <img  src={image}/>
        </a>
        <h2 className='TextClassStyle'>
            <a href={titlelink}>{title}</a>
        </h2>
    </NewsBoxStyle>
  )
}





export default NewsOne
