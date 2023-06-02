import React from 'react';

import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Harmony Haven</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => console.log('clicked')}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
};

export default Navbar;
