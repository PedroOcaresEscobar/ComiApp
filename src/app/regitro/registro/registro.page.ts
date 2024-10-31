import { Component } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  async register() {
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, this.username, this.password);
      console.log('Usuario registrado:', userCredential.user);
      // Redirige a la página de login o home después de registrarse
      this.router.navigate(['/login']); // Cambia '/login' por la ruta de tu login
    } catch (error) {
      console.error('Error al registrar:', error);
      this.errorMessage = 'Error al registrar. Por favor verifica tus datos.'; // Mensaje de error
    }
  }
}
