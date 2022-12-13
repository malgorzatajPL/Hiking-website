import styled from 'styled-components';
import { fontSize, theme } from '../styling/theme';

export const DiscountStyle = styled.div<{ background: string }>`
  background-color: ${(props) => props.background};
  color: ${theme.palette.common.white};
  justify-content: space-between;
  display: flex;
  font-family: ${theme.fontFamily.main};
  :nth-child(even) {
    flex-flow: row-reverse;
  }
`;

export const ContainerDiscount = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 50vw;
`;
export const ImgDiscount = styled.div``;
export const TitleDiscount = styled.h2`
  font-weight: 700;
  font-size: ${fontSize(58)};
  padding-bottom: 40px;
`;
export const ContentDiscount = styled.p`
  font-size: ${fontSize(29)};
  line-height: 1.4;
`;
