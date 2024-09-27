import React from "react";

import { Hero } from "react-daisyui";

function App() {
  return (
    <Hero className="py-5 px-2">
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold">Welcome to your new extension!</h1>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default App;
