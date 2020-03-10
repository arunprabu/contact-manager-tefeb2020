import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'Phone Book!';
  devExp = 10;
  skillsList: string[] = ['html', 'ts', 'ng'];

  // property binding
  companyName = 'Tata Elxsi';
  isLoggedIn = false;

  // two way binding related
  courseName = 'Angular';

  // custom prop binding related
  myAge = 10;

  // ceb realted
  dataReceivedFromChildComp: any;

  // parent comp to access data from child comp
  @ViewChild(CebComponent, { static: false }) cebData;

  constructor() { }

  ngOnInit() {
    console.log(this.cebData);
  }

  // event binding related
  onClickMeHandler( e ) {
    console.log(e);
    e.target.innerText = 'clicked';
  }

  getAge() {
    return this.myAge;
  }

  // step 5: work with event handler and get the data
  profileLoadedHandler(e) {
    console.log(e);
    this.dataReceivedFromChildComp = e; // step 6: store the data in parent comp
  }
}
