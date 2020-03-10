import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

// config routes
const routes: Routes = [
  {
    path: 'contacts', children: [
      { path: '', component: ContactsComponent },
      { path: 'add', component: AddContactComponent },
      { path: ':id', component: ContactDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // register child routes
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule { }
