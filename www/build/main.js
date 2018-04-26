webpackJsonp([12],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapsPage = /** @class */ (function () {
    function MapsPage(geolocation) {
        this.geolocation = geolocation;
    }
    MapsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geolocation.getCurrentPosition()
            .then(function (resp) {
            var position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            var mapOptions = {
                zoom: 16,
                center: position,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var marker = new google.maps.Marker({
                position: position,
                animation: google.maps.Animation.BOUNCE,
                map: _this.map
                //icon: 'assets/imgs/'
            });
        }).catch(function (error) {
            console.log('Erro ao recuperar sua posição', error);
        });
    };
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maps',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\maps\maps.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title> Localização </ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<!--	<ion-list>\n\n		<ion-item>\n\n			<ion-label> De onde?</ion-label>\n\n			<ion-input type="text" [(ngModel)]="originPosition"></ion-input>\n\n		</ion-item>\n\n\n\n		<ion-item>\n\n			<ion-label> Para onde?</ion-label>\n\n			<ion-input type="text" [(ngModel)]="destinationPosition"></ion-input>\n\n		</ion-item>\n\n\n\n		<div padding>\n\n			<button ion-button (click)="calculateRoute()"> Traçar Rota </button>\n\n		</div>\n\n	</ion-list>-->\n\n\n\n	<div #map id="map" style="height: 300px;"></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\maps\maps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapsPage);
    return MapsPage;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoubtsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoubtsPage = /** @class */ (function () {
    function DoubtsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    DoubtsPage.prototype.inf1 = function () {
        var alert = this.alertCtrl.create({
            message: 'Todo sangue doado deve passar por vários' +
                ' testes para que possa ser utilizado com segurança. Na' +
                ' seleção de sangue são efetuados os seguintes testes:' +
                ' AIDS, Sífilis, Hepatite B, Hepatite C, Doença de Chagas' +
                ' e HTLV, Imunematologia, Sorologia. Além destes testes,' +
                ' será feito também um exame para saber o tipo sanguíneo.',
            buttons: ['OK']
        });
        alert.present();
    };
    DoubtsPage.prototype.inf2 = function () {
        var alert = this.alertCtrl.create({
            message: 'O motivo da agulha ser calibrosa é porque, ao contrário' +
                ' da agulha comum, o sangue não pode ser "sugado" por pressão,' +
                ' como ocorre quando o tiramos de um êmbolo (seringa). Ela serve' +
                ' para que o sangue não coagule e que as hemácias não se rompam no processo de doação.',
            buttons: ['OK']
        });
        alert.present();
    };
    DoubtsPage.prototype.inf3 = function () {
        var alert = this.alertCtrl.create({
            message: 'Sim, é normal sentir tontura, pois após a doação sua pressão' +
                ' baixa e então uma sensão de mal-estar, tontura, fraquesa. Para passar' +
                ' a sensação sente-se e coloque a cabeça entre os joelhos ou deite-se' +
                ' com as pernas elevadas. Isso ajuda na circulação de sangue na cabeça' +
                ' aliviando rapidamente os sintomas.',
            buttons: ['OK']
        });
        alert.present();
    };
    DoubtsPage.prototype.inf4 = function () {
        var alert = this.alertCtrl.create({
            message: 'A reposição do volume de plasma ocorre em 24 horas' +
                ' e a dos glóbulos vermelhos em 4 semanas. Entretanto, para o' +
                ' organismo atingir o mesmo nível de estoque de ferro que' +
                ' apresentava antes da doação, são necessárias 8 semanas para' +
                ' os homens e 12 semanas para as mulheres.',
            buttons: ['OK']
        });
        alert.present();
    };
    DoubtsPage.prototype.inf5 = function () {
        var alert = this.alertCtrl.create({
            message: 'Não existe essa de um sangue ser melhor do que o outro' +
                ' e sim existe o mais compativel do que o outro. O sangue mais compatível' +
                ' é o O- também conhecido como "sangue universal", pois é o único compatível' +
                ' com os outros e só pode receber sangue O-.',
            buttons: ['OK']
        });
        alert.present();
    };
    DoubtsPage.prototype.inf6 = function () {
        var alert = this.alertCtrl.create({
            message: 'Algumas situações podem favorecer essas reações,' +
                ' como por exemplo: uma noite mal dormida, estresse e ansiedade,' +
                ' estar mal alimentado e mal hidratado, etc.' +
                ' Durante a coleta de sangue podem surgir algumas reações leves como:' +
                ' Sensações de desmaio, suor, formigamento das mãos e pés, visão embaçada' +
                ' vômito, desmaio e raramente convulsão',
            buttons: ['OK']
        });
        alert.present();
    };
    DoubtsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doubts',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\doubts\doubts.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Perguntas Frequentes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <hr/>\n\n      <h2>\n\n        Quais exames serão realizados em meu sangue?\n\n        <a (click)="inf1()"> Leia mais</a>\n\n      </h2>\n\n      <hr/>\n\n      <h2>\n\n        Porque a agulha deve ser grossa?\n\n        <a (click)="inf2()">Leia mais</a>\n\n      </h2>\n\n      <hr/>\n\n      <h2>\n\n        É normal ter tontura após a doação?\n\n        <a (click)="inf3()">Leia mais</a>\n\n      </h2>\n\n      <hr/>\n\n      <h2>\n\n        Como repor o sangue doado?\n\n        <a (click)="inf4()">Leia mais</a>\n\n      </h2>\n\n      <hr/>\n\n      <h2>\n\n        Qual é o melhor sangue?\n\n        <a (click)="inf5()">Leia mais</a>\n\n      </h2>\n\n      <hr/>\n\n      <h2>\n\n        Pode ocorrer alguma reação durante a coleta?\n\n        <a (click)="inf6()">Leia mais</a>\n\n      </h2>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\doubts\doubts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DoubtsPage);
    return DoubtsPage;
}());

//# sourceMappingURL=doubts.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransfusionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransfusionPage = /** @class */ (function () {
    function TransfusionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransfusionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransfusionPage');
    };
    TransfusionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfusion',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\transfusion\transfusion.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title> Quem Doa / Quem Recebe </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header class="background-row text-white text-center">\n\n      <b>A+</b>\n\n    </ion-card-header>\n\n    <ion-card-content class="text-size">\n\n      <ion-row class="grid-row-border text-center dont-border-botton">\n\n        <ion-col class="grid-col-border-right">\n\n          Recebe de\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="grid-row-border">\n\n            <ion-col class="grid-col-border-right">A+</ion-col>\n\n            <ion-col class="">A-</ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">O+</ion-col>\n\n            <ion-col class="">O-</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          Doa Para\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">A+</ion-col>\n\n            <ion-col>AB+</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header class="background-row text-white text-center">\n\n      <b>A-</b>\n\n    </ion-card-header>\n\n    <ion-card-content class="text-size">\n\n      <ion-row class="grid-row-border text-center dont-border-botton">\n\n        <ion-col class="grid-col-border-right">\n\n          Recebe de\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">A-</ion-col>\n\n            <ion-col>O-</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          Doa Para\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="grid-row-border">\n\n            <ion-col class="grid-col-border-right">A+</ion-col>\n\n            <ion-col class="">A-</ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">AB+</ion-col>\n\n            <ion-col class="">AB-</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header class="background-row text-white text-center">\n\n      <b>B+</b>\n\n    </ion-card-header>\n\n    <ion-card-content class="text-size">\n\n      <ion-row class="grid-row-border text-center dont-border-botton">\n\n        <ion-col class="grid-col-border-right">\n\n          Recebe de\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="grid-row-border">\n\n            <ion-col class="grid-col-border-right">B+</ion-col>\n\n            <ion-col class="">B-</ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">O+</ion-col>\n\n            <ion-col class="">O-</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          Doa Para\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">B+</ion-col>\n\n            <ion-col>AB+</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header class="background-row text-white text-center">\n\n      <b>B-</b>\n\n    </ion-card-header>\n\n    <ion-card-content class="text-size">\n\n      <ion-row class="grid-row-border text-center dont-border-botton">\n\n        <ion-col class="grid-col-border-right">\n\n          Recebe de\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">B-</ion-col>\n\n            <ion-col>O-</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          Doa Para\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="grid-row-border">\n\n            <ion-col class="grid-col-border-right">B+</ion-col>\n\n            <ion-col class="">B-</ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">AB+</ion-col>\n\n            <ion-col class="">AB-</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header class="background-row text-white text-center">\n\n      <b>AB+</b>\n\n    </ion-card-header>\n\n    <ion-card-content class="text-size">\n\n      <ion-row class="grid-row-border text-center dont-border-botton">\n\n        <ion-col class="grid-col-border-right">\n\n          Recebe de\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="grid-row-border">\n\n            <ion-col class="grid-col-border-right">A+</ion-col>\n\n            <ion-col class="">A-</ion-col>\n\n          </ion-row>\n\n          <ion-row class="grid-row-border">\n\n            <ion-col class="grid-col-border-right">B+</ion-col>\n\n            <ion-col class="">B-</ion-col>\n\n          </ion-row>\n\n          <ion-row class="grid-row-border">\n\n            <ion-col class="grid-col-border-right">AB+</ion-col>\n\n            <ion-col class="">AB-</ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">O+</ion-col>\n\n            <ion-col class="">O-</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          Doa Para\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col>AB+</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header class="background-row text-white text-center">\n\n      <b>AB-</b>\n\n    </ion-card-header>\n\n    <ion-card-content class="text-size">\n\n      <ion-row class="grid-row-border text-center dont-border-botton">\n\n        <ion-col class="grid-col-border-right">\n\n          Recebe de\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="grid-row-border">\n\n            <ion-col class="grid-col-border-right">A-</ion-col>\n\n            <ion-col class="">B-</ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">AB-</ion-col>\n\n            <ion-col class="">O-</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          Doa Para\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">AB+</ion-col>\n\n            <ion-col>AB-</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header class="background-row text-white text-center">\n\n      <b>O+</b>\n\n    </ion-card-header>\n\n    <ion-card-content class="text-size">\n\n      <ion-row class="grid-row-border text-center dont-border-botton">\n\n        <ion-col class="grid-col-border-right">\n\n          Recebe de\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">O+</ion-col>\n\n            <ion-col>O-</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          Doa Para\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="grid-row-border">\n\n            <ion-col class="grid-col-border-right">A+</ion-col>\n\n            <ion-col class="">B+</ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">AB+</ion-col>\n\n            <ion-col class="">O+</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header class="background-row text-white text-center">\n\n      <b>O-</b>\n\n    </ion-card-header>\n\n    <ion-card-content class="text-size">\n\n      <ion-row class="grid-row-border text-center dont-border-botton">\n\n        <ion-col class="grid-col-border-right">\n\n          Recebe de\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col>O-</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col>\n\n          Doa Para\n\n          <ion-row>\n\n            <ion-col></ion-col>\n\n          </ion-row>\n\n          <ion-row class="grid-row-border">\n\n            <ion-col class="grid-col-border-right">A+</ion-col>\n\n            <ion-col class="">A-</ion-col>\n\n          </ion-row>\n\n          <ion-row class="grid-row-border">\n\n            <ion-col class="grid-col-border-right">B+</ion-col>\n\n            <ion-col class="">B-</ion-col>\n\n          </ion-row>\n\n          <ion-row class="grid-row-border">\n\n            <ion-col class="grid-col-border-right">AB+</ion-col>\n\n            <ion-col class="">AB-</ion-col>\n\n          </ion-row>\n\n          <ion-row class="">\n\n            <ion-col class="grid-col-border-right">O+</ion-col>\n\n            <ion-col class="">O-</ion-col>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\transfusion\transfusion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TransfusionPage);
    return TransfusionPage;
}());

