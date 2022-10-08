import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { HiMenu } from 'react-icons/hi';
import { NavStyles, NavItems, NavLogo } from '../styles/navStyles';
import { Cart } from './Cart';
import { useStateContext } from '../lib/context';
import { AnimatePresence, motion } from 'framer-motion';

const Nav = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <NavStyles>
      <NavLogo>
        <HiMenu></HiMenu>
        <Link href={'/'}>Relair.</Link>
      </NavLogo>

      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </motion.span>
          )}
          <FiShoppingBag></FiShoppingBag>
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
};

export default Nav;
