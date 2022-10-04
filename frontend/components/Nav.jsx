import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';
import { NavStyles, NavItems } from '../styles/navStyles';

const Nav = () => {
  return (
    <NavStyles>
      <Link href={'/'}>Styled.</Link>
      <NavItems>
        <div>
          <FiShoppingBag></FiShoppingBag>
          <h3>Cart</h3>
        </div>
      </NavItems>
    </NavStyles>
  );
};

export default Nav;
