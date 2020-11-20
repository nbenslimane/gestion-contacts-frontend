import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ContactsService } from '../../services/contact.services';
import { Observable } from 'rxjs';
import { Contact } from '../contact';
import { Router } from '@angular/router';




@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Observable<Contact[]>;
  currentpage:number=0;
  size:number=5;
  motCle:string="";
  pages:Array<number>;
  pageContact:any;
  //@Input() contact: Contact;
  constructor(private contactService: ContactsService, 
    public router:Router) { }

  ngOnInit() { }
  reloadData() {
    //this.contacts = this.contactService.getContactsList();
    this.contactService.getContactsList(this.motCle,this.currentpage,this.size)
    .subscribe(data=>{this.contacts=data, this.pages=new Array(data.totalPages);},)}

  chercher() {
    this.reloadData();
  }
  gotoPage(i:number){
     this.currentpage=i;
     this.reloadData();
  }
  onEditContact(id:number){
    this.router.navigate(['editContact',id]);
  }
  onDeleteContact(contact:Contact){
    let confirm=window.confirm('etes vous sur de vouloir supprimer');
    if(confirm==true){
     this.contactService.deleteContact(contact.id)
     .subscribe(data => {console.log(data);
        this.reloadData();  
        alert("Suppression effectuée");
      },
      error => console.log(error));

    }

  }
}
