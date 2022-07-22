import {
    MostViewsPartOne, MostViewsPartsStyle, MostViewsPartTwo, MostViewsStyle,
    ViewsBoxChangerAvoStyle,
    ViewsBoxChangerfourStyle, ViewsBoxPaiChangerStyle, ViewsBoxChangerthreeStyle, ViewsBoxChangerFiveStyle, ViewsBoxBisavoChangerStyle, TitleMoreStyle, BottomNewsStyle, ButtonBoxStyle,
} from "./SiteBodyMostViewStyle";
import NewsMockOne from '../mock/NewsMockOne.json'
import { useState } from "react";
import NewsMockTwo from "../mock/NewsMockTwo.json"
import NewsOne from "../News/NewsOne";
import NewsTwo from "../News/NewsTwo";
import ThreeDivsFirst, { ThreeDivsFive, ThreeDivsFour, ThreeDivsSecond, ThreeDivsSix, ThreeDivsThird } from "../utils/ThreeDivsFirst";
import ThreeDivsComponet from "../mock/ThreeDivsComponent.json"
import {/*  FifthDivSeparateStyle, */ DivSeparateStyle, /* SecondDivSeparateStyle, SixthDivSeparateStyle, ThirdDivSeparateStyle */ } from "../utils/ThreeDivsOneStyle";

import BodyBottomMock from "../mock/BodyBottomMock.json"
import BodyBottomNews, {BodyBottomNewsFive, BodyBottomNewsFour,
     BodyBottomNewsSix, BodyBottomNewsThree, BodyBottomNewsTwo, BodyBottomNewsSeven } 
from "../News/BodyBottomNewsBox";
import {/*  BodySideBottomStyle, */ BottomNewsFlexStyle, TextBottomStyle } from "../News/BottomBodyStyle";
import BodySideBottom from "../News/BodySideBottom";


type ContainerProps = {
    children: React.ReactNode;
};


