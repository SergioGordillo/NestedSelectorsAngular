import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _continents:string[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get continents():string[]{
    return [...this._continents];
  }

  constructor() { }
}
