import Image from 'next/image';
import React from 'react';
import { CardProps } from '../../interfaces/card';
import {
  CardStyle,
  ContentCard,
  ImgCard,
  TitleCard,
} from '../../components/pages/index/Card.style';

export default function Card({ imgCard, titleCard, contentCard }: CardProps) {
  return (
    <CardStyle>
      <ImgCard>
        <Image alt='image card' src={imgCard} width={310} height={310} />
      </ImgCard>
      <TitleCard>{titleCard}</TitleCard>
      <ContentCard>{contentCard}</ContentCard>
    </CardStyle>
  );
}
