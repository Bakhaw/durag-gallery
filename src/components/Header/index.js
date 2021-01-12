import React from 'react';

import AppLogo from '../../icons/app-logo.svg';
import TwitchIcon from '../../icons/twitch.svg';
import YoutubeIcon from '../../icons/youtube.svg';

function Header() {
  const socialIcons = [
    {
      alt: 'Youtube Icon',
      href: 'https://www.youtube.com/channel/UCcKxCc5Re-SOnE38eiKqMIg',
      src: YoutubeIcon,
    },
    {
      alt: 'Twitch Icon',
      href: 'https://multitwitch.live/pablytos/teczerr/zelnite93/saoobii',
      src: TwitchIcon,
    },
  ];

  return (
    <div className='Header'>
      <p></p>
      <img alt='Durag Gang Icon' className='Header__AppLogo' src={AppLogo} />
      <ul className='Header__Socials'>
        {socialIcons.map((icon, i) => (
          <li key={i}>
            <a href={icon.href} rel='noopener noreferrer' target='_blank'>
              <img
                alt={icon.alt}
                className='Header__Socials__Icon'
                src={icon.src}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
