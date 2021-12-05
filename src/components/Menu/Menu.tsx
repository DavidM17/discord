import Icon from '../Icon/Icon';
import './Menu.css';
import { BsPlusLg, BsTwitch, BsSnapchat, BsTwitter } from 'react-icons/bs';
import SectionTab from '../SectionTab/SectionTab';
import { useState } from 'react';

export default function Menu() {
  const [activeIcon, setactiveIcon] = useState(0);

  return (
    <div className="menu-container">
      <div className="icons-menu-container">
          <Icon isActive={0 === activeIcon} func={() => setactiveIcon(0)} src="https://cdn.iconscout.com/icon/free/png-256/planets-1515726-1286033.png" />
          <Icon isActive={1 === activeIcon} func={() => setactiveIcon(1)} src="https://cdn.pixabay.com/photo/2018/05/15/20/47/microphone-3404243_960_720.png" />
          <Icon isActive={2 === activeIcon} func={() => setactiveIcon(2)} src="https://www.clipartmax.com/png/full/51-515668_download-icon-group-chat-icon-png.png" />
      </div>
      <div className="menu-content">
        <SectionTab title="Services" secondaryIcon={<BsPlusLg />} />
        <SectionTab title="Twitch" primaryIcon={<BsTwitch />} />
        <SectionTab title="Snapchat" primaryIcon={<BsSnapchat />} secondaryIcon={<p style={{ fontWeight: 'bold' }}>2</p>} />
        <SectionTab title="Twitter" primaryIcon={<BsTwitter />} />
      </div>
    </div>
  )
}
