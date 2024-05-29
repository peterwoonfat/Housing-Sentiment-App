import {React, useEffect, useState} from "react";
import WordCloud from 'react-d3-cloud';
import { getKeywordData } from '../utils/api';


const fillMapper = word => {
  switch (true) {
    case word.cValue > 80:
      return '#991629';
    case word.cValue > 60:
      return '#c98214';
    case word.cValue > 40:
      return '#3e8320';
    case word.cValue > 20:
      return '#5e1699';
    default:
      return '#166a99';
  }
};


const App = () => {
  const [keywordData, setKeywordData] = useState([]);

  useEffect(() => {
    getKeywordData().then((keywordData) => setKeywordData(keywordData));
  }, []);

  let data = [];
  console.log("d3Cloud: " + keywordData);
  if (keywordData) {
    data = keywordData;
  }

  return (
    <div id="d3cloud-container">
      <div id ="d3cloud-card" className="card text-center">
        <div className="card-header">
          <strong id="word">Keyword: </strong>
        </div>
        <ul className="list-group list-group-flush">
          <li id="occurrences" className="list-group-item">Reddit Occurrences: </li>
          <li id="popularity" className="list-group-item">Google Trends Popularity: </li>
        </ul>
      </div>
      <WordCloud
        data={data}
        fontSize={word => 15 + (word.value - 1) * 1.01}
        fontFamily="'Poppins', sans-serif"
        fontWeight="bold"
        rotate={0}
        padding={1.49}
        width={window.innerWidth/1.2}
        height={window.innerHeight/3}
        fill={fillMapper}
        onWordMouseOver={(event, d) => {
          console.log(d)
          const word = document.getElementById("word");
          word.innerHTML ="Keyword: " + d.text;
          const occurrences = document.getElementById("occurrences");
          occurrences.innerHTML = "Reddit Occurrences: " + d.value;
          const popularity = document.getElementById("popularity");
          popularity.innerHTML = "Google Trends Popularity: " + d.cValue;
        }}
      />
    </div>
  );
}
export default App;
