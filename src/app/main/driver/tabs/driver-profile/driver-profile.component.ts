import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../../@fuse/animations';
import {ProfileService} from '../../profile.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class DriverProfileComponent implements OnInit, OnDestroy {

    about: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    constructor(
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
      this.about = {general: {gender: 'Male', birthday: 'February 30th, 1974', locations: ['London, UK', 'New York, USA'], about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget pharetra felis, sed ullamcorper dui. Sed et elementum neque. Vestibulum pellente viverra ultrices. Etiam justo augue, vehicula ac gravida a, interdum sit amet nisl. Integer vitae nisi id nibh dictum mollis in vitae tortor.'}, work: {occupation: 'Developer', skills: 'C#, PHP, Javascript, Angular, JS, HTML, CSS', jobs: [{company: 'Self-Employed', date: '2010 - Now'}, {company: 'Google', date: '2008 - 2010'}]}, contact: {address: 'Ut pharetra luctus est quis sodales. Duis nisi tortor, bibendum eget tincidunt, aliquam ac elit. Mauris nec euismod odio.', tel: ['+6 555 6600', '+9 555 5255'], websites: ['withinpixels.com'], emails: ['mail@withinpixels.com', 'mail@creapond.com']}, groups: [{name: 'Android', category: 'Technology', members: '1.856.546'}, {name: 'Google', category: 'Web', members: '1.226.121'}, {name: 'Fallout', category: 'Games', members: '526.142'}], friends: [{name: 'Garry Newman', avatar: 'assets/images/avatars/garry.jpg'}, {name: 'Carl Henderson', avatar: 'assets/images/avatars/carl.jpg'}, {name: 'Jane Dean', avatar: 'assets/images/avatars/jane.jpg'}, {name: 'Garry Arnold', avatar: 'assets/images/avatars/garry.jpg'}, {name: 'Vincent Munoz', avatar: 'assets/images/avatars/vincent.jpg'}, {name: 'Alice Freeman', avatar: 'assets/images/avatars/alice.jpg'}, {name: 'Andrew Green', avatar: 'assets/images/avatars/andrew.jpg'}]};
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
}
