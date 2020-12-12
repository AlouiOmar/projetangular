import { StatComponent } from './stat.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FuseSharedModule } from '@fuse/shared.module';

import { LogoutComponent } from 'app/logout/logout.component';
import { NgApexchartsModule } from 'ng-apexcharts';

const routes = [
    {
        path     : 'stat',
        component: StatComponent
    }
];

@NgModule({
    declarations: [
        StatComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        NgApexchartsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FuseSharedModule
    ]
})
export class StatModule
{
}
