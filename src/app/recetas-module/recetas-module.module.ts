import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {RecetasPagePage} from './recetas-page/recetas-page.page'
import { SearsherComponent } from './searsher/searsher.component';
import { TopCardComponent } from './top-card/top-card.component';

@NgModule({
  declarations: [RecetasPagePage,SearsherComponent,TopCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderComponent,
    
    RouterModule.forChild([{ path:'', component: RecetasPagePage}])
  ]
})
export class RecetasModuleModule { }
