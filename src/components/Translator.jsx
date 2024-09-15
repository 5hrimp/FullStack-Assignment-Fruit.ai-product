import React, { useEffect, useState } from "react";
import countries from "../data.js";
import '../styles/translator.css'

const Translate = () => {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [fromLang, setFromLang] = useState("en-GB");
  const [toLang, setToLang] = useState("hi-IN");

  useEffect(() => {
   const defaultFromLang = "en-GB";
    const defaultToLang = "hi-IN";
    setFromLang(defaultFromLang);
    setToLang(defaultToLang);
  }, []);

  const handleExchangeLanguages = () => {
    setFromText(toText);
    setFromLang(toLang);
    setToLang(fromLang);
  };

  const handleTranslate = () => {
    if (!fromText.trim()) return;

    const apiUrl = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLang}|${toLang}`;
    
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setToText(data.responseData.translatedText);
        data.matches.forEach((item) => {
          if (item.id === 0) {
            setToText(item.translation);
          }
        });
      })
      .catch((error) => console.error("Translation error:", error));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleSpeech = (text, lang) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="text-input">
          <textarea
            spellCheck="false"
            className="from-text"
            placeholder="Enter text"
            value={fromText}
            onChange={(e) => setFromText(e.target.value)}
          ></textarea>
          <textarea
            spellCheck="false"
            className="to-text"
            placeholder="Translation"
            value={toText}
            readOnly
            disabled
          ></textarea>
        </div>
        <ul className="controls">
          <li className="row from">
            <div className="icons">
              <i
                id="from"
                className="fas fa-volume-up"
                onClick={() => handleSpeech(fromText, fromLang)}
              ></i>
              <i
                id="from"
                className="fas fa-copy"
                onClick={() => handleCopy(fromText)}
              ></i>
            </div>
            <select
              value={fromLang}
              onChange={(e) => setFromLang(e.target.value)}
            >
              {Object.keys(countries).map((code) => (
                <option key={code} value={code}>
                  {countries[code]}
                </option>
              ))}
            </select>
          </li>
          <li className="exchange" onClick={handleExchangeLanguages}>
            <i className="fas fa-exchange-alt"></i>
          </li>
          <li className="row to">
            <select
              value={toLang}
              onChange={(e) => setToLang(e.target.value)}
            >
              {Object.keys(countries).map((code) => (
                <option key={code} value={code}>
                  {countries[code]}
                </option>
              ))}
            </select>
            <div className="icons">
              <i
                id="to"
                className="fas fa-volume-up"
                onClick={() => handleSpeech(toText, toLang)}
              ></i>
              <i
                id="to"
                className="fas fa-copy"
                onClick={() => handleCopy(toText)}
              ></i>
            </div>
          </li>
        </ul>
      </div>
      <button onClick={handleTranslate}>Translate Text</button>
    </div>
  );
};

export default Translate;
