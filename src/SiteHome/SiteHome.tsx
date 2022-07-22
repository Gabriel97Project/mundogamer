import SiteBodyMostViews from "./SiteBodyMostViews";
import { MostViewsPartOne } from "./SiteBodyMostViewStyle";
import { PrincipalBodySiteBox, SiteHomePrincipalTwo, SiteHomeTop, SiteHomeTopSide, SiteHomeTopSidePosts } from "./SiteHomeStyle";
import HomeFirstNews from "../mock/HomeFirstNews.json"
import FirstNewsBox, { FifthNewsSideBox, FirstNewsSideBox, FourthNewsSideBox, SecondNewsSideBox, ThirdNewsSideBox } from "../News/FirstNewsBox";
import HomeFirstSide from "../mock/HomeFirstSide.json"

export default function SiteHome() {
    return (
         <PrincipalBodySiteBox>
            <h1>Algumas curiosidades você só descobre aqui</h1>

           
                <SiteHomePrincipalTwo>

                    <SiteHomeTop>

                        {HomeFirstNews.HomeFirstNewsOne.map((HomeFirstNewUnit,index:number) => {
                            return (
                                <FirstNewsBox key={`${index}-FirstNewsBox-key`} link={HomeFirstNewUnit.link} titlelink={HomeFirstNewUnit.titlelink}
                                    title={HomeFirstNewUnit.title} image={HomeFirstNewUnit.image} />
                            )
                        })}
                        {/*  <a href="https://www.bitmag.com.br/harry-potter-hogwarts-legacy-tem-data-de-lancamento-divulgada/">
                                <img style={{width:"100%", }} src="https://s2.glbimg.com/1xrHg35kBKOsEL-uWiV6pVr2aQo=/0x0:1599x895/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/V/M/YrKi6SR7Ge4YRKkegmmw/harry-potter.png"/>
                            </a>
                            
                            <div className="HomeSidePostDiv">
                                < a style={{fontSize:"35px",textDecoration: "none"}} href="https://www.bitmag.com.br/harry-potter-hogwarts-legacy-tem-data-de-lancamento-divulgada/"> Confira a data de lançamento do novo Harry Potter: Hogwarts Legacy</a>
                            </div> */}
                    </SiteHomeTop>
                    <SiteHomeTopSide>
                        <SiteHomeTopSidePosts>
                            <div className="HomeSidePostDiv">
                                {HomeFirstSide.HomeFirstSideBoxOne.map((HomeFirstSideUnit,index:number) => {
                                    return (
                                        <FirstNewsSideBox key={`${index}-FirstNewsSideBox-key`} link={HomeFirstSideUnit.link} title={HomeFirstSideUnit.title}
                                            titlelink={HomeFirstSideUnit.titlelink} image={HomeFirstSideUnit.image} />
                                    )
                                })}
                                {/* <a href="https://steamcommunity.com/app/1245620/discussions/">
                                        <img style={{width:"100%", }} src="https://th.bing.com/th/id/R.3d68f16fa5a5d2fbad59683b0fc4db89?rik=9SOEcvgTrYTESg&pid=ImgRaw&r=0"/>
                                    </a>
                                    <a style={{fontSize:"15px",textDecoration: "none",}} href="https://steamcommunity.com/app/1245620/discussions/">Comunidade exclusiva sobre elden ring</a> */}
                            </div>
                            <div className="HomeSidePostDiv">
                                {HomeFirstSide.HomeFirstSideBoxOne.map((SideBoxSecondUnit,index:number) => {
                                    return (
                                        <SecondNewsSideBox key={`${index}-SecondNewsSideBox-key`} linkSideTwo={SideBoxSecondUnit.linkSideTwo} imageSideTwo={SideBoxSecondUnit.imageSideTwo}
                                            titleSideTwo={SideBoxSecondUnit.titleSideTwo} titlelinkSideTwo={SideBoxSecondUnit.titlelinkSideTwo} />
                                    )
                                })}
                                {/* <a href="https://observatoriodegames.uol.com.br/xbox/fas-descobrem-easter-egg-de-doom-em-dying-light-2">
                                            <img style={{width:"100%", }} src="https://th.bing.com/th/id/OIP.uISieU9cob9OiK2vwyLOkgHaEK?pid=ImgDet&w=780&h=439&rs=1"/>
                                        </a>
                                    <a style={{fontSize:"14px",textDecoration: "none"}} href="https://observatoriodegames.uol.com.br/xbox/fas-descobrem-easter-egg-de-doom-em-dying-light-2">Jogadores descobrem easter egg de Doom em Dying Light 2</a> */}
                            </div>
                            <div className="HomeSidePostDiv">
                                {HomeFirstSide.HomeFirstSideBoxOne.map((SideBoxThirdUnit,index:number) => {
                                    return (
                                        <ThirdNewsSideBox key={`${index}-ThirdNewsSideBox-key`} linkSideThree={SideBoxThirdUnit.linkSideThree} imageSideThree={SideBoxThirdUnit.imageSideThree}
                                            titleSideThree={SideBoxThirdUnit.titleSideThree} titlelinkSideThree={SideBoxThirdUnit.titlelinkSideThree} />
                                    )
                                })}
                                {/*  <a href="https://www.redbull.com/pt-pt/os-jogos-mais-esperados-2022#:~:text=Os%2015%20jogos%20mais%20esperados%20de%202022%201,...
                                    %2010%20DNF%20Duel.%20...%20Mais%20itens...%20">
                                        <img style={{width:"100%", }} src="https://i.ytimg.com/vi/HczCOT0MgWs/maxresdefault.jpg"/>
                                    </a>
                                    <a  style={{fontSize:"15px",textDecoration: "none"}} href="https://www.redbull.com/pt-pt/os-jogos-mais-esperados-2022#:~:text=Os%2015%20jogos%20mais%20esperados%20de%202022%201,...
                                    %2010%20DNF%20Duel.%20...%20Mais%20itens...%20">Lista dos jogos mais esperados de 2022</a> */}
                            </div>
                            <div className="HomeSidePostDiv">
                                {HomeFirstSide.HomeFirstSideBoxOne.map((SideBoxFourthUnit,index:number) => {
                                    return (
                                        <FourthNewsSideBox key={`${index}-FourthNewsSideBox-key`} linkSideFour={SideBoxFourthUnit.linkSidefour} titleSideFour={SideBoxFourthUnit.titleSidefour}
                                            imageSideFour={SideBoxFourthUnit.imageSidefour} titlelinkSideFour={SideBoxFourthUnit.titlelinkSidefour} />
                                    )
                                })}
                                {/* <a href="https://www.youtube.com/watch?v=EtvDUF3f8Ig">
                                        <img style={{width:"100%",}} src="https://th.bing.com/th/id/OIP.c6SZTspKqhGBOZAFOKi6YwHaEK?pid=ImgDet&w=1210&h=680&rs=1"/>
                                    </a>
                                    <a  style={{fontSize:"15px",textDecoration: "none"}} href="https://www.youtube.com/watch?v=EtvDUF3f8Ig">Assista o trailer do novo God of war</a> */}
                            </div>
                            <div className="HomeSidePostDiv">
                                {HomeFirstSide.HomeFirstSideBoxOne.map((SideBoxFifthUnit,index:number) => {
                                    return (
                                        <FifthNewsSideBox key={`${index}-FifthNewsSideBox-key`} linkSideFive={SideBoxFifthUnit.linkSideFive} titleSideFive={SideBoxFifthUnit.titleSideFive}
                                            imageSideFive={SideBoxFifthUnit.imageSideFive} titlelinkSideFive={SideBoxFifthUnit.titlelinkSideFive} />
                                    )
                                })}
                                {/* <a href="https://www.maioresemelhores.com/jogos-online-mais-jogados-no-mundo/#:~:
                                    text=Os%2023%20jogos%20online%20mais%20jogados%20no%20mundo,Call%20of%20Duty%20Warzone.%20...%20Mais%20itens...%20">
                                        <img style={{width:"100%", }} src="https://th.bing.com/th/id/OIP.bgtvVHEa0Mg4FZ9vbsL0AAHaEn?pid=ImgDet&rs=1"/>
                                    </a>
                                    <a  style={{fontSize:"15px",textDecoration: "none"}} href="https://www.maioresemelhores.com/jogos-online-mais-jogados-no-mundo/#:~:
                                    text=Os%2023%20jogos%20online%20mais%20jogados%20no%20mundo,Call%20of%20Duty%20Warzone.%20...%20Mais%20itens...%20">Lista dos 23 Jogos mais jogados de 2022</a> */}
                            </div>
                            

                        </SiteHomeTopSidePosts>
                    </SiteHomeTopSide>

                </SiteHomePrincipalTwo>
                <SiteBodyMostViews>
                    <MostViewsPartOne />
                </SiteBodyMostViews>
                
                
        </PrincipalBodySiteBox>
        
    )
}