import { HeaderIconsFatherBox, HeaderIconsStyledBox, UserPhotoLoginStyle, UserPhotoStyle, UserTextLoginBox } from "./HeaderIconsStyle";
import {
    Eye, Home, Star,
    ThumbUp,
    User,

} from 'heroicons-react';
import { auth, loginUserClick } from "../LoginPage/firebaseAuthLogin";
import { useEffect, useState, } from "react";
import { signOut, getAuth, GoogleAuthProvider, UserInfo, UserProfile } from "firebase/auth";
//import firebase from 'firebase'





export default function HeaderIcons() {

    const [userPhotoLogin, setUserPhotoLogin] = useState<UserProfile | null>(null);
    const auth = getAuth();
    useEffect(() => {

        console.log("userlogin", userPhotoLogin)
        console.log("auth", auth)
    }, [userPhotoLogin, auth])


    const signOutClick = () => {
        signOut(auth)
            .then(() => {
                console.log('Signed Out');
                console.log('auth', auth)
                console.log('user', userPhotoLogin)
                setUserPhotoLogin(null)
            })
            .catch(e => {
                console.error('Sign Out Error', e);
            });


    }

    const UserPhoto = () => {
        if (userPhotoLogin) {
            return (
                <img className="ImgUserClass" onClick={signOutClick}
                    src={userPhotoLogin.photoURL as undefined} />
            )
        } else
            return (
                <img className="ImgUserClass" onClick={() => loginUserClick({ setState: setUserPhotoLogin })}
                    src="http://simpleicon.com/wp-content/uploads/user1.svg" />
            )
    }

    const LoginText = ()=>{
        if (userPhotoLogin){
            return(
            <h3>LOGOUT</h3>
            )
        }else
        return(
            <h3>LOGIN</h3>
        )
    }


    return (

        <HeaderIconsFatherBox>

            <HeaderIconsStyledBox>
                <div className="IconsDivStyle">
                    <a href="/"> <Home /></a>

                </div>
                <a href="/"><h3>SITE HOME</h3></a>
            </HeaderIconsStyledBox>


            <HeaderIconsStyledBox>

                <div className="IconsDivStyle">
                    <a href="/BodySiteGames"> <Star /></a>
                </div>
                <a href="/BodySiteGames"><h3>MELHORES DA METACRITIC</h3></a>
            </HeaderIconsStyledBox>


            <HeaderIconsStyledBox>
                <div className="IconsDivStyle">
                    <a href="/SiteBestGames"><ThumbUp /></a>
                </div>
                <a href="/SiteBestGames"><h3>MELHORES POR NÓS</h3></a>
            </HeaderIconsStyledBox>


            <HeaderIconsStyledBox>
                <UserPhotoLoginStyle>
                    <UserTextLoginBox>
                       {LoginText()} <img className="ImgArrowClass" src="https://static.vecteezy.com/system/resources/previews/001/187/085/non_2x/arrow-png.png" />
                    </UserTextLoginBox>

                    <UserPhotoStyle  >

                        {UserPhoto()}

                    </UserPhotoStyle>
                </UserPhotoLoginStyle>

            </HeaderIconsStyledBox>
        </HeaderIconsFatherBox>
    )
}


