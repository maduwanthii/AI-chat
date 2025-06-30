import React, { createContext, useState } from "react";
import axios from "axios";  

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");            
  const [recentPrompt, setRecentPrompt] = useState(""); 
  const [prevPrompts, setPrevPrompts] = useState([]);  
  const [showResult, setShowResult] = useState(false);  
  const [loading, setLoading] = useState(false);        
  const [resultData, setResultData] = useState("");     

  
  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  
  const onSent = async () => {
    setResultData("");         
    setLoading(true);          
    setShowResult(true);        
    setRecentPrompt(input);     
    try {
      
      const response = await axios.post("http://localhost:3000/api/chat", {
        prompt: input,
      });

      const { data } = response;
      let formattedResponse = data.response;

      
      let responseArray = formattedResponse.split("**");
      let newResponse = "";

      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }

      
      let newResponse2 = newResponse.split("*").join("</br>");
      setResultData(newResponse2);  

    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResultData("Sorry, something went wrong. Please try again.");
    }

    setLoading(false);  
    setInput("");       
  };

 
  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
