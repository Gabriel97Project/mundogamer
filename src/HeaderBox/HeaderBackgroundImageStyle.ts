import { url } from "inspector";
import styled, {  } from "styled-components";
import fundoSite from  "../../src/ImageBackHeader/fundoSite.jpg"

export const ImageBackHeader= styled.div`
width:100%;
height:100%;
background-image: url(${fundoSite});
background-repeat:no-repeat;
background-size:cover;
display:flex;
flex-direction:column;
align-items:center;


img{
    width:30%;
    @media(max-width: 1000px) {
        
        width:40%;
       
        
} 
}
`

export const TitleBoxBackHeader= styled.div`
width:40%;
height:100px;
//background-color:white;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
margin-bottom:3%;
@media(max-width: 1000px) {
       
        width:20%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        
} 


`

export const TitleOneBackHeader= styled.div`
width:45%;
height:100%;
//background-color:gold;
display:flex;
flex-direction:row;
justify-content:center;
margin-bottom:30%;

.titleHeaderOne{
    font-size:70px;
    
    font-family: 'Courier New', Courier, monospace;
    @media(max-width: 1000px) {
        font-size:50px;
        width:50%;
        display:flex;
        align-items:center;
        justify-content:flex-end;
       
        
} 
}

`

export const TitleTwoBackHeader= styled.div`
width:45%;
height:100%;
//background-color:green;
display:flex;
flex-direction:row;

margin-bottom:15%;
.titleHeaderTwo{
    color:black;
    font-size:70px;
    font-family: 'Courier New', Courier, monospace;
    @media(max-width: 1000px) {
        font-size:50px;
        width:50%;
} 
}
`