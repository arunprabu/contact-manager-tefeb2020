import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  createContact(contactData): Observable<Contact> { // 1. get the data from comp.ts
    console.log(contactData);
    // 2. send the data to rest api
    // 2.1. identify the rest api url -- http://jsonplaceholder.typicode.com/users
    // 2.2. using rest api client tool, pass the data over POST Method
    return this.http.post(this.REST_API_URL, contactData)
      .pipe(map((res: Contact) => { // 3. get the resp from rest api
        console.log(res);
        return res; // 4. send it back to the comp ts
      }));

  }

  getContacts(): Observable<Contact[]> { // 1. get the req from comp
    // 2. send the req to rest api -- GET Method
    return this.http.get(this.REST_API_URL)
      .pipe((map((res: Contact[]) => { // 3. get the resp from rest api
        console.log(res);
        return res; // 4. send it to comp
      })));
  }

  getContactById(id): Observable<Contact> {
    return this.http.get(this.REST_API_URL + '/' + id)
      .pipe((map((res: Contact) => { // 3. get the resp from rest api
        console.log(res);
        return res; // 4. send it to comp
      })));
  }

  updateContact(contactData): Promise<Contact> {
    return this.http.put(this.REST_API_URL + '/' + contactData.id, contactData)
      .toPromise()
      .then((res: Contact) => {
        console.log(res);
        return res;
      })
      .catch((err: any) => {
        console.log(err);
        return err;
      })
      .finally(() => {
        console.log(' Its over');
      });

  }

}
