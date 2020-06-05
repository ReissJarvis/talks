import { Component, OnInit } from '@angular/core';
import { LocalStateManagementViewModelService, TodoState } from './services/local-state-management-view-model.service';
import { createSelector } from './services/local-state.service';
import { pipe } from 'rxjs';
import { Todo } from '../../shared/to-dos/models/todo.model';


e

@Component({
  selector: 'app-local-state-management',
  templateUrl: './local-state-management.component.html',
  styleUrls: ['./local-state-management.component.scss'],
  providers: [LocalStateManagementViewModelService]
})
export class LocalStateManagementComponent implements OnInit {

  const todos = this.vmService.select(createSelector<TodoState, Todo[]>(pipe()))
  constructor(public vmService: LocalStateManagementViewModelService) { }

  ngOnInit(): void {
  }

}
