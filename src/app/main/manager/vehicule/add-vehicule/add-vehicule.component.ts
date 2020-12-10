import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as uuid from 'uuid';
import {VehiculeService} from '../service/vehicule.service';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.scss']
})
export class AddVehiculeComponent implements OnInit, OnDestroy
{
    form: FormGroup;

     myId: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param vehiculeService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private vehiculeService: VehiculeService,
        private _formBuilder: FormBuilder
    )
    {
        this.myId = uuid.v4();

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
            brand : ['', Validators.required],
            model  : ['', Validators.required],
            kilometers   : ['', Validators.required],
            acquisitionDate  : ['', Validators.required],
            fuelType      : ['', Validators.required],
            numberCylinders      : ['', Validators.required],
            numberPlate      : ['', Validators.required],
            doors     : ['', Validators.required],
            seats: ['', [Validators.required, Validators.maxLength(5)]],
            fuelConsumptionUrban   : ['', Validators.required]
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
        console.log(data)
        this.vehiculeService.postData(data).subscribe((resp) => console.log(resp));
        console.warn('Your vehicule has been added', data);
    }

}
