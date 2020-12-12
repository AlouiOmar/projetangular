import { UserService } from 'app/services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import {FileManagerService} from '../../../service/file-manager.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FuseConfirmDialogComponent} from '../../../../../../../@fuse/components/confirm-dialog/confirm-dialog.component';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import {MissionService} from "../../../service/mission.service";


@Component({
    selector   : 'file-manager-details-sidebar',
    templateUrl: './details.component.html',
    styleUrls  : ['./details.component.scss'],
    animations : fuseAnimations
})
export class ListManagerDetailsSidebarComponent implements OnInit, OnDestroy
{
    selected: any;
    folder: any;
    // Private
    private _unsubscribeAll: Subject<any>;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    /**
     * Constructor
     *
     */
    constructor(
        private router: Router,
        private _fileManagerService: FileManagerService,
        private missionService: MissionService,
        public _matDialog: MatDialog,
        private _location: Location,
        private userService: UserService

    )
    {
        this.folder = 'folder';
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
       this._fileManagerService.onFileSelected
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(selected => {
                this.selected = selected;
            });
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

    editVehicule(id): void {
       // this.router.navigate(['/edit'], { queryParams: { page: id } });
       // this._location.go('vehicule/edit/' + id);

    }


    deleteVehicule(id): void
    {
        console.log(this.userService.getUserDetails());
        //console.log(this.missionService.getStat());
        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if ( result )
            {
                this.missionService.delData(id).subscribe(data => console.log(data));
            }
            this.confirmDialogRef = null;
        });

    }


}
