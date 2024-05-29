import {getRandomPost, getPostCount, postKeywords, getKeywordData} from "./utils/api"

describe("getPostCount", () => {
    it("should return the number of posts", async () => {
      const mockPostCount = 5;
      const mockResponse = { postCount: JSON.stringify(mockPostCount) };
      
      // Mock the fetch function to return a fake response
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse),
      });
      
      const postCount = await getPostCount();
      
      expect(postCount).toEqual(mockPostCount);
    });
  });

describe("getRandomPost", () => {
    it("should return a random post", async () => {
      const mockPost = { id: 1, title: "Mock Post" };
      const mockResponse = { post: mockPost };
      
      // Mock the fetch function to return a fake response
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockResponse),
      });
      
      const randomPost = await getRandomPost();
      
      expect(randomPost).toEqual(mockPost);
    });
  });

describe("postKeywords", () => {
  it("should send an array of keywords to the backend", async () => {
    const mockKeywords = ["keyword1", "keyword2", "keyword3"];
    
    // Mock the fetch function to return a successful response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
    });
    
    await postKeywords(mockKeywords);
    
    // Assert that the fetch function was called with the correct arguments
    expect(fetch).toHaveBeenCalledWith(
      expect.any(String), 
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keywords: mockKeywords }),
      })
    );
  });
  
  it("should handle errors when sending keywords to the backend", async () => {
    const mockKeywords = ["keyword1", "keyword2", "keyword3"];
    const mockError = new Error("Request failed");
    
    // Mock the fetch function to return a failed response
    global.fetch = jest.fn().mockRejectedValue(mockError);
    
    await expect(postKeywords(mockKeywords)).rejects.toEqual(mockError);
  });
});

describe("getKeywordData", () => {
  it("should get combined keyword data from the backend API", async () => {
    const mockData = {
      reddit: [{ name: "keyword1", value: 10 }, { name: "keyword2", value: 5 }],
      trends: [{ name: "keyword3", value: 8 }, { name: "keyword4", value: 3 }],
    };
    
    // Mock the fetch function to return a successful response with our mock data
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });
    
    const result = await getKeywordData();
    
    // Assert that the fetch function was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining("/wordcloud"));
    
    // Assert that the function returned the correct data
    expect(result).toEqual(mockData);
  });
});
