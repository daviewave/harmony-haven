import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="layout">
      <Head>
        <title>Harmony Haven</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>EMPTY</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
