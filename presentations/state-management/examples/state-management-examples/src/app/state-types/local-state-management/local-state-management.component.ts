import { Component, OnInit } from '@angular/core';
import { LocalStateManagementViewModelService } from './services/local-state-management-view-model.service';


@Component({
  selector: 'app-local-state-management',
  templateUrl: './local-state-management.component.html',
  styleUrls: ['./local-state-management.component.scss'],
  providers: [LocalStateManagementViewModelService]
})
export class LocalStateManagementComponent implements OnInit {

  constructor(public vmService: LocalStateManagementViewModelService) { }

  ngOnInit(): void {
  }

}
