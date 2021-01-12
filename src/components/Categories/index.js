import React from 'react';

import Gallery from '../Gallery';
import Videos from '../Videos';

function Categories() {
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

  return (
    <ul className='Categories'>
      {categories.map((category, i) => (
        <li key={i} className='Categories__Category'>
          <h1 className='Categories__Category__Title'>{category.title}</h1>
          {category.component}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
