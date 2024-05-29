export default function getAPIBaseUrl() {
  let apiUrl = "";

  if (!process.env.REACT_APP_SERVER_BASE && !process.env.REACT_APP_SERVER_PORT) {
    apiUrl = "http://localhost:8080";
  } else {
    apiUrl = "/api";
  }

  return apiUrl;
}

// GET request for the number of posts stored in the database
export async function getPostCount() {
  let postCount;
  const BASE_URL = getAPIBaseUrl();

  try {
    const res = await fetch(`${BASE_URL}/postCount`);
    const data = await res.json();

    if (data.postCount) {
      postCount = JSON.parse(data.postCount);
    }
  } catch (e) {
    console.error("Unable to fetch post count");
    console.error(e);
  }

  return postCount;
}

// GET request for a random post stored in the database
export async function getRandomPost() {
  let randomPost;
  const BASE_URL = getAPIBaseUrl();

  try {
    const res = await fetch(`${BASE_URL}/randomPost`);
    const data = await res.json();
    console.log(data);

    if (data.post) {
      randomPost = data.post;
      console.log(randomPost);
    }
  } catch (e) {
    console.error("Unable to fetch random post");
    console.error(e);
  }

  return randomPost;
}


// POST request to send array of keywords to filter by
export function postKeywords(keywords) {
  const BASE_URL = getAPIBaseUrl();
  console.log("POST: " + keywords)
  return fetch(`${BASE_URL}/keywords`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ keywords }),
  });
}


// GET request to get combined keyword data from Reddit and Google Trends
export async function getKeywordData() {
  let keywordsData;
  const BASE_URL = getAPIBaseUrl();
  try {
    const res = await fetch(`${BASE_URL}/wordcloud`);
    const data = await res.json();
    console.log(data);

    if (data) {
      keywordsData = data;
    }
  } catch (e) {
    console.error("Unable to fetch keyword data");
    console.error(e);
  }

  return keywordsData;
}