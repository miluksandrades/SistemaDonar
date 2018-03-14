webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    CadastroPage.prototype.permitionAdd = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Dados Salvos com Sucesso!',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        var alert = this.alertCtrl.create({
            title: 'Cadastro',
            message: 'Deseja cadastrar os dados adicionais?',
            buttons: [{
                    text: 'NÃO',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                    }
                }, {
                    text: 'SIM'
                }]
        });
        alert.present();
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\cadastro\cadastro.html"*/'<ion-content>\n\n    <form>\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <ion-list>\n\n                    <h2 style="color: #ff0a2f; text-align:center">Dados de Acesso</h2>\n\n                    <ion-row>\n\n                        <ion-item>\n\n                            <ion-label floating>Nome Completo</ion-label>\n\n                            <ion-input type="text"></ion-input>\n\n                        </ion-item>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-item>\n\n                            <ion-label floating>E-Mail</ion-label>\n\n                            <ion-input type="email"></ion-input>\n\n                        </ion-item>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-item>\n\n                            <ion-label floating>Confirmar E-mail</ion-label>\n\n                            <ion-input type="email"></ion-input>\n\n                        </ion-item>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-item>\n\n                            <ion-label floating>Senha</ion-label>\n\n                            <ion-input type="password"></ion-input>\n\n                        </ion-item>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-item>\n\n                            <ion-label floating>Confirmar Senha</ion-label>\n\n                            <ion-input type="password"></ion-input>\n\n                        </ion-item>\n\n                    </ion-row>\n\n                </ion-list>\n\n                <br>\n\n                <button ion-button block (click)="permitionAdd()">Salvar Dados</button>\n\n            </ion-card-content>\n\n        </ion-card>\n\n        <!--<ion-card>\n\n            <ion-card-header>\n\n                <h2 style="color: #ff0a2f; text-align:center">Dados Pessoais</h2>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-list radio-group>\n\n                    <h2 style="color: #ff0a2f">Sexo</h2>\n\n                    <br>\n\n                    <div class="container">\n\n                        <ion-row>\n\n                            <div class="radio">\n\n                                <input id="radio-sex-1" name="radio1" type="radio" value="Masculino">\n\n                                <label for="radio-sex-1" class="radio-label">Masculino</label>\n\n                            </div>\n\n                            <div class="radio">\n\n                                <input id="radio-sex-2" name="radio1" type="radio" value="Feminino">\n\n                                <label for="radio-sex-2" class="radio-label">Feminino</label>\n\n                            </div>\n\n                        </ion-row>\n\n                    </div>\n\n                    <br>\n\n                    <ion-item>\n\n                        <ion-label>Data de Nascimento:</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY"></ion-datetime>\n\n                    </ion-item>\n\n                </ion-list>\n\n                <br>\n\n            </ion-card-content>\n\n        </ion-card>\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <h2 style="color: #ff0a2f; text-align:center">Dados Biológicos</h2>\n\n                <br>\n\n                <ion-list>\n\n                    <h2 style="color: #ff0a2f">Tipo Sanguíneo</h2>\n\n                    &nbsp;\n\n                    <div class="container">\n\n                        <ion-row>\n\n                            <div class="radio">\n\n                                <input id="radio-1" name="radio2" type="radio" value="A">\n\n                                <label for="radio-1" class="radio-label">A</label>\n\n                            </div>\n\n                            <div class="radio">\n\n                                <input id="radio-2" name="radio2" type="radio" value="B">\n\n                                <label for="radio-2" class="radio-label">B</label>\n\n                            </div>\n\n                        </ion-row>\n\n                        <ion-row>\n\n                            <div class="radio">\n\n                                <input id="radio-3" name="radio2" type="radio" value="O">\n\n                                <label for="radio-3" class="radio-label">O</label>\n\n                            </div>\n\n                            <div class="radio">\n\n                                <input id="radio-4" name="radio2" type="radio" value="AB">\n\n                                <label for="radio-4" class="radio-label">AB</label>\n\n                            </div>\n\n                        </ion-row>\n\n                    </div>\n\n                    <br>\n\n                    <h2 style="color:#ff0a2f">Fator RH</h2>\n\n                    <br>\n\n                    <div class="container">\n\n                        <ion-row>\n\n                            <div class="radio">\n\n                                <input id="radio-rh-1" name="radio4" type="radio" value="Positivo">\n\n                                <label for="radio-rh-1" class="radio-label">Positivo</label>\n\n                            </div>\n\n                            <div class="radio">\n\n                                <input id="radio-rh-2" name="radio4" type="radio" value="Negativo">\n\n                                <label for="radio-rh-2" class="radio-label">Negativo</label>\n\n                            </div>\n\n                        </ion-row>\n\n                    </div>\n\n                </ion-list>\n\n                <br>\n\n                <ion-list>\n\n                    <h2 style="color: #ff0a2f">Já é doador?</h2>\n\n                    <br>\n\n                    <div class="container">\n\n                        <ion-row>\n\n                            <div class="radio">\n\n                                <input id="radio-bl-1" name="radio3" type="radio" value="Sim">\n\n                                <label for="radio-bl-1" class="radio-label">Sim</label>\n\n                            </div>\n\n                            <div class="radio">\n\n                                <input id="radio-bl-2" name="radio3" type="radio" value="Não">\n\n                                <label for="radio-bl-2" class="radio-label">Não</label>\n\n                            </div>\n\n                        </ion-row>\n\n                    </div>\n\n                </ion-list>\n\n                <br>\n\n                <button ion-button block>Salvar Dados</button>\n\n            </ion-card-content>\n\n        </ion-card>-->\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]) === "function" && _d || Object])
    ], CadastroPage);
    return CadastroPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__perfil_perfil__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DonationAddPage = (function () {
    function DonationAddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonationAddPage.prototype.doRefresh = function (refresher) {
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    DonationAddPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__perfil_perfil__["a" /* PerfilPage */]);
    };
    DonationAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-donation-add',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\donation-add\donation-add.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Minhas Doações</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="refresh" refreshingSpinner="crescent">\n\n\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h2>Minhas Doações</h2>\n\n    </ion-card-header>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary" class="footer-toolbar">\n\n    <button ion-button clear class="btn-footer" (click)="home()">\n\n      <img src="../assets/imgs/inicio.png" width="60" height="40">\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <img src="../assets/imgs/hemocentros.png" width="60" height="40">\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <img src="../assets/imgs/campanhas.png" width="60" height="40">\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <img src="../assets/imgs/informacoes.png" width="60" height="40">\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\donation-add\donation-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], DonationAddPage);
    return DonationAddPage;
}());

