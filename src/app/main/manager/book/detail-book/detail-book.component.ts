import { BookManagerService } from '../../../../shared/book-manager.service';
import { BookService } from './../../../../shared/book.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FuseConfirmDialogComponent } from '../../../../../@fuse/components/confirm-dialog/confirm-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../model/book';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

  myId: any;
  book: Book;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  constructor(
      private route: ActivatedRoute,
      private _bookManagerService: BookManagerService,
      public _matDialog: MatDialog,
      private bookService: BookService,
      private router: Router
  )
  {
      this.myId = this.route.snapshot.paramMap.get('id');

   
  }
  ngOnInit() {
    this.bookService.getDataById(this.myId).subscribe(data => {
      console.log(data)
      this.book=data;
    });
      
  }

  edit(book: Book){
    console.log('edit clicked '+book.id)
    this.router.navigate(['/manager/book/edit/'+book.id]);
  }

  delete(book: Book){
    console.log('delete clicked: '+book.id)
        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if ( result )
            {
                this.bookService.delData(book.id).subscribe(data => {
                  console.log(data);
                  this.router.navigate(['/manager/book/list']);
                });
            }
            this.confirmDialogRef = null;
        });
  }

}
