import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DatatransferRoutingModule } from './datatransfer-routing.module';
import { DtComponent } from './dt/dt.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    DtComponent
  ],
  imports: [
    CommonModule,
    DatatransferRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule
  ]
})
export class DatatransferModule { }
