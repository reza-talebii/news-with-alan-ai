import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./Components/NewsCards/NewsCards";
import Header from "./Components/Header/Header";

const ALAN_KEY =
  "0a33d16502ee9e0f70085dcd43bfced22e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: ALAN_KEY,
      onCommand: ({ command, articles }) => {
        if (command === "newsHeadLines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        }
        if (command === "highlight") setActiveArticle((prev) => prev + 1);
      },
    });
  }, []);

  return (
    <div>
      <Header newsArticles={newsArticles} />
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
