import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Content.css";
import { Context } from "../../Context/Context";

function Content() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>AI content genarator...Find enything you unknown.</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              {/* <p><span>Hello, Dev.</span></p>*/}
              <h2>Hi client...</h2>
              <p>How can i help you today with my AI knowladge?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. .
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. .
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. .
                </p>
                <img src={assets.code_icon} alt="" />
              </div>

              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. .
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{input}</p>
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />

              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <div>
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search">
            <input
              type="text"
              placeholder="Plesease enter"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">Created by Pasindu Dilshan...</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
