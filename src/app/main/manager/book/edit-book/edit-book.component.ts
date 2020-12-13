import { BookService } from './../../../../shared/book.service';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl,Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import { Book } from '../../../../model/book';
import { DateAdapter } from '@angular/material';
import { DatePipe } from '@angular/common';
import {Router} from "@angular/router"
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
  providers: [DatePipe]
})
   export class EditBookComponent implements OnInit, OnDestroy
{
    form: FormGroup;

    myId: any;
    book : Book;
    date: Date;
    test:string;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param route
     * @param vehiculeService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private route: ActivatedRoute,

        private bookService: BookService,
        private _formBuilder: FormBuilder,
        private datepipe: DatePipe,
        private router: Router
    )
    {
        this.myId = this.route.snapshot.paramMap.get('id');

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

        // this.book=new Book();
        this.bookService.getDataById(this.myId).subscribe(data => {
            this.book=data;}
        );
        //this.book.id='5';
        // Reactive Form
        
        // this.form = this._formBuilder.group({
            
        //     id : [this.myId, Validators.required],
        //     name  : new FormControl('', Validators.required) ,
        //     category   : ['', Validators.required],
        //     date  : [new Date(), Validators.required],
        //     description      : ['', Validators.required],
        //     author      : ['', Validators.required],
            
        // });

        // this.bookService.getDataById(this.myId).subscribe(data => {
        //     console.log(data);
        //     this.book=data;
        //     this.form.controls['id'].setValue(this.book.id);
        //     this.form.controls['name'].setValue(this.book.name);
        //     this.form.controls['category'].setValue(this.book.category);
        //     this.date = new Date(this.book.date);
        //     let dd=this.datepipe.transform(this.book.date, 'MM/dd/yyyy');
        //     console.log(dd);
        //     this.form.controls['date'].setValue(dd);
        //     this.form.controls['description'].setValue(this.book.description);
        //     this.form.controls['author'].setValue(this.book.author);
        //     this.form.setValue(data);
        // });
        


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
    onSubmit(): void {
        // console.log(this.test)
        // console.log(this.book);
         //data.id = this.myId;
         this.bookService.putData(this.book, this.myId).subscribe((resp) => {
         console.log(resp);
         this.router.navigate(['/manager/book/list']);
      } );
     console.warn('Your vehicule has been updated', this.book);
    }

}

