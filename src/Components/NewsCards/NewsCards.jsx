import React from "react";

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
