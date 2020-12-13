import { SearchModernComponent } from './search/modern/search-modern.component';
import { SearchModernModule } from './search/modern/search-modern.module';
import { MatMenuModule } from '@angular/material/menu';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { AfficheDetailComponent } from './../book/affiche-detail/affiche-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';
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
import {ListManagerMainSidebarComponent} from './list-book/sidebars/main/main.component';
import {ListManagerDetailsSidebarComponent} from './list-book/sidebars/details/details.component';
import {ManagerBookListComponent} from './list-book/book-list/book-list.component';


const routes: Routes = [
    {
        path     : 'add',
        component: AddBookComponent,

    },
    {
        path     : 'list',
        component: ListBookComponent,

    },
    {
        path     : 'detail/:id',
        component: DetailBookComponent,

    },
    {
        path     : 'edit/:id',
        component: EditBookComponent,

    },
    {
        path     : 'search/:key',
        component: SearchModernComponent,

    }

];

@NgModule({
  declarations: [AddBookComponent, EditBookComponent, ListBookComponent,AfficheDetailComponent,DetailBookComponent,SearchModernComponent,
      ListManagerMainSidebarComponent,
      ListManagerDetailsSidebarComponent,
      ManagerBookListComponent],
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
export class BookModule { }
