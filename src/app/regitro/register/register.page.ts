import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Asegúrate de que el servicio exista
import { IonicModule, AlertController } from '@ionic/angular'; // Importa AlertController
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-register',
  standalone: true, // Declarar como componente standalone
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [IonicModule, FormsModule], // Asegúrate de importar IonicModule y FormsModule
})
export class RegisterPage {
  email: string = '';  // Inicializado
  password: string = '';  // Inicializado

  constructor(
    private authService: AuthService,
    private alertController: AlertController, // Inyectar AlertController
    private router: Router // Inyectar Router
  ) {}

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      this.showSuccessAlert(); // Muestra la alerta de éxito
    } catch (error) {
      console.error('Error en el registro:', error);
      // Manejar el error según sea necesario (puedes mostrar un mensaje de error si quieres)
    }
  }

  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Te has registrado correctamente. Serás redirigido al inicio de sesión.',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
        }
      }]
    });

    await alert.present(); // Presenta la alerta
  }
}
