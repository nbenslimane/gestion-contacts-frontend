import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactsService } from '../../services/contact.services';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
  }
onSaveContact(dataForm){
   this.contactService.saveContact(dataForm)
  .subscribe(data=>dataForm => console.log(data), error => console.log(error),)
   console.log(dataForm);

}
}
