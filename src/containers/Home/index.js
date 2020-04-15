import React, { Fragment } from 'react';

import Promotion from 'components/Promotion';
import Footer from 'components/Footer';
import Games from 'components/Games';

import Header from './Header';
import About from './About';

function Home() {
  return (
    <Fragment>
      <Header />
      <Games />
      <About />
      <Promotion />
      <Footer />
    </Fragment>
  );
}

export default Home;
