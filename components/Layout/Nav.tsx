import Link from 'next/link';
import { MenuItem, Navigation } from './Nav.style';

export default function Nav() {
  return (
    <Navigation>
      <Link href='/'>
        <MenuItem>Home</MenuItem>
      </Link>
      <Link href='/about'>
        <MenuItem>Menu</MenuItem>
      </Link>
      <Link href='/users'>
        <MenuItem>Our story</MenuItem>
      </Link>
      <Link href='/users'>
        <MenuItem>Contact us</MenuItem>
      </Link>
    </Navigation>
  );
}
