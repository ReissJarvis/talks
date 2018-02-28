import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
    <mat-card class="admin-card">
      <mat-card-header>
        <mat-card-title>Im In the Admin Area!</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        Hello important admin person!
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
      .admin-card {
        margin:20px;
        box-sizing: content-box;
      }       
  `]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
