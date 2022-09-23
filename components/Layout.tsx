import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import { Header, MenuItem, Nav } from './Header/Nav.style';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header>
      <Image src='/Logo.png' width={91} height={94} />

      <Nav>
        <Link href='/'>
          <MenuItem>Home</MenuItem>
        </Link>
        <Link href='/about'>
          <MenuItem>About</MenuItem>
        </Link>
        <Link href='/users'>
          <MenuItem>Users List</MenuItem>
        </Link>
      </Nav>
    </Header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
