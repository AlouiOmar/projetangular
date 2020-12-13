import { Book } from './../model/book';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
const url = 'http://localhost:3000/books/';

@Injectable({
    providedIn: 'root'
})

export class BookService {
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
        const books = this.http.get<Book[]>(url);
        var sc=0;
        var fa=0;
        var po=0;
        var ro=0;
        var ba=0;
        var dra=0;
        var tra=0;
        var adv=0;
        var tab:number[]=null;
        books.subscribe( books => {
             for( var book of books){
               //  console.log(book['category'])
                if(book['category'] === 'Science-fiction'){
                    //console.log(book['category'] === 'Science-fiction')
                    sc++;
                    //console.log(sc)
                }
                else if(book['category'] === 'Fantastic'){
                    fa++;
                }
                else if(book['category'] === 'Police'){
                    po++;
                }else if(book['category'] === 'Love novel'){
                    ro++;
                }
                else if(book['category'] === 'Comic'){
                    ba++;
                }
                else if(book['category'] === 'Dramatic'){
                    dra++;
                }
                else if(book['category'] === 'Tragic'){
                    tra++;
                }
                else if(book['category'] === 'Adventure'){
                    adv++;
                }
                
             }
            // console.log(sc)
         tab=[sc,fa,po,ro,ba,dra,tra,adv];
         localStorage.setItem("tab",JSON.stringify(tab));

         //console.log(tab)
         });
         
         return JSON.parse(localStorage.getItem("tab"));
    }


    search(data){
        let books:Book[]=[];
        this.http.get<Book[]>(url).subscribe(list=> {books=list;
        });
        let tab:Book[]=[];
        // books.subscribe( books => {
           
        //     localStorage.setItem("tab1",JSON.stringify(tab));
        // });
        setTimeout(() => {
            console.log('hello');
            for( var book of books){
                if(book.name === data || book.author === data || book.category === data || book.date === data || book.description === data){
                        tab.push(book)
                }
                
            }
            console.log(tab);
            console.log(books);
        }, 1000);
        return tab;

        //return JSON.parse(localStorage.getItem("tab1"));
    }

    // public getStat(){
    //     const books = this.http.get<Book[]>(url);
    //     var sc=0;
    //     var fa=0;
    //     var po=0;
    //     var ro=0;
    //     var ba=0;
    //     var dra=0;
    //     var tra=0;
    //     var adv=0;
    //     var tab:number[]=null;
    //     books.subscribe( books => {
    //          for( var book of books){
    //            //  console.log(book['category'])
    //             if(book['category'] === 'Science-fiction'){
    //                 //console.log(book['category'] === 'Science-fiction')
    //                 sc++;
    //                 //console.log(sc)
    //             }
    //             else if(book['category'] === 'Fantastic'){
    //                 fa++;
    //             }
    //             else if(book['category'] === 'Police'){
    //                 po++;
    //             }else if(book['category'] === 'Love novel'){
    //                 ro++;
    //             }
    //             else if(book['category'] === 'Comic'){
    //                 ba++;
    //             }
    //             else if(book['category'] === 'Dramatic'){
    //                 dra++;
    //             }
    //             else if(book['category'] === 'Tragic'){
    //                 tra++;
    //             }
    //             else if(book['category'] === 'Adventure'){
    //                 adv++;
    //             }
                
    //          }
    //         // console.log(sc)
    //      tab=[sc,fa,po,ro,ba,dra,tra,adv];
    //      localStorage.setItem("tab",JSON.stringify(tab));

    //      //console.log(tab)
    //      });
         
    //      return JSON.parse(localStorage.getItem("tab"));
    // }

}
