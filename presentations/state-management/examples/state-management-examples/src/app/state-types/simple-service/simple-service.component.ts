import { Component, OnInit } from '@angular/core';
import { TodoStateService } from './todo-state.service';

@Component({
  selector: 'app-simple-service',
  templateUrl: './simple-service.component.html',
  styleUrls: ['./simple-service.component.scss']
})
export class SimpleServiceComponent implements OnInit {

  constructor(public todoStateService: TodoStateService) { }

  ngOnInit(): void {
    this.todoStateService.getAll()
  }

}
