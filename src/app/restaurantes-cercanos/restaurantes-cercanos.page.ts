import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { MapboxComponent } from '../components/mapbox/mapbox.component';

@Component({
  selector: 'app-restaurantes-cercanos',
  templateUrl: './restaurantes-cercanos.page.html',
  styleUrls: ['./restaurantes-cercanos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,MapboxComponent]
})
export class RestaurantesCercanosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
