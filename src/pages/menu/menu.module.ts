import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';

@NgModule({
	declarations: [
		MenuPage,
	],
	imports: [
		IonicPageModule.forChild(MenuPage),
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuPageModule { }
