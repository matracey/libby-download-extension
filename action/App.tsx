import React from "react";

import { Hero } from "react-daisyui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Hero className="py-5 px-2">
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <FontAwesomeIcon icon={faCode} size="6x" />
          <h1 className="text-2xl font-bold">Welcome to your new extension!</h1>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default App;
