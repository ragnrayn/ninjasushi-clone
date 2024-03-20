import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';


const homeRouter: Routes = [
  { path: "", component: HomeComponent }
];


@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouter),
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
