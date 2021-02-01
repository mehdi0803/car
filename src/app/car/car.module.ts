import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ListingComponent } from './components/listing/listing.component';



@NgModule({
  declarations: [
    FormComponent,
    ListingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FormComponent,ListingComponent]
})
export class CarModule { }
