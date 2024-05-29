import React from "react";
import "../../styles/components/About.css"
  
const About = () => {
  return (
    <div id="aboutContent">
      <div id="homelessness-section">
        <h1 id="about-page">About Page</h1>
        <h2 id="housing-affordability">Housing Affordability</h2>
        <h3 id="what-is-housing">What is housing?</h3>
        <p>Housing is shelter and it can be found at the bottom of Maslow's hierarchy of basic needs.</p>
        <p>
          <img src="https://i.imgur.com/Ktb7wOa.jpg" id="MaslowHierarchy" alt="Maslow's hierarchy" />
        </p>
        <h3 id="what-is-affordable-housing">What is affordable housing?</h3>
        <p>Housing is considered affordable to for families or groups of people who have a combined household income at or below the median. Often times it is recognized alongside a <em>housing affordability index</em>. Percent of rent to income should be around 30% to be considered affordable.</p>
        <p>There are different forms of affordable housing:</p>
        <ul>
          <li>Homeless shelters</li>
          <li>Transitional Housing (temporary)</li>
          <li>Social/Subsidized/Non-Market Housing</li>
        </ul>
        <p>This is an economic and political problem. People have opinions on the issue and discuss it on the internet.</p>
        <p>
          <strong><a href="https://www.youtube.com/watch?v=sKudSeqHSJk">A video example on the topic</a></strong>
        </p>
        <h3 id="homelessness">Homelessness</h3>
        <p>Why is shelter so important? The impacts of prolonged homelessness can be devastating on a person. There are different stages of homelessness.</p>
        <ul>
          <li><strong>Hidden</strong>: floating around couch surfing. This is the least reported kind and the least visible.</li>
          <li><strong>Transitional</strong>: The most common type. Usually the result of a catastrophic event or sudden life change.</li>
          <li><strong>Episodic</strong>: People who are currently homeless and have experienced it a few times in the past year. Could be substance abuse, mental illness, other medical problems.</li>
          <li><strong>Chronic</strong>: People who have been continuously homeless for a long time.</li>
        </ul>
        <p>A good way to tackle the homelessness problem is to look at the root, hidden homelessness. This is where we see the effect of affordable housing. It is very surprising how many people are actually on the brink of hidden homelessness, so many people in North America live paycheck to paycheck.</p>
        <p>Some countries that have very low homeless population such as Finland, have various affordable housing solutions for each stage.</p>
      </div>
      <hr></hr>
      <div id="dev-team-section">
        <h2 id="the-dev-team">The Dev Team</h2>
        <h3 id="jean-pierre-mouallem---scrum-lord">Jean-Pierre Mouallem - <strong>Scrum Lord</strong></h3>
        <ul>
          <li>Setting up automation -> Build & Linter (ci file)</li>
          <li>Creating Schema for Reddit posts received</li>
          <li>Authorizing connection to DB</li>
          <li>Leading standups</li>
          <li>Manage Wiki Page</li>
          <li>Assisting in creating tasks for developers</li>
        </ul>
        <h3 id="michael-trikas---the-linters-lover">Michael Trikas - <strong>The Linter's Lover</strong></h3>
        <ul>
          <li>researched social media APIs</li>
          <li>created backend tasks for this sprint based on User Stories</li>
          <li>created a module to retrieve posts from the Reddit API and create tf-idf scores for the words in the posts</li>
          <li>created an endpoint to send the number of posts in the database to the client</li>
          <li>created an endpoint to send a random post to the clien</li>
        </ul>
        <h3 id="peter-woon-fat---histogram-influencer">Peter Woon-Fat - <strong>Histogram Influencer</strong></h3>
        <ul>
          <li>Added navigation component to webapp</li>
          <li>Created GET request to fetch count of posts stored in the database, count displayed on webapp</li>
          <li>Created GET request to fetch a random post stored in the database, post displayed on webapp</li>
        </ul>
        <h3 id="stefan-zupancic---value-stream-engineer-">Stefan Zupancic - <strong>Value Stream Engineer 📈</strong></h3>
        <ul>
          <li>doing a business at the economy</li>
        </ul>
      </div>
      <hr></hr>
      <div id="questions-section">
        <h3>Ask The Dev Team</h3>
        <p><b>What has the Dev team struggling with the most thus far?</b></p>
        <blockquote>Adapting to the development environment for this project has caused us the most setbacks. 
          Initially we were struggling with configuring the Docker files to properly set up the 3 containers, and we also had some problems
          arise during development that took us awhile to figure out because we were not used to working in containerized apps. Another noteworthy
          struggle we overcame was figuring out how the test cases worked. Some language features of javascript were difficult to grasp at first, 
          especially async/promises.
        </blockquote>
        <p><b>What epic/userstory/task are you most proud of?</b></p>
        <blockquote>We are most proud of the <i>Interactive Histogram</i> epic we completed in sprint 4. This epic went across the full stack - frontend, backend, and database -
          and the entire Dev team cooperated to complete this functionality. Completing the epic was our goal for sprint 4 and we were all very pleased that we completed it.
        </blockquote>
      </div>
    </div>
  );
};
export default About;