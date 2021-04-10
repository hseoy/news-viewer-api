import NewsAPI from 'newsapi';

const newsapi = new NewsAPI(process.env.API_KEY);

const handleGetNews = async (req, res) => {
  const { category, country } = req.query;
  try {
    const response = await newsapi.v2.topHeadlines({ category, country });
    return res.json({ articles: response.articles });
  } catch {
    return res.status(400).json("the 'country' query parameter is required");
  }
};

// eslint-disable-next-line import/prefer-default-export
export { handleGetNews };
