import styled from 'styled-components';
import { fontSize, theme } from '../../styling/theme';

export const HeaderStyle = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 100;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background: ${theme.palette.common.white};
  box-shadow: 5px 4px 4px ${theme.palette.common.white} inset;
  pointer-events: none;
`;
export const Navigation = styled.div`
  display: flex;
  a {
    text-decoration: none;
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.palette.common.black};
  height: 115vh;
  width: 100vw;
  align-items: center;
  position: fixed;
  top: -15vh;
  left: 0;
  transition: all 800ms cubic-bezier(0.86, 0, 0.07, 1);
  z-index: 100;
  transform: scale(1.5);
`;

export const MenuItem = styled.div`
  font-family: ${theme.fontFamily.main};
  font-size: ${fontSize(17)};
  color: ${theme.palette.primary.main};
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 0 25px;
`;
