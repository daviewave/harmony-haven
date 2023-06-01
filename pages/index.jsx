import React from 'react';

const Home = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div>
        {[
          'product 1',
          'product 2',
          'product 3',
          'product 4',
          'product 5',
          'product 6',
        ].map((product) => product + ' ')}
      </div>
      Footer
    </>
  );
};

export default Home;
