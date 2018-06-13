import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatExtendedCardModule} from '@angular-material-extensions/cards';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MatButtonModule, MatCardModule, MatDividerModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatExtendedCardModule.forRoot(),
    HomeRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
}
