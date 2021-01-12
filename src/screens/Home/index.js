import React from 'react';

import Footer from '../../components/Footer';
import Gallery from '../../components/Gallery';
import Header from '../../components/Header';
import Videos from '../../components/Videos';

const categories = [
  {
    title: 'Videos',
    component: <Videos />,
  },
  {
    title: 'Gallery',
    component: <Gallery />,
  },
];

function Home() {
  return (
    <div className='Home'>
      <Header />

      <ul className='Categories'>
        {categories.map((category, i) => (
          <li key={i} className='Categories__Category'>
            <h1 className='Categories__Category__Title'>{category.title}</h1>
            {category.component}
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}

export default Home;
