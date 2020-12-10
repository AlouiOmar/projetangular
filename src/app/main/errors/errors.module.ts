import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Error404Module} from './404/error-404.module';
import {Error500Module} from './500/error-500.module';


const routes = [
    {
        path        : 'error-400',
        loadChildren: './404/error-404.module#Error404Module'
    },
    {
        path        : 'error-500',
        loadChildren: './500/error-500.module#Error500Module'
    }
    ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      // Errors
      Error404Module,
      Error500Module,
  ]
})
export class ErrorsModule { }
