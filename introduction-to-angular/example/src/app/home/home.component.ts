import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <mat-card class="introduction-card">
      <mat-card-header>
        <mat-card-title>Introduction To Angular Demo</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        This is the Introduction to angular app that accompanies the introduction to angular talk
      </mat-card-content>
    </mat-card>
`,
  styles: [`
      .introduction-card {
        margin:20px;
        box-sizing: content-box;
      }       
  `]
})
export class HomeComponent {}
