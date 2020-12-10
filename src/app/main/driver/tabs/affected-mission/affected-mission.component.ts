import {Component, OnDestroy, OnInit} from '@angular/core';
import {fuseAnimations} from '../../../../../@fuse/animations';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-affected-mission',
  templateUrl: './affected-mission.component.html',
  styleUrls: ['./affected-mission.component.scss'],
    animations : fuseAnimations

})
export class AffectedMissionComponent  implements OnInit, OnDestroy
{
    categories: any[];
    courses: any[];
    coursesFilteredByCategory: any[];
    filteredCourses: any[];
    currentCategory: string;
    searchTerm: string;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     */
    constructor(
    )
    {
        // Set the defaults
        this.currentCategory = 'all';
        this.searchTerm = '';

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

        // tslint:disable-next-line:max-line-length
        this.categories = [{id: 0, value: 'web', label: 'Web'}, {id: 1, value: 'firebase', label: 'Firebase'}, {id: 2, value: 'cloud', label: 'Cloud'}, {id: 3, value: 'android', label: 'Android'}];
        // tslint:disable-next-line:max-line-length
        this.filteredCourses = this.coursesFilteredByCategory = this.courses = [{id: '15459251a6d6b397565', type: 'standard' , title: 'computer and chair', slug: 'basics-of-angular', category: 'web', length: 30, updated: 'Jun 28, 2020'},
            {id: '154588a0864d2881124', title: '2 tvs and a chair', slug: 'basics-of-typeScript', type: 'express', category: 'firebase', length: 60, updated: 'Nov 01, 2020'}
           ];


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

    /**
     * Filter courses by category
     */
    filterCoursesByCategory(): void
    {
        // Filter
        if ( this.currentCategory === 'all' )
        {
            this.coursesFilteredByCategory = this.courses;
            this.filteredCourses = this.courses;
        }
        else
        {
            this.coursesFilteredByCategory = this.courses.filter((course) => {
                return course.category === this.currentCategory;
            });

            this.filteredCourses = [...this.coursesFilteredByCategory];

        }

        // Re-filter by search term
        this.filterCoursesByTerm();
    }

    /**
     * Filter courses by term
     */
    filterCoursesByTerm(): void
    {
        const searchTerm = this.searchTerm.toLowerCase();

        // Search
        if ( searchTerm === '' )
        {
            this.filteredCourses = this.coursesFilteredByCategory;
        }
        else
        {
            this.filteredCourses = this.coursesFilteredByCategory.filter((course) => {
                return course.title.toLowerCase().includes(searchTerm);
            });
        }
    }
}
