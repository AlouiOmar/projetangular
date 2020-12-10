import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { EditDriverComponent } from './edit-driver/edit-driver.component';
import { ListDriverComponent } from './list-driver/list-driver.component';
import { DetailDriverComponent } from './detail-driver/detail-driver.component';
import {RouterModule, Routes} from '@angular/router';

import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {ManagerFileListComponent} from './list-driver/file-list/file-list.component';
import {ListManagerDetailsSidebarComponent} from './list-driver/sidebars/details/details.component';
import {ListManagerMainSidebarComponent} from './list-driver/sidebars/main/main.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';
import {FuseConfirmDialogModule, FuseSidebarModule} from '../../../../@fuse/components';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
const routes: Routes = [
    {
        path     : 'add',
        component: AddDriverComponent,

    },
    {
        path     : 'list',
        component: ListDriverComponent,

    },
    {
        path     : 'detail',
        component: DetailDriverComponent,

    },
    {
        path     : 'edit/:id',
        component: EditDriverComponent,

    },

];


@NgModule({
  declarations: [AddDriverComponent, EditDriverComponent, ListDriverComponent, DetailDriverComponent,
      ListManagerMainSidebarComponent,
      ListManagerDetailsSidebarComponent,
      ManagerFileListComponent
],
  imports: [
      RouterModule.forChild(routes),
      CommonModule,
      FuseConfirmDialogModule,
      FuseSharedModule,
      MatButtonModule,
      MatIconModule,
      MatRippleModule,
      MatSlideToggleModule,
      MatTableModule,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,
      FuseSidebarModule,
      MatDatepickerModule,
      MatPaginatorModule
  ]
})
export class DriverModule { }
