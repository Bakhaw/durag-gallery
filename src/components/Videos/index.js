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
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            frameBorder='0'
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            width='560'
            height='315'
          />
        </li>
      ))}
    </ul>
  );
}

export default Videos;
