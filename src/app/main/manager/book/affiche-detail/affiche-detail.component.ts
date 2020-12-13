import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../../model/book';

@Component({
  selector: 'affiche-detail-book',
  templateUrl: './affiche-detail.component.html',
  styleUrls: ['./affiche-detail.component.scss']
})
export class AfficheDetailComponent implements OnInit {
@Input() book: Book;
@Output() editEvent=new EventEmitter<Book>();
@Output() deleteEvent= new EventEmitter<Book>();

constructor() { }

  ngOnInit() {
  }

  sendEdit(){
    this.editEvent.emit(this.book);
  }
  sendDelete(){
    this.deleteEvent.emit(this.book);
  }

}
