import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaClientePageRoutingModule } from './area-cliente-routing.module';

import { AreaClientePage } from './area-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaClientePageRoutingModule
  ],
  declarations: [AreaClientePage]
})
export class AreaClientePageModule {}


