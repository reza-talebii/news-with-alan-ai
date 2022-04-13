import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./Components/NewsCards/NewsCards";

const ALAN_KEY =
  "0a33d16502ee9e0f70085dcd43bfced22e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: ALAN_KEY,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadLines") setNewsArticles(articles);
      },
    });
  }, []);

  return (
    <div>
      <h1>alan news</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
