import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <button (click)="onBtnClickHandler()">Load Profile</button>
    </div>
  `,
  styles: []
})
export class CebComponent implements OnInit {

  // Step1: create an obj for EventEmitter Class // step 2: and make it custom event
  @Output() profileLoaded = new EventEmitter();

  myData: any = 'Some random text';

  constructor() {
    console.log('Inside constructor of ceb component');
  }

  ngOnInit() {
    console.log('Inside ngOnInit of ceb component');
  }

  onBtnClickHandler(){
    // step3: emit the custom event
    this.profileLoaded.emit('Arun'); // data we send to parent comp
  }
}
