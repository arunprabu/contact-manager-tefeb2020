import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './components/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactsComponent,
    AddContactComponent,
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactsModule { }
