import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = getAuth(); // Inicializa Firebase Auth

  constructor() {}

  register(email: string, password: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        console.log('Usuario registrado exitosamente');
      })
      .catch((error) => {
        console.error('Error en el registro:', error);
        throw error; // Lanza el error para manejarlo en el componente
      });
  }
}