//# sourceMappingURL=transfusion.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__information_information__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blood_center_blood_center__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DonationPage = /** @class */ (function () {
    function DonationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonationPage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    DonationPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    DonationPage.prototype.information = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__information_information__["a" /* InformationPage */]);
    };
    DonationPage.prototype.bloodCenter = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__blood_center_blood_center__["a" /* BloodCenterPage */]);
    };
    DonationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donation',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\donation\donation.html"*/'<ion-header>\n\n  <ion-navbar color="primary" class="text-center">\n\n    <img src="../../assets/imgs/logo_branca.png" class="logo-branca">\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="ios-refresh-outline" refreshingSpinner="crescent">\n\n\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h2>Minhas Doações</h2>\n\n    </ion-card-header>\n\n  </ion-card>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="primary" class="footer-toolbar">\n\n    <button ion-button clear class="btn-footer" (click)="home()">\n\n      <ion-icon name="home" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer" (click)="bloodCenter()">\n\n      <ion-icon name="clipboard" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-flame" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-information-circle" class="footer-icon" (click)="information()"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\donation\donation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DonationPage);
    return DonationPage;
}());

//# sourceMappingURL=donation.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, fb, authProvider, loadingCtrl, network, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.auth = this.navParams.data.auth || {};
        this.createForm();
    }
    LoginPage.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: [this.auth.email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: [this.auth.password, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var connectSubscription = this.network.type;
        var data = this.loginForm.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        if (connectSubscription === "none") {
            this.toastCtrl.create({
                message: 'Sem Acesso à Internet',
                showCloseButton: true,
                closeButtonText: 'Ok',
                position: 'middle'
            }).present();
        }
        else if (connectSubscription === "wifi" || connectSubscription === "cellular") {
            this.authProvider.loginWithEmail(credentials)
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]); });
            this.loading();
        }
    };
    LoginPage.prototype.loading = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'crescent',
            dismissOnPageChange: true
        });
        loader.present();
    };
    LoginPage.prototype.resetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    LoginPage.prototype.profile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\login\login.html"*/'<ion-content>\n\n  <form [formGroup]="loginForm">\n\n    <ion-list>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <img src="assets/img/logo.png" class="logo" />\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating> Login: </ion-label>\n\n            <!--<img src="assets/img/user.png" class="icon" />-->\n\n            <ion-input type="email" formControlName="email"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-item *ngIf="!form.controls.email.valid && (form.controls.email.dirty || form.controls.email.touched)" color="danger">\n\n          <div [hidden]="!form.controls.email.errors.required">\n\n            O campo é obrigatório!\n\n          </div>\n\n        </ion-item>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label floating> Senha: </ion-label>\n\n            <!--<img src="assets/img/key.png" class="icon" /> -->\n\n            <ion-input type="password" formControlName="password"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n\n\n        <ion-item *ngIf="!form.controls.password.valid && (form.controls.password.dirty || form.controls.password.touched)" color="danger">\n\n          <div [hidden]="!form.controls.password.errors.required">\n\n            O campo é obrigatório!\n\n          </div>\n\n        </ion-item>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-label>\n\n              <a (click)="resetPassword()"> Esqueci a Senha </a>\n\n            </ion-label>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n\n\n    <div padding>\n\n      <button ion-button block type="submit" [disabled]="!loginForm.valid" (click)="login()"> Entrar no Donar <ion-icon ios="ios-log-in" md="md-log-in"></ion-icon></button>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //this.initialize();
    }
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\reset-password\reset-password.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title> Redefinir Senha </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <form [formGroup]="resetPassForm">\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <img src="assets/img/logo.png" class="logo" />\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-item>\n\n          <ion-label floating>\n\n            <img src="assets/img/user.png" class="icon" /> Email de Usuário:\n\n          </ion-label>\n\n          <ion-input formControlName="email" name="email" type="email" [(ngModel)]="resetPass.email"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label>\n\n          <button ion-button full class="btn" (click)="reset()" [disabled]="resetPassForm.invalid"> Enviar Email de Redefinição </button>\n\n        </ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\reset-password\reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpPage = /** @class */ (function () {
    //user: User = new User();
    //@ViewChild('form') form: NgForm;
    function SignUpPage(navCtrl, navParams, alertCtrl, toastCtrl, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.authProvider = authProvider;
    }
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\sign-up\sign-up.html"*/'<ion-content>\n\n  <form #form="ngForm" novalidate>\n\n    <ion-card class="body">\n\n      <ion-card-content>\n\n        <ion-list>\n\n          <h2 class="title">Dados de Acesso</h2>\n\n\n\n          <ion-row>\n\n            <ion-item>\n\n              <ion-label floating>E-Mail</ion-label>\n\n              <ion-input type="email" name="email"></ion-input>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-item>\n\n              <ion-label floating>Senha</ion-label>\n\n              <ion-input type="password"></ion-input>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-item>\n\n              <ion-label floating>Confirmar Senha</ion-label>\n\n              <ion-input type="password"></ion-input>\n\n            </ion-item>\n\n          </ion-row>\n\n        </ion-list>\n\n\n\n        <button ion-button block (click)="signUp()" class="rodape">Salvar Dados</button>\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 131;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/auth/auth.module": [
		355,
		0
	],
	"../pages/blood-center/blood-center.module": [
		356,
		11
	],
	"../pages/donation/donation.module": [
		357,
		10
	],
	"../pages/doubts/doubts.module": [
		358,
		9
	],
	"../pages/information/information.module": [
		359,
		8
	],
	"../pages/login/login.module": [
		362,
		7
	],
	"../pages/maps/maps.module": [
		360,
		6
	],
	"../pages/profile/profile.module": [
		361,
		5
	],
	"../pages/registry/registry.module": [
		364,
		4
	],
	"../pages/reset-password/reset-password.module": [
		365,
		3
	],
	"../pages/sign-up/sign-up.module": [
		366,
		2
	],
	"../pages/transfusion/transfusion.module": [
		363,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistryPage = /** @class */ (function () {
    function RegistryPage(navCtrl, navParams, loadCtrl, formBuilder, provider, toast) {
        /* Maneira 1 - Passando todos os dados do usuário
        this.user = this.navParams.data.user || {};
        this.createForm();*/
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        // Maneira 2 - Passando a key do usuário
        this.user = {};
        this.createForm();
        if (this.navParams.data.key) {
            var subscribe_1 = this.provider.getUser(this.navParams.data.key)
                .subscribe(function (c) {
                subscribe_1.unsubscribe();
                _this.user = c;
                _this.createForm();
            });
        }
    }
    RegistryPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.user.key],
            name: [this.user.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastName: [this.user.lastName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            gender: [this.user.gender, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            birth: [this.user.birth, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            country: [this.user.country, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            state: [this.user.state, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            city: [this.user.city, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            blood: [this.user.blood, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            donator: [this.user.donator, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    RegistryPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Salvo com Sucesso!', duration: 3000 }).present();
                _this.navCtrl.pop();
            }).catch(function (e) {
                _this.toast.create({ message: 'Erro ao Salvar!', duration: 3000 }).present();
                console.log(e);
            });
        }
    };
    RegistryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registry',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\registry\registry.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title> Cadastro </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="form">\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <h2>Dados Pessoais</h2>\n\n        <ion-list>\n\n\n\n          <ion-row>\n\n            <ion-item>\n\n              <ion-avatar>\n\n                <img src="assets/img/teste.png" (click)="revelateImage()">\n\n              </ion-avatar>\n\n              <p>Escolher Foto</p>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-col width-50>\n\n              <ion-item>\n\n                <ion-label floating>Nome</ion-label>\n\n                <ion-input type="text" formControlName="name"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n\n\n            <ion-col width-50>\n\n              <ion-item>\n\n                <ion-label floating>SobreNome</ion-label>\n\n                <ion-input type="text" formControlName="lastName"></ion-input>\n\n              </ion-item>\n\n            </ion-col>\n\n\n\n            <ion-item *ngIf="!form.controls.name.valid && (form.controls.name.dirty || form.controls.name.touched)" color="danger">\n\n              <div [hidden]="!form.controls.name.errors.required">\n\n                O campo é obrigatório!\n\n              </div>\n\n            </ion-item>\n\n\n\n            <ion-item *ngIf="!form.controls.lastName.valid && (form.controls.lastName.dirty || form.controls.lastName.touched)" color="danger">\n\n              <div [hidden]="!form.controls.lastName.errors.required">\n\n                O campo é obrigatório!\n\n              </div>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <h2 style="color: #ff0a2f">Sexo</h2>\n\n            <br>\n\n            <div class="container">\n\n              <ion-row>\n\n                <div class="radio">\n\n                  <input id="radio-sex-1" name="radio1" type="radio" value="Masculino">\n\n                  <label for="radio-sex-1" class="radio-label">Masculino</label>\n\n                </div>\n\n                <div class="radio">\n\n                  <input id="radio-sex-2" name="radio1" type="radio" value="Feminino">\n\n                  <label for="radio-sex-2" class="radio-label">Feminino</label>\n\n                </div>\n\n              </ion-row>\n\n            </div>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-item>\n\n              <ion-label>Data de Nascimento:</ion-label>\n\n              <ion-datetime displayFormat="DD/MM/YYYY"></ion-datetime>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-item>\n\n              <ion-label>Estado</ion-label>\n\n              <ion-select>\n\n                <ion-option value="AC">Acre</ion-option>\n\n                <ion-option value="AL">Alagoas</ion-option>\n\n                <ion-option value="AM">Amazonas</ion-option>\n\n                <ion-option value="AP">Amapá</ion-option>\n\n                <ion-option value="BA">Bahia</ion-option>\n\n                <ion-option value="CE">Ceará</ion-option>\n\n                <ion-option value="DF">Destrito Federal</ion-option>\n\n                <ion-option value="ES">Espirito Santo</ion-option>\n\n                <ion-option value="GO">Goiás</ion-option>\n\n                <ion-option value="MA">Maranhão</ion-option>\n\n                <ion-option value="MG">Minas Gerais</ion-option>\n\n                <ion-option value="MS">Mato Grosso do Sul</ion-option>\n\n                <ion-option value="MT">Mato Grosso</ion-option>\n\n                <ion-option value="PA">Pará</ion-option>\n\n                <ion-option value="PB">Paraiba</ion-option>\n\n                <ion-option value="PE">Pernanbuco</ion-option>\n\n                <ion-option value="PI">Piauí</ion-option>\n\n                <ion-option value="PR">Paraná</ion-option>\n\n                <ion-option value="RN">Rio Grande do Norte</ion-option>\n\n                <ion-option value="RO">Rondônia</ion-option>\n\n                <ion-option value="RR">Roraima</ion-option>\n\n                <ion-option value="RS">Rio Grande do Sul</ion-option>\n\n                <ion-option value="SC">Santa Catarina</ion-option>\n\n                <ion-option value="SE">Sergipe</ion-option>\n\n                <ion-option value="SP">São Paulo</ion-option>\n\n                <ion-option value="TO">Tocantins</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n            <ion-item>\n\n              <ion-label>Município</ion-label>\n\n              <ion-select id="municipio">\n\n\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-row>\n\n\n\n        </ion-list>\n\n        <br/>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-content>\n\n        <h2 style="color: #ff0a2f; text-align:center">Dados Biológicos</h2>\n\n        <br>\n\n        <ion-list>\n\n          <h2 style="color: #ff0a2f">Tipo Sanguíneo</h2> &nbsp;\n\n          <div class="container">\n\n            <ion-row>\n\n              <div class="radio">\n\n                <input id="radio-1" name="radio2" type="radio" value="A">\n\n                <label for="radio-1" class="radio-label">A</label>\n\n              </div>\n\n              <div class="radio">\n\n                <input id="radio-2" name="radio2" type="radio" value="B">\n\n                <label for="radio-2" class="radio-label">B</label>\n\n              </div>\n\n            </ion-row>\n\n            <ion-row>\n\n              <div class="radio">\n\n                <input id="radio-3" name="radio2" type="radio" value="O">\n\n                <label for="radio-3" class="radio-label">O</label>\n\n              </div>\n\n              <div class="radio">\n\n                <input id="radio-4" name="radio2" type="radio" value="AB">\n\n                <label for="radio-4" class="radio-label">AB</label>\n\n              </div>\n\n            </ion-row>\n\n          </div>\n\n          <br>\n\n          <h2 style="color:#ff0a2f">Fator RH</h2>\n\n          <br>\n\n          <div class="container">\n\n            <ion-row>\n\n              <div class="radio">\n\n                <input id="radio-rh-1" name="radio4" type="radio" value="Positivo">\n\n                <label for="radio-rh-1" class="radio-label">Positivo</label>\n\n              </div>\n\n              <div class="radio">\n\n                <input id="radio-rh-2" name="radio4" type="radio" value="Negativo">\n\n                <label for="radio-rh-2" class="radio-label">Negativo</label>\n\n              </div>\n\n            </ion-row>\n\n          </div>\n\n        </ion-list>\n\n        <br>\n\n        <ion-list>\n\n          <h2 style="color: #ff0a2f">Já é doador?</h2>\n\n          <br>\n\n          <div class="container">\n\n            <ion-row>\n\n              <div class="radio">\n\n                <input id="radio-bl-1" name="radio3" type="radio" value="Sim">\n\n                <label for="radio-bl-1" class="radio-label">Sim</label>\n\n              </div>\n\n              <div class="radio">\n\n                <input id="radio-bl-2" name="radio3" type="radio" value="Não">\n\n                <label for="radio-bl-2" class="radio-label">Não</label>\n\n              </div>\n\n            </ion-row>\n\n          </div>\n\n        </ion-list>\n\n        <br>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div padding>\n\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()"> Salvar </button>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\registry\registry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], RegistryPage);
    return RegistryPage;
}());

//# sourceMappingURL=registry.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(260);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_blood_center_blood_center__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_donation_donation__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_doubts_doubts__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_information_information__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_maps_maps__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_registry_registry__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_reset_password_reset_password__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_sign_up_sign_up__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_transfusion_transfusion__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_user_user__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_auth_auth__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var firebaseConfig = {
    apiKey: "AIzaSyC2aosmi9knvS8t1CFxhWmJqVUK9NMmOIM",
    authDomain: "donar-165722.firebaseapp.com",
    databaseURL: "https://donar-165722.firebaseio.com",
    projectId: "donar-165722",
    storageBucket: "donar-165722.appspot.com",
    messagingSenderId: "256001018787"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_blood_center_blood_center__["a" /* BloodCenterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_donation_donation__["a" /* DonationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_doubts_doubts__["a" /* DoubtsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_registry_registry__["a" /* RegistryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_transfusion_transfusion__["a" /* TransfusionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/auth/auth.module#AuthPageModule', name: 'AuthPage', segment: 'auth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blood-center/blood-center.module#BloodCenterPageModule', name: 'BloodCenterPage', segment: 'blood-center', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donation/donation.module#DonationPageModule', name: 'DonationPage', segment: 'donation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doubts/doubts.module#DoubtsPageModule', name: 'DoubtsPage', segment: 'doubts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maps/maps.module#MapsPageModule', name: 'MapsPage', segment: 'maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transfusion/transfusion.module#TransfusionPageModule', name: 'TransfusionPage', segment: 'transfusion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registry/registry.module#RegistryPageModule', name: 'RegistryPage', segment: 'registry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_blood_center_blood_center__["a" /* BloodCenterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_donation_donation__["a" /* DonationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_doubts_doubts__["a" /* DoubtsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_registry_registry__["a" /* RegistryPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_transfusion_transfusion__["a" /* TransfusionPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_25__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuth */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__information_information__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blood_center_blood_center__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__donation_donation__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.toast = toast;
        this.users = this.provider.getAllUsers();
    }
    ProfilePage.prototype.editUser = function (user) {
        // Maneira 1 - Passando todos os dados do usuário
        //this.navCtrl.push('RegistryPage', {user: user});
        // Maneira 2 - Passando a key do usuário
        this.navCtrl.push('RegistryPage', { key: user.key });
    };
    ProfilePage.prototype.removeUser = function (key) {
        var _this = this;
        this.provider.remove(key)
            .then(function () {
            _this.toast.create({ message: 'Deletado com Sucesso!', duration: 3000 }).present();
        })
            .catch(function (e) {
            _this.toast.create({ message: 'Erro ao realizar exclusão!', duration: 3000 }).present();
        });
    };
    ProfilePage.prototype.donation = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__donation_donation__["a" /* DonationPage */]);
    };
    ProfilePage.prototype.bloodCenter = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__blood_center_blood_center__["a" /* BloodCenterPage */]);
    };
    ProfilePage.prototype.information = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__information_information__["a" /* InformationPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar color="primary" class="text-center">\n\n    <img src="../../assets/imgs/logo_branca.png" class="logo-branca">\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let user of users | async">\n\n      <ion-item>\n\n        <h1>{{user.name}}</h1>\n\n        <p>\n\n          {{user.lastName}}\n\n        </p>\n\n      </ion-item>\n\n\n\n      <ion-item-options side="right">\n\n        <button ion-button color="secondary" (click)="editUser(user)">\n\n          <ion-icon name="create"></ion-icon>\n\n        </button>\n\n        <button ion-button color="danger" (click)="removeUser(user.key)">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n<!--<ion-card>\n\n  <ion-card-header style="text-align: center">\n\n    <h2 style="font-size: 18px; text-align: center">Olá, <b style="color: #ff0a2f">Fulano</b></h2>\n\n  </ion-card-header>\n\n  <ion-card-content style="text-align: center">\n\n    <p class="dados">Nome: Fulano Silva</p>\n\n    <p class="dados">Tipo Sanguíneo: <b style="color: #ff0a2f">O+</b></p>\n\n    <p class="dados">Data de Nascimento: 01/01/1111</p>\n\n    <button ion-button icon-left small><ion-icon name="create"></ion-icon>Editar Perfil</button>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-content style="text-align: center">\n\n    <ion-row style="text-align: justify">\n\n      <ion-icon name="pulse" style="font-size: 30px; color: #ff0a2f;"></ion-icon>&nbsp;&nbsp;&nbsp;\n\n      <h2 style="font-size: 15px">\n\n        <b>Minhas Doações</b>\n\n        <br>Última Doação: 22/02/2018</h2>\n\n    </ion-row>\n\n    <br>\n\n    <button ion-button small (click)="doacoes()">Visualizar Doações</button>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n  <ion-card-content style="text-align: center">\n\n    <ion-row style="text-align: justify">\n\n      <ion-icon name="medical" style="font-size: 30px; color: #ff0a2f;"></ion-icon>&nbsp;&nbsp;&nbsp;\n\n      <h2 style="font-size: 15px">\n\n        <b>Meus Exames</b>\n\n      </h2>\n\n    </ion-row>\n\n    <br>\n\n    <button ion-button small>Visualizar Exames</button>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n<ion-toolbar color="primary" class="footer-toolbar">\n\n  <button ion-button clear class="btn-footer">\n\n    <ion-icon name="home" class="footer-icon"></ion-icon>\n\n  </button>\n\n  <button ion-button clear class="btn-footer" (click)="hemocentro()">\n\n    <ion-icon name="clipboard" class="footer-icon"></ion-icon>\n\n  </button>\n\n  <button ion-button clear class="btn-footer">\n\n    <ion-icon name="md-flame" class="footer-icon"></ion-icon>\n\n  </button>\n\n  <button ion-button clear class="btn-footer">\n\n    <ion-icon name="md-information-circle" class="footer-icon" (click)="informacoes()"></ion-icon>\n\n  </button>\n\n</ion-toolbar>\n\n</ion-footer>-->'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodCenterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information_information__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__maps_maps__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BloodCenterPage = /** @class */ (function () {
    function BloodCenterPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    BloodCenterPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    BloodCenterPage.prototype.informations = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__information_information__["a" /* InformationPage */]);
    };
    BloodCenterPage.prototype.campaigns = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    BloodCenterPage.prototype.endInst = function () {
        /*let alert = this.alertCtrl.create({
          title: 'Instituto Onco-Hematológico de Anápolis',
          subTitle: 'Rua Washington de Carvalho, 155 - St. Central, Anápolis - GO',
          buttons: ['Voltar']
        })
    
        alert.present();*/
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__maps_maps__["a" /* MapsPage */]);
    };
    BloodCenterPage.prototype.endHosp = function () {
        /*let alert = this.alertCtrl.create({
          title: 'Hospital de Urgências de Anápolis',
          subTitle: 'Av. Brasil Norte, 3631 - Cidade Universitária, Anápolis - GO',
          buttons: ['Voltar']
        })
    
        alert.present();*/
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__maps_maps__["a" /* MapsPage */]);
    };
    BloodCenterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blood-center',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\blood-center\blood-center.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title class="title">\n\n      <img src="assets/imgs/logo_branca.png">\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-card class="place">\n\n    <ion-row>\n\n      <ion-col>\n\n        <h2 class="txt">\n\n              Locais para <br/> doações em:\n\n          </h2>\n\n      </ion-col>\n\n      <ion-col>\n\n        <h2 class="txt">\n\n            <p class="city">Anápolis - Goiás</p>\n\n          </h2>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-row>\n\n      <ion-col width-33 class="hemocentro box-left">\n\n        <h1>NÍVEL BAIXO</h1>\n\n        <img src="assets/imgs/metade.png">\n\n        <h2>Estoque em\n\n              <b class="blood">50%</b> <br/> de AB+</h2>\n\n      </ion-col>\n\n      <ion-col width-66 class="hemocentro box-right">\n\n        <h1>Instituto Onco-Hematológico <br/> de Anápolis</h1>\n\n        <button ion-button color="primary" class="btn-place" (click)="endInst()">\n\n          <ion-icon name="pin">\n\n            Obter Direções\n\n          </ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-row>\n\n      <ion-col width-30 class="hemocentro box-left">\n\n        <h1>NÍVEL CRÍTICO</h1>\n\n        <img src="assets/imgs/critico.png">\n\n        <h2>Estoque em\n\n            <b class="blood">25% </b> <br/> de A-</h2>\n\n      </ion-col>\n\n      <ion-col width-70 class="hemocentro box-right">\n\n        <h1>Hospital de Urgências <br/> de Anápolis</h1>\n\n        <button ion-button color="primary" class="btn-place" (click)="endHosp()">\n\n          <ion-icon name="pin">\n\n            Obter Direções\n\n          </ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary" class="footer-toolbar">\n\n    <button ion-button clear class="btn-footer" (click)="home()">\n\n      <ion-icon name="home" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="clipboard" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="ios-megaphone" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-information-circle" class="footer-icon" (click)="informations()"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\blood-center\blood-center.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BloodCenterPage);
    return BloodCenterPage;
}());

