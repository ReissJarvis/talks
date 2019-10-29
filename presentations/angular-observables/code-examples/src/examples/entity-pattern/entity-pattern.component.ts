import { Component, OnDestroy, OnInit } from '@angular/core';
import { EntityPatternService } from "./entity-pattern.service";
import { Todo } from "./todo";
import { Observable, Subject } from "rxjs";
import { FormBuilder, FormControl } from "@angular/forms";

import * as uuid from 'uuid';
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-entity-pattern',
  templateUrl: './entity-pattern.component.html',
})
export class EntityPatternComponent implements OnInit, OnDestroy {
  todos$: Observable<Todo[]> = this.todoService.entities$;

  todoTitleControl = new FormControl();
  constructor(public todoService: EntityPatternService<Todo>, private fb: FormBuilder) { }

  ngOnInit() {
    this.todoService.load();
  }

  ngOnDestroy(){
   this.todoService.destory();
  }

  add(title: string) {
    this.todoService.add(<Todo>{
      id: uuid.v4(),
      title,
      completed: false
    }).subscribe(result => this.todoTitleControl.reset(""))
  }

}
