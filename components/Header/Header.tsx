import Image from 'next/image';
import Nav from './Nav';
import { ContainerHeader, HeaderStyle } from './Nav.style';

export default function Header() {
  return (
    <HeaderStyle>
      <ContainerHeader>
        <Image src='/Logo.png' width={91} height={94} />
        <Nav />
      </ContainerHeader>
    </HeaderStyle>
  );
}
