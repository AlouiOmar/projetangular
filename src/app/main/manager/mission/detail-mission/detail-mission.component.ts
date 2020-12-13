import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FileManagerService } from './../service/file-manager.service';
import { FuseConfirmDialogComponent } from './../../../../../@fuse/components/confirm-dialog/confirm-dialog.component';
import { MissionService } from './../service/mission.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Mission } from '../model/mission';

@Component({
  selector: 'app-detail-mission',
  templateUrl: './detail-mission.component.html',
  styleUrls: ['./detail-mission.component.scss']
})
export class DetailMissionComponent implements OnInit {

  myId: any;
  book: Mission;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  constructor(
      private route: ActivatedRoute,
      private _fileManagerService: FileManagerService,
      public _matDialog: MatDialog,
      private missionService: MissionService,
      private router: Router
  )
  {
      this.myId = this.route.snapshot.paramMap.get('id');

   
  }
  ngOnInit() {
    this.missionService.getDataById(this.myId).subscribe(data => {
      console.log(data)
      this.book=data;
    });
      
  }

  edit(book: Mission){
    console.log('edit clicked '+book.id)
    this.router.navigate(['/manager/mission/edit/'+book.id]);
  }

  delete(book: Mission){
    console.log('delete clicked: '+book.id)
        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if ( result )
            {
                this.missionService.delData(book.id).subscribe(data => {
                  console.log(data);
                  this.router.navigate(['/manager/mission/list']);
                });
            }
            this.confirmDialogRef = null;
        });
  }

}
