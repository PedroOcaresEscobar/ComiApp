import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, ButtonModule]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
