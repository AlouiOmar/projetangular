import { Component } from '@angular/core';

@Component({
    selector   : 'list-manager-main-sidebar',
    templateUrl: './main.component.html',
    styleUrls  : ['./main.component.scss']
})
export class ListManagerMainSidebarComponent
{
    selected: any;

    constructor()
    {
    }
}
