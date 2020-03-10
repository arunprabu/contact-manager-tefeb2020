import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {

  contactData: Contact;
  duplicateContactData: Contact;
  isUpdated: boolean;

  constructor( private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    this.contactService.getContactById(contactId)
      .subscribe( (res: Contact) => {
        console.log(res);
        this.contactData = res;
      });
  }

  editModalOpenHandler() {
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  async updateHandler( formData: NgForm) {
    console.log(formData);
    console.log(this.duplicateContactData);
    const status: Contact  = await this.contactService.updateContact(this.duplicateContactData);
    console.log(status);
  }
}
