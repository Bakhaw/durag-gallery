import React from 'react';

import Categories from '../../components/Categories';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Home() {
  return (
    <div className='Home'>
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;
