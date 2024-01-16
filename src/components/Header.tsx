'use client';
import { Logo } from '@/components/Logo';
import Burger from '@/components/Burger';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="h-50 flex  justify-between items-center bg-green-0 pl-10 pr-5">
      <Link href="/">
        <Logo />
      </Link>
      <Burger
        onClick={() => {
          console.log('버거클릭');
        }}
      />
    </div>
  );
};

export default Header;
