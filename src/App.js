import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const ALAN_KEY =
  "0a33d16502ee9e0f70085dcd43bfced22e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: ALAN_KEY,
      onCommand: ({ command }) => {
        if (command === "test") {
          alert("ok");
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>alan news</h1>
    </div>
  );
};

export default App;
