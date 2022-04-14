import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";

import NewsCards from "./Components/NewsCards/NewsCards";
import Header from "./Components/Header/Header";

const ALAN_KEY =
  "0a33d16502ee9e0f70085dcd43bfced22e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  //HANDLING ALAN
  useEffect(() => {
    alanBtn({
      key: ALAN_KEY,
      onCommand: ({ command, articles, number }) => {
        switch (command) {
          //set new articles
          case "newsHeadlines":
            setNewsArticles(articles);
            setActiveArticle(-1);
            break;

          //highlight card for reading
          case "highlight":
            setActiveArticle((prev) => prev + 1);

            break;

          //opening article by index
          case "openArticle":
            //convert number to string four => 4
            const parsedNumber =
              number.length > 2
                ? wordsToNumbers(number, { fuzzy: true })
                : number;

            if (parsedNumber > 20) {
              try {
                alanBtn().playText("News not exist Please try again");
              } catch {
                alert("News not exist Please try again");
              }
              return;
            } else {
              const article = articles[parsedNumber - 1];
              window.open(article.url, "_blank");
            }

            break;

          default:
            break;
        }
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
