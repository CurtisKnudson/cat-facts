import { Subject } from "rxjs/internal/Subject";
import {
  CatFactsAdapterInterface,
  CatFactsApiResponse,
} from "../adapters/catFactsAdapter";

export interface CatFactMediatorInterface {
  catFact: Subject<string>;
  catFacts: Subject<CatFactsApiResponse[]>;
  /**
   *
   * @returns a single cat fact as a string
   * @example const fact = api.getFactFact();
   * `console.log(fact)`
   * //'did you know that cats are beautiful'
   */
  getCatFact(): Promise<string>;
  getCatFacts(): Promise<CatFactsApiResponse[]>;
}
export class CatFactMediator implements CatFactMediatorInterface {
  private adapter: CatFactsAdapterInterface;
  constructor(adapter: CatFactsAdapterInterface) {
    this.adapter = adapter;
  }

  catFact = new Subject<string>();
  catFacts = new Subject<CatFactsApiResponse[]>();

  /**
   *
   * @returns a single cat fact as a string
   * @example const fact = api.getFactFact();
   * `console.log(fact)`
   * //'did you know that cats are beautiful'
   */
  async getCatFact() {
    const req = await this.adapter.getCatFact();
    this.catFact.next(req);
    return req;
  }

  async getCatFacts() {
    const req = await this.adapter.getCatFacts();
    this.catFacts.next(req);
    return req;
  }
}
