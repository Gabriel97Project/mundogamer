import HeaderBackgroundImage from "./HeaderBackgroundImage";
import { HeaderboxStyle, ImageBackgroundHeaderStyle } from "./HeaderBoxStyle";
import HeaderIcons from "./HeaderIcons";

export default function HeaderBox(){
    return(
        
        <HeaderboxStyle>
            <ImageBackgroundHeaderStyle>         
                <HeaderBackgroundImage/>
            </ImageBackgroundHeaderStyle>
                {/* <HeaderboxStyle>
                    <HeaderIcons/> 
                </HeaderboxStyle> */}
        </HeaderboxStyle>
    )
}