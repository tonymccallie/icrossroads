import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JesusPage } from './jesus';

@NgModule({
  declarations: [
    JesusPage,
  ],
  imports: [
    IonicPageModule.forChild(JesusPage),
  ],
})
export class JesusPageModule {}