//# sourceMappingURL=blood-center.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_blood_center_blood_center__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_blood_center_blood_center__["a" /* BloodCenterPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.imageArray = {};
        this.imageArray = [
            { 'image': 'assets/imgs/slide1.png' },
            { 'image': 'assets/imgs/slide2.png' },
            { 'image': 'assets/imgs/slide3.png' }
        ];
    }
    HomePage.prototype.signUp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    HomePage.prototype.Auth = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\home\home.html"*/'<ion-content>\n\n  <ion-slides pager autoplay="4000" loop="true" speed="2000" class="slider">\n\n    <ion-slide *ngFor="let image of imageArray">\n\n      <img src="{{image.image}}" />\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col width-50>\n\n        <button ion-button full (click)="signUp()"> Cadastrar </button>\n\n      </ion-col>\n\n      <ion-col width-50>\n\n        <button ion-button full (click)="Auth()"> Entrar </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button full class="facebook" icon-left>\n\n          <ion-icon name="logo-facebook"></ion-icon> Login com o Facebook\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blood_center_blood_center__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__doubts_doubts__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transfusion_transfusion__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InformationPage.prototype.doubts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__doubts_doubts__["a" /* DoubtsPage */]);
    };
    InformationPage.prototype.transfusion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__transfusion_transfusion__["a" /* TransfusionPage */]);
    };
    InformationPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    InformationPage.prototype.bloodCenter = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__blood_center_blood_center__["a" /* BloodCenterPage */]);
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\information\information.html"*/'<ion-header>\n\n  <ion-navbar color="primary" class="text-center">\n\n    <img src="../../assets/imgs/logo_branca.png" class="logo-branca">\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h1 class="text-center">Informações</h1>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row class="text-center">\n\n          <ion-col class="border-grid-sub-menu" (click)="doubts()">\n\n            <ion-icon class="icon-sub-menu" name="md-information-circle" color="primary"></ion-icon>\n\n            <br>\n\n            <p>Perguntas Frenquentes</p>\n\n          </ion-col>\n\n          <ion-col col-1>\n\n          </ion-col>\n\n          <ion-col class="border-grid-sub-menu" (click)="transfusion()">\n\n            <ion-icon class="icon-sub-menu" name="ios-water" color="primary"></ion-icon>\n\n            <br>\n\n            <p>Quem doa quem recebe</p>\n\n          </ion-col>\n\n        </ion-row>\n\n        <br>\n\n        <ion-row class="text-center">\n\n          <ion-col class="border-grid-sub-menu">\n\n            <ion-icon class="icon-sub-menu" name="checkbox" color="primary"></ion-icon>\n\n            <br>\n\n            <p>Benefícios</p>\n\n          </ion-col>\n\n          <ion-col col-1>\n\n          </ion-col>\n\n          <ion-col class="border-grid-sub-menu">\n\n            <ion-icon class="icon-sub-menu" name="help-circle" color="primary"></ion-icon>\n\n            <br>\n\n            <p>Sobre o Donar</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary" class="footer-toolbar">\n\n    <button ion-button clear class="btn-footer" (click)="home()">\n\n      <ion-icon name="home" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer" (click)="bloodCenter()">\n\n      <ion-icon name="clipboard" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-flame" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-information-circle" class="footer-icon"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\information\information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(31);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = /** @class */ (function () {
    function UserProvider(db, fb) {
        this.db = db;
        this.fb = fb;
        this.PATH = 'users/';
    }
    UserProvider.prototype.getAllUsers = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('name'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    UserProvider.prototype.getUser = function (key) {
        return this.db.object(this.PATH + key).snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    UserProvider.prototype.save = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (user.key) {
                _this.db.list(_this.PATH)
                    .update(user.key, { name: user.name, lastName: user.lastName, picture: user.picture,
                    gender: user.gender, birth: user.birth, country: user.country,
                    state: user.state, city: user.city, blood: user.blood, donator: user.donator })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
                /*this.db.object(this.PATH + user.key)
                .update(user.key, {name: user.name, lastName: user.lastName, picture: user.picture,
                                   gender: user.gender, birth: user.birth, country: user.country,
                                   state: user.state, city: user.city, blood: user.blood, donator: user.donator})
                .then(() => resolve())
                .catch((e) => reject(e));*/
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ name: user.name, lastName: user.lastName, picture: user.picture,
                    gender: user.gender, birth: user.birth, country: user.country,
                    state: user.state, city: user.city, blood: user.blood, donator: user.donator })
                    .then(function () { return resolve(); });
            }
        });
    };
    /*uploadAndSave(item: any){
      let user = {$key: item.key, name: item.name, url: '', fullPath: ''};

      let storageRef = this.fb.storage().ref();
      let basePath = 'users/' + this.angula

    }*/
    UserProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import AuthProvider = firebase.auth.AuthProvider;
var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        //this.user = angularFireAuth.authState;
        var _this = this;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthProvider.prototype.loginWithEmail = function (credentials) {
        console.log('Login com E-mail');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[240]);
//# sourceMappingURL=main.js.map