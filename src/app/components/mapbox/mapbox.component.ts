import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  standalone: true,
  template: '<div #mapContainer style="height: 100%; width: 100%;"></div>',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
  map!: mapboxgl.Map;

  ngAfterViewInit() {
    (mapboxgl as typeof mapboxgl & { accessToken: string }).accessToken = 
      'pk.eyJ1IjoibWF4aW1pbGlhbm9vcnRlZ2EzIiwiYSI6ImNtMnNjdTJvczFsYjcydnE5N3Y1NHc0OWcifQ.fDAKvE1d0T3M0zKU5UIVCg';
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => this.initializeMap(position.coords.latitude, position.coords.longitude),
        (error) => {
          console.error('Error al obtener la ubicación', error);
          this.initializeMap(40, -74.5); // Coordenadas por defecto
        }
      );
    } else {
      console.error('El navegador no soporta la geolocalización');
      this.initializeMap(40, -74.5); // Coordenadas por defecto
    }
  }

  initializeMap(lat: number, lng: number) {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 14,
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    // Agregar marcador para la ubicación actual
    this.addCurrentLocationMarker(lat, lng);

    // Obtener restaurantes cercanos
    this.getNearbyRestaurants(lat, lng);
  }

  addCurrentLocationMarker(lat: number, lng: number) {
    // Crear un marcador para tu ubicación
    const userMarkerElement = document.createElement('div');
    userMarkerElement.style.backgroundImage = 'url(https://res.cloudinary.com/dohzxybxz/image/upload/v1730295321/icono.map.comiapp_phgzdq.svg)'; // Cambia a la URL de tu ícono de usuario
    userMarkerElement.style.width = '30px'; // Ajusta el tamaño
    userMarkerElement.style.height = '30px';
    userMarkerElement.style.backgroundSize = 'contain';
    userMarkerElement.style.backgroundRepeat = 'no-repeat';

    new mapboxgl.Marker(userMarkerElement)
      .setLngLat([lng, lat])
      .addTo(this.map);
  }

  async getNearbyRestaurants(lat: number, lng: number) {
    const accessToken = 'pk.eyJ1IjoibWF4aW1pbGlhbm9vcnRlZ2EzIiwiYSI6ImNtMnNjdTJvczFsYjcydnE5N3Y1NHc0OWcifQ.fDAKvE1d0T3M0zKU5UIVCg';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/restaurant.json?proximity=${lng},${lat}&access_token=${accessToken}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      // Recorrer los resultados y agregar marcadores
      data.features.forEach((feature: any) => {
        const restaurantLngLat = feature.geometry.coordinates;
        const restaurantName = feature.place_name;

        // Crear un marcador para cada restaurante
        const restaurantMarkerElement = document.createElement('div');
        restaurantMarkerElement.style.backgroundImage = 'url(https://res.cloudinary.com/dohzxybxz/image/upload/v1730295905/icono.restaurant.map.comiapp_ahb1rn.svg)'; // Cambia a la URL de tu ícono de restaurante
        restaurantMarkerElement.style.width = '30px'; // Ajusta el tamaño
        restaurantMarkerElement.style.height = '30px';
        restaurantMarkerElement.style.backgroundSize = 'contain';
        restaurantMarkerElement.style.backgroundRepeat = 'no-repeat';

        new mapboxgl.Marker(restaurantMarkerElement)
          .setLngLat(restaurantLngLat)
          .setPopup(new mapboxgl.Popup().setHTML(`<h3>${restaurantName}</h3>`)) // Popup con el nombre del restaurante
          .addTo(this.map);
      });
    } catch (error) {
      console.error('Error al obtener restaurantes:', error);
    }
  }
}
