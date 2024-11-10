import { createContext, useState } from "react"; //import { createContext, useState }  hooks from "react";
import runChat from "../config/genini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState(""); // this use to get the user input from promt field
  const [resentPrompt, setRecentPrompt] = useState(""); // this for sendt to recent section when user submit the prompt
  const [prePrompts, setPrePrompts] = useState([]); // this is array to store the previous prompts
  const [showResult, setShowResult] = useState(false); // if this is true this hide the all the cars in the main content and show prmpted resut there
  const [loading, setLoading] = useState(false); // when this tru the loading animation apere.. this will false when prompted resut come
  const [resultData, setResultData] = useState(""); // this is to show  result

  const delaypara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    // to crete new chat when click new cht icon
    setShowResult(false);
    setLoading(false);
  };

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);

    let response;
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrePrompts((prev) => [...prev, input]);
      setRecentPrompt(prompt);
      response = await runChat(input);
    }

    let responseArray = response.split("**");
    let newResponse = ""; //we use "" to prevent show the first word in result as undefined
    for (let i = 0; i < responseArray.length; i++) {
      //emove ** and convert it ro blod words
      if (i === 0 || i % 2 !== 1) {
        //even number
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");

    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delaypara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    // these can be use anywhere of our project
    prePrompts,
    setPrePrompts,
    onSent,
    setRecentPrompt,
    resentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
