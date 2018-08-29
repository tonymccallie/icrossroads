import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SermonsPage } from './sermons';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    SermonsPage,
  ],
  imports: [
	IonicPageModule.forChild(SermonsPage),
	SharedModule
  ],
})
export class SermonsPageModule {}
