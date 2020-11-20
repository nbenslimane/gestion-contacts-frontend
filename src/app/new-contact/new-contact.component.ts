import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactsService } from '../../services/contact.services';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:Contact=new Contact();
  mode:number=1;

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
  }
  saveContact(){
    this.contactService.saveContact(this.contact)
    .subscribe(data=>{this.contact=data, data => console.log(data), error => console.log(error)},)
    this.mode=2; 
    //this.contact=new Contact();  
      //console.log(this.contact);
  }
}
