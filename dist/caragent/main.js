(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-main></app-main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _car_preview_car_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./car-preview/car-preview.component */ "./src/app/car-preview/car-preview.component.ts");
/* harmony import */ var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./catalog/catalog.component */ "./src/app/catalog/catalog.component.ts");
/* harmony import */ var _orderpage_orderpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orderpage/orderpage.component */ "./src/app/orderpage/orderpage.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _order_preview_order_preview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order-preview/order-preview.component */ "./src/app/order-preview/order-preview.component.ts");
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order-list/order-list.component */ "./src/app/order-list/order-list.component.ts");
/* harmony import */ var _car_return_car_return_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./car-return/car-return.component */ "./src/app/car-return/car-return.component.ts");
/* harmony import */ var _users_management_users_management_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users-management/users-management.component */ "./src/app/users-management/users-management.component.ts");
/* harmony import */ var _car_inventory_management_car_inventory_management_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./car-inventory-management/car-inventory-management.component */ "./src/app/car-inventory-management/car-inventory-management.component.ts");
/* harmony import */ var _car_types_management_car_types_management_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./car-types-management/car-types-management.component */ "./src/app/car-types-management/car-types-management.component.ts");
/* harmony import */ var _orders_management_orders_management_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./orders-management/orders-management.component */ "./src/app/orders-management/orders-management.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'catalog', component: _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_10__["CatalogComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: 'carpreview/:id', component: _car_preview_car_preview_component__WEBPACK_IMPORTED_MODULE_9__["CarPreviewComponent"] },
    { path: 'order/:id', component: _orderpage_orderpage_component__WEBPACK_IMPORTED_MODULE_11__["OrderpageComponent"] },
    { path: 'orderlist', component: _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_16__["OrderListComponent"] },
    { path: 'userorders/:id', component: _order_preview_order_preview_component__WEBPACK_IMPORTED_MODULE_15__["OrderPreviewComponent"] },
    { path: 'returncar', component: _car_return_car_return_component__WEBPACK_IMPORTED_MODULE_17__["CarReturnComponent"] },
    { path: 'usersmanagement', component: _users_management_users_management_component__WEBPACK_IMPORTED_MODULE_18__["UsersManagementComponent"] },
    { path: 'carsinventory', component: _car_inventory_management_car_inventory_management_component__WEBPACK_IMPORTED_MODULE_19__["CarInventoryManagementComponent"] },
    { path: 'carstypes', component: _car_types_management_car_types_management_component__WEBPACK_IMPORTED_MODULE_20__["CarTypesManagementComponent"] },
    { path: 'carsorderslist', component: _orders_management_orders_management_component__WEBPACK_IMPORTED_MODULE_21__["OrdersManagementComponent"] },
    //users-management
    //carsinventory
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _car_preview_car_preview_component__WEBPACK_IMPORTED_MODULE_9__["CarPreviewComponent"],
                _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_10__["CatalogComponent"],
                _orderpage_orderpage_component__WEBPACK_IMPORTED_MODULE_11__["OrderpageComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _order_preview_order_preview_component__WEBPACK_IMPORTED_MODULE_15__["OrderPreviewComponent"],
                _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_16__["OrderListComponent"],
                _car_return_car_return_component__WEBPACK_IMPORTED_MODULE_17__["CarReturnComponent"],
                _users_management_users_management_component__WEBPACK_IMPORTED_MODULE_18__["UsersManagementComponent"],
                _car_inventory_management_car_inventory_management_component__WEBPACK_IMPORTED_MODULE_19__["CarInventoryManagementComponent"],
                _car_types_management_car_types_management_component__WEBPACK_IMPORTED_MODULE_20__["CarTypesManagementComponent"],
                _orders_management_orders_management_component__WEBPACK_IMPORTED_MODULE_21__["OrdersManagementComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes),
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/car-inventory-management/car-inventory-management.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/car-inventory-management/car-inventory-management.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/car-inventory-management/car-inventory-management.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/car-inventory-management/car-inventory-management.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  \n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n          <th>Update</th>\n        <th>Manufacturer</th>\n        <th>Model</th>\n        <th>RegisterNumber</th>\n        <th>PricePerDay</th>\n        <th>PricePerDayLate</th>\n         <th>BranchLocation</th>\n         <th>Delete</th>\n\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of data.CarAgencyInfo.CarsCollection\">\n        <td><button class=\"btn btn-success\" (click)=\"updateCarInfo($event,data)\" >Update</button></td>\n        <td>{{data.Manufacturer}}</td>\n        <td>{{data.Model}}</td>\n        <td>{{data.RegisterNumber}}</td>\n        <td><input type=\"number\" name=\"PricePerDay\" [(ngModel)]=\"data.PricePerDay\"></td>\n        <td><input type=\"number\" name=\"PricePerDayLate\" [(ngModel)]=\"data.PricePerDayLate\"></td>\n        <td><input type=\"text\" name=\"BranchLocation\" [(ngModel)]=\"data.BranchLocation\"></td>\n        <td><button class=\"btn btn-danger\" (click)=\"deleteCar($event,data.CarID)\" >Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/car-inventory-management/car-inventory-management.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/car-inventory-management/car-inventory-management.component.ts ***!
  \********************************************************************************/
/*! exports provided: CarInventoryManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarInventoryManagementComponent", function() { return CarInventoryManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarInventoryManagementComponent = /** @class */ (function () {
    function CarInventoryManagementComponent(data) {
        this.data = data;
    }
    CarInventoryManagementComponent.prototype.updateCarInfo = function (event, car) {
        this.data.updateCarInfo(car);
    };
    CarInventoryManagementComponent.prototype.deleteCar = function (event, carid) {
        this.data.deleteCar(carid);
        location.reload();
    };
    CarInventoryManagementComponent.prototype.ngOnInit = function () {
    };
    CarInventoryManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-inventory-management',
            template: __webpack_require__(/*! ./car-inventory-management.component.html */ "./src/app/car-inventory-management/car-inventory-management.component.html"),
            styles: [__webpack_require__(/*! ./car-inventory-management.component.css */ "./src/app/car-inventory-management/car-inventory-management.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CarInventoryManagementComponent);
    return CarInventoryManagementComponent;
}());



/***/ }),

/***/ "./src/app/car-preview/car-preview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/car-preview/car-preview.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n\r\nwidth: 130px;\r\nheight: 80px;\r\n\r\n}\r\n\r\n\r\n\r\nimg.displayimage {\r\n\r\n    width: 250px;;\r\n    height: 250px;\r\n\r\n}\r\n\r\n\r\n\r\n.preview {\r\n\r\nfont-size: 17px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/car-preview/car-preview.component.html":
/*!********************************************************!*\
  !*** ./src/app/car-preview/car-preview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div  *ngIf=\"!data.isPreview\" class=\"panel panel-default\" role=\"button\">\n        <a routerLink=\"/carpreview/{{car.CarID}}\" (click)=\"displaypreview()\" class='preview' > Preview</a>\n        <h3 class=\"panel-heading\">{{car?.Manufacturer}}</h3>\n        <div class=\"panel-body\">\n            <h3 class=\"panel-heading\">{{car?.Model}}</h3>\n            <img   [src]=\"car?.Picture\"  alt=\"Responsive image\">\n        </div>\n      </div>\n\n\n<div *ngIf=\"data.isPreview\" class='container'>\n  <div class='row'>\n\n<div class=\"col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2\">\n      <div  *ngIf=\"data.isPreview\" >\n          <div class=\"row\">\n            <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n                <img   class='displayimage'  [src]=\"data.AgencyInfo.currentCarOrder.Picture\"  alt=\"Responsive image\">\n                <br/>\n              <!--   (click)=\"displaypreview()\" after click reference error  -->\n\n\n\n              <div class=\"btn-group-vertical\">\n                  <a routerLink=\"/order/{{data.currentCarOrder.CarID}}\"  role=\"button\" class='btn btn-primary' >Order and price</a>\n      \n                  <a *ngIf=\"data.isPreview\" routerLink=\"/catalog\" (click)=\"backtolist()\" class=\"btn btn-info\">Back to Cars list</a>\n                </div>\n\n             \n               <!--   <button class='btn btn-info'>Order Car</button> -->\n                 <br>\n                 \n            </div>\n            \n            \n            <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n              \n              <table class=\"table table-hover\">\n                <thead>\n                  <tr>\n                    <th>Car Details</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr> <td><span>Manufacturer:&nbsp;</span>  {{data.currentCarOrder?.Manufacturer}}</td></tr>\n                  <tr> <td><span>Model:&nbsp;</span>{{data.currentCarOrder.Model}}</td></tr>\n                  <tr> <td><span>Price Per Day:&nbsp;</span>{{data.currentCarOrder.PricePerDay}}</td></tr>\n                  <tr> <td><span>Price Per Day Late:&nbsp;</span>{{data.currentCarOrder.PricePerDayLate}}</td></tr>\n                  <tr> <td><span>Year:&nbsp;</span>{{data.currentCarOrder.Year}}</td></tr>\n                  <tr> <td><span>Gear:&nbsp;</span>{{data.currentCarOrder.Gear}}</td></tr>\n                  <tr> <td><span>Branch Location:&nbsp;</span>{{data.currentCarOrder.BranchLocation}}</td></tr>\n   \n                </tbody>\n              </table>\n            </div>\n          </div>\n\n</div>\n</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/car-preview/car-preview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/car-preview/car-preview.component.ts ***!
  \******************************************************/
/*! exports provided: CarPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarPreviewComponent", function() { return CarPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
/* harmony import */ var _shared_models_car__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/car */ "./src/shared/models/car.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarPreviewComponent = /** @class */ (function () {
    function CarPreviewComponent(data) {
        this.data = data;
        // this.data.imagepath=`${this.data.imagepath}${this.data.id}`;
    }
    CarPreviewComponent.prototype.displaypreview = function () {
        this.data.isPreview = true;
        this.data.AgencyInfo.currentCarOrder = this.car;
    };
    CarPreviewComponent.prototype.backtolist = function () {
        //prevent this part overflow the html part of the catalog 
        //Try to move to service
        this.data.isPreview = false;
    };
    CarPreviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_models_car__WEBPACK_IMPORTED_MODULE_2__["Car"])
    ], CarPreviewComponent.prototype, "car", void 0);
    CarPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-preview',
            template: __webpack_require__(/*! ./car-preview.component.html */ "./src/app/car-preview/car-preview.component.html"),
            styles: [__webpack_require__(/*! ./car-preview.component.css */ "./src/app/car-preview/car-preview.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CarPreviewComponent);
    return CarPreviewComponent;
}());



/***/ }),

/***/ "./src/app/car-return/car-return.component.css":
/*!*****************************************************!*\
  !*** ./src/app/car-return/car-return.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/car-return/car-return.component.html":
/*!******************************************************!*\
  !*** ./src/app/car-return/car-return.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  \n  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n    \n    <div class=\"jumbotron\">\n      <div class=\"container\">\n        <h1>Rent Cost</h1>\n        \n        <p>\n         Rent Price\n        </p>\n      </div>\n    </div>\n  </div>\n    <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n    \n      <form>\n        <div class=\"form-group\">\n          <label for=\"formGroupExampleInput\">Enter Register Number</label>\n          <input type=\"text\" [(ngModel)]=\"registerNumber\" class=\"form-control\"  name=\"RegisterNumber\" >\n        </div>\n        <div class=\"form-group\">\n         \n       <button type=\"button\" class=\"btn btn-large btn-block btn-primary\"   name=\"name\" (click)=\"returnCar()\">Return Car</button>\n        </div>\n      </form>\n\n      </div>\n\n    \n\n  \n\n\n</div>\n"

/***/ }),

/***/ "./src/app/car-return/car-return.component.ts":
/*!****************************************************!*\
  !*** ./src/app/car-return/car-return.component.ts ***!
  \****************************************************/
/*! exports provided: CarReturnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarReturnComponent", function() { return CarReturnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarReturnComponent = /** @class */ (function () {
    function CarReturnComponent(data) {
        this.data = data;
    }
    CarReturnComponent.prototype.returnCar = function () {
        console.log("step1");
        this.data.Returncar(this.registerNumber);
    };
    CarReturnComponent.prototype.ngOnInit = function () {
    };
    CarReturnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-return',
            template: __webpack_require__(/*! ./car-return.component.html */ "./src/app/car-return/car-return.component.html"),
            styles: [__webpack_require__(/*! ./car-return.component.css */ "./src/app/car-return/car-return.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CarReturnComponent);
    return CarReturnComponent;
}());



/***/ }),

