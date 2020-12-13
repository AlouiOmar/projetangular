import { BookManagerService } from '../../../../../shared/book-manager.service';
import { BookService } from '../../../../../shared/book.service';
import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {fuseAnimations} from '@fuse/animations';
import {FuseSidebarService} from '@fuse/components/sidebar/sidebar.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Book} from '../../../../../model/book';


@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ManagerBookListComponent implements OnInit, OnDestroy {
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    books: any;
    dataSource: MatTableDataSource<Book>;
    displayedColumns = [/*'icon',*/  'title', 'date', 'genre', 'description', 'author'];
    selected: any;
    data: any[];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param _bookManagerService
     * @param bookService
     * @param {FuseSidebarService} _fuseSidebarService
     */
    constructor(
        private _bookManagerService: BookManagerService,
        private bookService: BookService,
        private _fuseSidebarService: FuseSidebarService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        //      this.dataSource = new BooksDataSource(this.vehiculeService);
        this.bookService.getData().subscribe(list => {
            this.dataSource = new MatTableDataSource(list);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });



    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On select
     *
     * @param selected
     */
    onSelect(selected): void {
        console.log(selected);
        this._bookManagerService.onBookSelected.next(selected);

    }

    // tslint:disable-next-line:typedef
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name): void {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }
}

export class BooksDataSource extends DataSource<any> {
    /**
     * Constructor
     *
     */
    constructor(
        bookService: BookService) {
        super();
    }

    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    connect(): Observable<any[]> {
        return /*this._bookManagerService.onBooksChanged*/;
    }

    /**
     * Disconnect
     */
    disconnect(): void {
    }
}
