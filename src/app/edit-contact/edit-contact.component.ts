import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactsService } from '../../services/contact.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  mode:number=1;
  contact:Contact =new Contact;
  idContact:number;
  constructor(public activatedRoute: ActivatedRoute, 
    private contactService:ContactsService,
    public router:Router) { 
    //console.log(activatedRoute.snapshot.params['id']);
    this.idContact=this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {

    this.contactService.getContact(this.idContact)
    .subscribe(data=>{this.contact=data, data => console.log(data), error => console.log(error)},)
    
  }
  updateContact(){
   
    this.contactService.updateContact(this.contact.id,this.contact)
    .subscribe(data => {
        console.log(data);
        this.contact = data as Contact;
        alert("Mise a jour effectuée");
        this.router.navigate(['contacts'])
      },
      error => console.log(error));

  }
}
