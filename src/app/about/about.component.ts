import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  today = new Date();

  dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

  loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, cupiditate unde accusamus ut, quae magnam perferendis non nostrum soluta placeat neque inventore, eaque qui! Provident consectetur nisi iste nostrum quia.';

  constructor() { }

  ngOnInit() {
  }

}
