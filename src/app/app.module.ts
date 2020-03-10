import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { ContactsModule } from './contacts/contacts.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ContactsModule,
    ProductsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  // step 3: appmodule should bootstrap appcomponent
  bootstrap: [AppComponent] // bootstrapped components can be used once
})
export class AppModule { }
