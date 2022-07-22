import styled, { } from 'styled-components'

export const HeaderIconsFatherBox=styled.div`
width:100%;
height:60px;
background-color:ghostwhite;
opacity: 0.7;
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;

a:link, a:visited {
  color: black;
  text-decoration: none;
  display: inline-block;
}
  
  a:hover {
  color: red;
  
}


`

export const HeaderIconsStyledBox = styled.div`
width:24%;
height:100%;
//background-color:beige;
display:flex;
flex-direction:row;
align-items:center;

@media(max-width: 1000px) {
           justify-content:center;     

                }


h3{
    font-size:15px;
   
    @media(max-width: 1000px) {
        
        display:none;
       
        
}
}
    .IconsDivStyle{
        background-color:white;
        border-radius:100%;
        border-style:outset;
        border-color:red;
        width:35px;
        height:35px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        @media(max-width: 1000px) {
                
                    justify-content:center;
                }
        
        cursor: pointer;
        transition: 0.3s;
        
            &:hover{
            width:40px; 
            height:40px;}
            a{
                color:black;
            }
    }
  

   
`
export const UserPhotoLoginStyle = styled.div`
        
        //background-color:bisque;
        width:100%;;
        height:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
            .ImgUserClass{
                width:35px;
                height:30px;
                transition: 0.3s;
                        &:hover{
                    width:40px; 
                    height:35px;}
                    border-style:outset;
                    border-color:red;
                    border-radius:100%;
                }
       
        
 
 `
export const UserPhotoStyle = styled.div`
        width:20%;
        height:100%;
        //background-color:black;
        display:flex;
        flex-direction:row;      
        align-items:center;
        justify-content:center;
        
        h3{
            font-size:15px;
            display:flex;
            flex-direction:row;      
            align-items:center;
            p{
                a:link, a:visited {
                    color: black;
                    text-decoration: none;
                    display: inline-block;
                    }
                    
                    a:hover {
                    color: red;
                    
                    }
                @media(max-width: 1000px) {
                display:none;

                }
            }
         
        }
 
 `

export const UserTextLoginBox=styled.div`
width:80%;
height:100%;
//background-color:greenyellow;
display:flex;
flex-direction:row;  
align-items:center;
justify-content:space-around;
@media(max-width: 1000px) {
                display:none;

                }
                img{
                    width:40px; 
                    height:40px;
                }
    
.TextUserClass{
    width:60%;
    //background-color:blue;
    display:flex;
    flex-direction:row;  
    align-items:center;
    justify-content:space-between;
}


`

 

