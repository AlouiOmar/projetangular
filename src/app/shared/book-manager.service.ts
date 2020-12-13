import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})export class BookManagerService implements Resolve<any>
{
    onBooksChanged: BehaviorSubject<any>;
    onBookSelected: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onBooksChanged = new BehaviorSubject({});
        this.onBookSelected = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getBooks()
            ]).then(
                ([books]) => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get books
     *
     * @returns {Promise<any>}
     */
    getBooks(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/book-manager')
                .subscribe((response: any) => {
                    this.onBooksChanged.next(response);
                    this.onBookSelected.next(response[0]);
                    resolve(response);
                }, reject);
        });
    }

}
