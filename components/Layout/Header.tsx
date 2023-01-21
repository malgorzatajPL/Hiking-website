import Image from 'next/image';
import Nav from './Nav';
import {
  ButtonBox,
  ContainerHeader,
  HeaderStyle,
  Menu,
  MenuBackground,
  MenuUl,
  StyledBurger,
} from './Nav.style';
import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
const Burger = ({
  setOpen,
  open,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <StyledBurger
      htmlFor='navi-toggle'
      open={open}
      onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const isLaptop = useMediaQuery('(min-width:1024px)');
  console.log(open);
  return (
    <HeaderStyle>
      <ContainerHeader>
        <Image alt='logo' src='/Logo.png' width={91} height={94} />
        {isLaptop && <Nav />}
        <ButtonBox>
          <Burger open={open} setOpen={setOpen} />
        </ButtonBox>

        <Menu isOpen={open}>
          <MenuUl>
            <Image alt='logo' src='/Logo.png' width={91} height={94} />
            <Nav />
          </MenuUl>
        </Menu>
      </ContainerHeader>
    </HeaderStyle>
  );
}
