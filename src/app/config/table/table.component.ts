import { Component, OnInit} from '@angular/core';

import { ConfigService, Config } from '../config.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  bases: any[];
  currency: string;
  controlAZ: boolean;
  textFilter: string;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.bases = this.configService.tableData;
    this.currency = this.configService.currency;
    this.textFilter = '^';
  }
  sortByAZ() {
    if (!this.controlAZ) {
      this.bases.sort((a, b) => a.curr.localeCompare(b.curr));
      this.controlAZ = true;
      this.textFilter = 'A-Z';
    } else {
      this.bases.reverse();
      this.controlAZ = false;
      this.textFilter = 'Z-A';
    }
  }

}
