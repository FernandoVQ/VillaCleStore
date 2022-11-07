import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from './../shared/shared.module';
import { ContactComponent } from './components/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    MaterialModule
  ]
})
export class ContactModule {

}