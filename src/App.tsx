import { useEffect, useState } from "react";
import { CatFactsApiResponse } from "./adapters/catFactsAdapter";
import "./App.css";
import { useCatFacts } from "./providers/catFactProvider";

function App() {
  const api = useCatFacts();

  console.log(api.getCatFact);
  return (
    <div>
      <div></div>
      <div></div>
      <button>Get Cat Fact</button>
      <div> I am a tutorial</div>
    </div>
  );
}

export default App;
