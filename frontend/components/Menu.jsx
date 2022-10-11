import Link from 'next/link';
import {
  MenuWrapper,
  MenuStyle,
  MenuHeader,
  MenuItems,
} from '../styles/menu.style';
import { useStateContext } from '../lib/context';
import { useState } from 'react';

export const Menu = () => {
  const { setShowMenu } = useStateContext();
  const [showWoman, setShowWoman] = useState(true);
  const [showMan, setShowMan] = useState(false);

  return (
    <MenuWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <MenuStyle
        initial={{ x: '-50%' }}
        animate={{ x: '0%' }}
        exit={{ x: '50%' }}
        transition={{ type: 'tween' }}
        onClick={(e) => e.stopPropagation()}
      >
        <MenuHeader>
          <button
            onClick={() => {
              setShowWoman(true);
              setShowMan(false);
            }}
          >
            <h2>Woman</h2>
          </button>
          <button
            onClick={() => {
              setShowWoman(false);
              setShowMan(true);
            }}
          >
            <h2>Man</h2>
          </button>
        </MenuHeader>

        {showWoman && (
          <MenuItems
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href={'/products/coats'}>Coats</Link>
            <Link href={'/products/jeans'}>Jeans</Link>
            <Link href={'/products/shoes'}>Shoes</Link>
            <Link href={'/products/t-shirts'}>T-Shirts</Link>
          </MenuItems>
        )}

        {showMan && (
          <MenuItems
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href={'/products/reee'}>Reeeee</Link>
            <Link href={'/products/coats'}>OOOOOO</Link>
            <Link href={'/products/shoes'}>Shoes</Link>
            <Link href={'/products/tables'}>Tables</Link>
          </MenuItems>
        )}
      </MenuStyle>
    </MenuWrapper>
  );
};