/***/ "./src/app/car-types-management/car-types-management.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/car-types-management/car-types-management.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n\r\nfont-size: 20px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/car-types-management/car-types-management.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/car-types-management/car-types-management.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<div class='row'>\n\n<div class=\"col-xs-6 col-xs-offset-4 col-sm-6 col-sm-offset-4 col-md-6 col-md-offset-4 col-lg-6 col-lg-offset-6\">\n      <div *ngFor=\"let data of data.AgencyInfo.CarsTypesCollection\" class=\"checkbox\" >\n\n      <input type=\"checkbox\" name=\"IsForRent\"  [(ngModel)]=\"data.IsForRent\">\n      <span> {{data.Manufacturer}} {{data.Model}}</span>\n  </div>\n  <button type=\"submit\" (click)=\"submittypes()\" class=\"btn btn-default\">Submit</button>\n</div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/car-types-management/car-types-management.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/car-types-management/car-types-management.component.ts ***!
  \************************************************************************/
/*! exports provided: CarTypesManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarTypesManagementComponent", function() { return CarTypesManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarTypesManagementComponent = /** @class */ (function () {
    function CarTypesManagementComponent(data) {
        this.data = data;
        this.data.AgencyInfo.CarsTypesCollection = [];
        this.data.getCarsTypes();
    }
    CarTypesManagementComponent.prototype.submittypes = function () {
        this.data.updateCarsForRent();
    };
    CarTypesManagementComponent.prototype.ngOnInit = function () {
    };
    CarTypesManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car-types-management',
            template: __webpack_require__(/*! ./car-types-management.component.html */ "./src/app/car-types-management/car-types-management.component.html"),
            styles: [__webpack_require__(/*! ./car-types-management.component.css */ "./src/app/car-types-management/car-types-management.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CarTypesManagementComponent);
    return CarTypesManagementComponent;
}());



/***/ }),

/***/ "./src/app/catalog/catalog.component.css":
/*!***********************************************!*\
  !*** ./src/app/catalog/catalog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/catalog/catalog.component.html":
/*!************************************************!*\
  !*** ./src/app/catalog/catalog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n<div class='row'>\n\n  <form>\n    <div class=\"form-group navbar-form navbar-left\" role=\"search\" >\n        <label for=\"sel1\">Filter List: </label>\n        <select #selectElem (change)=\"setSearchText(selectElem.value)\" class=\"form-control\">\n            <option *ngFor=\"let option of optionList\" [value]=\"option\">\n                {{option}}\n            </option>\n        </select>\n        <input type=\"text\" [(ngModel)]=\"searchValue\" name=\"search\" class=\"form-control\"  placeholder=\"Enter Your Search\" required>\n         <button class='btn btn-info' (click)=search()>Search</button>\n      </div>\n    </form>\n\n</div>\n\n\n<div class='row'>\n<div *ngFor=\"let data of data.AgencyInfo.filterCarCollection\">\n<div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\n  \n    <app-car-preview [car]=\"data\"></app-car-preview>\n</div>\n  </div>\n  </div>\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/catalog/catalog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/catalog/catalog.component.ts ***!
  \**********************************************/
