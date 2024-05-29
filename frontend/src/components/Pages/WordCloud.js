import React from "react";
import "../../styles/components/WordCloud.css"
import Cloud from "../d3Cloud";

const WordCloud = () => {
    return (
        <div id="word-cloud-content">
            <h1 id="word-cloud-title">Keyword Frequency Word Cloud</h1>
            <div id="word-cloud-container">
                <Cloud />
            </div>
        </div>
    );
};
export default WordCloud;