import { SiteBestGamesStyle } from "./SiteBestGamesStyle";
import SiteBestGamesMock from "../mock/SiteBestGamesMock.json"
import SiteBestGamesContent, { SiteBestGamesContentFive, SiteBestGamesContentFour, SiteBestGamesContentThree, SiteBestGamesContentTwo } from "./SiteBestGamesContent";

export default function SiteBestGames() {
    return (
        <SiteBestGamesStyle>
            <h2 className="SiteBestTitleClass">Melhores jogos de todos os tempos selecionados por nós:</h2>

            {SiteBestGamesMock.SiteContent.SiteContentOne.map((SiteContentUnit,index:number) => {
                return (
                    <SiteBestGamesContent key={`${index}-SiteBestGamesContent-key`} SiteContentImageOne={SiteContentUnit.SiteContentImageOne} SiteContentTitleOne={SiteContentUnit.SiteContentTitleOne}
                        SiteContentTextOne={SiteContentUnit.SiteContentTextOne} SiteContentSecondTitleOne={SiteContentUnit.SiteContentSecondTitleOne}
                        SiteContentTitleLinkOne={SiteContentUnit.SiteContentTitleLinkOne} SiteContentSecondTextOne ={SiteContentUnit.SiteContentSecondTextOne } 
                        SiteContentNoteOne ={SiteContentUnit.SiteContentNoteOne } SiteContentSecondImage={SiteContentUnit.SiteContentSecondImageOne} />
                )
            })}

            {/* <h2>1. <a style={{ color: 'blue',fontSize:30, }} href="https://www.nintendo.pt/Jogos/Super-Nintendo/Donkey-Kong-Country-2-Diddy-s-Kong-Quest-276907.html">
                Donkey Kong Country 2: Diddy's Kong Quest</a> </h2>
                <h2 style={{fontSize:25}}>* Nota IGN: 8.8 / 10</h2>
            <img  src="https://upload.wikimedia.org/wikipedia/pt/0/00/Donkey_Kong_Country_2_capa.png"/>

            <p style={{fontSize:20}}>Esta obra prima dispensa apresentações, um dos melhores jogos de super nintendo e de todas as gerações que vieram e estão por vir. O game tem uma jogabilidade que se adapta 
                e pode ser aperfeiçoada ao estilo de cada jogador, os
                inimigos que exibem um nivel de dificuldade consideravel, senários de tirar o folego e ainda por cima conta com uma trilha sonora impecável que se encaixa perfeitamente
                 com os senários e jogabilidade (eu, mesmo após 12 anos, ainda escuto as músicas e sinto a nostalgia e a satisfação hahaha), 
                no meu ponto de vista, o melhor jogo de todos os tempos.
            <p/>
            <h2>Sobre:</h2>
            <p style={{fontSize:20}}>
                Após derrotar o Rei K. Rool, os Kongs voltam para as Ilhas DK com a reserva de bananas de Donkey Kong. Logo depois, DK estava relaxando quando o Flying Krock se aproxima da ilha.
                 K. Rool (agora como Capitão K. Rool), envia os Kremlings para a ilha e seqüestra Donkey Kong. Ele só irá libertá-lo se a família Kong entregar a reserva de bananas de Donkey Kong
                  para ele. Então, Diddy e Dixie vão para a Crocodile Isle (o lar dos Kremlings)
                 para resgatá-lo. Para isso Diddy e Dixie precisam atravessar uma série de lugares da ilha, incluindo o Gangplank Galleon, o Crocodile Caudron, a Krazy Kremland e muitos outros.</p>
            </p> */}

            
            {SiteBestGamesMock.SiteContent.SiteContentTwo.map((SiteContentTwoUnit, index:number) => {
                return (
                    <SiteBestGamesContentTwo key={`${index}-SiteBestGamesContentTwo-key`} SiteContentImageTwo={SiteContentTwoUnit.SiteContentImageTwo} SiteContentTitleTwo={SiteContentTwoUnit.SiteContentTitleTwo}
                        SiteContentTextTwo={SiteContentTwoUnit.SiteContentTextTwo} SiteContentSecondTitleTwo={SiteContentTwoUnit.SiteContentSecondTitleTwo}
                        SiteContentTitleLinkTwo={SiteContentTwoUnit.SiteContentTitleLinkTwo} SiteContentSecondTextTwo ={SiteContentTwoUnit.SiteContentSecondTextTwo } 
                        SiteContentNoteTwo ={SiteContentTwoUnit.SiteContentNoteTwo } SiteContentSecondImageTwo={SiteContentTwoUnit.SiteContentSecondImageTwo} />
                    )
                })}


            {/* <h2>2. <a style={{ color: 'blue', fontSize: 30, }} href="https://www.playstation.com/pt-br/games/god-of-war-ragnark/">God of war ragnarok</a></h2>
            <h2 style={{ fontSize: 25 }}>* Nota IGN: 10 / 10</h2>
            <img src="https://gudstory.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/09/06074654/God-of-War-Ragnarok-gameplay.jpg" />
            <p style={{ fontSize: 20 }}> A nota por sí só ja declara o nível de experiencia que você vai ter, um jogo lindo, incrivel, desafiante... Simplemente uma obra de arte.

                <h2>Sobre</h2>
                Da Santa Monica Studio, temos a sequência da versão de 2018 de God of War aclamada pela crítica. Kratos e Atreus devem viajar pelos Nove Reinos para encontrar respostas e se
                preparar para a batalha profetizada que causará o fim do mundo.

                Juntos, Kratos e Atreus embrenham-se pelos Nove Reinos em busca de respostas, enquanto as forças asgardianas preparam-se para guerra. Nessa jornada, eles explorarão paisagens míticas
                impressionantes, reunirão aliados de todos os reinos e enfrentarão inimigos temíveis, entre deuses nórdicos e monstros.

                À medida que a ameaça do Ragnarök se aproximar ainda mais, Kratos e Atreus terão de escolher entre a segurança de sua família e a segurança dos reinos…
            </p> */}

            {SiteBestGamesMock.SiteContent.SiteContentThree.map((SiteContentThreeUnit,index:number) => {
                return (
                    <SiteBestGamesContentThree key={`${index}-SideBostGamesContentThree-key`} SiteContentImageThree={SiteContentThreeUnit.SiteContentImageThree} SiteContentTitleThree={SiteContentThreeUnit.SiteContentTitleThree}
                        SiteContentTextThree={SiteContentThreeUnit.SiteContentTextThree} SiteContentSecondTitleThree={SiteContentThreeUnit.SiteContentSecondTitleThree}
                        SiteContentTitleLinkThree={SiteContentThreeUnit.SiteContentTitleLinkThree} SiteContentSecondTextThree ={SiteContentThreeUnit.SiteContentSecondTextThree } 
                        SiteContentNoteThree ={SiteContentThreeUnit.SiteContentNoteThree } SiteContentSecondImageThree={SiteContentThreeUnit.SiteContentSecondImageThree} />
                    )
                })}

            {/* <h2>3. <a style={{ color: 'blue', fontSize: 30, }} href="https://en.bandainamcoent.eu/elden-ring/elden-ring">Elden ring</a></h2>
            <h2 style={{ fontSize: 25 }}>* Nota IGN:10/10</h2>
            <img src="https://gamenewz.de/wp-content/uploads/2019/06/Elden-Ring-660x330.jpg" />
            <p style={{ fontSize: 20 }}>
                tudo o que você sabe desde o início é que você toca como um "Manchado" sem renome, abençoado pela graça, e é obrigado a fazer a viagem para as Terras Entre e se tornar um Senhor Elden.
                O que isso realmente significa, como alguém pode fazer isso, e o que o negócio é com aquela árvore dourada gigante brilhante são todas as coisas que você tem que descobrir a si mesmo.
                Como outros jogos do FromSoft, a grande história é difícil de digerir totalmente em um primeiro playthrough,
                especialmente porque não há nenhum diário no jogo para atualizá-lo sobre os eventos, personagens ou termos únicos que você encontra em dezenas de horas.
                <h2>Sobre</h2>
                Elden Ring é um jogo de RPG de ação de fantasia expansivo desenvolvido pela FromSoftware, Inc. sob a direção de Hidetaka Miyazaki e criado em colaboração com o famoso autor George
                R.R. Martin.
                O jogo se passa em um reino extenso mergulhado em uma história rica e sangrenta.
            </p> */}

            {SiteBestGamesMock.SiteContent.SiteContentFour.map((SiteContentFourUnit,index:number) => {
                return (
                    <SiteBestGamesContentFour key={`${index}-SideBestGamesContentFour-key`} SiteContentImageFour={SiteContentFourUnit.SiteContentImageFour} SiteContentTitleFour={SiteContentFourUnit.SiteContentTitleFour}
                        SiteContentTextFour={SiteContentFourUnit.SiteContentTextFour} SiteContentSecondTitleFour={SiteContentFourUnit.SiteContentSecondTitleFour}
                        SiteContentTitleLinkFour={SiteContentFourUnit.SiteContentTitleLinkFour} SiteContentSecondTextFour ={SiteContentFourUnit.SiteContentSecondTextFour} 
                        SiteContentNoteFour={SiteContentFourUnit.SiteContentNoteFour } SiteContentSecondImageFour={SiteContentFourUnit.SiteContentSecondImageFour} />
                    )
                })}



            {/* <h2>4. <a style={{ color: 'blue', fontSize: 30, }} href="https://www.ea.com/pt-br/games/battlefield/battlefield-3"> Battlefield 3</a></h2>
            <h2 style={{ fontSize: 25 }}>* Nota IGN:9/10</h2>
            <img src="https://th.bing.com/th/id/R.dcec61021886fbc3a64fd669d1be5cf2?rik=F%2bav07Xxmje6Ig&riu=http%3a%2f%2f1
             .bp.blogspot.com%2f-6bqY4-
             R1-gM%2fTZ9Z_hX--WI%2fAAAAAAAAAao%2fhyTxuTJHKP4%2fs1600%2fBattlefield-3-01.jpg&ehk=YQV6paWAdIt4pXjX9pIU9Ih%2f6QxKrG6Og5azuKjyCL8%3d&risl=&pid=ImgRaw&r=0"/>
            <p style={{ fontSize: 20 }}>
                O velho e bom BF3 um dos melhores ja criados, simplemente incrivel , cenario interativo, som ambiente perfeito. A campanha tambem pode ser interessante, mas o grande diferencial é o multiplayer.
                <h2>Sobre</h2>
                Battlefield 3 reúne todos os elementos considerados pelos jogadores entusiastas como essenciais a bons jogos de tiro em primeira pessoa: gráficos hiper-realistas, amplos cenários exploráveis, um arsenal imponente de armas e muito caos!

                O posicionamento da câmera em primeira pessoa proporciona uma experiência única aos jogadores, é como estar com seu próprio corpo em meio a rajadas de balas e explosões colossais. Não é a toa que essa escolha de câmera deu origem a um
                dos gêneros mais aclamados dos games.

                O modo de carreira prende a atenção, mas o ponto alto da diversão de Battlefield 3 está em seu sistema multiplayer, que proporciona jogos rápidos, cheios de ação e resultados imprevisíveis, já que as decisões tomadas dentro do jogo são
                feitas por diversas pessoas diferentes
                e ao mesmo tempo. O jogo também proporciona um modo multiplayer colaborativo onde é possível jogar com mais um amigo em 10 mapas.
            </p>*/}
 
            {SiteBestGamesMock.SiteContent.SiteContentFive.map((SiteContentFiveUnit,index:number) => {
                return (
                    <SiteBestGamesContentFive key={`${index}-SideBestGamesContentFive-key`} SiteContentImageFive={SiteContentFiveUnit.SiteContentImageFive} SiteContentTitleFive={SiteContentFiveUnit.SiteContentTitleFive} SiteContentSecondTitleFive={SiteContentFiveUnit.SiteContentSecondTitleFive}
                        SiteContentTitleLinkFive={SiteContentFiveUnit.SiteContentTitleLinkFive} SiteContentSecondTextFive ={SiteContentFiveUnit.SiteContentSecondTextFive} 
                        SiteContentNoteFive={SiteContentFiveUnit.SiteContentNoteFive } SiteContentSecondImageFive={SiteContentFiveUnit.SiteContentSecondImageFive} />
                    )
                })}



            {/* <h2>5. <a style={{ color: 'blue', fontSize: 30, }} href="https://www.ea.com/pt-br/games/need-for-speed/need-for-speed-underground-2">Need for speed underground 2</a></h2>
            <h2 style={{ fontSize: 25 }}>* Nota IGN:9,1/10</h2>
            <img src="https://sm.ign.com/t/ign_pt/screenshot/default/blob_8e5b.1200.jpg"/>
            <p style={{ fontSize: 20 }}>

                <h2>Sobre</h2>
                Need For Speed: Underground 2 é um jogo bastante completo que inova ao permitir, pela primeira vez, que o piloto explore uma cidade inteira livremente. Um mapa facilita a localização
                de eventos importantes, para que o usuário não se perca no mundo virtual amplo e rico de detalhes.

                O jogador começa ao escolher um dos 29 carros disponíveis no início. Com o passar o tempo, outros carros podem ser comprados. O game disponibiliza veículos famosos como Toyota Corolla, Mustang T3 e até
                mesmo o super cobiçado Audi A3.

                Todos os automóveis podem ser personalizados ao gosto do freguês, com opções de pinturas, pneus, aros, espelhos, vinis, decalques, neon, entre outras possibilidades. Cada veículo pode ser único. Tudo
                depende apenas de como o player quer customizá-lo.

                No decorrer da partida, o piloto ganha dinheiro por cada desafio conquistado. Com isso, pode adquirir melhorias para os carros, que incluem transmissão, suspensão, adição de nitro e novos freios. Tudo
                para que o jogador possa tirar o melhor proveito possível do carro que tem.
            </p> */}


        </SiteBestGamesStyle>


    )
}