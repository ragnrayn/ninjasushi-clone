import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';


const homeRouter: Routes = [
  { path: "", component: HomeComponent }
];


@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    SvgIconComponent,
    RouterModule.forChild(homeRouter),
    MatIconModule
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
