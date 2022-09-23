import styled from 'styled-components';
import { fontSize, theme } from '../../styling/theme';

export const HomePageStyle = styled.div`
  background: url('i2.png');
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
export const Container = styled.div`
  max-width: 45vw;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  color: ${theme.palette.primary.secondary};
  font-family: ${theme.fontFamily.main};
  font-size: ${fontSize(92)};
  font-weight: 800;
  filter: drop-shadow(2.575px -4.286px 2.5px rgba(84, 82, 79, 0.22));
`;
export const SubTitle = styled.div``;
export const ButtonReadMore = styled.div``;
export const Content = styled.div``;
