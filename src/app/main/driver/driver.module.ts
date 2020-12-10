import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverProfileComponent } from './tabs/driver-profile/driver-profile.component';
import { MissionHistoryComponent } from './tabs/mission-history/mission-history.component';
import { AffectedMissionComponent } from './tabs/affected-mission/affected-mission.component';
import { MainComponent } from './main.component';


import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { FuseSharedModule } from '@fuse/shared.module';
import {ProfileService} from './profile.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FuseSidebarModule} from '../../../@fuse/components';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';

const routes = [
    {
        path     : 'profile',
        component: MainComponent,

    }
];

@NgModule({
  declarations: [DriverProfileComponent, MissionHistoryComponent, AffectedMissionComponent, MainComponent],
  imports: [
      RouterModule.forChild(routes),

      MatButtonModule,
      MatDividerModule,
      MatIconModule,
      MatTabsModule,

      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatSelectModule,

      FuseSidebarModule,

      FuseSharedModule  ],

})
export class DriverModule { }
