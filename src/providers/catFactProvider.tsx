import React, { createContext, useEffect, useState } from "react";
import { CatFactsAdapter } from "../adapters/catFactsAdapter";
import makeContextHook from "../hooks/makeContextHook";
import {
  CatFactMediator,
  CatFactMediatorInterface,
} from "../mediators/catFactMediator";

const CatFactMediatorContext = createContext<
  CatFactMediatorInterface | undefined
>(undefined);

export const useCatFacts = makeContextHook(CatFactMediatorContext);

const CatFactProvider = ({ children }: { children: React.ReactNode }) => {
  const adapter = new CatFactsAdapter();

  const [catFactMediator] = useState(() => new CatFactMediator(adapter));

  return (
    <CatFactMediatorContext.Provider value={catFactMediator}>
      {children}
    </CatFactMediatorContext.Provider>
  );
};

export default CatFactProvider;
