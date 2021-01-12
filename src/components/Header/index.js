import React from 'react';

import DuragGangIcon from '../../icons/durag-gang.svg';
import TwitchIcon from '../../icons/twitch.svg';
import YoutubeIcon from '../../icons/youtube.svg';

function Header() {
  return (
    <div className='Header'>
      <img alt='Durag Gang Icon' className='Header__Icon' src={DuragGangIcon} />
      <img className='Header__YoutubeIcon' src={YoutubeIcon} />
      <img className='Header__YoutubeIcon' src={TwitchIcon} />
      {/* <h1 className='Header__Title'>DURAG GANG</h1> */}
    </div>
  );
}

export default Header;
