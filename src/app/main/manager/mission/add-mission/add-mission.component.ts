import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Subject} from 'rxjs';
import {MissionService} from '../service/mission.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.scss']
})
export class AddMissionComponent implements OnInit, OnDestroy , AfterViewInit{

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
     * @param missionService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private missionService: MissionService,
        private _formBuilder: FormBuilder
    )
    {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png')
        });
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
        this.form = this._formBuilder.group({
            
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

        this.initMap();
    }
    private initMap(): void {
        this.map = L.map('map', {
            center: [ 36.806389
                , 10.181667 ],
            zoom: 13
        });
        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        tiles.addTo(this.map);
        let marker = [36.806389, 10.181667];
        this.map.on('click', (e) => {
            this.lat = e.latlng.lat;
            this.lng = e.latlng.lng;
            this.form.get('destinationLat').setValue(this.lat);
            this.form.get('destinationLng').setValue(this.lng);
            this.map.removeLayer(marker);

            marker = L.marker(e.latlng).addTo(this.map);

            console.log(e.latlng);
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
        this.missionService.postData(data).subscribe((resp) => console.log(resp));
        console.warn('Your vehicule has been added', data);
    }

}

