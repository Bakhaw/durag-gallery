import React from 'react';

const videos = [
  {
    title: 'Best Of #1',
    id: '4vyBc1ax3qM',
  },
  {
    title: 'Best Of #2',
    id: 'E64NQSKPIi8',
  },
];

function Videos() {
  return (
    <ul className='Videos'>
      {videos.map((video, i) => (
        <li key={i}>
          <iframe
            allowFullScreen
            frameBorder='0'
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
          />
        </li>
      ))}
    </ul>
  );
}

export default Videos;
