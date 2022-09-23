import styled from 'styled-components';
import { fontSize, theme } from '../../styling/theme';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

export const Nav = styled.div`
  display: flex;
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
