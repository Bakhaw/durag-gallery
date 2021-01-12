import React from 'react';

function Gallery() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context('../../images', false, /\.(webp|png|jpe?g|svg)$/)
  );

  return (
    <ul className='Gallery'>
      {images.map((img, i) => (
        <li key={i}>
          <img alt='Masterpiece.' src={img} />
        </li>
      ))}
    </ul>
  );
}

export default Gallery;
