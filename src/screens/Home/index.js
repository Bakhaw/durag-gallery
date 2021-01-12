import React from 'react';

function Home() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context('../../images', false, /\.(png|jpe?g|svg)$/)
  );

  console.log('images', images);

  return (
    <div className='Home'>
      <h1>DURAG GALLERY</h1>
      <ul>
        {images.map((img, i) => (
          <li key={i}>
            <img alt='Masterpiece.' src={img} />
          </li>
        ))}
      </ul>

      <p>
        Made with{' '}
        <span aria-label='Heart' role='img'>
          ❤️
        </span>
      </p>
    </div>
  );
}

export default Home;
