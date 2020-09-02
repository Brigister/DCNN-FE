import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContattaciComponent } from './contattaci/contattaci.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: "", component: ContattaciComponent }
];

@NgModule({
  declarations: [ContattaciComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})
export class ContattaciModule { }
