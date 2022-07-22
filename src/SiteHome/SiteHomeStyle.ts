import styled, { } from 'styled-components'



export const PrincipalBodySiteBox= styled.div`
display:flex;
flex-direction:column;
background-color:#1d2329;
width:100%;
height:3000px;
h1{
  color:white;
  font-size:40px;
  margin-left:1%;
  @media(max-width: 1000px) {
    
    margin-left:0px;
    font-size:25px; 

    
  } 
  @media(max-width: 700px) {
    
    font-size:20px; 

    
  } 

}
`


export const SiteHomePrincipalTwo = styled.div`
width:100%;
height:20.5%;
background-color:black;
display:flex;
flex-direction:row;

@media(max-width: 1030px) {
 
       
 width:100%;
 height:17%;  
 
 

}
@media(max-width: 930px) {
 
       
 width:100%;
 height:17%;   

}
@media(max-width: 700px) {
 
       
 font-size:20px;  
 height:15%; 

}


`


export const SiteHomeTop = styled.div`
width:80%;
height:25%;
display:flex;

justify-content:center;
  
  a:link, a:visited {
  color: black;
  text-decoration: none;
  display: inline-block;
}
  
  a:hover {
  color: red;
  
}
img{
  width:100%;
}

@media(max-width: 700px) {
 
       
    width:100%;
    height:50%;
    margin:0px;   
   
}
`

export const SiteHomeTopSide = styled.div`
width:30%;
display:flex;
justify-content:center;
@media(max-width: 700px) {
  display:none;
   
  } 
`

export const SiteHomeTopSidePosts = styled.div`
width:92%;
height:100%;
display:flex;
flex-direction:column;
overflow-y:scroll;
&::-webkit-scrollbar {
      width: 10px; 
   }

&::-webkit-scrollbar-track {
    background-color:#1d2329;
    border-radius: 100px;
  }
 
  &::-webkit-scrollbar-thumb {
    background:  #777;
    border-radius: 100px;
  }
    
background-color:black;


.HomeSidePostDiv{
  a:link, a:visited {
  color: white;
  text-decoration: none;
  display: inline-block;
}
  
  a:hover {
  color: red;
  
}
}
img{
  width:100%;
}
@media(max-width: 700px) {
  display:none;
   
  } 

`
