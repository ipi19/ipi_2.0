import { useEffect, useState } from "react";
import apiClient from "./services/api-client";

interface News {
  profile: string;
  earnings: number;
}

interface FerchNewsResponse {
  symbol: string;

  results: News[];
}

const HomeNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    apiClient
      .get<FerchNewsResponse>("/symbol")
      .then((res) => setNews(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  {
    typeof error === "string" && <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul>
        {news.map((news) => (
          <li key={news.profile}>{news.profile}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomeNews;
