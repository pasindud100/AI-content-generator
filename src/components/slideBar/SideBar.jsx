import React from 'react';
import './SideBar.css';
import { assets} from '../../assets/assets';

function SlidBar() {
  return (
    <div className='slidebar'>
      <div className="top">
          <img src={assets.menu_icon} className='menu' alt="" />
          <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
            <p>New Chat</p>
          </div>
          <div className="recent">
            <p className='recentTitle'> Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is HTML ...</p>
            </div>
          </div>
      </div>
      <div className="bottom">
          <div className="bottom_item recent-entry">
            <img src={assets.question_icon} alt="" />
            <p>Help</p>
          </div>

          <div className="bottom_item recent-entry">
            <img src={assets.history_icon} alt="" />
            <p>Activities</p>
          </div>

          <div className="bottom_item recent-entry">
            <img src={assets.setting_icon} alt="" />
            <p>Setting</p>
          </div>
      </div>
    </div>
  )
}

export default SlidBar