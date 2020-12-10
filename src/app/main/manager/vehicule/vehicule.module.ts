import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { EditVehiculeComponent } from './edit-vehicule/edit-vehicule.component';
import { ListVehiculeComponent } from './list-vehicule/list-vehicule.component';
import { DetailVehiculeComponent } from './detail-vehicule/detail-vehicule.component';
import {RouterModule, Routes} from '@angular/router';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FuseConfirmDialogModule, FuseSidebarModule} from '../../../../@fuse/components';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ListManagerMainSidebarComponent} from './list-vehicule/sidebars/main/main.component';
import {ListManagerDetailsSidebarComponent} from './list-vehicule/sidebars/details/details.component';
import {ManagerFileListComponent} from './list-vehicule/file-list/file-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';


const routes: Routes = [
    {
        path     : 'add',
        component: AddVehiculeComponent,

    },
    {
        path     : 'list',
        component: ListVehiculeComponent,

    },
    {
        path     : 'detail',
        component: DetailVehiculeComponent,

    },
    {
        path     : 'edit/:id',
        component: EditVehiculeComponent,

    },

];
@NgModule({
  declarations: [AddVehiculeComponent, EditVehiculeComponent, ListVehiculeComponent, DetailVehiculeComponent,
      ListManagerMainSidebarComponent,
      ListManagerDetailsSidebarComponent,
      ManagerFileListComponent],
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
export class VehiculeModule { }
