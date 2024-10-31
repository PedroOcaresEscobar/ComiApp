import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  // Asegúrate de importar FormsModule
    IonicModule,
    RouterModule.forChild([{ path: '', component: LoginPage }]), // Configura la ruta
  ],
  declarations: [LoginPage]
})
export class LoginModule { }
