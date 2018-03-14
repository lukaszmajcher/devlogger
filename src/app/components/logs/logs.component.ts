import { LogService } from './../../services/log.service';
import { Log } from './../../models/Log';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: Log[];

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.getLogs().subscribe(logs => {
      this.logs = logs;
    });
  }

  onSelect(log: Log){
    this.logService.setFormLog(log);
  }

}
