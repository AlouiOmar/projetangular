import { BookService } from './../../../../shared/book.service';
import { Router } from '@angular/router';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {FuseSidebarService} from "../../../../../@fuse/components/sidebar/sidebar.service";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})


    export class ListBookComponent  implements OnInit, OnDestroy
{
    selected: any;
    pathArr: string[];
    sr:string;
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     */
    constructor(
        private _fuseSidebarService: FuseSidebarService,
        private bookService: BookService,
        private router: Router
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.sr="";
        /*this._fileManagerService.onFileSelected
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(selected => {
                this.selected = selected;
                this.pathArr = selected.location.split('>');
            });*/
            
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void
    {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }

    search(){
        // console.log(this.sr)
        // console.log(this.bookService.search(this.sr))
        this.router.navigate(['/manager/book/search/'+this.sr]);
    }

}

