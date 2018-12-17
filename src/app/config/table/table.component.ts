import { Component, OnInit} from '@angular/core';

import { ConfigService } from '../config.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  bases: any[];
  currency: string;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.bases = this.configService.tableData;
    this.currency = this.configService.currency;
  }
}
