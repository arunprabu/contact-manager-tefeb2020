import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: []
})
export class CpbComponent implements OnInit {

  // step1: create a variable // step2: make it a custom property
  @Input() age = 20; // @Input() makes the var as custom property


  constructor() { }

  ngOnInit() {
  }

}
