import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mission } from '../model/mission';

@Component({
  selector: 'affiche-detail-mission',
  templateUrl: './affiche-detail.component.html',
  styleUrls: ['./affiche-detail.component.scss']
})
export class AfficheDetailComponent implements OnInit {
@Input() book: Mission;
@Output() editEvent=new EventEmitter<Mission>();
@Output() deleteEvent= new EventEmitter<Mission>();

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
