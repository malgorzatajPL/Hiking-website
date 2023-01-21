import styled from 'styled-components';
import { fontSize, theme } from '../../styling/theme';
import { device } from '../../utils/MediaQuery';

export const HeaderStyle = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 10;
`;

export const ContainerHeader = styled.div`
  position: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background: ${theme.palette.common.white};
  box-shadow: 5px 4px 4px ${theme.palette.common.white} inset;
`;
export const Navigation = styled.div`
  display: flex;
  a {
    text-decoration: none;
  }
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
export const ButtonBox = styled.div`
  @media ${device.mobileS} {
    display: block;
    right: 30px;
    z-index: 101;
    top: 28px;
  }
  @media ${device.laptop} {
    display: none;
  }
`;
export const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.palette.common.white};
  height: 115vh;
  width: ${(props) => (props.isOpen ? '100%' : '0')};
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: width 0.8s, opacity 0.8s;
  align-items: center;
  position: fixed;
  top: -15vh;
  left: 0;
  transform: translate(-50%, -50%);
  z-index: 100;
  transform: scale(1.5);
`;
export const MenuUl = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MenuBackground = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background: ${theme.palette.primary.main};
  height: 100vh;
  width: 100vw;
  border-radius: 50%;
  transform: ${(props) => (props.isOpen ? 'scale(80)' : 'scale(0)')};
  transition: transform 0.8s;
`;

export const BoxNav = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledBurger = styled.label<{ open: boolean }>`
  top: 5%;
  left: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 0;
  z-index: 1009;
  position: absolute;
  &:focus {
    outline: none;
  }
  div {
    width: 2.5rem;
    height: 0.25rem;
    background: ${theme.palette.common.lightGrey};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
