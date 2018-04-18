webpackJsonp([8],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__perfil_perfil__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__informacoes_informacoes__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hemocentro_hemocentro__ = __webpack_require__(52);
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
    DonationAddPage.prototype.informacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__informacoes_informacoes__["a" /* InformacoesPage */]);
    };
    DonationAddPage.prototype.hemocentro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__hemocentro_hemocentro__["a" /* HemocentroPage */]);
    };
    DonationAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-donation-add',template:/*ion-inline-start:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\donation-add\donation-add.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary" class="text-center">\n\n    <img src="../../assets/imgs/logo_branca.png" class="logo-branca">\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="ios-refresh-outline" refreshingSpinner="crescent">\n\n\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h2>Minhas Doações</h2>\n\n    </ion-card-header>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary" class="footer-toolbar">\n\n    <button ion-button clear class="btn-footer" (click)="home()">\n\n      <ion-icon name="home" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer" (click)="hemocentro()">\n\n      <ion-icon name="clipboard" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-flame" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-information-circle" class="footer-icon" (click)="informacoes()"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\donation-add\donation-add.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], DonationAddPage);
    return DonationAddPage;
    var _a, _b;
}());

//# sourceMappingURL=donation-add.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoaRecPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the DoaRecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoaRecPage = (function () {
    function DoaRecPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DoaRecPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoaRecPage');
    };
    DoaRecPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doa-rec',template:/*ion-inline-start:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\doa-rec\doa-rec.html"*/'<!--\n\n  Generated template for the DoaRecPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>doaRec</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <h2 class="text-center">Quem Doa pra quem</h2>\n\n      <br>\n\n      <ion-grid class="text-center">\n\n        <ion-row class="grid-row-border grid-row-border-col1">\n\n          <ion-col class="grid-col-border-right">Tipo</ion-col>\n\n          <ion-col class="grid-col-border-right">Doa</ion-col>\n\n          <ion-col>Recebe</ion-col>\n\n        </ion-row>\n\n        <ion-row class="grid-row-border">\n\n          <ion-col class="grid-col-border-right">A+</ion-col>\n\n          <ion-col class="grid-col-border-right">A+, AB+</ion-col>\n\n          <ion-col>A(+,-), O(+,-)</ion-col>\n\n        </ion-row>\n\n        <ion-row class="grid-row-border">\n\n          <ion-col class="grid-col-border-right">A-</ion-col>\n\n          <ion-col class="grid-col-border-right">A(+,-), AB(+,-)</ion-col>\n\n          <ion-col>A-, O-</ion-col>\n\n        </ion-row>\n\n        <ion-row class="grid-row-border">\n\n          <ion-col class="grid-col-border-right">B+</ion-col>\n\n          <ion-col class="grid-col-border-right">B+, AB+</ion-col>\n\n          <ion-col>B(+,-), O(+,-)</ion-col>\n\n        </ion-row>\n\n        <ion-row class="grid-row-border">\n\n          <ion-col class="grid-col-border-right">B-</ion-col>\n\n          <ion-col class="grid-col-border-right">B(+,-), AB(+,-)</ion-col>\n\n          <ion-col>B-, O-</ion-col>\n\n        </ion-row>\n\n        <ion-row class="grid-row-border">\n\n          <ion-col class="grid-col-border-right">AB+</ion-col>\n\n          <ion-col class="grid-col-border-right">AB+</ion-col>\n\n          <ion-col>Todos</ion-col>\n\n        </ion-row>\n\n        <ion-row class="grid-row-border">\n\n          <ion-col class="grid-col-border-right">AB-</ion-col>\n\n          <ion-col class="grid-col-border-right">AB(+,-)</ion-col>\n\n          <ion-col>A-, B-, AB-, O-</ion-col>\n\n        </ion-row>\n\n        <ion-row class="grid-row-border">\n\n          <ion-col class="grid-col-border-right">O+</ion-col>\n\n          <ion-col class="grid-col-border-right">A+, B+, AB+, O+</ion-col>\n\n          <ion-col>O(+,-)</ion-col>\n\n        </ion-row>\n\n        <ion-row class="grid-row-border">\n\n          <ion-col class="grid-col-border-right">O-</ion-col>\n\n          <ion-col class="grid-col-border-right">Todos</ion-col>\n\n          <ion-col>O-</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\doa-rec\doa-rec.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DoaRecPage);
    return DoaRecPage;
}());

