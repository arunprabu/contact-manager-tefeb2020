import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit, OnDestroy {

  // Step 1: create a form tag equivalent in ts -- FormGroup
  contactForm: FormGroup;
  isSaved: boolean;

  addContactSubscription: Subscription;

  constructor( private contactService: ContactService ) {  // 1.1. connect to service -- using dep injection
  }

  ngOnInit() {
    // Step 1:
    this.contactForm = new FormGroup({
      // Step 2: specify input equivalents here -- FormControl
      name: new FormControl('Arun', Validators.required ), // step 5: setup validators 
      phone: new FormControl('23422435', Validators.required ),
      email: new FormControl('a@b.com', [Validators.required, Validators.email])
    });
  }

  // ideal place any methods
  addContactHandler() {
    // read form data
    console.log(this.contactForm.value);

    // 1. send the data to service
      // 1.2. send the data to service's method
    this.addContactSubscription =  this.contactService.createContact(this.contactForm.value)
      .subscribe( (res: any) => { // 2. get the resp from service
        console.log(res);
        if (res && res.id) {
          this.isSaved = true;
        }
      });
  }

  ngOnDestroy() {
    if(this.addContactSubscription) {
      this.addContactSubscription.unsubscribe();
    }

  }

}
