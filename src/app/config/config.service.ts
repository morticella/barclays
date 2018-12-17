import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Config {
  base: string;
  date: string;
  rates: number[];

}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: Config;
  currency: string;
  configUrl: string;
  tableData = [
    {'curr': 'GBP', 'buy': NaN, 'sell': NaN},
    {'curr': 'EUR', 'buy': NaN, 'sell': NaN},
    {'curr': 'USD', 'buy': NaN, 'sell': NaN},
    {'curr': 'AUD', 'buy': NaN, 'sell': NaN},
    {'curr': 'CAD', 'buy': NaN, 'sell': NaN},
    {'curr': 'JPY', 'buy': NaN, 'sell': NaN},
  ];
  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }
}
