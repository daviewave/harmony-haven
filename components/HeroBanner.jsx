import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({
  heroBanner: { smallText, midText, image, largeText1, buttonText, desc },
}) => {
  return (
    <div className="hero-banner-container">
      <div>
        {/* <p className="beats-solo">{smallText}</p> */}
        <p className="beats-solo">{desc}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>

        <img
          src={urlFor(image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          {/* <Link href="/product/ID"> */}
          <button type="button">{buttonText}</button>
          {/* </Link> */}

          <div className="desc"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
HeroBanner;
