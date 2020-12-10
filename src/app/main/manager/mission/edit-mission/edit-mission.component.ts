import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {VehiculeService} from "../../vehicule/service/vehicule.service";

@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.scss']
})
   export class EditMissionComponent implements OnInit, OnDestroy
{
    form: FormGroup;

    myId: any;

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

        private vehiculeService: VehiculeService,
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


        this.vehiculeService.getDataById(this.myId).subscribe(data => {
            console.log(data);
            delete(data.createdAt);
            delete(data.createdBy);
            delete(data.updatedAt);
            delete(data.updatedBy);
            this.form.setValue(data);
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
        this.vehiculeService.putData(data, this.myId).subscribe((resp) => console.log(resp));
        console.warn('Your vehicule has been updated', data);
    }

}

