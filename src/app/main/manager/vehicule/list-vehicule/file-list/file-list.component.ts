import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {fuseAnimations} from '@fuse/animations';
import {FuseSidebarService} from '@fuse/components/sidebar/sidebar.service';
import {VehiculeService} from '../../service/vehicule.service';
import {FileManagerService} from '../../service/file-manager.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Vehicule} from '../../model/Vehicule';


@Component({
    selector: 'file-list',
    templateUrl: './file-list.component.html',
    styleUrls: ['./file-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ManagerFileListComponent implements OnInit, OnDestroy {
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    files: any;
    dataSource: MatTableDataSource<Vehicule>;
    displayedColumns = [/*'icon',*/ 'brand', 'model', 'acquisitionDate', 'kilometers', 'fuelType', 'fuelConsumptionUrban', 'numberCylinders', 'seats', 'doors'];
    selected: any;
    data: any[];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param _fileManagerService
     * @param vehiculeService
     * @param {FuseSidebarService} _fuseSidebarService
     */
    constructor(
        private _fileManagerService: FileManagerService,
        private vehiculeService: VehiculeService,
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
        //      this.dataSource = new FilesDataSource(this.vehiculeService);
        this.vehiculeService.getData().subscribe(list => {
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
        this._fileManagerService.onFileSelected.next(selected);

    }

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

export class FilesDataSource extends DataSource<any> {
    /**
     * Constructor
     *
     */
    constructor(
        vehiculeService: VehiculeService) {
        super();
    }

    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    connect(): Observable<any[]> {
        return /*this._fileManagerService.onFilesChanged*/;
    }

    /**
     * Disconnect
     */
    disconnect(): void {
    }
}
