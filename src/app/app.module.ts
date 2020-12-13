import { RegisterModule } from './register/register.module';
import { StatModule } from './main/manager/stat/stat.module';
import { AuthGuard } from './shared/auth-guard.service';
import { LogoutModule } from './logout/logout.module';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import {ErrorsModule} from './main/errors/errors.module';
import { StatComponent } from './main/manager/stat/stat.component';

const appRoutes: Routes = [

    {
        path        : 'manager',
        loadChildren: './main/manager/manager.module#ManagerModule', canActivate: [AuthGuard]
    },

    {
        path        : 'errors',
        loadChildren: './main/errors/errors.module#ErrorsModule'
    },

];

@NgModule({
    declarations: [
        AppComponent,
        //StatComponent
    ],
    imports     : [
        
        LoginModule,
        LogoutModule,
        RegisterModule,
        StatModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,

    ],
    providers: [AuthGuard],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
