import Image from 'next/image';
import {
  ContainerDiscount,
  ContentDiscount,
  DiscountStyle,
  ImgDiscount,
  TitleDiscount,
} from '../../components/Discount.style';
import { DiscountProps } from '../../interfaces/discount';
import { theme } from '../../styling/theme';

export default function Discount({
  imgDiscount,
  titleDiscount,
  contentDiscount,
  background,
}: DiscountProps) {
  return (
    <DiscountStyle background={background}>
      <ImgDiscount>
        <Image src={imgDiscount} width={610} height={610} />
      </ImgDiscount>
      <ContainerDiscount>
        <TitleDiscount>{titleDiscount}</TitleDiscount>
        <ContentDiscount>{contentDiscount}</ContentDiscount>
      </ContainerDiscount>
    </DiscountStyle>
  );
}
