import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { FilterPipe } from '../helper/filter.pipe';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, Ng2SearchPipeModule],
  declarations: [HomePage, FilterPipe],
})
export class HomePageModule {}
