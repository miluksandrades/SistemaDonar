import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  /*directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  destinationPosition: string;*/

	map: any;

  constructor(private geolocation: Geolocation) {
  }

  ionViewDidLoad() {

    this.geolocation.getCurrentPosition()
		.then((resp) => {
      const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      const mapOptions = {
        zoom: 16,
        center: position,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

      const marker = new google.maps.Marker({
        position: position,
				animation: google.maps.Animation.BOUNCE, //DROP,
        map: this.map
        //icon: 'assets/imgs/'
      });

    }).catch((error) => {
      console.log('Erro ao recuperar sua posição', error);
    });
  }
/*
  calculateRoute() {
    if (this.destinationPosition && this.originPosition) {
      const request = {
        // Pode ser uma coordenada(LatLng), uma string ou um lugar
        origin: this.originPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };

      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }

  traceRoute(service: any, display: any, request: any) {
    service.route(request, function(result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }*/
}