//# sourceMappingURL=doa-rec.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\cadastro\cadastro.html"*/'<ion-content>\n\n    <form>\n\n        <ion-card>\n\n            <ion-card-content>\n\n                <ion-list>\n\n                    <h2 style="color: #ff0a2f; text-align:center">Dados de Acesso</h2>\n\n                    <ion-row>\n\n                        <ion-item>\n\n                            <ion-label floating>Nome Completo</ion-label>\n\n                            <ion-input type="text"></ion-input>\n\n                        </ion-item>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-item>\n\n                            <ion-label floating>E-Mail</ion-label>\n\n                            <ion-input type="email"></ion-input>\n\n                        </ion-item>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-item>\n\n                            <ion-label floating>Confirmar E-mail</ion-label>\n\n                            <ion-input type="email"></ion-input>\n\n                        </ion-item>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-item>\n\n                            <ion-label floating>Senha</ion-label>\n\n                            <ion-input type="password"></ion-input>\n\n                        </ion-item>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-item>\n\n                            <ion-label floating>Confirmar Senha</ion-label>\n\n                            <ion-input type="password"></ion-input>\n\n                        </ion-item>\n\n                    </ion-row>\n\n                </ion-list>\n\n                <br>\n\n                <button ion-button block (click)="permitionAdd()">Salvar Dados</button>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PergFreqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the PergFreqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PergFreqPage = (function () {
    function PergFreqPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    PergFreqPage.prototype.inf1 = function () {
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
    PergFreqPage.prototype.inf2 = function () {
        var alert = this.alertCtrl.create({
            message: 'O motivo da agulha ser calibrosa é porque, ao contrário' +
                ' da agulha comum, o sangue não pode ser "sugado" por pressão,' +
                ' como ocorre quando o tiramos de um êmbolo (seringa). Ela serve' +
                ' para que o sangue não coagule e que as hemácias não se rompam no processo de doação.',
            buttons: ['OK']
        });
        alert.present();
    };
    PergFreqPage.prototype.inf3 = function () {
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
    PergFreqPage.prototype.inf4 = function () {
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
    PergFreqPage.prototype.inf5 = function () {
        var alert = this.alertCtrl.create({
            message: 'Não existe essa de um sangue ser melhor do que o outro' +
                ' e sim existe o mais compativel do que o outro. O sangue mais compatível' +
                ' é o O- também conhecido como "sangue universal", pois é o único compatível' +
                ' com os outros e só pode receber sangue O-.',
            buttons: ['OK']
        });
        alert.present();
    };
    PergFreqPage.prototype.inf6 = function () {
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
    PergFreqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perg-freq',template:/*ion-inline-start:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\perg-freq\perg-freq.html"*/'<!--\n\n  Generated template for the PergFreqPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>pergFreq</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <h2 class="text-center">Perguntas Frequentes</h2>\n\n      <hr/>\n\n      <h2>\n\n        Quais exames serão realizados em meu sangue?\n\n        <a (click)="inf1()"> Leia mais</a>\n\n      </h2>\n\n      <hr/>\n\n      <h2>\n\n        Porque a agulha deve ser grossa?\n\n        <a (click)="inf2()">Leia mais</a>\n\n      </h2>\n\n      <hr/>\n\n      <h2>\n\n        É normal ter tontura após a doação?\n\n        <a (click)="inf3()">Leia mais</a>\n\n      </h2>\n\n      <hr/>\n\n      <h2>\n\n        Como repor o sangue doado?\n\n        <a (click)="inf4()">Leia mais</a>\n\n      </h2>\n\n      <hr/>\n\n      <h2>\n\n        Qual é o melhor sangue?\n\n        <a (click)="inf5()">Leia mais</a>\n\n      </h2>\n\n      <hr/>\n\n      <h2>\n\n        Pode ocorrer alguma reação durante a coleta?\n\n        <a (click)="inf6()">Leia mais</a>\n\n      </h2>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\perg-freq\perg-freq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PergFreqPage);
    return PergFreqPage;
}());

//# sourceMappingURL=perg-freq.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		284,
		7
	],
	"../pages/doa-rec/doa-rec.module": [
		280,
		6
	],
	"../pages/donation-add/donation-add.module": [
		281,
		5
	],
	"../pages/hemocentro/hemocentro.module": [
		282,
		4
	],
	"../pages/informacoes/informacoes.module": [
		283,
		3
	],
	"../pages/perfil/perfil.module": [
		286,
		2
	],
	"../pages/perg-freq/perg-freq.module": [
		285,
		1
	],
	"../pages/registro/registro.module": [
		287,
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = (function () {
    function RegistroPage(navCtrl, alertCtrl, toastCtrl, navParams, loadCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.loadCtrl = loadCtrl;
    }
    RegistroPage.prototype.saveLoading = function () {
        var load = this.loadCtrl.create({
            content: 'Salvando...',
            duration: 3000
        });
        load.present();
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\registro\registro.html"*/'<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <h2 style="color: #ff0a2f; text-align:center">Dados Pessoais</h2>\n\n      <ion-list>\n\n        <ion-item>\n\n          <button ion-button (click)="revelateImage()">Escolher foto</button>\n\n        </ion-item>\n\n        <ion-row>\n\n          <ion-item>\n\n            <ion-label floating>Nome</ion-label>\n\n            <ion-input type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-item>\n\n            <ion-label floating>Sobrenome</ion-label>\n\n            <ion-input type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-row>\n\n        <br>\n\n        <h2 style="color: #ff0a2f">Sexo</h2>\n\n        <br>\n\n        <div class="container">\n\n          <ion-row>\n\n            <div class="radio">\n\n              <input id="radio-sex-1" name="radio1" type="radio" value="Masculino">\n\n              <label for="radio-sex-1" class="radio-label">Masculino</label>\n\n            </div>\n\n            <div class="radio">\n\n              <input id="radio-sex-2" name="radio1" type="radio" value="Feminino">\n\n              <label for="radio-sex-2" class="radio-label">Feminino</label>\n\n            </div>\n\n          </ion-row>\n\n        </div>\n\n        <br>\n\n        <ion-item>\n\n          <ion-label>Data de Nascimento:</ion-label>\n\n          <ion-datetime displayFormat="DD/MM/YYYY"></ion-datetime>\n\n        </ion-item>\n\n        <ion-row>\n\n          <ion-item>\n\n            <ion-label>Estado</ion-label>\n\n            <ion-select>\n\n              <ion-option value="AC">Acre</ion-option>\n\n              <ion-option value="AL">Alagoas</ion-option>\n\n              <ion-option value="AM">Amazonas</ion-option>\n\n              <ion-option value="AP">Amapá</ion-option>\n\n              <ion-option value="BA">Bahia</ion-option>\n\n              <ion-option value="CE">Ceará</ion-option>\n\n              <ion-option value="DF">Destrito Federal</ion-option>\n\n              <ion-option value="ES">Espirito Santo</ion-option>\n\n              <ion-option value="GO">Goiás</ion-option>\n\n              <ion-option value="MA">Maranhão</ion-option>\n\n              <ion-option value="MG">Minas Gerais</ion-option>\n\n              <ion-option value="MS">Mato Grosso do Sul</ion-option>\n\n              <ion-option value="MT">Mato Grosso</ion-option>\n\n              <ion-option value="PA">Pará</ion-option>\n\n              <ion-option value="PB">Paraiba</ion-option>\n\n              <ion-option value="PE">Pernanbuco</ion-option>\n\n              <ion-option value="PI">Piauí</ion-option>\n\n              <ion-option value="PR">Paraná</ion-option>\n\n              <ion-option value="RN">Rio Grande do Norte</ion-option>\n\n              <ion-option value="RO">Rondônia</ion-option>\n\n              <ion-option value="RR">Roraima</ion-option>\n\n              <ion-option value="RS">Rio Grande do Sul</ion-option>\n\n              <ion-option value="SC">Santa Catarina</ion-option>\n\n              <ion-option value="SE">Sergipe</ion-option>\n\n              <ion-option value="SP">São Paulo</ion-option>\n\n              <ion-option value="TO">Tocantins</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-item>\n\n            <ion-label>Município</ion-label>\n\n            <ion-select id="municipio">\n\n              \n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-row>\n\n      </ion-list>\n\n      <br>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <h2 style="color: #ff0a2f; text-align:center">Dados Biológicos</h2>\n\n      <br>\n\n      <ion-list>\n\n        <h2 style="color: #ff0a2f">Tipo Sanguíneo</h2>\n\n        &nbsp;\n\n        <div class="container">\n\n          <ion-row>\n\n            <div class="radio">\n\n              <input id="radio-1" name="radio2" type="radio" value="A">\n\n              <label for="radio-1" class="radio-label">A</label>\n\n            </div>\n\n            <div class="radio">\n\n              <input id="radio-2" name="radio2" type="radio" value="B">\n\n              <label for="radio-2" class="radio-label">B</label>\n\n            </div>\n\n          </ion-row>\n\n          <ion-row>\n\n            <div class="radio">\n\n              <input id="radio-3" name="radio2" type="radio" value="O">\n\n              <label for="radio-3" class="radio-label">O</label>\n\n            </div>\n\n            <div class="radio">\n\n              <input id="radio-4" name="radio2" type="radio" value="AB">\n\n              <label for="radio-4" class="radio-label">AB</label>\n\n            </div>\n\n          </ion-row>\n\n        </div>\n\n        <br>\n\n        <h2 style="color:#ff0a2f">Fator RH</h2>\n\n        <br>\n\n        <div class="container">\n\n          <ion-row>\n\n            <div class="radio">\n\n              <input id="radio-rh-1" name="radio4" type="radio" value="Positivo">\n\n              <label for="radio-rh-1" class="radio-label">Positivo</label>\n\n            </div>\n\n            <div class="radio">\n\n              <input id="radio-rh-2" name="radio4" type="radio" value="Negativo">\n\n              <label for="radio-rh-2" class="radio-label">Negativo</label>\n\n            </div>\n\n          </ion-row>\n\n        </div>\n\n      </ion-list>\n\n      <br>\n\n      <ion-list>\n\n        <h2 style="color: #ff0a2f">Já é doador?</h2>\n\n        <br>\n\n        <div class="container">\n\n          <ion-row>\n\n            <div class="radio">\n\n              <input id="radio-bl-1" name="radio3" type="radio" value="Sim">\n\n              <label for="radio-bl-1" class="radio-label">Sim</label>\n\n            </div>\n\n            <div class="radio">\n\n              <input id="radio-bl-2" name="radio3" type="radio" value="Não">\n\n              <label for="radio-bl-2" class="radio-label">Não</label>\n\n            </div>\n\n          </ion-row>\n\n        </div>\n\n      </ion-list>\n\n      <br>\n\n      <button ion-button block (click)="saveLoading()">Salvar Dados</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\registro\registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_informacoes_informacoes__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_hemocentro_hemocentro__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cadastro_cadastro__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_donation_add_donation_add__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_registro_registro__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_doa_rec_doa_rec__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_perg_freq_perg_freq__ = __webpack_require__(107);
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
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_donation_add_donation_add__["a" /* DonationAddPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_hemocentro_hemocentro__["a" /* HemocentroPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_informacoes_informacoes__["a" /* InformacoesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_doa_rec_doa_rec__["a" /* DoaRecPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_perg_freq_perg_freq__["a" /* PergFreqPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/doa-rec/doa-rec.module#DoaRecPageModule', name: 'DoaRecPage', segment: 'doa-rec', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donation-add/donation-add.module#DonationAddPageModule', name: 'DonationAddPage', segment: 'donation-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hemocentro/hemocentro.module#HemocentroPageModule', name: 'HemocentroPage', segment: 'hemocentro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/informacoes/informacoes.module#InformacoesPageModule', name: 'InformacoesPage', segment: 'informacoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perg-freq/perg-freq.module#PergFreqPageModule', name: 'PergFreqPage', segment: 'perg-freq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_donation_add_donation_add__["a" /* DonationAddPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_hemocentro_hemocentro__["a" /* HemocentroPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_informacoes_informacoes__["a" /* InformacoesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_doa_rec_doa_rec__["a" /* DoaRecPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_perg_freq_perg_freq__["a" /* PergFreqPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_chooser__["a" /* FileChooser */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(80);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__informacoes_informacoes__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hemocentro_hemocentro__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donation_add_donation_add__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__donation_add_donation_add__["a" /* DonationAddPage */]);
    };
    PerfilPage.prototype.hemocentro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__hemocentro_hemocentro__["a" /* HemocentroPage */]);
    };
    PerfilPage.prototype.informacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__informacoes_informacoes__["a" /* InformacoesPage */]);
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\perfil\perfil.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary" class="text-center">\n\n    <img src="../../assets/imgs/logo_branca.png" class="logo-branca">\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-header style="text-align: center">\n\n      <h2 style="font-size: 18px; text-align: center">Olá, <b style="color: #ff0a2f">Fulano</b></h2>\n\n    </ion-card-header>\n\n    <ion-card-content style="text-align: center">\n\n      <p class="dados">Nome: Fulano Silva</p>\n\n      <p class="dados">Tipo Sanguíneo: <b style="color: #ff0a2f">O+</b></p>\n\n      <p class="dados">Data de Nascimento: 01/01/1111</p>\n\n      <button ion-button icon-left small><ion-icon name="create"></ion-icon>Editar Perfil</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-content style="text-align: center">\n\n      <ion-row style="text-align: justify">\n\n        <ion-icon name="pulse" style="font-size: 30px; color: #ff0a2f;"></ion-icon>&nbsp;&nbsp;&nbsp;\n\n        <h2 style="font-size: 15px">\n\n          <b>Minhas Doações</b>\n\n          <br>Última Doação: 22/02/2018</h2>\n\n      </ion-row>\n\n      <br>\n\n      <button ion-button small (click)="doacoes()">Visualizar Doações</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-content style="text-align: center">\n\n      <ion-row style="text-align: justify">\n\n        <ion-icon name="medical" style="font-size: 30px; color: #ff0a2f;"></ion-icon>&nbsp;&nbsp;&nbsp;\n\n        <h2 style="font-size: 15px">\n\n          <b>Meus Exames</b>\n\n        </h2>\n\n      </ion-row>\n\n      <br>\n\n      <button ion-button small>Visualizar Exames</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary" class="footer-toolbar">\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="home" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer" (click)="hemocentro()">\n\n      <ion-icon name="clipboard" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-flame" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-information-circle" class="footer-icon" (click)="informacoes()"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hemocentro_hemocentro__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__perfil_perfil__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perg_freq_perg_freq__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__doa_rec_doa_rec__ = __webpack_require__(105);
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
 * Generated class for the InformacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InformacoesPage = (function () {
    function InformacoesPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    InformacoesPage.prototype.pergFreg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__perg_freq_perg_freq__["a" /* PergFreqPage */]);
    };
    InformacoesPage.prototype.doaRec = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__doa_rec_doa_rec__["a" /* DoaRecPage */]);
    };
    InformacoesPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__perfil_perfil__["a" /* PerfilPage */]);
    };
    InformacoesPage.prototype.hemocentro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__hemocentro_hemocentro__["a" /* HemocentroPage */]);
    };
    InformacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-informacoes',template:/*ion-inline-start:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\informacoes\informacoes.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary" class="text-center">\n\n    <img src="../../assets/imgs/logo_branca.png" class="logo-branca">\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      <h1 class="text-center">Informações</h1>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row class="text-center">\n\n          <ion-col class="border-grid-sub-menu" (click)="pergFreg()">\n\n            <ion-icon class="icon-sub-menu" name="help" color="primary"></ion-icon>\n\n            <br>\n\n            <p>Perguntas Frenquentes</p>\n\n          </ion-col>\n\n          <ion-col col-1>\n\n\n\n          </ion-col>\n\n          <ion-col class="border-grid-sub-menu" (click)="doaRec()">\n\n            <ion-icon class="icon-sub-menu" name="ios-water" color="primary"></ion-icon>\n\n            <br>\n\n            <p>Quem doa quem recebe</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary" class="footer-toolbar">\n\n    <button ion-button clear class="btn-footer" (click)="home()">\n\n      <ion-icon name="home" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer" (click)="hemocentro()">\n\n      <ion-icon name="clipboard" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-flame" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-information-circle" class="footer-icon"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\informacoes\informacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], InformacoesPage);
    return InformacoesPage;
}());

