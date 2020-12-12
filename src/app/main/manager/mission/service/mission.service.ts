import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Mission } from '../model/mission';
const url = 'http://localhost:3000/books/';

@Injectable({
    providedIn: 'root'
})

export class MissionService {
    private stat:number[];
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

    public getStat(){
        const books = this.http.get<Mission[]>(url);
        var sc=0;
        var fa=0;
        var po=0;
        var ro=0;
        var ba=0;
        var dra=0;
        var tra=0;
        var tab:number[]=null;
        books.subscribe( books => {
             for( var book of books){
               //  console.log(book['category'])
                if(book['category'] === 'Science-fiction'){
                    //console.log(book['category'] === 'Science-fiction')
                    sc++;
                    //console.log(sc)
                }
                else if(book['category'] === 'Fantastique'){
                    fa++;
                }
                else if(book['category'] === 'Policier'){
                    po++;
                }else if(book['category'] === 'Roman d\'amour'){
                    ro++;
                }
                else if(book['category'] === 'Bande dessinée'){
                    ba++;
                }
                else if(book['category'] === 'Dramatique'){
                    dra++;
                }
                else if(book['category'] === 'Tragique'){
                    tra++;
                }
             }
            // console.log(sc)
         tab=[sc,fa,po,ro,ba,dra,tra];
         localStorage.setItem("tab",JSON.stringify(tab));

         //console.log(tab)
         });
         
         return JSON.parse(localStorage.getItem("tab"));
    }
}
