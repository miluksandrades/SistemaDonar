import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { BloodCenter } from "../../models/blood-center";

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  directions: BloodCenter;
  map: any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private geolocation: Geolocation,
    private platform: Platform) {
    this.initialize();
  }

  private initialize() {
    this.directions = this.navParams.get('bloodCenter');

    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  private loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {

      let mapOptions = {
        zoom: 18,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

      this.calculateRoute(resp.coords.latitude, resp.coords.longitude);
    });
  }

  private calculateRoute(latitude: number, longitude: number) {
    let directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.map);

    let origin = new google.maps.LatLng(latitude, longitude);
    let destination = new google.maps.LatLng(this.directions.lat, this.directions.lng);

    let directionsService = new google.maps.DirectionsService();

    var params = {
      // Pode ser uma coordenada(LatLng), uma string ou um lugar
      origin: origin,
      destination: destination,
      travelMode: 'DRIVING'
    };

    directionsService.route(params, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      }
    });
  }

}
