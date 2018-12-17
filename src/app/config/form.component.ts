import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ConfigService, Config } from './config.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  config: Config;
  getRates: FormGroup;
  bases: any[];
  date: any;
  today: any;
  day: any;
  month: any;
  year: number;
  currency: string;
  i: number;
  error: any;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.getRates = new FormGroup({
      'date': new FormControl(),
      'bases': new FormControl(),
     });

    this.bases = this.configService.tableData;
    this.today = new Date;
    this.year = this.today.getFullYear();
    this.month = this.today.getMonth() + 1;
    this.day = this.today.getDate();
    this.addZeroToDate();
    // selected value in datepicker
    this.today = `${this.month}/${this.day}/${this.year}`;
    this.currency = 'GBP';
    this.configService.currency = 'GBP';
  }

  addZeroToDate() {
    this.month = (this.month < 10) ? '0' + this.month : this.month ;
    this.day = (this.day < 10) ? '0' + this.day : this.day;
  }

  public showConfig() {
    if (this.getRates.value.bases) {
      this.currency = this.getRates.get('bases').value;
      this.configService.currency = this.getRates.get('bases').value;
    }
    if (this.getRates.value.date) {
      this.day = this.getRates.get('date').value.getDate();
      this.month = this.getRates.get('date').value.getMonth() + 1;
      this.year = this.getRates.get('date').value.getFullYear();
      this.addZeroToDate();
    }
    this.date = `${this.year}-${this.month}-${this.day}` ;
    this.configService.configUrl = `https://api.exchangeratesapi.io/${this.date}?base=${this.currency}`;
    this.configService.getConfig()
        .subscribe(
          (data: Config) => this.config = { ...data },
          error => this.error = error,
          () => this.getPromiseData()
        );
  }
  getPromiseData() {
    this.i = 0;
        for (const value of this.bases) {
          if (this.config) {
          this.i++;
          this.configService.tableData[this.i - 1].buy = this.config.rates[value.curr] - (this.config.rates[value.curr] / 100 * 5);
          this.configService.tableData[this.i - 1].sell = this.config.rates[value.curr] + (this.config.rates[value.curr] / 100 * 5);
          }
        }
  }
}
