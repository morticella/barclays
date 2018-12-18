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

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.bases = this.configService.tableData;
    this.currency = this.configService.currency;
  }

  sortByAZ() {
    console.log('control', this.controlAZ);
    if (!this.controlAZ) {
      this.bases.sort((a, b) => a.curr.localeCompare(b.curr));
      this.controlAZ = true;
    } else {
      this.bases.reverse();
      this.controlAZ = false;
    }
  }

}
