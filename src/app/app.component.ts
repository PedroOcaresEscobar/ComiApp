import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, RouterLink, HeaderComponent, MenuComponent],
})
export class AppComponent {
  constructor() {}
}
