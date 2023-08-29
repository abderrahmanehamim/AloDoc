import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Ici, vous pouvez ajouter la logique pour gérer la soumission du formulaire
    console.log('Formulaire soumis :', this.email, this.password);
  }

  loginWithFacebook() {
    // Ici, vous pouvez ajouter la logique pour la connexion avec Facebook
    console.log('Connexion avec Facebook');
  }

  loginWithGoogle() {
    // Ici, vous pouvez ajouter la logique pour la connexion avec Google
    console.log('Connexion avec Google');
  }
}
