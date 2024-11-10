import React, { useContext, useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

function SlidBar() {
  const [extended, setExtended] = useState(false); //to show the extended side bar
  const { onSent, prePrompts, setRecentPrompt, newChat } = useContext(Context);

  //loardprompt function for loard the result again when clik on of recent promt from slide bara
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt);
  };

  return (
    <div className="slidebar">
      <div className="top">
        <img
          onClick={() => setExtended((pre) => !pre)}
          src={assets.menu_icon}
          className="menu"
          alt=""
        />
        <div className="new-chat" onClick={()=>newChat()}>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recentTitle"> Recent</p>
            {prePrompts.map((item, index) => {
              return (
                <div className="recent-entry" onClick={()=> loadPrompt(item)}>
                  <img src={assets.message_icon} alt="" />
                  {/* //slice to show only 15 characters in sliodebar recent promt */}
                  <p>{item.slice(0, 15)}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom_item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom_item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activities</p> : null}
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
