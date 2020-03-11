import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: Contact[];
  contactsSubscription: Subscription;

  constructor( private contactService: ContactService) { // 1.1. connect to service -- dep inj
    console.log('Inside contacts constructor');
  }

  ngOnInit() {
    console.log('Inside contacts ngOnInit');
    // ideal place for ajax calls
    // 1. send req to service
    this.contactsSubscription = this.contactService.getContacts()
      .subscribe( (res: Contact[]) => { // 2. get the resp from service
        console.log(res);
        this.contactList = res;
      });
  }

  ngOnDestroy() {
    console.log('Into contacts comp destroy');
    // ideal place for you to unsubscribe, clear the data
    this.contactsSubscription.unsubscribe();
    if ( this.contactList) {
      this.contactList.length = 0;
    }
  }

}
