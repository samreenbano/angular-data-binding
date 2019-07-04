import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Scenario2Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    Scenario2Component1Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Scenario2Component1Component
  ]
})
export class Scenario2Module { }
