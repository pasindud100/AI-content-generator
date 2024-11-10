import React, { useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";

function SlidBar() {
  const [extended, setExtended] = useState(false); //to show the extended side bar

  return (
    <div className="slidebar">
      <div className="top">
        <img onClick={() => setExtended(pre=>!pre)} src={assets.menu_icon} className="menu" alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        
        {extended ? <div className="recent">
          <p className="recentTitle"> Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>What is ...</p>
          </div>
        </div> : null}
      </div>
      <div className="bottom">
        <div className="bottom_item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom_item recent-entry">
          <img src={assets.history_icon} alt="" />
     {extended?      <p>Activities</p>: null}
        </div>

        <div className="bottom_item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default SlidBar;