/*! exports provided: CatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogComponent", function() { return CatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogComponent = /** @class */ (function () {
    function CatalogComponent(data) {
        this.data = data;
        this.optionList = new Array();
        this.data.isPreview = false;
        this.data.AgencyInfo.filterCarCollection = this.data.AgencyInfo.CarsCollection;
        this.optionList.push("Show All Results");
        this.optionList.push("Gear");
        this.optionList.push("Year");
        this.optionList.push("Manufacturer");
        this.optionList.push("Model");
        this.optionList.push("Free Text");
        console.log("___________________________________________");
        console.log(this.optionList);
        console.log(this.data.AgencyInfo.CarsCollection);
        console.log(this.data.AgencyInfo.filterCarCollection);
        console.log("___________________________________________");
    }
    CatalogComponent.prototype.setSearchText = function (option) {
        this.FilterSearchOption = option;
        if (option == "Gear")
            this.searchValue = "Gear";
        else if (option == "Show All Results")
            this.searchValue = "Show All Results";
        else
            this.searchValue = "";
    };
    CatalogComponent.prototype.search = function () {
        var _this = this;
        switch (this.FilterSearchOption) {
            case "Gear":
                this.searchValue = "Gear";
                this.data.AgencyInfo.filterCarCollection = this.data.AgencyInfo.CarsCollection.filter(function (x) { return x.Gear == true; });
                break;
            case "Year":
                if (parseInt(this.searchValue) != NaN)
                    this.data.AgencyInfo.filterCarCollection = this.data.AgencyInfo.CarsCollection.filter(function (x) { return x.Year == parseInt(_this.searchValue); });
                break;
            case "Manufacturer":
                this.data.AgencyInfo.filterCarCollection = this.data.AgencyInfo.CarsCollection.filter(function (x) { return x.Manufacturer == _this.searchValue; });
                break;
            case "Model":
                this.data.AgencyInfo.filterCarCollection = this.data.AgencyInfo.CarsCollection.filter(function (x) { return x.Model == _this.searchValue; });
                break;
            case "Show All Results":
                this.data.AgencyInfo.filterCarCollection = this.data.AgencyInfo.CarsCollection;
                break;
            case "Free Text":
                this.data.AgencyInfo.filterCarCollection = this.data.AgencyInfo.CarsCollection.filter(function (x) { return x.Manufacturer == _this.searchValue ||
                    x.Model == _this.searchValue || x.Year == parseInt(_this.searchValue) || (x.Gear == true && _this.FilterSearchOption == "Gear"); });
                break;
        }
    };
    CatalogComponent.prototype.changeid = function () {
    };
    CatalogComponent.prototype.ngOnInit = function () {
    };
    CatalogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__(/*! ./catalog.component.html */ "./src/app/catalog/catalog.component.html"),
            styles: [__webpack_require__(/*! ./catalog.component.css */ "./src/app/catalog/catalog.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center\">\n\n    <br>\n    <br>\n    <p>&copy; - {{currentYear}} all rights reserved - {{adminName}} </p>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.adminName = "Ran Niv";
        this.currentYear = (new Date()).getFullYear();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n\r\nfont-weight: 500;\r\nfont-size: 17px;\r\ncolor:rgb(100, 100, 163);\r\n}\r\n\r\na.navbar-brand {\r\n\r\nfont-size: 30px;\r\ncolor:slateblue;\r\n\r\n}\r\n\r\n.hello {\r\n\r\ncolor:darkgreen;\r\nfont-weight: 500;\r\nmargin-top: 14px;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <nav class=\"navbar navbar-header\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">Best Rent</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <!------------------------------------------->\n        <li *ngIf=\"data.AgencyInfo.RegiserUser.Role=='Worker'\" ><a routerLink=\"/returncar\"><span class=\"glyphicon glyphicon-user\"></span>Return Car</a></li>\n        <li *ngIf=\"data.AgencyInfo.RegiserUser.Role=='Customer'\"><a routerLink=\"/orderlist\"  ><span >My Orders</span>  </a></li>\n<!--         <li *ngIf=\"data.RegiserUser.Role!='Guest'\" ><a routerLink=\"/home\" (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li> -->\n        <li *ngIf=\"data.AgencyInfo.RegiserUser.Role=='Customer'||data.AgencyInfo.RegiserUser.Role=='Guest'\" ><a routerLink=\"/register\"><span class=\"glyphicon glyphicon-user\"></span>Register</a></li>\n        \n      \n         \n        <!------------------------------------------->\n        <li *ngIf=\"data.AgencyInfo.RegiserUser.Role=='Customer'||data.AgencyInfo.RegiserUser.Role=='Guest'\" ><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\" ></span> Login</a></li>\n        <li *ngIf=\"data.AgencyInfo.RegiserUser.Role=='Worker'||data.AgencyInfo.RegiserUser.Role=='Manager'\" (click)=\"logout()\" ><a routerLink=\"/home\"><span class=\"glyphicon glyphicon-log-out\"  ></span> Logout</a></li>\n        <!------------------------------------------->\n \n        <li><a routerLink=\"/home\"><span >Home Page</span> </a></li>\n        <li *ngIf=\"data.AgencyInfo.RegiserUser.Role=='Customer'||data.AgencyInfo.RegiserUser.Role=='Guest'\" ><a routerLink=\"/catalog\" ><span >Cars Catalog</span>  </a></li>\n        <li *ngIf=\"data.AgencyInfo.RegiserUser.Role=='Worker'||data.AgencyInfo.RegiserUser.Role=='Manager'\" class='hello'> Hello {{data.AgencyInfo.RegiserUser.FullName}}&nbsp;  {{data.RegiserUser.Role}}</li>\n        <li *ngIf=\"data.AgencyInfo.RegiserUser.Role=='Guest'||data.AgencyInfo.RegiserUser.Role=='Customer'\" class='hello'> Hello {{data.AgencyInfo.RegiserUser.FullName}}</li>\n       \n      </ul>\n    </div>\n\n    <nav *ngIf=\"data.RegiserUser.Role=='Manager'\" class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" >Manager Settings</a>\n          </div>\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#\">Home</a></li>\n            <li *ngIf=\"data.RegiserUser.Role=='Manager'\" ><a routerLink=\"/usersmanagement\"><span class=\"glyphicon glyphicon-user\"></span>Users</a></li>\n            <li><a routerLink=\"/carsinventory\"><span class=\"glyphicon glyphicon-edit\"></span>Cars Inventory</a></li>\n            <li><a routerLink=\"/carstypes\"><span class=\"glyphicon glyphicon-ok\"></span>Cars Types</a></li>\n            <li><a routerLink=\"/carsorderslist\"><span class=\"glyphicon glyphicon-list-alt\"></span>Cars Orders</a></li>\n           \n          </ul>\n        </div>\n      </nav>\n\n    <div>\n  \n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
/* harmony import */ var _shared_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/User */ "./src/shared/models/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(data) {
        this.data = data;
    }
    HeaderComponent.prototype.logout = function () {
        this.data.AgencyInfo.RegiserUser = new _shared_models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        console.log(this.data.AgencyInfo.RegiserUser);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n\r\nfont-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\ncolor:rgb(100, 100, 163);\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n\n    <div class=\"jumbotron\">\n      <h2>Welcome to car agent - Best Rent</h2>\n      <p>Find a car that suits you</p>\n      <img src=\".\\assets\\images\\logo7.jpg\" class=\"img-responsive\" alt=\"Responsive image\" >\n    </div>\n<br/>\n\n<br/>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/image.service */ "./src/shared/services/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(imagedata) {
        /* this.imagepath="http://localhost:57445/api/carcatalog/GetImage/0"; */
        /* this.imagepath2="http://localhost:57445/api/carcatalog/GetImage/1"; */
        this.imagedata = imagedata;
        this.imagepath = "";
        this.imagepath2 = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr/>\n<div class='container'>\n \n <div class=\"row\">\n        <div *ngIf=\"data.AgencyInfo.RegiserUser.Role.length==0\" >\n                please make sure to enter valid credentials\n               </div>\n </div>\n    \n<div class='row'>\n<div class='col-md-6 col-md-offset-3'>\n<br/>\n\n\n\n<br/>\n<form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\n<div class=\"form-group\">\n    <label for=\"usr\">Name:</label>\n    <input type=\"text\"  [(ngModel)]=\"data.AgencyInfo.userLogin.name\" class=\"form-control\"  name=\"username\" id=\"usr\" required >\n    \n    <label for=\"pwd\">Password:</label>\n    <input type=\"password\" [(ngModel)]=\"data.AgencyInfo.userLogin.password\" class=\"form-control\" name=\"password\" id=\"pwd\" required >\n     <button type=\"submit\" class=\"btn btn-default btn-block\" [disabled]=\"!loginForm.form.valid\" >Submit</button>\n    </div>\n\n</form>\n</div>\n</div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(data) {
        this.data = data;
    }
    LoginComponent.prototype.onSubmit = function () {
        this.data.CheckCredentials(this.data.AgencyInfo.userLogin);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.imagepath = "app/shared/content/logo1.jpg";
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/order-list/order-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/order-list/order-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n\r\nmargin-right: 15px;\r\nmargin-left: 15px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/order-list/order-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/order-list/order-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\n<div *ngFor=\"let data of data.AgencyInfo.currentOrders\">\n\n\n    <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-3\">\n        <div *ngIf=\"!isPreview\" class=\"panel panel-info\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">{{data.OrderStartDate|date: 'dd/MM/yyyy'}}</h3>\n            </div>\n            <div class=\"panel-body\">\n              <p>\n               {{data.Manufacturer}}\n              </p>\n              <p>\n                  {{data.Model}}\n             </p>\n           <a routerLink=\"/userorders/{{data.OrderID}}\" class='btn btn-info'>Preview</a>\n          \n            </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/order-list/order-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-list/order-list.component.ts ***!
  \****************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(data) {
        this.data = data;
        this.data.getOrders(this.data.AgencyInfo.RegiserUser.UserID);
    }
    OrderListComponent.prototype.ngOnInit = function () {
    };
    OrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__(/*! ./order-list.component.html */ "./src/app/order-list/order-list.component.html"),
            styles: [__webpack_require__(/*! ./order-list.component.css */ "./src/app/order-list/order-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/order-preview/order-preview.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-preview/order-preview.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.panel-title {\r\n\r\nfont-weight: 600;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/order-preview/order-preview.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-preview/order-preview.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n<div class='row'>\n\n<div *ngIf=\"!isPreview\" class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n    \n <h3> {{data.AgencyInfo.currentUserOrderDisplay?.Manufacturer}}</h3>\n <h4>{{data.AgencyInfo.currentUserOrderDisplay?.Model}}</h4>\n\n\n    </div>\n    <div class=\"panel-body\">\n      <p class=\"panel-title\"> Start Date: {{data.AgencyInfo.currentUserOrderDisplay?.OrderStartDate|date: 'dd/MM/yyyy'}}</p>\n      <p class=\"panel-title\"> Expected Return Date: {{data.AgencyInfo.currentUserOrderDisplay?.OrderReturnDate|date: 'dd/MM/yyyy'}}</p>\n      <p class=\"panel-title\"> Actual Return Date: {{data.AgencyInfo.currentUserOrderDisplay?.Actualreturndate|date: 'dd/MM/yyyy'}}</p>\n     \n    </div>\n  </div>\n</div>\n<hr/>\n<a  routerLink=\"/orderlist\"  class=\"btn btn-info\">Back to Cars list</a>\n\n\n\n\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/order-preview/order-preview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-preview/order-preview.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPreviewComponent", function() { return OrderPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderPreviewComponent = /** @class */ (function () {
    function OrderPreviewComponent(data, myActivatedRoute) {
        var _this = this;
        this.data = data;
        this.myActivatedRoute = myActivatedRoute;
        this.isPreview = false;
        console.log("Test ActivatedRoute");
        this.myActivatedRoute.params.subscribe(function (x) { _this.localId = x.id; });
        console.log(this.localId);
        this.data.getUserOrder(this.localId);
    }
    ;
    OrderPreviewComponent.prototype.ngOnInit = function () {
        //this.order=this.data.currentUserOrders.find(x=>x.OrderID==1);
        /* this.myActivatedRoute.params.subscribe(x=>{this.localId=x.id});
        console.log(`ngOnInit: ${this.localId}`); */
    };
    OrderPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-preview',
            template: __webpack_require__(/*! ./order-preview.component.html */ "./src/app/order-preview/order-preview.component.html"),
            styles: [__webpack_require__(/*! ./order-preview.component.css */ "./src/app/order-preview/order-preview.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], OrderPreviewComponent);
    return OrderPreviewComponent;
}());



/***/ }),

/***/ "./src/app/orderpage/orderpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/orderpage/orderpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".regular {\r\n\r\ncolor:midnightblue;\r\n\r\n}\r\n\r\n\r\n.wrongvalues {\r\n\r\ncolor:red;\r\nfont-size: 14px;\r\n\r\n}\r\n\r\n\r\n.orderstatus {\r\nheight: 50px;\r\nbackground-color: whitesmoke;\r\ntext-align: center;\r\n\r\n\r\n}"

/***/ }),

/***/ "./src/app/orderpage/orderpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/orderpage/orderpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "              <div class='container'>\n              \n              <div class=\"row\">\n        \n            <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\n              <table class=\"table table-hover\">\n                <thead>\n                  <tr>\n                    <th>Car Details</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr> <td><span>Manufacturer:&nbsp;</span>  {{data.AgencyInfo.currentCarOrder?.Manufacturer}}</td></tr>\n                  <tr> <td><span>Model:&nbsp;</span>{{data.AgencyInfo.currentCarOrder?.Model}}</td></tr>\n                  <tr> <td><span>Price Per Day:&nbsp;</span>{{data.AgencyInfo.currentCarOrder?.PricePerDay}}</td></tr>\n                  <tr> <td><span>Price Per Day Late:&nbsp;</span>{{data.AgencyInfo.currentCarOrder?.PricePerDayLate}}</td></tr>\n                 \n                </tbody>\n              </table>\n            </div>\n\n\n              </div>\n              <div class='row'>\n                  <div class=\"orderstatus\">\n                    <div class=\"container\">\n                      <h3 class=\"{{data.OrderStaus.class}}\">{{data.OrderStaus.message}}</h3>\n                    </div>\n                  </div>\n              </div>\n\n\n\n              <div class=\"row\">\n                <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n                    <div class=\"jumbotron\">\n                    <div class=\"btn-group-vertical\">\n                        <button class=\"{{data.OrderStaus.btnclass}}\" (click)=\"postorder()\" >Order This Car</button>\n                        <br/>\n                        <a  routerLink=\"/catalog\" (click)=\"backtolist()\" class=\"btn btn-primary\">Back to Cars list</a>\n                      </div>\n                    </div> \n                </div>\n                <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n                    <div class=\"jumbotron\">\n                        <div class=\"container\">\n                          <h4>Order Price</h4>\n                          <div>{{data.AgencyInfo.currentCarOrderPrice| currency:'ILS'}}</div>\n                        </div>\n                      </div>\n                </div>\n\n                <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4\">\n                <form>\n                    <div class=\"form-group\">\n                      <label for=\"formGroupExampleInput\">Rent Start Date</label>\n                      <input type=\"date\" class=\"form-control\" [(ngModel)]=\"data.AgencyInfo.currentCarOrderStartDate\" name=\"startdate\" >\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"formGroupExampleInput2\">Rent End Date</label> \n                      <input type=\"date\" class=\"form-control\" [(ngModel)]=\"data.AgencyInfo.currentCarOrderEndDate\" name=\"enddate\" >\n                    </div>\n\n                    \n                    <button type=\"button\" class=\"btn btn-large btn-block btn-primary\" (click)=\"data.calculatePrice()\"> Show Price</button>\n                   \n                  </form>\n                </div>\n              </div>\n\n\n            </div>\n    \n            \n\n\n\n\n"

/***/ }),

/***/ "./src/app/orderpage/orderpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/orderpage/orderpage.component.ts ***!
  \**************************************************/
/*! exports provided: OrderpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderpageComponent", function() { return OrderpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
/* harmony import */ var _shared_models_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/Order */ "./src/shared/models/Order.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderpageComponent = /** @class */ (function () {
    function OrderpageComponent(data) {
        this.data = data;
    }
    OrderpageComponent.prototype.postorder = function () {
        var order = new _shared_models_Order__WEBPACK_IMPORTED_MODULE_2__["Order"]();
        order.OrderStartDate = this.data.AgencyInfo.currentCarOrderStartDate;
        order.OrderReturnDate = this.data.AgencyInfo.currentCarOrderEndDate;
        order.UserID = this.data.AgencyInfo.RegiserUser.UserID;
        order.RegisterNumber = this.data.AgencyInfo.currentCarOrder.RegisterNumber;
        this.data.addUOrder(order);
    };
    OrderpageComponent.prototype.backtolist = function () {
        //prevent this part overflow the html part of the catalog 
        //Try to move to service
        this.data.isPreview = false;
    };
    OrderpageComponent.prototype.ngOnInit = function () {
    };
    OrderpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orderpage',
            template: __webpack_require__(/*! ./orderpage.component.html */ "./src/app/orderpage/orderpage.component.html"),
            styles: [__webpack_require__(/*! ./orderpage.component.css */ "./src/app/orderpage/orderpage.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], OrderpageComponent);
    return OrderpageComponent;
}());



/***/ }),

/***/ "./src/app/orders-management/orders-management.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/orders-management/orders-management.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders-management/orders-management.component.html":
/*!********************************************************************!*\
  !*** ./src/app/orders-management/orders-management.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  \n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Update</th>\n          <th>RegisterNumber</th>\n          <th>Manufacturer</th>\n          <th>Model</th>\n          <th>Order Start Date</th>\n          <th>Order Return Date</th>\n          <th>Actual return date</th>\n\n           <th>Delete</th>\n  \n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of data.currentOrders\">\n          <td><button class=\"btn btn-success\" (click)=\"updateOrderinfo($event,data)\" >Update</button></td>\n          <td>{{data.RegisterNumber}}</td>\n          <td>{{data.Manufacturer}}</td>\n          <td>{{data.Model}}</td>\n         \n          <td title=\"{{data.OrderStartDate|date: 'dd/MM/yyyy'}}\" ><input type=\"date\"  [(ngModel)]=\"data.OrderStartDate\"  ></td>\n          <td title=\"{{data.OrderReturnDate|date: 'dd/MM/yyyy'}}\"><input type=\"date\"  [(ngModel)]=\"data.OrderReturnDate\"></td>\n          <td title=\"{{data.Actualreturndate|date: 'dd/MM/yyyy'}}\"><input type=\"date\"  [(ngModel)]=\"data.Actualreturndate\"></td>\n          <td><button class=\"btn btn-danger\" (click)=\"deleteOrder($event,data.OrderID)\" >Delete</button></td> \n        </tr>\n      </tbody>\n    </table>\n    \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/orders-management/orders-management.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/orders-management/orders-management.component.ts ***!
  \******************************************************************/
/*! exports provided: OrdersManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersManagementComponent", function() { return OrdersManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersManagementComponent = /** @class */ (function () {
    function OrdersManagementComponent(data) {
        this.data = data;
        console.log("OrdersManagementComponent");
        this.data.getOrders(0);
        console.log(this.data.AgencyInfo.currentOrders);
    }
    OrdersManagementComponent.prototype.updateOrderinfo = function (event, order) {
        this.data.updateOrder(order);
    };
    OrdersManagementComponent.prototype.deleteOrder = function (event, orderid) {
        this.data.deleteOrder(orderid);
        location.reload();
    };
    OrdersManagementComponent.prototype.ngOnInit = function () {
    };
    OrdersManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders-management',
            template: __webpack_require__(/*! ./orders-management.component.html */ "./src/app/orders-management/orders-management.component.html"),
            styles: [__webpack_require__(/*! ./orders-management.component.css */ "./src/app/orders-management/orders-management.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], OrdersManagementComponent);
    return OrdersManagementComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  \n\n\n\n  <!--   <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate> -->\n    <form  (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\" >\n    <div class=\"form-group\">\n      <label for=\"nameid\">Full Name</label>\n      <input type=\"text\" [(ngModel)]=\"data.AgencyInfo.RegiserUser.FullName\" name=\"fullname\" class=\"form-control\" id=\"nameid\" placeholder=\"Full Name\" required>\n\n   \n      <label for=\"idnum\">ID Number</label>\n      <input type=\"text\" [(ngModel)]=\"data.AgencyInfo.RegiserUser.IdNum\" class=\"form-control\" id=\"idnum\" name=\"idnum\" placeholder=\"ID Number\" required>\n\n\n        <label for=\"userid\">User Name</label>\n        <input type=\"text\"  [(ngModel)]=\"data.AgencyInfo.RegiserUser.UserName\" class=\"form-control\" name=\"username\" id=\"userid\" placeholder=\"User Name\" required>\n\n\n          <label for=\"birthdateid\">Birth Date</label>\n          <input type=\"date\"  [(ngModel)]=\"data.AgencyInfo.RegiserUser.BirthDate\"  class=\"form-control\" id=\"birthdateid\" name=\"birthdate\" >\n    \n\n        \n\n  \n       \n          <!-- <label class=\"radio-inline\"><input type=\"radio\"  [(ngModel)]=\"data.RegiserUser.Gender\"  name=\"gender\" required >Male</label>\n          <label class=\"radio-inline\"><input type=\"radio\" [(ngModel)]=\"data.RegiserUser.Gender\"   name=\"gender\">Female</label>\n          <br/> -->\n\n\n          <label>Gender</label>\n          <div class=\"form-group\">\n            \n                  <label>\n                      <input type=\"radio\" name=\"Gender\" value=\"1\" [(ngModel)]=\"data.AgencyInfo.RegiserUser.Gender\" required >\n                      Male  &nbsp;\n                  </label>\n                 \n  \n                  <label>\n                      <input type=\"radio\" name=\"Gender\" value=\"2\" [(ngModel)]=\"data.AgencyInfo.RegiserUser.Gender\">\n                    Female\n                  </label>\n              \n          </div>\n     \n\n \n          <label for=\"emailid\">Email</label>\n          <input type=\"email\" [(ngModel)]=\"data.AgencyInfo.RegiserUser.Email\" class=\"form-control\" id=\"emailid\" placeholder=\"Email\" name=\"email\" required>\n          \n       \n          <label for=\"passwordid\">Password</label>\n          <input type=\"password\"  [(ngModel)]=\"data.AgencyInfo.RegiserUser.Password\" class=\"form-control\" id=\"passwordid\" name=\"password\" required>\n    \n              <!-- <button type=\"submit\" [disabled]=\"!ngForm.valid\">Submit</button> -->\n              <button type=\"submit\"  [disabled]=\"!registerForm.form.valid\">Submit</button>\n              </div>\n  </form>\n</div>  "

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(data) {
        this.data = data;
        this.submitted = false;
        console.log(data.AgencyInfo.RegiserUser);
    }
    RegisterComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.data.AgencyInfo.RegiserUser);
        this.data.addUser(this.data.AgencyInfo.RegiserUser
        //   ,()=>{console.log("call back post user")}
        );
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/users-management/users-management.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/users-management/users-management.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users-management/users-management.component.html":
/*!******************************************************************!*\
  !*** ./src/app/users-management/users-management.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<table class=\"table table-hover\">\n  <thead>\n    <tr>\n        <th>Update</th>\n        \n      <th>Id Num</th>\n      <th>Name</th>\n      <th>Role</th>\n      <th>Delete</th>\n    </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let data of data.AgencyInfo.usersList\" > \n      <td><button class=\"btn btn-success\" (click)=\"updateUser(data.idNum)\" >Update</button></td>\n     \n      <td> {{data.IdNum}} </td>\n      <td> {{data.FullName}}</td>\n      <td> <input type=\"text\" name=\"UserName\" [(ngModel)]=\"data.Role\"> </td>\n    <td><button class=\"btn btn-danger\" (click)=\"deleteUser($event,data.UserID)\" >Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n\n<button type=\"button\" class=\"btn btn-large btn-block btn-primary\" (click)=\"data.UpdateUsersList()\"> Update Data</button>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/users-management/users-management.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/users-management/users-management.component.ts ***!
  \****************************************************************/
/*! exports provided: UsersManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersManagementComponent", function() { return UsersManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersManagementComponent = /** @class */ (function () {
    function UsersManagementComponent(data) {
        this.data = data;
        this.data.getCUsers();
    }
    UsersManagementComponent.prototype.updateUser = function () {
    };
    UsersManagementComponent.prototype.deleteUser = function (event, id) {
        console.log(id);
        this.data.deleteUser(id);
        location.reload();
    };
    UsersManagementComponent.prototype.ngOnInit = function () {
    };
    UsersManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-management',
            template: __webpack_require__(/*! ./users-management.component.html */ "./src/app/users-management/users-management.component.html"),
            styles: [__webpack_require__(/*! ./users-management.component.css */ "./src/app/users-management/users-management.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UsersManagementComponent);
    return UsersManagementComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/shared/models/CarAgency.ts":
/*!****************************************!*\
  !*** ./src/shared/models/CarAgency.ts ***!
  \****************************************/
/*! exports provided: CarAgency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarAgency", function() { return CarAgency; });
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/shared/models/User.ts");

var CarAgency = /** @class */ (function () {
    function CarAgency() {
        this.CarsTypesCollection = new Array();
        this.UserName = "Guest"; //display in Header Component
        this.RegiserUser = new _User__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.currentCarOrderPrice = 0;
        this.RegiserUser = new _User__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
    return CarAgency;
}());



/***/ }),

/***/ "./src/shared/models/CarType.ts":
/*!**************************************!*\
  !*** ./src/shared/models/CarType.ts ***!
  \**************************************/
/*! exports provided: CarType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarType", function() { return CarType; });
var CarType = /** @class */ (function () {
    function CarType(type, isforrent) {
        this.Manufacturer = type.split("-*-")[0];
        this.Model = type.split("-*-")[1];
        this.IsForRent = isforrent;
    }
    return CarType;
}());



/***/ }),

/***/ "./src/shared/models/Order.ts":
/*!************************************!*\
  !*** ./src/shared/models/Order.ts ***!
  \************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/shared/models/User.ts":
/*!***********************************!*\
  !*** ./src/shared/models/User.ts ***!
  \***********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.image = "test";
        this.Role = "customer";
        this.UserID = 1; //for put test
        this.FullName = "Guest";
        this.Role = "Guest";
    }
    return User;
}());



/***/ }),

/***/ "./src/shared/models/UserLogin.ts":
/*!****************************************!*\
  !*** ./src/shared/models/UserLogin.ts ***!
  \****************************************/
/*! exports provided: UserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
var UserLogin = /** @class */ (function () {
    function UserLogin() {
    }
    return UserLogin;
}());



/***/ }),

/***/ "./src/shared/models/car.ts":
/*!**********************************!*\
  !*** ./src/shared/models/car.ts ***!
  \**********************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());



/***/ }),

/***/ "./src/shared/services/data.service.ts":
/*!*********************************************!*\
  !*** ./src/shared/services/data.service.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_car__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/car */ "./src/shared/models/car.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "./src/shared/models/User.ts");
/* harmony import */ var _models_UserLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/UserLogin */ "./src/shared/models/UserLogin.ts");
/* harmony import */ var _models_CarType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/CarType */ "./src/shared/models/CarType.ts");
/* harmony import */ var _models_CarAgency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/CarAgency */ "./src/shared/models/CarAgency.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.AgencyInfo = new _models_CarAgency__WEBPACK_IMPORTED_MODULE_6__["CarAgency"]();
        this.ErrorMessage = "You Enter incomplete or Wrong Data\n Please try again";
        this.OrderStaus = {
            message: "order status",
            class: "regular",
            btnclass: "btn btn-primary disabled"
        };
        this.id = 1;
        this.imagepath = "http://localhost:57445/api/carcatalog/GetImage/";
        this.link = "http://localhost:57445/api/carcatalog";
        this.AgencyInfo.RegiserUser = new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"](); //for register form ngmodel stater 
        this.AgencyInfo.userLogin = new _models_UserLogin__WEBPACK_IMPORTED_MODULE_4__["UserLogin"]();
        this.AgencyInfo.currentDay = new Date();
        this.AgencyInfo.currentDay.setHours(0, 0, 0, 0);
        this.AgencyInfo.currentCarOrder = new _models_car__WEBPACK_IMPORTED_MODULE_2__["Car"]();
        this.isPreview = false;
        this.getCarCatalog();
    }
    DataService.prototype.getCarCatalog = function () {
        var _this = this;
        this.http.get(this.link + "/GetAllCarCatalog").subscribe(function (x) {
            _this.AgencyInfo.CarsCollection = x;
            _this.AgencyInfo.filterCarCollection = _this.AgencyInfo.CarsCollection;
        });
    };
    DataService.prototype.getCarsTypes = function () {
        var _this = this;
        this.http.get(this.link + "/GetAllCars").subscribe(function (x) {
            var carTypes = new Set(x.map(function (m) { return m.Manufacturer + "-*-" + m.Model; }));
            carTypes.forEach(function (x) { return _this.AgencyInfo.CarsTypesCollection.push(new _models_CarType__WEBPACK_IMPORTED_MODULE_5__["CarType"](x, true)); });
            _this.getCarCatalog();
        });
    };
    DataService.prototype.updateCarsForRent = function () {
        console.log("-----");
        console.log(this.AgencyInfo.CarsTypesCollection);
        var url = this.link + "/updatecarsforrent";
        this.http.put(url, JSON.stringify(this.AgencyInfo.CarsTypesCollection), { headers: { "content-type": "application/json" } })
            .subscribe(function (x) { return console.log(x); });
    };
    DataService.prototype.addUser = function (user) {
        this.http.post(this.link + "/adduser", JSON.stringify(user), { headers: { "content-type": "application/json" } }).subscribe(function (response) {
            alert("You Log In The System");
            location.reload();
        }, function (errors) {
            var errorMessage = "";
            console.log(errors.error);
            for (var _i = 0, _a = errors.error; _i < _a.length; _i++) {
                var errorText = _a[_i];
                errorMessage += errorText + '\n';
            }
            alert(errorMessage);
        });
    };
    DataService.prototype.addUOrder = function (order) {
        this.http.post(this.link + "/addorder", JSON.stringify(order), { headers: { "content-type": "application/json" } }).
            subscribe(function () { return alert("Order Received"); }, function () { return alert("Problem with the Order Please try again"); });
    };
    DataService.prototype.updateOrder = function (order) {
        console.log("-----");
        console.log(order);
        var url = this.link + "/updateorder";
        this.http.put(url, JSON.stringify(order), { headers: { "content-type": "application/json" } })
            .subscribe(function (x) { return console.log(x); });
    };
    DataService.prototype.deleteOrder = function (orderid) {
        console.log("DELETE");
        var url = this.link + "/deleteorder/?orderid=" + orderid;
        console.log(url);
        this.http.delete(url).subscribe(function (res) { return console.log(res.toString()); });
    };
    DataService.prototype.getCUsers = function () {
        var _this = this;
        this.http.get(this.link + "/GetUsers").subscribe(function (x) { _this.AgencyInfo.usersList = x; });
    };
    DataService.prototype.calculatePrice = function () {
        this.AgencyInfo.currentCarOrderStartDate = new Date(this.AgencyInfo.currentCarOrderStartDate);
        this.AgencyInfo.currentCarOrderEndDate = new Date(this.AgencyInfo.currentCarOrderEndDate);
        var isDatesCorrect = this.AgencyInfo.currentCarOrderStartDate != undefined && this.AgencyInfo.currentCarOrderEndDate != undefined
            && this.AgencyInfo.currentCarOrderEndDate >= this.AgencyInfo.currentCarOrderStartDate
            && this.AgencyInfo.currentCarOrderStartDate.getTime() >= this.currentDay.getTime()
            && this.AgencyInfo.currentCarOrderEndDate.getTime() >= this.currentDay.getTime();
        var RentDays = 1;
        if (!isDatesCorrect) {
            this.OrderStaus.message = this.ErrorMessage;
            this.OrderStaus.class = "wrongvalues";
        }
        else {
            this.OrderStaus.message = "Order Status";
            this.OrderStaus.class = "regular";
            this.OrderStaus.btnclass = "btn btn-primary active";
            var timeDiff = Math.abs(this.AgencyInfo.currentCarOrderStartDate.getTime() - this.AgencyInfo.currentCarOrderEndDate.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            this.AgencyInfo.currentCarOrderPrice = this.AgencyInfo.currentCarOrder.PricePerDay * (diffDays + 1);
        }
    };
    DataService.prototype.CheckCredentials = function (user) {
        var _this = this;
        var basicUrl = this.link + "/GetUserName";
        var apiURL = basicUrl + "?name=" + user.name + "&&password=" + user.password;
        this.http.get(apiURL).subscribe(function (x) { _this.AgencyInfo.RegiserUser = x; });
    };
    DataService.prototype.getOrders = function (userid) {
        var _this = this;
        console.log("from getOrders");
        console.log(userid);
        var basicUrl = this.link + "/GetOrders";
        var apiURL = basicUrl + "?id=" + userid;
        this.http.get(apiURL).subscribe(function (x) {
            _this.AgencyInfo.currentOrders = x;
            if (userid != 0)
                _this.AgencyInfo.currentUserOrderDisplay = _this.AgencyInfo.currentOrders.find(function (x) { return x.OrderID == userid; });
        });
    };
    DataService.prototype.getUserOrder = function (orderid) {
        var _this = this;
        console.log("from getUserOrder");
        console.log(orderid);
        var basicUrl = this.link + "/GetUserOrder";
        var apiURL = basicUrl + "?id=" + orderid;
        this.http.get(apiURL).subscribe(function (x) { _this.AgencyInfo.currentUserOrderDisplay = x; });
    };
    DataService.prototype.Returncar = function (regiserNumber) {
        console.log("step 2");
        var url = this.link + "/ReturnCar?registerNumber=" + regiserNumber;
        console.log(url);
        return this.http
            .put(url, JSON.stringify(this.AgencyInfo.RegiserUser), { headers: { "content-type": "application/json" } })
            .subscribe(function (response) { console.log(response); });
    };
    DataService.prototype.updateCarInfo = function (car) {
        console.log(car);
        var url = this.link + "/EditCarData?car=" + car;
        return this.http
            .put(url, JSON.stringify(car), { headers: { "content-type": "application/json" } })
            .subscribe(function (x) { return console.log(x); });
    };
    DataService.prototype.deleteUser = function (id) {
        console.log("DELETE");
        console.log(id);
        var url = this.link + "/deleteuser/?userid=" + id;
        console.log(url);
        this.http.delete(url).subscribe(function (res) { return console.log(res.toString()); });
    };
    DataService.prototype.deleteCar = function (carid) {
        console.log("DELETE");
        var url = this.link + "/deletecar/?carid=" + carid;
        console.log(url);
        this.http.delete(url).subscribe(function (res) { return console.log(res.toString()); });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/shared/services/image.service.ts":
/*!**********************************************!*\
  !*** ./src/shared/services/image.service.ts ***!
  \**********************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.getImage = function () {
        return this.http.get("http://localhost:57445/api/carcatalog/GetImage", { responseType: 'blob' });
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Owner\Documents\projects\caragent\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map