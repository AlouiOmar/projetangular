import { Router } from '@angular/router';
import { BookService } from './../../../../shared/book.service';
import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit, OnDestroy , AfterViewInit{

    form: FormGroup;
    private map = null;

    myId: any;
    lng: any;
    lat: any;
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param bookService
     * @param {FormBuilder} formBuilder
     */
    constructor(
        private bookService: BookService,
        private formBuilder: FormBuilder,
        private router: Router
    )
    {
       
       // this.myId = uuid.v4();

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

        // Reactive Form
        this.form = this.formBuilder.group({
            
            id : [this.myId, Validators.required],
            name  : new FormControl('', Validators.required) ,
            category   : ['', Validators.required],
            date  : [new Date(), Validators.required],
            description      : ['', Validators.required],
            author      : ['', Validators.required],
        });
        this.lat = 36.806389;
        this.lng = 10.181667;

    }
    /**
     * After View Init
     */
    ngAfterViewInit(): void {

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
    onSubmit(data): void {
        console.log(data);
        this.bookService.postData(data).subscribe((resp) => {console.log(resp)
            this.router.navigate(['/manager/book/list']);
        });
        console.warn('Your vehicule has been added', data);
    }

}

