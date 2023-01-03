import styled from 'styled-components';
import { fontSize, theme } from '../../../styling/theme';

export const HomePageStyle = styled.div``;
export const Box = styled.div`
  max-width: 45vw;
  padding: 70px;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background: url('Hero.png');
  height: 100vh;
  position: relative;
  background-position: center;
  display: flex;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  :before {
    width: 100%;
    content: ' ';
    background-image: url('Shape-up.png');
    position: absolute;
    left: 0;
    top: -6px;
    height: 192px;
    z-index: 10;
  }
  :after {
    width: 100%;
    content: ' ';
    background-image: url('Shape-bottom.png');
    position: absolute;
    left: 0px;
    bottom: -6px;
    height: 192px;
    z-index: 10;
  }
`;

export const Title = styled.h1`
  color: ${theme.palette.primary.secondary};
  font-family: ${theme.fontFamily.main};
  font-size: ${fontSize(92)};
  font-weight: 800;
  filter: drop-shadow(2.575px -4.286px 2.5px rgba(84, 82, 79, 0.22));
`;

export const SubTitle = styled.span`
  color: ${theme.palette.primary.main};
  font-family: ${theme.fontFamily.main};
  font-size: ${fontSize(25)};
  font-weight: 700;
  font-style: italic;
  letter-spacing: 5px;
  padding: 20px 0;
`;

export const ButtonReadMore = styled.button`
  font-size: ${fontSize(25)};
  font-family: ${theme.fontFamily.main};
  font-weight: 800;
  text-align: center;
  border-radius: 21px;
  width: 218px;
  height: 47px;
  background-color: ${theme.palette.common.white};
  color: ${theme.palette.secondary.main};
  border: none;
  text-transform: uppercase;
  margin-top: 40px;
`;

export const Content = styled.div`
  color: ${theme.palette.primary.main};
  font-style: italic;
  font-weight: 400;
  font-size: ${fontSize(21)};
  font-family: ${theme.fontFamily.main};
  line-height: 1.4;
  max-width: 80%;
  margin: 20px 0;
`;
export const Main = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: 100px;
  :before {
    content: ' ';
    background-image: url('ShadowMain.png');
    position: absolute;
    left: -350px;
    top: 480px;
    height: 100%;
    width: 867px;
    z-index: 10;
  }
`;

export const Header2 = styled.h2`
  color: ${theme.palette.primary.third};
  font-weight: 800;
  font-size: ${fontSize(63)};
  font-family: ${theme.fontFamily.main};
  text-transform: uppercase;
  margin: 40px 0;
`;

export const SubtitleMain = styled.p`
  color: ${theme.palette.common.lightGrey};
  font-weight: 400;
  font-size: ${fontSize(27)};
  font-family: ${theme.fontFamily.main};
  margin: 20px auto;
  max-width: 50%;
  line-height: 1.4;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
`;
