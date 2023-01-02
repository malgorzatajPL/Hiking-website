import styled from 'styled-components';
import { fontSize, theme } from '../../styling/theme';

export const CardStyle = styled.div`
  width: 310px;
  background-color: ${theme.palette.common.lightGrey};
`;
export const ImgCard = styled.div``;
export const TitleCard = styled.h2`
  color: ${theme.palette.common.white};
  font-weight: 700;
  font-size: ${fontSize(29)};
  font-family: ${theme.fontFamily.main};
  text-align: left;
  margin: 40px 0;
  padding: 0 10px;
`;
export const ContentCard = styled.p`
  color: ${theme.palette.common.white};
  font-weight: 400;
  font-size: ${fontSize(23)};
  font-family: ${theme.fontFamily.main};
  margin: 20px auto;
  text-align: left;
  padding: 0 10px;
  line-height: 1.2;
`;
