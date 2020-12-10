import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {DriverService} from '../service/driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent implements OnInit, OnDestroy
{
    form: FormGroup;

    myId: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param driverService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private driverService: DriverService,
        private _formBuilder: FormBuilder
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
        // Reactive Form
        this.form = this._formBuilder.group({
            id   : [
                {
                    value   : this.myId,
                    disabled: true
                }, Validators.required
            ],
            name : ['', Validators.required],
            regDate  : ['', Validators.required],
            age   : ['', Validators.required],
            cin   : ['', Validators.required],
            driverLicenses  : ['', Validators.required],
            note      : ['', Validators.required],

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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    onSubmit(data): void {
        console.log(data);
        this.driverService.postData(data).subscribe((resp) => console.log(resp));
        console.warn('Your driver has been added', data);
    }

}