//# sourceMappingURL=donation-add.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		274,
		2
	],
	"../pages/donation-add/donation-add.module": [
		275,
		1
	],
	"../pages/perfil/perfil.module": [
		276,
		0
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__perfil_perfil__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.imageArray = {};
        this.imageArray = [
            { 'image': 'assets/imgs/slide1.png' },
            { 'image': 'assets/imgs/slide2.png' },
            { 'image': 'assets/imgs/slide3.png' }
        ];
    }
    HomePage.prototype.cadastro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    HomePage.prototype.perfil = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__perfil_perfil__["a" /* PerfilPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\home\home.html"*/'<ion-content>\n\n  <ion-slides pager autoplay="4000" loop="true" speed="2000" class="slider">\n\n    <ion-slide *ngFor="let image of imageArray">\n\n      <img src="{{image.image}}"/>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col width-50>\n\n        <button ion-button full (click)="cadastro()"> Cadastrar </button>\n\n      </ion-col>\n\n      <ion-col width-50>\n\n        <button ion-button full (click)="perfil()"> Entrar </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button full class="facebook" icon-left>\n\n          <ion-icon name="logo-facebook"></ion-icon> Login com o Facebook\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_cadastro_cadastro__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_perfil_perfil__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_donation_add_donation_add__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_donation_add_donation_add__["a" /* DonationAddPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_cadastro_cadastro__["a" /* CadastroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donation-add/donation-add.module#DonationAddPageModule', name: 'DonationAddPage', segment: 'donation-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_donation_add_donation_add__["a" /* DonationAddPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_cadastro_cadastro__["a" /* CadastroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__donation_add_donation_add__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.doacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__donation_add_donation_add__["a" /* DonationAddPage */]);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\perfil\perfil.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Donar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-header style="text-align: center">\n\n      <h2 style="font-size: 18px; text-align: center">Olá, <b style="color: #ff0a2f">Fulano</b></h2>\n\n    </ion-card-header>\n\n    <ion-card-content style="text-align: center">\n\n      <p class="dados">Nome: Fulano Silva</p>\n\n      <p class="dados">Tipo Sanguíneo: <b style="color: #ff0a2f">O+</b></p>\n\n      <p class="dados">Data de Nascimento: 01/01/1111</p>\n\n      <button ion-button icon-left small><ion-icon name="create"></ion-icon>Editar Perfil</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-content style="text-align: center">\n\n      <ion-row style="text-align: justify">\n\n        <ion-icon name="pulse" style="font-size: 30px; color: #ff0a2f;"></ion-icon>&nbsp;&nbsp;&nbsp;\n\n        <h2 style="font-size: 15px">\n\n          <b>Minhas Doações</b>\n\n          <br>Última Doação: 22/02/2018</h2>\n\n      </ion-row>\n\n      <br>\n\n      <button ion-button small>Visualizar Doações</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-content style="text-align: center">\n\n      <ion-row style="text-align: justify">\n\n        <ion-icon name="medical" style="font-size: 30px; color: #ff0a2f;"></ion-icon>&nbsp;&nbsp;&nbsp;\n\n        <h2 style="font-size: 15px">\n\n          <b>Meus Exames</b>\n\n        </h2>\n\n      </ion-row>\n\n      <br>\n\n      <button ion-button small>Visualizar Exames</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary" class="footer-toolbar">\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="home" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="clipboard" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="ios-megaphone" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-information-circle" class="footer-icon"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Lucas-PC\Desktop\Donar\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map