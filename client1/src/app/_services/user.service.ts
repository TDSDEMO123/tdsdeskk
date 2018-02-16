import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app.config';
import { User } from '../_models/index';
import { Book } from '../_models/index';
import { Tag } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(appConfig.apiUrl + '/users');
    }

    getById(_id: string) {
        return this.http.get(appConfig.apiUrl + '/users/' + _id);
    }

    create(user: User) {
        return this.http.post(appConfig.apiUrl + '/users/register', user);
    }
    //vgraddBook(book:Book){

        //vgrreturn this.http.post(appConfig.apiUrl + '/users/registerone', book);  
        addBook(bookData){
            
                //return this.http.post(appConfig.apiUrl + '/users/registerone', user); 
               return this.http.post('http://34.192.184.245:3000/notes',bookData);

    }
    addTag(tag:Tag){
        return this.http.post(appConfig.apiUrl + '/users/tag', tag);  
    }
    addGroup(tag:Tag){
        return this.http.post(appConfig.apiUrl + '/users/tag', tag);  
    }

    update(user: User) {
        return this.http.put(appConfig.apiUrl + '/users/' + user._id, user);
    }

    delete(_id: string) {
        return this.http.delete(appConfig.apiUrl + '/users/' + _id);
    }
}