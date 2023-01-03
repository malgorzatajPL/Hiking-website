import Image from 'next/image';
import {
  ContainerDiscount,
  ContentDiscount,
  DiscountStyle,
  ImgDiscount,
  TitleDiscount,
} from '../../components/pages/index/Discount.style';
import { DiscountProps } from '../../interfaces/discount';

export default function Discount({
  imgDiscount,
  titleDiscount,
  contentDiscount,
  background,
}: DiscountProps) {
  return (
    <DiscountStyle background={background}>
      <ImgDiscount>
        <Image
          alt='image discount'
          src={imgDiscount}
          width={610}
          height={610}
        />
      </ImgDiscount>
      <ContainerDiscount>
        <TitleDiscount>{titleDiscount}</TitleDiscount>
        <ContentDiscount>{contentDiscount}</ContentDiscount>
      </ContainerDiscount>
    </DiscountStyle>
  );
}
