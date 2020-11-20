import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Contact } from "../app/contact";
@Injectable(
    
)
export class ContactsService{

    //private _url='http://localhost:8080/chercherContacts?mc='+this.motCle+'&page='+this.page+'&size='+this.size;
    private _url='http://localhost:8080/chercherContacts';
    private _urls='http://localhost:8080/contacts';
    

constructor(private http: HttpClient){}

  getContactsList(motCle:string,currentpage:number,size:number): Observable<any> {
    return this.http.get(`${this._url}?mc=${motCle}&${currentpage}&${size}`);
  }
  saveContact(contact:Contact): Observable<any> {
    return this.http.post(`${this._urls}`, contact);
  }
  getContact(id: number): Observable<any> {
    return this.http.get(`${this._urls}/${id}`);
  }
  updateContact(id: number, contact: Contact): Observable<any> {
    return this.http.put(`${this._urls}/${id}`, contact);
  }
  deleteContact(id: number): Observable<Object> {
    return this.http.delete(`${this._urls}/${id}`, { responseType: 'text' });
  }
}