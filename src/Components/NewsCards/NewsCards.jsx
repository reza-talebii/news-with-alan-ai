import React from "react";

import NewsCard from "../NewsCard/NewsCard";

const NewsCards = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsCards;
