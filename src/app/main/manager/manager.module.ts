import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {FuseModule} from '../../../@fuse/fuse.module';
import {fuseConfig} from '../../fuse-config';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule} from '../../../@fuse/components';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {LayoutModule} from '../../layout/layout.module';
import {ErrorsModule} from '../errors/errors.module';



const appRoutes: Routes = [

    {
        path        : 'vehicule',
        loadChildren: './vehicule/vehicule.module#VehiculeModule'
    },
    {
        path        : 'mission',
        loadChildren: './mission/mission.module#MissionModule'
    },
    {
        path        : 'driver',
        loadChildren: './driver/driver.module#DriverModule'
    },


    /*    {
            path      : '**',
            redirectTo: 'errors/error-404'
        },*/
];
@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(appRoutes),


       ]
})
export class ManagerModule { }
