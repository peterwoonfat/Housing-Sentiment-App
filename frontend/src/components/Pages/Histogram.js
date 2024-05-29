import React from "react";
import { useState, useEffect } from "react";
import KeywordFilter from "../KeywordFilter"
import Graph from "../Graph";
import { postKeywords } from '../../utils/api'
import "../../styles/components/Histogram.css"
  
const Histogram = () => {
  const [keywords, setKeywordData] = useState([]);

  useEffect(() => {
    postKeywords().then((keywords) => setKeywordData(keywords));
  }, []);

  function getKeywords(checkboxName) {
    var checkboxes = document.getElementsByName(checkboxName);
    var checkboxesChecked = [];
    // loop over all checkboxes and store the checked ones in an array
    for (var i=0; i< checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i].value);
        }
    }
    // Return the array of checked checkboxes if it is non-empty, or null
    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
  }
  

  const handleChange = (e) => {
    var filteredKeywords = getKeywords("KeywordCheckBox");
    if (filteredKeywords == null) {
      setKeywordData([[],[]]);
    } else {
      console.log("Selected keywords: " + filteredKeywords);
      postKeywords(JSON.stringify(filteredKeywords)).then((response) => response.json()).then((data) => {
        const keywordData = data.posts;
        setKeywordData(keywordData);
      });
    }
  }


  return (
    <div id="histogram-content">
      <KeywordFilter handleChange={handleChange}/>
      <h1 id="histogram-title">Keyword Frequency Histogram</h1>
      <div id="graph-container">
        <Graph keywordData={keywords}/>
      </div>
    </div>
  );
};
export default Histogram;