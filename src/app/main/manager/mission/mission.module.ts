import { MatMenuModule } from '@angular/material/menu';
import { DetailMissionComponent } from './detail-mission/detail-mission.component';
import { AfficheDetailComponent } from './../mission/affiche-detail/affiche-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMissionComponent } from './add-mission/add-mission.component';
import { EditMissionComponent } from './edit-mission/edit-mission.component';
import { ListMissionComponent } from './list-mission/list-mission.component';
import {RouterModule, Routes} from '@angular/router';

import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {FuseConfirmDialogModule, FuseSidebarModule} from '../../../../@fuse/components';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ListManagerMainSidebarComponent} from './list-mission/sidebars/main/main.component';
import {ListManagerDetailsSidebarComponent} from './list-mission/sidebars/details/details.component';
import {ManagerFileListComponent} from './list-mission/file-list/file-list.component';


const routes: Routes = [
    {
        path     : 'add',
        component: AddMissionComponent,

    },
    {
        path     : 'list',
        component: ListMissionComponent,

    },
    {
        path     : 'detail/:id',
        component: DetailMissionComponent,

    },
    {
        path     : 'edit/:id',
        component: EditMissionComponent,

    },

];

@NgModule({
  declarations: [AddMissionComponent, EditMissionComponent, ListMissionComponent,AfficheDetailComponent,DetailMissionComponent,
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
      MatMenuModule,
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
export class MissionModule { }