//# sourceMappingURL=informacoes.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HemocentroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__informacoes_informacoes__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__perfil_perfil__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
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
 * Generated class for the HemocentroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HemocentroPage = (function () {
    function HemocentroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HemocentroPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__perfil_perfil__["a" /* PerfilPage */]);
    };
    HemocentroPage.prototype.informacoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__informacoes_informacoes__["a" /* InformacoesPage */]);
    };
    HemocentroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-hemocentro',template:/*ion-inline-start:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\hemocentro\hemocentro.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title>Donar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <div #map style="height: 300px"></div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary" class="footer-toolbar">\n\n    <button ion-button clear class="btn-footer" (click)="home()">\n\n      <ion-icon name="home" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="clipboard" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="ios-megaphone" class="footer-icon"></ion-icon>\n\n    </button>\n\n    <button ion-button clear class="btn-footer">\n\n      <ion-icon name="md-information-circle" class="footer-icon" (click)="informacoes()"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\hemocentro\hemocentro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], HemocentroPage);
    return HemocentroPage;
    var _a, _b;
}());

//# sourceMappingURL=hemocentro.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__perfil_perfil__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cadastro_cadastro__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    HomePage.prototype.perfil = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__perfil_perfil__["a" /* PerfilPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\home\home.html"*/'<ion-content>\n\n  <ion-slides pager autoplay="4000" loop="true" speed="2000" class="slider">\n\n    <ion-slide *ngFor="let image of imageArray">\n\n      <img src="{{image.image}}"/>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col width-50>\n\n        <button ion-button full (click)="cadastro()"> Cadastrar </button>\n\n      </ion-col>\n\n      <ion-col width-50>\n\n        <button ion-button full (click)="perfil()"> Entrar </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button full class="facebook" icon-left>\n\n          <ion-icon name="logo-facebook"></ion-icon> Login com o Facebook\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Suporte3\Desktop\Repositorio\SistemaDonar\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map