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

	map: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

	ionViewDidLoad(){
		this.geolocation.getCurrentPosition().then((resp) => {
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
				map: this.map
			});
		}).catch((error) => {
			console.log('Erro ao recuperar sua posição', error);
		});
	}

/*	initializeMap(){
		this.startPosition = new google.maps.LatLng(-18.9333296, 47.5166646);

		const mapOptions = {
			zoom: 18,
			center: this.startPosition,
			disableDefault: true
			//mapTypeId: google.maps.MapType.Id.ROADMAP
		}

		this.map = new google.maps.Map (document.getElementById('map'), mapOptions);
		this.directionsDisplay.setMap(this.map);

		const marker = new google.maps.Marker({
			position: this.startPosition,
			map: this.map,
			//animation: google.maps.Animation.Drop, // BOUNCE
			//icon: 'assets/imgs/'
		});
	}

	calculateRoute(){
		if(this.destinationPosition && this.originPosition){
			const request = {
			// Pode ser uma coordenada(LatLng), uma string ou um lugar
			origin: this.originPosition,
			destination: this.destinationPosition,
			travelMode: 'DRIVING'
    };

			this.traceRoute(this.directionsService, this.directionsDisplay, request);
		}
	}

	traceRoute(service: any, display: any, request: any){
		service.route(request, function (result, status){
			if(status == 'OK'){
				display.setDirections(result);
			}
		});
	}*/
}
