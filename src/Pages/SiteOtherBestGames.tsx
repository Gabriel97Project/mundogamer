import { BodySiteGamesStyle } from "./SiteOtherChoicesStyle"
import SiteOtherBestMock from "../mock/SiteOtherBestMock.json"
import SiteOtherChoices, { SiteOtherChoicesFive, SiteOtherChoicesFour, SiteOtherChoicesThree, SiteOtherChoicesTwo } from "./SiteOtherChoices"



export default function BodySiteGames() {


    return (
        <BodySiteGamesStyle>
            <h2 className="OtherSiteTitleClass">Lista da Metacritic dos 5 melhores jogos de todos os tempos: </h2>
            {SiteOtherBestMock.SiteOtherContent.SiteOtherContentOne.map((SiteOtherContentUnit,index:number)=>{
                return(
                    <SiteOtherChoices key={`${index}-SiteOtherChoices-key`} SiteOtherContentImageOne={SiteOtherContentUnit.SiteOtherContentImageOne} SiteOtherContentSecondImageOne={SiteOtherContentUnit.SiteOtherContentSecondImageOne}
                    SiteOtherContentTitleOne={SiteOtherContentUnit.SiteOtherContentTitleOne} SiteOtherContentSecondTitleOne={SiteOtherContentUnit.SiteOtherContentSecondTitleOne}
                    SiteOtherContentTextOne={SiteOtherContentUnit.SiteOtherContentTextOne} SiteOtherContentNoteOne={SiteOtherContentUnit.SiteOtherContentNoteOne}
                    SiteOtherContentTitleLinkOne={SiteOtherContentUnit.SiteOtherContentTitleLinkOne} />
                )
            })}

            
           {/*  <h2>1. <a style={{ color: 'blue',fontSize:30, }} href="http://www.techtudo.com.br/tudo-sobre/the-legend-of-zelda-ocarina-of-the-time.html">The Legend of Zelda: Ocarina of Time</a> <br/>
            <h2 style={{fontSize:25}}>* Nota Metacritic: 99</h2></h2>
            <img style={{ width: "100%" }} src="https://th.bing.com/th/id/R.506660ff75ed9466329de286159e111f?rik=jmeVc2r8SDPMQA&riu
            =http%3a%2f%2f2.bp.blogspot.com%2f_j2tLhqp8gZk%2fTSqEotgaJ2I%2fAAAAAAAAAAU%2fVwW3GgZy6cA%2fs1600%2fZelda%2bOcarine%2bOf%2bTime.jpg&ehk=V4db1DyLI9R4AUR%
            2bV%2bKypgKpj6CEGQP0AnhtIG6JQlQ%3d&risl=&pid=ImgRaw&r=0"/>
            <p style={{fontSize:20}}>
                A história do jogo se concentra na jovem guerreira Link, que empreende uma aventura no reino de Hyrule para parar a maldade de Ganondorf,
                rei da tribo Gerudo, antes de encontrar a Triforce, uma relíquia sagrada capaz de conceder qualquer desejo ao seu possuidor . Para fazer isso,
                você deve percorrer o tempo e explorar vários templos para despertar alguns homens sábios que têm o poder de prender Ganondorf permanentemente.
                Você conseguirá trazer a paz de volta ao reino de Hyrule?
            </p> */}
            {SiteOtherBestMock.SiteOtherContent.SiteOtherContentTwo.map((SiteOtherContentTwoUnit,index:number)=>{
                return(
                    <SiteOtherChoicesTwo key={`${index}-SiteOtherChoicesTwo-key`} SiteOtherContentImageTwo={SiteOtherContentTwoUnit.SiteOtherContentImageTwo} SiteOtherContentSecondImageTwo={SiteOtherContentTwoUnit.SiteOtherContentSecondImageTwo}
                    SiteOtherContentTitleTwo={SiteOtherContentTwoUnit.SiteOtherContentTitleTwo} SiteOtherContentSecondTitleTwo={SiteOtherContentTwoUnit.SiteOtherContentSecondTitleTwo}
                    SiteOtherContentTextTwo={SiteOtherContentTwoUnit.SiteOtherContentTextTwo} SiteOtherContentNoteTwo={SiteOtherContentTwoUnit.SiteOtherContentNoteTwo}
                    SiteOtherContentTitleLinkTwo={SiteOtherContentTwoUnit.SiteOtherContentTitleLinkTwo} />
                )
            })}




            {/* <h2>2. <a style={{ color: 'blue' }} href="https://www.techtudo.com.br/tudo-sobre/tony-hawks-pro-skater.html">Tony Hawk's Pro Skater 2</a></h2>
            <h2 style={{fontSize:25}}>* Nota Metacritic: 98</h2>
            <img style={{ width: "100%" }} src="https://everythingisnoise.net/wp-content/uploads/2019/04/THPS-2.jpg"/>
            <p style={{fontSize:20}}>
                Tony Hawk's Pro Skater 2 é um jogo de simulação de skate lançado no ano 2000 para vários consoles de jogos, incluindo Nintendo 64 (N64). Embora o jogo use
                o mesmo motor de jogo que seu antecessor, ele apresenta muitas melhorias, incluindo gráficos,
                controles, efeitos e desempenho. Tony Hawk's Pro Skater 2 também possui manuais e recompensas em dinheiro que tornam o jogo mais viciante e envolvente.
            </p> */}

            {SiteOtherBestMock.SiteOtherContent.SiteOtherContentThree.map((SiteOtherContentThreeUnit,index:number)=>{
                return(
                    <SiteOtherChoicesThree key={`${index}-SiteOtherChoicesThree-key`} SiteOtherContentImageThree={SiteOtherContentThreeUnit.SiteOtherContentImageThree} SiteOtherContentSecondImageThree={SiteOtherContentThreeUnit.SiteOtherContentSecondImageThree}
                    SiteOtherContentTitleThree={SiteOtherContentThreeUnit.SiteOtherContentTitleThree} SiteOtherContentSecondTitleThree={SiteOtherContentThreeUnit.SiteOtherContentSecondTitleThree}
                    SiteOtherContentTextThree={SiteOtherContentThreeUnit.SiteOtherContentTextThree} SiteOtherContentNoteThree={SiteOtherContentThreeUnit.SiteOtherContentNoteThree}
                    SiteOtherContentTitleLinkThree={SiteOtherContentThreeUnit.SiteOtherContentTitleLinkThree} />
                )
            })}

            {/* h2>3. <a style={{ fontSize:30,color: 'blue' }} href="https://www.rockstargames.com/games/IV">Grand Theft Auto IV (GTA4)</a> </h2>
            <h2 style={{fontSize:25}}>* Nota Metacritic: 98</h2>
            <img style={{ width: "100%" }} src="https://i0.wp.com/gamefreaks365.com/wp-content/uploads/2020/01/Grand-Theft-Auto-IV.jpg?resize=940%2C529&ssl=1" />
            <p style={{fontSize:20}}>
                O que significa o Sonho Americano hoje? Para Niko Bellic, recém-saído do barco da Europa, é a esperança que ele possa escapar de seu passado. Para seu primo, Roman,
                é a visão de que juntos eles podem encontrar fortuna em Liberty City, porta de entrada para a terra das oportunidades.

                À medida que se endividam e são arrastados para um submundo criminoso por uma série de tímidos, ladrões e sociopatas, eles descobrem que a realidade é muito diferente
                do sonho em uma cidade que adora dinheiro e status, e é o paraíso para aqueles que os têm e um pesadelo vivo para aqueles que não o fazem.
            </p> */}
            
            {SiteOtherBestMock.SiteOtherContent.SiteOtherContentFour.map((SiteOtherContentFourUnit,index:number)=>{
                return(
                    <SiteOtherChoicesFour key={`${index}-SiteOtherChoicesFour-key`} SiteOtherContentImageFour={SiteOtherContentFourUnit.SiteOtherContentImageFour} SiteOtherContentSecondImageFour={SiteOtherContentFourUnit.SiteOtherContentSecondImageFour}
                    SiteOtherContentTitleFour={SiteOtherContentFourUnit.SiteOtherContentTitleFour} SiteOtherContentSecondTitleFour={SiteOtherContentFourUnit.SiteOtherContentSecondTitleFour}
                    SiteOtherContentTextFour={SiteOtherContentFourUnit.SiteOtherContentTextFour} SiteOtherContentNoteFour={SiteOtherContentFourUnit.SiteOtherContentNoteFour}
                    SiteOtherContentTitleLinkFour={SiteOtherContentFourUnit.SiteOtherContentTitleLinkFour} />
                )
            })}


            {/* <h2>4. <a style={{ fontSize:30,color: 'blue' }} href="https://www.techtudo.com.br/tudo-sobre/soulcalibur/"><strong>SoulCalibur</strong></a></h2>
            <h2 style={{fontSize:25}}>* Nota Metacritic: 98</h2>
            <img style={{ width: "100%" }} src="https://i.ytimg.com/vi/IUOhUuiMwAU/maxresdefault.jpg"/>
            <p style={{fontSize:20}}>
                Soul Calibur se passa em uma época inspirada em uma mistura da China antiga do século XVI e fantasias e lendas medievais orientais.
                Todos os personagens têm armas e estilos de luta distintos com mais de 100 movimentos individuais por personagem. Além de ataques altos, médios e baixos, os personagens podem 
                segurar/arremessar, bloquear e realizar ataques especiais -- um ou mais dos quais é considerado "in bloqueável" e deve ser evitado por se esquivar, pular ou girar em torno de seu atacante.
                Além de vários locais para lutar e alternar modelos/trajes por personagem, a conversão dreamcast de Soul Calibur contém muitos recursos adicionais ao longo da moeda arcade- op, incluindo 
                personagens escondidos e locais, um modo de campanha e modo de torneio. Há também um "museu" onde você pode ver perfis de personagens e ver demonstrações de artes marciais capturadas por movimento.

            </p> */}

            {SiteOtherBestMock.SiteOtherContent.SiteOtherContentFive.map((SiteOtherContentFiveUnit,index:number)=>{
                return(
                    <SiteOtherChoicesFive key={`${index}-SiteOtherChoicesFive-key`} SiteOtherContentImageFive={SiteOtherContentFiveUnit.SiteOtherContentImageFive} SiteOtherContentSecondImageFive={SiteOtherContentFiveUnit.SiteOtherContentSecondImageFive}
                    SiteOtherContentTitleFive={SiteOtherContentFiveUnit.SiteOtherContentTitleFive} SiteOtherContentSecondTitleFive={SiteOtherContentFiveUnit.SiteOtherContentSecondTitleFive}
                    SiteOtherContentTextFive={SiteOtherContentFiveUnit.SiteOtherContentTextFive} SiteOtherContentNoteFive={SiteOtherContentFiveUnit.SiteOtherContentNoteFive}
                    SiteOtherContentTitleLinkFive={SiteOtherContentFiveUnit.SiteOtherContentTitleLinkFive} />
                )
            })}

            {/* <h2>5. <a style={{ fontSize:30,color: 'blue' }} href="https://www.nintendo.pt/Jogos/Wii/Super-Mario-Galaxy-283322.html">Super Mario Galaxy</a> </h2>
            <h2 style={{fontSize:25}}>* Nota Metacritic: 97</h2>
            <img style={{ width: "100%" }}  src="https://th.bing.com/th/id/R.ac0337529438c661c5b69dc7c9b90de3?rik=UDUd3vqJL1oWBw&
            pid=ImgRaw&r=0"/>
            <p style={{fontSize:20}}>
                Super Mario Galaxy coloca o gênero de plataforma em nova perspectiva. Os cenários esféricos, a manipulação da gravidade e a brincadeira inteligente 
                com os conceitos de “para cima” e “para baixo”, fazem de Galaxy um verdadeiro jogo de plataforma, você passará horas pulando de bloco em bloco, planeta em planeta e o mais interessante é ve
                r como o personagem comporta-se em cada um dos cenários.
                Os cenário esféricos, ou circulares, não são nenhuma grande novidade no mundo dos jogos, sendo que já apareceram em títulos como o recente Rachet & Clank e até mesmo em jogos mais
                antigos, como nos estrelados pelo arqui-rival do encanador italiano: o porco-espinho Sonic.
            </p> */}
        </BodySiteGamesStyle>

    )
}
export const BestGamesPost = BodySiteGames
