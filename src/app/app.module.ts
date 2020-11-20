import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from "@angular/router";
import { ContactsService } from '../services/contact.services';
import { FormsModule } from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
const approutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'editContact/:id',component:EditContactComponent},
  {path:'new-contact',component:NewContactComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  ],
  imports: [
     RouterModule.forRoot(approutes),
     HttpClientModule,
     BrowserModule,
     FormsModule
     
     
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
