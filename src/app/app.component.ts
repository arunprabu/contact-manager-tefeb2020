import { Component } from '@angular/core';

// Decorator
// unifies the component template, css, ts in a selector
@Component({
  selector: 'app-root', // exposed in a selector -- element selector is recommended -- mandatory
  templateUrl: './app.component.html', // html -- only one and mandatory
  styleUrls: ['./app.component.css'] // css -- can be multiple -- optional
})
export class AppComponent {
  // ts
  title = 'contact-manager-tefeb2020';
}
