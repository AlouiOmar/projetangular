import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {DriverService} from '../service/driver.service';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.scss']
})
export class EditDriverComponent implements OnInit, OnDestroy
{
    form: FormGroup;

    myId: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param route
     * @param driverService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private route: ActivatedRoute,

        private driverService: DriverService,
        private _formBuilder: FormBuilder
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


        this.driverService.getDataById(this.myId).subscribe(d => {
            console.log(d);
            delete(d.updatedAt);
            delete(d.updatedBy);

            delete(d.createdAt);
            delete(d.createdBy);

            this.form.setValue(d);
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
        data.id = this.myId;
        this.driverService.putData(data, this.myId).subscribe((resp) => console.log(resp));
        console.warn('Your driver has been updated', data);
    }

}
