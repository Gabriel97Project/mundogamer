import styled, {} from "styled-components"

export const SideAnalysisBoxStyle= styled.div`

display:flex;
flex-direction:row;
align-items:center;
justify-content:space-evenly;
width:93%;
height:90%;
background-color:black;
margin-top:2%;


`
export const SideImageSizeStyle= styled.div`

width:60%;


//background-color:blue;
img{
    width:100%;
    height:150px;
    transition:0.8s ease-in-out; 
    
}
img:hover { 
    	transform: scale(1.1); 
    }
    

`

export const SideTextSizeStyle= styled.div`

width:25%;
height:100%;
font-size:70px;
display:flex;
flex-direction:column;
align-items:center;
background-color:black;
`