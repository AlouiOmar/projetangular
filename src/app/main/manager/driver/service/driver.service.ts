import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
const url = '/api/driver-management/driver/';

@Injectable({
    providedIn: 'root'
})

export class DriverService {

    constructor(private http: HttpClient) {
    }
    public getData(): any {
        return this.http.get(url);
    }
    public getDataById(data): any {
        return this.http.get(url + `${data}`);
    }
    public postData(data): any {
        return this.http.post(url, data);
    }

    public delData(data): any {
        return this.http.delete(url + `${data}`);
    }

    public putData(data, id): any {
        return this.http.put(url + `${id}`, data);
    }
}