export default function SiteBodyMostViews(props: ContainerProps) {

    const [move, setMove] = useState('0px');



    /*  <div className='container mt-5'>
         <h1 className='text-primary mb-3'>My Blog</h1>
         <Posts posts={currentPosts} loading={loading} />
         <Pagination
           postsPerPage={postsPerPage}
           totalPosts={posts.length}
           paginate={paginate}
         />
       </div> */


    return (

        <MostViewsStyle>
            <ButtonBoxStyle>
                <h2 className="textMostViewClass" >Mais lidas</h2>
                <div >
                    <button onClick={() => setMove('0px')} >Destaque</button>
                    <button  onClick={() => setMove('905px')} >Tutoriais</button>
                    <button  onClick={() => setMove('1810px')}>Gameplay</button>
                </div>
            </ButtonBoxStyle>
            <ViewsBoxBisavoChangerStyle>
                <ViewsBoxChangerAvoStyle >
                    <ViewsBoxPaiChangerStyle pixels={move}>
                        <div className="BoxesSizeStyle">
                            <ViewsBoxChangerthreeStyle>
                                <DivSeparateStyle>
                                    {ThreeDivsComponet.ThreeDivsMock.map((FirstDivUnit:any ,index:number) => {
                                        return (
                                            <ThreeDivsFirst key={`${index}-ThreeDivsFirst-key`} titleOne={FirstDivUnit.titleOne} imageLink={FirstDivUnit.imageLink}
                                                imageOne={FirstDivUnit.imageOne} linkOne={FirstDivUnit.linkOne} />
                                        )
                                    })}
                                </DivSeparateStyle>
                                <DivSeparateStyle>
                                    {ThreeDivsComponet.ThreeDivsMock.map((SecondDivUnit:any,index:number) => {
                                        return (
                                            <ThreeDivsSecond key={`${index}-ThreeDivsSecond-key`} titleTwo={SecondDivUnit.titleTwo} imageLinkTwo={SecondDivUnit.imageLinkTwo}
                                                imageTwo={SecondDivUnit.imageTwo} linkTwo={SecondDivUnit.linkTwo} />
                                        )
                                    })}
                                </DivSeparateStyle>

                            </ViewsBoxChangerthreeStyle>
                        </div>
                        <div className="BoxesSizeStyle">
                            <ViewsBoxChangerfourStyle>
                                <DivSeparateStyle>
                                    {ThreeDivsComponet.ThreeDivsMock.map((ThirdMockUnit:any,index:number) => {
                                        return (
                                            <ThreeDivsThird key={`${index}-ThreeDivsThird-key`} titleThree={ThirdMockUnit.titleThree} linkThree={ThirdMockUnit.linkThree}
                                                imageLinkThree={ThirdMockUnit.imageLinkThree} imageThree={ThirdMockUnit.imageThree} />
                                        )
                                    })}
                                </DivSeparateStyle>
                                <DivSeparateStyle>
                                    {ThreeDivsComponet.ThreeDivsMock.map((FourthMockUnit: any, index:number) => {
                                        return (
                                            <ThreeDivsFour key={`${index}-ThreeDivsFour-key`} titleFour={FourthMockUnit.titleFour} linkFour={FourthMockUnit.linkFour}
                                                imageLinkFour={FourthMockUnit.imageLinkFour} imageFour={FourthMockUnit.imageFour} />
                                        )
                                    })}
                                </DivSeparateStyle>
                            </ViewsBoxChangerfourStyle>
                        </div>
                        <div className="BoxesSizeStyle">
                            <ViewsBoxChangerFiveStyle>
                                <DivSeparateStyle>
                                    {ThreeDivsComponet.ThreeDivsMock.map((FifthMockUnit: any,index:number) => {
                                        return (
                                            <ThreeDivsFive key={`${index}-TheeDivsFive-key`} imageLinkFive={FifthMockUnit.imageLinkFive} linkFive={FifthMockUnit.linkFive}
                                                titleFive={FifthMockUnit.titleFive} imageFive={FifthMockUnit.imageFive} />
                                        )
                                    })}
                                </DivSeparateStyle>
                                <DivSeparateStyle>
                                    {ThreeDivsComponet.ThreeDivsMock.map((SixthMockUnit: any,index:number) => {
                                        return (
                                            < ThreeDivsSix key={`${index}-TheeDivsSix-key`} linkSix={SixthMockUnit.linkSix} imageSix={SixthMockUnit.imageSix}
                                                titleSix={SixthMockUnit.titleSix} imageLinkSix={SixthMockUnit.imageLinkSix} />
                                        )
                                    })}
                                </DivSeparateStyle>
                            </ViewsBoxChangerFiveStyle>
                        </div>
                    </ViewsBoxPaiChangerStyle>
                </ViewsBoxChangerAvoStyle>
            </ViewsBoxBisavoChangerStyle>
            <TitleMoreStyle>
                <h2>Saiba mais</h2>
            </TitleMoreStyle>
            <MostViewsPartsStyle>
                <MostViewsPartOne>

                    {NewsMockOne.NewsPostOne.map((newUnit,index:number) => {
                        return (
                            <NewsOne key={`${index}-NewsOne-key`} title={newUnit.title} titlelink={newUnit.titlelink} link={newUnit.link} image={newUnit.image} />
                        )
                    })}

                    {/* {currentPosts.map((newUnit:any)=>{
                        return(
                            <News title={newUnit.title} titlelink={newUnit.titlelink} image={newUnit.image} link={newUnit.link}/> 
                        )

                    })} */}
                    {/* <News title={mock.News.newsOne.title} titlelink={mock.News.newsOne.titlelink} image={mock.News.newsOne.image} link={mock.News.newsOne.link}/> */}

                    {/* <div style={{ marginTop:"15%" }} className="MostViewsDivClass">

                        <a href="https://pop.proddigital.com.br/listas/listas-de-games/conheca-os-7-maiores-easter-eggs-dos-games">
                            <img src="https://miro.medium.com/max/640/0*CSz4ASnG7U-19Q6W" />
                        </a>
                        <h2 style={{ marginLeft: "15px",display:"flex",justifyContent:"center" }}>
                            <a style={{}} href="https://pop.proddigital.com.br/listas/listas-de-games/conheca-os-7-maiores-easter-eggs-dos-games">Lista dos 7 maiores easter eggs dos games</a>
                        </h2>
                    </div>
                    <div style={{ marginTop:"15%" }} className="MostViewsDivClass">

                        <a href="https://www.hospitaloswaldocruz.org.br/imprensa/noticias/como-os-games-trazem-inovacao-e-eficiencia-para-os-tratamentos/">
                            <img style={{ borderRadius: "5px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVQnlIwOXf7HvyIx2lDKut5QBvx014Y6f8Q&usqp=CAU" />
                        </a>
                        <h2 style={{ marginLeft: "15px",display:"flex",justifyContent:"center"  }}>
                            <a href="https://www.hospitaloswaldocruz.org.br/imprensa/noticias/como-os-games-trazem-inovacao-e-eficiencia-para-os-tratamentos/">Games podem seu usados para auxiliar em tratamentos</a>
                        </h2>
                    </div> */}

                </MostViewsPartOne>
                <MostViewsPartTwo>
                    {/*  <div className="MostViewsDivTwoClass"></div> */}
                    {NewsMockTwo.NewsPostTwo.map((newsUnitTwo,index:number) => {
                        return (
                            <NewsTwo key={`${index}-NewsTwo-key`} titleTwo={newsUnitTwo.titleTwo} titlelinkTwo={newsUnitTwo.titlelinkTwo} linkTwo={newsUnitTwo.linkTwo} imageTwo={newsUnitTwo.imageTwo} />
                        )
                    })}
                    {/* 
                    {mock.News.map((newUnit:any)=>{
                        return(
                            <News title={newUnit.title} titlelink={newUnit.titlelink} link={newUnit.link} image={newUnit.image}/>
                        )
                    })}

                        <a href="https://gamernareal.com.br/10-curiosidades-dos-games-que-voce-nao-sabia/">
                            <img style={{ borderRadius: "5px" }} src="https://www.guiadopc.com.br/wp-content/uploads/2022/03/00_Imagem-17.png" />
                        </a>
                        <h2 style={{ marginLeft: "15px",display:"flex",justifyContent:"center"  }}>
                            <a href="https://gamernareal.com.br/10-curiosidades-dos-games-que-voce-nao-sabia/">Você sabia desses acontecimentos?</a>
                        </h2>
                    </div>
                    <div style={{ marginTop:"15%" }}  className="MostViewsDivTwoClass">

                        <a href="https://www.people.com.br/noticias/games/conheca-os-6-maiores-campeonatos-de-games-do-mundo">
                            <img style={{ borderRadius: "5px" }} src="https://istoe.com.br/wp-content/uploads/sites/14/2016/01/as_2596035353920253.jpg" />
                        </a>
                        <h2 style={{ marginLeft: "15px",display:"flex",justifyContent:"center"  }}>
                            <a href="https://www.people.com.br/noticias/games/conheca-os-6-maiores-campeonatos-de-games-do-mundo">Você sabe quais são os 6 maiores campeonatos de games </a>
                        </h2>
                    </div>
                    <div style={{ marginTop:"15%",display:"flex",justifyContent:"center"  }}  className="MostViewsDivTwoClass">

                        <a href="https://www.techtudo.com.br/noticias/2020/12/xbox-series-xs-consoles-da-microsoft-conseguem-emular-games-de-ps2.ghtml">
                            <img style={{ borderRadius: "5px" }} src="https://http2.mlstatic.com/10-jogos-patch-ps2-em-portugus-resident-evil-4-god-of-war-D_NQ_NP_615222-MLB25768885716_072017-F.jpg" />
                        </a>
                        <h2 style={{ marginLeft: "15px" }}>
                            <a href="https://www.techtudo.com.br/noticias/2020/12/xbox-series-xs-consoles-da-microsoft-conseguem-emular-games-de-ps2.ghtml">Jogadores do XBox conseguem emular ps2 no console</a>
                        </h2>
                    </div>
                */}
                </MostViewsPartTwo>
            </MostViewsPartsStyle>
            <TextBottomStyle>
                <h2>Mais notícias</h2>
            </TextBottomStyle>
            <BottomNewsStyle>
                
                <BottomNewsFlexStyle>
                    {BodyBottomMock.BottomNews.BodyBottomNewsOne.map((BottomNewUnit,index:number) => {
                        return (
                            <BodyBottomNews key={`${index}-BodyBottomNews-key`} imageBottom={BottomNewUnit.imageBottom} imageBottomLink={BottomNewUnit.imageBottomLink}
                                linkBottom={BottomNewUnit.linkBottom} titleBottom={BottomNewUnit.titleBottom} />
                        )
                    })}

                    {BodyBottomMock.BottomNews.BodyBottomNewsTwo.map((BottomNewTwoUnit,index:number) => {
                        return (
                            <BodyBottomNewsTwo key={`${index}-BodyBottomNewsTwo-key`} imageBottomTwo={BottomNewTwoUnit.imageBottomTwo} imageBottomLinkTwo={BottomNewTwoUnit.imageLinkBottomTwo}
                                linkBottomTwo={BottomNewTwoUnit.linkBottomTwo} titleBottomTwo={BottomNewTwoUnit.titleBottomTwo} />
                        )
                    })}

                    {BodyBottomMock.BottomNews.BodyBottomNewsThree.map((BottomNewThreeUnit,index:number) => {
                        return (
                            <BodyBottomNewsThree key={`${index}-BodyBottomNewsThree-key`} imageBottomThree={BottomNewThreeUnit.imageBottomThree} imageBottomLinkThree={BottomNewThreeUnit.imageBottomLinkThree}
                                linkBottomThree={BottomNewThreeUnit.linkBottomThree} titleBottomThree={BottomNewThreeUnit.titleBottomThree} />
                        )
                    })}

                    {BodyBottomMock.BottomNews.BodyBottomNewsFour.map((BottomNewFourUnit,index:number) => {
                        return (
                            <BodyBottomNewsFour key={`${index}-BodyBottomNewsFour-key`} titleBottomFour={BottomNewFourUnit.titleBottomFour} imageBottomFour={BottomNewFourUnit.imageBottomFour}
                                linkBottomFour={BottomNewFourUnit.linkBottomFour} imageBottomLinkFour={BottomNewFourUnit.imageBottomLinkFour} />
                        )
                    })}

                    {BodyBottomMock.BottomNews.BodyBottomNewsFive.map((BottomNewFiveUnit,index:number) => {
                        return (
                            <BodyBottomNewsFive key={`${index}-BodyBottomNewsFive-key`} titleBottomFive={BottomNewFiveUnit.titleBottomFive} imageBottomLinkFive={BottomNewFiveUnit.imageBottomLinkFive}
                                linkBottomFive={BottomNewFiveUnit.linkBottomFive} imageBottomFive={BottomNewFiveUnit.imageBottomFive} />
                        )
                    })}

                    {BodyBottomMock.BottomNews.BodyBottomNewsSix.map((BottomNewSixUnit,index:number) => {
                        return (
                            <BodyBottomNewsSix key={`${index}-BodyBottomNewsSix-key`} titleBottomSix={BottomNewSixUnit.titleBottomSix} imageBottomLinkSix={BottomNewSixUnit.imageBottomLinkSix}
                                linkBottomSix={BottomNewSixUnit.linkBottomSix} imageBottomSix={BottomNewSixUnit.imageBottomSix} />
                        )
                    })}

                    {BodyBottomMock.BottomNews.BodyBottomNewsSeven.map((BottomNewSevenUnit,index:number)=>{
                       return (
                        <BodyBottomNewsSeven key={`${index}-BodyBottomNewsSeven-key`} titleBottomSeven={BottomNewSevenUnit.titleBottomSeven} imageBottomLinkSeven={BottomNewSevenUnit.imageBottomLinkSeven}
                            linkBottomSeven={BottomNewSevenUnit.linkBottomSeven} imageBottomSeven={BottomNewSevenUnit.imageBottomSeven} />
                    )
                    })}
                </BottomNewsFlexStyle>

              <BodySideBottom>
                
              </BodySideBottom>
                
            </BottomNewsStyle>
        
        </MostViewsStyle>

    )
}