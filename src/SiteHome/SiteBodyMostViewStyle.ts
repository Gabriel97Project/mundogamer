import styled, { } from "styled-components"

export const MostViewsStyle = styled.div`

display:flex;
flex-direction:column;

overflow-x:hidden;
width:100%;
height:100%;

color:red;
  @media(max-width: 930px) {
    
    margin-top:0px;
    
    
  } 
   @media(max-width: 700px) {
   
  height:100%;
   
  }  
 
  
  
  
`
export const ButtonBoxStyle = styled.div`
  width: 100%;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  //background-color:bisque;
  margin-top: 10px;
  .textMostViewClass{
    color:white;
    margin-left:1%;
    @media(max-width: 930px) {
    display:none;
    
   
   
  }
 }
  div{
    width:33%;
    height:55%;
    //background-color:blue;
    display:flex;
      flex-direction:row;
      justify-content:space-between;
      margin-right:2%;
     
    button{
      width:30%;
      height:100%;
     
    }

    @media(max-width: 930px) {
        display:none;
  }
  }
`



interface type {
  pixels: string;
}


export const ViewsBoxChangerAvoStyle = styled.div`
  width:890px;
  height:250px;
  //background-color:rgba(0,0,0,0.001);
  //background-color:black;
  display:flex;
  overflow-x:hidden;
  flex-direction:row;
  margin-left:2%;
  
  @media(max-width: 930px) {
    display:none;

   
  } 
 
  
`

export const ViewsBoxBisavoChangerStyle = styled.div`

 
 width:100%;
 height:15%;
 
 background-color:black;
 display:flex;
 justify-content:center;
 justify-content:space-around;
 @media(max-width: 930px) {
    display:none;
   
   
  }
`
export const ViewsBoxPaiChangerStyle = styled.div<type>`

 
 width:2165x;
 height:90%;
 background-color:black;
 display:flex;
 flex-direction:row;
 
 

 
 position:relative;
  right:${({ pixels }) => pixels};
  transition:  0.5s;
 .BoxesSizeStyle{
    width:900px;
 }
 
  @media(max-width: 930px) {
        display:none;
        
  } 
 
`
export const ViewsBoxChangerthreeStyle = styled.div`
  width:850px;
  height:90%;
  display:flex;
  flex-direction:row;
  align-items:center;
  background-color:black;
  margin-top:30px;
  
  
  `
export const ViewsBoxChangerfourStyle = styled.div`
 width:850px;
  height:90%;
 background-color:black;
 display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  margin-top:30px;
 
  
 
 
 

`
export const ViewsBoxChangerFiveStyle = styled.div`
width:850px;
background-color:black;
height:100%;
display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  margin-top:25px;


`







export const MostViewsPartsStyle = styled.div`

display:flex;
flex-direction:row;
margin-left:1%;
//background-color:greenyellow;
width:98%;
height:38%;
h2{
  font-size:18px;
}
@media(max-width: 930px) {
   width:100%;
   height:15%;
   display:flex;
   flex-direction:row;
   
  } 
@media(max-width: 700px) {
   width:100%;
   height:40%;
   display:flex;
   flex-direction:column;
   
  } 

`

export const MostViewsPartOne = styled.div`


//background-color:black;
width:50%;
height:70%;
a:link, a:visited {
  color: white;
  text-decoration: none;
  display: inline-block;
}
  
  a:hover {
  color: red;
  
}
@media(max-width: 700px) {
   width:100%;
   height:100%;
   

  
   
  } 
/* /* .MostViewsDivClass{
   width:100%;
   height:1%;
   display:flex;
   flex-direction:column;
   align-items:center; 
   
@media(max-width: 700px) {
       
  margin-top:50px;

}}*/
 

img{
    width:150px;
    height:100px;
   
    
        @media(max-width: 700px) {
        width:200px;
        height:120px;
         

}}
`



export const MostViewsPartTwo = styled.div`


//background-color:black;
width:50%;
height:70%;
align-items:center;
   a:link, a:visited {
  color: white;
  text-decoration: none;
  display: inline-block;
}
  
  a:hover {
  color: red;
  
}
@media(max-width: 700px) {

   width:100%;
   height:100%;
  }
   
  img{
    width:150px;
    height:100px;
    
        @media(max-width: 700px) {
        width:200px;
        height:120px;
         

}}
`

export const TitleMoreStyle = styled.div`

color:white;

margin-left:1%;




`

export const BottomNewsStyle = styled.div`
width:100%;
height:3500px;
//background-color:blueviolet;
display:flex;
flex-direction:row;
justify-content:space-between;

@media(max-width: 930px) {
       
height: 100%;
}

`