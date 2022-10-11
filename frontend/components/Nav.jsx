import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { HiMenu } from 'react-icons/hi';
import { NavStyles, NavItems, NavLogo, MenuItems } from '../styles/navStyles';
import { Cart } from './Cart';
import { useStateContext } from '../lib/context';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from './Menu';
import { useRouter } from 'next/router';

const Nav = () => {
  const { showCart, setShowCart, totalQuantities, showMenu, setShowMenu } =
    useStateContext();

  const style = {
    color: useRouter().asPath === '/' ? 'white' : 'black',
  };

  return (
    <NavStyles>
      <NavLogo>
        <MenuItems onClick={() => setShowMenu(true)}>
          <HiMenu style={style}></HiMenu>
        </MenuItems>
        {showMenu && <Menu />}

        <Link href={'/'}>
          <a style={style}>Relair.</a>
        </Link>
      </NavLogo>

      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </motion.span>
          )}
          <FiShoppingBag style={style}></FiShoppingBag>
          <h3 style={style}>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
};

export default Nav;
