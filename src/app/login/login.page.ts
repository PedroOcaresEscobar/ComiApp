import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importa AlertController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // Para manejar errores

  constructor(private router: Router, private alertController: AlertController) {} // Inyecta AlertController

  async login() {
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, this.username, this.password);
      console.log('Usuario autenticado:', userCredential.user);
      await this.showSuccessAlert(); // Muestra la alerta de éxito
      this.router.navigate(['/main']); // Redirige a la página principal
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.errorMessage = 'Error al iniciar sesión. Por favor verifica tus credenciales.'; // Mensaje de error
    }
  }

  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Inicio de Sesión Exitoso',
      message: 'Has iniciado sesión correctamente.',
      buttons: ['Aceptar']
    });

    await alert.present(); // Presenta la alerta
  }
}
