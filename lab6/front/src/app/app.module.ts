import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserCrudMenuComponent } from './user-crud-menu/user-crud-menu.component';
import { Service1Service } from './services/service1.service';

@NgModule({
  declarations: [
    AppComponent,
    UserCrudMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }