import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { NavStyles, NavItems } from '../styles/navStyles';
import { Cart } from './Cart';
import { useStateContext } from '../lib/context';

const Nav = () => {
  const { showCart, setShowCart } = useStateContext();

  return (
    <NavStyles>
      <Link href={'/'}>Styled.</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          <FiShoppingBag></FiShoppingBag>
          <h3>Cart</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyles>
  );
};

export default Nav;
