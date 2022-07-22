import {
  BottomFourStyled,
  BottomThreeStyled, BottomTwoIconsStyled, BottomTwoImageStyled, FirstBoxStyled, SecondBoxStyled, SecondFooterBoxStyled,
  SecondTopBoxStyled, SiteBottomBoxTopFourStyled,
  SiteBottomBoxTopOneStyled, SiteBottomBoxTopStyled, SiteBottomBoxTopThreeStyled,
  SiteBottomStyled, SiteBottomTwoStyled, TextAndLinkStyled
} from "./SiteFooterStyled"
import FooterIconsImgMock from "../mock/FooterIconsImgMock.json"
import FooterImageBox, { FooterImageBoxThree, FooterImageBoxTwo } from "../utils/FooterImageBox"

function SiteFooter() {
  return (
    <SiteBottomStyled>
      < SiteBottomBoxTopStyled>
        <SiteBottomBoxTopOneStyled>
          <FirstBoxStyled>
            <img src="https://img.elo7.com.br/product/zoom/33A8082/adesivo-de-parede-87x115cm-controle-video-game-r0639-adesivo.jpg" />
          </FirstBoxStyled>
          <SecondBoxStyled>
            <SecondTopBoxStyled>
              <h3>MUNDO GAMER</h3>
              <p>Site onde os gamers se encontram e se informam.<br />
                Autor: Gabriel Tomaz de Araujo Oliveira
              </p>
            </SecondTopBoxStyled>
            <SecondFooterBoxStyled>
              <a href="">Demonstração</a>
              <a href="">Sobre</a>
              <a href="">Contato</a>
             
            </SecondFooterBoxStyled>
          </SecondBoxStyled>
        </SiteBottomBoxTopOneStyled>


        <SiteBottomTwoStyled>
          <h2>Redes sociais</h2>
          <BottomTwoIconsStyled>
            <BottomTwoImageStyled>
              {FooterIconsImgMock.FooterImagesJson.FooterImageOne.map((FooterImageUnit,index:number) => {
                return (
                  <FooterImageBox key={`${index}-FooterImageBox-key`} FooterImage={FooterImageUnit.FooterImage} />
                )
              })}
            </BottomTwoImageStyled>
            <BottomTwoImageStyled>
              {FooterIconsImgMock.FooterImagesJson.FooterImageTwo.map((FooterImageTwoUnit,index:number) => {
                return (
                  <FooterImageBoxTwo key={`${index}-FooterImageBoxTwo-key`} SecondFooterImage={FooterImageTwoUnit.SecondFooterImage} />
                )
              })}
            </BottomTwoImageStyled>
            <BottomTwoImageStyled>
              {FooterIconsImgMock.FooterImagesJson.FooterImageThree.map((FooterImageThreeUnit,index:number) => {
                return (
                  <FooterImageBoxThree key={`${index}-FooterImageBoxThree-key`} ThirdFooterImage={FooterImageThreeUnit.ThirdFooterImage} />
                )
              })}
            </BottomTwoImageStyled>
          </BottomTwoIconsStyled>
          <TextAndLinkStyled>
            <p>SAIBA MAIS</p>
          
            <a href="">Informações sobre mim</a>
          </TextAndLinkStyled>
        </SiteBottomTwoStyled>

        <SiteBottomBoxTopThreeStyled>
          <h3>Contato</h3>
          <BottomThreeStyled>
            <a href="">Email</a>
            <a href="">GitHub</a>
          </BottomThreeStyled>
        </SiteBottomBoxTopThreeStyled>

        <SiteBottomBoxTopFourStyled>
            <h3>Inspiração e links associados</h3>
            <BottomFourStyled>
              <a href="https://www.tecmundo.com.br/voxel">Voxel</a>
              <a href="https://www.gamevicio.com/">GameVício</a>
              <a href="https://notadogame.com/">Nota do game</a>
              <a href="https://www.techtudo.com.br/noticias/2021/06/jogos-classicos
              -dos-anos-80-ao-2000-com-versoes-para-android-e-ios-jogos.ghtml">TechTudo</a>
            </BottomFourStyled>

        </SiteBottomBoxTopFourStyled>



      </SiteBottomBoxTopStyled>
      
    </SiteBottomStyled>
  )
}

export default SiteFooter
