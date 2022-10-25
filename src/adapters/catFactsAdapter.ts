export interface CatFactsApiResponse {
  fact: string;
  length: number;
}

export interface CatFactsAdapterInterface {
  getCatFact(): Promise<string>;
  getCatFacts(): Promise<CatFactsApiResponse[]>;
}

export class CatFactsAdapter implements CatFactsAdapterInterface {
  api = "https://catfact.ninja";

  async getCatFact() {
    const apiString = `${this.api}/${"fact"}`;
    const catFact: Promise<string> = fetch(apiString)
      .then((res) => {
        return res.json();
      })
      .then((res) => res.fact);
    return await catFact;
  }

  async getCatFacts() {
    const apiString = `${this.api}/${"facts"}`;

    const catFacts: Promise<CatFactsApiResponse[]> = await fetch(apiString)
      .then((res) => {
        return res.json();
      })
      .then((res) => res.data);

    return catFacts;
  }
}
