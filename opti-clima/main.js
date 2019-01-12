(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../districts/districts.module": [
		"./src/app/districts/districts.module.ts",
		"districts-districts-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  position: absolute;\n  top: 50px;\n  left: 0;\n  right: 0;\n  bottom: 40px;\n  padding: 0 30px;\n  background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zaGlta29uYXovb3B0aS1jbGltYS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsUUFBTztFQUNQLFNBQVE7RUFDUixhQUFZO0VBQ1osZ0JBQWU7RUFDZix1QkFBc0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDQwcHg7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/core/core-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function() { return CoreRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/core/not-found/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/core/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/core/signup/signup.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/core/services/auth.guard.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home */ "./src/app/core/home/index.ts");








var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    },
    {
        path: 'home',
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        component: _home__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    },
    {
        path: 'districts',
        // canActivate: [AuthGuard],
        loadChildren: '../districts/districts.module#DistrictsModule'
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }
];
var CoreRoutingModule = /** @class */ (function () {
    function CoreRoutingModule() {
    }
    CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core-routing.module */ "./src/app/core/core-routing.module.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login */ "./src/app/core/login/index.ts");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup */ "./src/app/core/signup/index.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header */ "./src/app/core/header/index.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer */ "./src/app/core/footer/index.ts");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation */ "./src/app/core/navigation/index.ts");
/* harmony import */ var _not_found__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found */ "./src/app/core/not-found/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home */ "./src/app/core/home/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_ria_ria_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/ria/ria.interceptor */ "./src/app/core/interceptors/ria/ria.interceptor.ts");















var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                _interceptors_ria_ria_interceptor__WEBPACK_IMPORTED_MODULE_14__["riaInterceptor"]
            ],
            declarations: [
                _login__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _signup__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _header__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _navigation__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _not_found__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _home__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _core_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoreRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _header__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _navigation__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/footer/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/footer/index.ts ***!
  \**************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });




/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav>\n    <a \n      [routerLink]=\"['/login']\" \n      routerLinkActive=\"route-active\">\n      Login\n    </a>\n    <a \n      [routerLink]=\"['/signup']\" \n      routerLinkActive=\"route-active\">\n      Signup\n    </a>\n    <a \n      [routerLink]=\"['/home']\" \n      routerLinkActive=\"route-active\">\n      Home\n    </a>\n    <a \n      [routerLink]=\"['/districts']\" \n      routerLinkActive=\"route-active\">\n      Districts\n    </a>\n  </nav>\n\n  <div class=\"user\">\n    <div class=\"username\">\n      username\n    </div>\n    <div \n      class=\"logout-btn\"\n      (click)=\"logout()\">\n      <i class=\"material-icons\">logout</i>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  height: 50px;\n  width: 100%;\n  padding: 0 10px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: lightgrey;\n  color: #fff;\n  z-index: 300;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  header nav {\n    height: 100%;\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n  header nav a {\n      height: 60%;\n      width: 100px;\n      color: #fff;\n      text-decoration: none;\n      border-radius: 7px;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n  header nav a:hover {\n        background-color: #fff;\n        color: blue; }\n  header nav .route-active {\n      background-color: #fff;\n      color: blue; }\n  header .user {\n    height: 100%;\n    width: 120px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-flow: row wrap; }\n  header .user .username {\n      height: 100%;\n      display: flex;\n      align-items: center; }\n  header .user .logout-btn {\n      height: 100%;\n      display: flex;\n      align-items: center;\n      color: #fff;\n      cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zaGlta29uYXovb3B0aS1jbGltYS9zcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBQ1AsNEJBQTJCO0VBQzNCLFlBQVc7RUFDWCxhQUFZO0VBRVosY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwrQkFBOEIsRUF1RC9CO0VBcEVEO0lBZ0JJLGFBQVk7SUFDWixXQUFVO0lBRVYsY0FBYTtJQUNiLDRCQUEyQjtJQUMzQixvQkFBbUIsRUF3QnBCO0VBN0NIO01Bd0JNLFlBQVc7TUFDWCxhQUFZO01BQ1osWUFBVztNQUNYLHNCQUFxQjtNQUNyQixtQkFBa0I7TUFFbEIsY0FBYTtNQUNiLHdCQUF1QjtNQUN2QixvQkFBbUIsRUFNcEI7RUF0Q0w7UUFtQ1EsdUJBQXNCO1FBQ3RCLFlBQVcsRUFDWjtFQXJDUDtNQXlDTSx1QkFBc0I7TUFDdEIsWUFBVyxFQUNaO0VBM0NMO0lBK0NJLGFBQVk7SUFDWixhQUFXO0lBQ1gsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQiwrQkFBOEI7SUFDOUIsb0JBQW1CLEVBZXBCO0VBbkVIO01BdURNLGFBQVk7TUFDWixjQUFhO01BQ2Isb0JBQW1CLEVBQ3BCO0VBMURMO01BNERNLGFBQVk7TUFFWixjQUFhO01BQ2Isb0JBQW1CO01BQ25CLFlBQVc7TUFDWCxnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDMwMDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIFxuICBuYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNTAlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICBhIHtcbiAgICAgIGhlaWdodDogNjAlO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucm91dGUtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBjb2xvcjogYmx1ZTtcbiAgICB9XG5cbiAgfVxuICAudXNlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOjEyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcblxuICAgIC51c2VybmFtZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmxvZ291dC1idG4ge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLy8gd2lkdGg6IDUwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/core/services/authentication.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/header/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/header/index.ts ***!
  \**************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ "./src/app/core/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"]; });




/***/ }),

/***/ "./src/app/core/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"project-info\">\n  <div class=\"left\">\n    <h3>OptiClima</h3>\n    <div class=\"description\">\n      By using our project, <br> you're able to find out which area\n       of the city is the most <span class=\"comfort\">comfortable</span> based \n       on climatic indicators\n    </div>\n    <div class=\"hint\" *ngIf=\"isHinted\">\n      (You will be redirected to districts page in a few seconds)\n    </div>\n  </div>\n  <div class=\"right\"></div>\n</section>"

/***/ }),

/***/ "./src/app/core/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-info {\n  height: calc(100vh - 50px);\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n  .project-info .left {\n    height: 100%;\n    width: 50%;\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    flex-flow: column wrap;\n    justify-content: center; }\n  .project-info .left .description {\n      text-align: center; }\n  .project-info .left .hint {\n      font-size: smaller;\n      -webkit-animation: color-change 3s infinite;\n      animation: color-change 3s infinite; }\n  @-webkit-keyframes color-change {\n  0% {\n    color: grey; }\n  50% {\n    color: white; }\n  100% {\n    color: grey; } }\n  @keyframes color-change {\n  0% {\n    color: grey; }\n  50% {\n    color: white; }\n  100% {\n    color: grey; } }\n  .project-info .right {\n    height: 100%;\n    width: 50%;\n    background-image: url('comfort-district.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover; }\n  @media screen and (max-width: 768px) {\n    .project-info {\n      flex-direction: column; }\n      .project-info .left, .project-info .right {\n        height: 50%;\n        width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zaGlta29uYXovb3B0aS1jbGltYS9zcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTBCO0VBQzFCLFlBQVc7RUFFWCxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGdCQUFlLEVBcUVoQjtFQTNFRDtJQVVJLGFBQVk7SUFDWixXQUFVO0lBQ1YsY0FBYTtJQUViLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsdUJBQXNCO0lBQ3RCLHdCQUF1QixFQXlDeEI7RUExREg7TUFvQk0sbUJBQWtCLEVBQ25CO0VBckJMO01Bd0JNLG1CQUFrQjtNQUVsQiw0Q0FBMkM7TUFJM0Msb0NBQW1DLEVBQ3BDO0VBRUQ7RUFDSTtJQUFLLFlBQVcsRUFBQTtFQUNoQjtJQUFNLGFBQVksRUFBQTtFQUNsQjtJQUFPLFlBQVcsRUFBQSxFQUFBO0VBaUJ0QjtFQUNJO0lBQUssWUFBVyxFQUFBO0VBQ2hCO0lBQU0sYUFBWSxFQUFBO0VBQ2xCO0lBQU8sWUFBVyxFQUFBLEVBQUE7RUF4RDFCO0lBNERJLGFBQVk7SUFDWixXQUFVO0lBQ1YsOENBQTZEO0lBQzdELDZCQUE0QjtJQUM1Qiw0QkFBMkI7SUFDM0IsdUJBQXNCLEVBQ3ZCO0VBRUQ7SUFwRUY7TUFxRUksdUJBQXNCLEVBTXpCO01BM0VEO1FBdUVNLFlBQVc7UUFDWCxZQUFXLEVBQ1osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtaW5mbyB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgXG4gIFxuICAubGVmdCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAuaGludCB7XG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgICBcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjb2xvci1jaGFuZ2UgM3MgaW5maW5pdGU7XG4gICAgICAtbW96LWFuaW1hdGlvbjogY29sb3ItY2hhbmdlIDNzIGluZmluaXRlO1xuICAgICAgLW8tYW5pbWF0aW9uOiBjb2xvci1jaGFuZ2UgM3MgaW5maW5pdGU7XG4gICAgICAtbXMtYW5pbWF0aW9uOiBjb2xvci1jaGFuZ2UgM3MgaW5maW5pdGU7XG4gICAgICBhbmltYXRpb246IGNvbG9yLWNoYW5nZSAzcyBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgY29sb3ItY2hhbmdlIHtcbiAgICAgICAgMCUgeyBjb2xvcjogZ3JleTsgfVxuICAgICAgICA1MCUgeyBjb2xvcjogd2hpdGU7IH1cbiAgICAgICAgMTAwJSB7IGNvbG9yOiBncmV5OyB9XG4gICAgfVxuICAgIEAtbW96LWtleWZyYW1lcyBjb2xvci1jaGFuZ2Uge1xuICAgICAgICAwJSB7IGNvbG9yOiBncmV5OyB9XG4gICAgICAgIDUwJSB7IGNvbG9yOiB3aGl0ZTsgfVxuICAgICAgICAxMDAlIHsgY29sb3I6IGdyZXk7IH1cbiAgICB9XG4gICAgQC1tcy1rZXlmcmFtZXMgY29sb3ItY2hhbmdlIHtcbiAgICAgICAgMCUgeyBjb2xvcjogZ3JleTsgfVxuICAgICAgICA1MCUgeyBjb2xvcjogd2hpdGU7IH1cbiAgICAgICAgMTAwJSB7IGNvbG9yOiBncmV5OyB9XG4gICAgfVxuICAgIEAtby1rZXlmcmFtZXMgY29sb3ItY2hhbmdlIHtcbiAgICAgICAgMCUgeyBjb2xvcjogZ3JleTsgfVxuICAgICAgICA1MCUgeyBjb2xvcjogd2hpdGU7IH1cbiAgICAgICAgMTAwJSB7IGNvbG9yOiBncmV5OyB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgY29sb3ItY2hhbmdlIHtcbiAgICAgICAgMCUgeyBjb2xvcjogZ3JleTsgfVxuICAgICAgICA1MCUgeyBjb2xvcjogd2hpdGU7IH1cbiAgICAgICAgMTAwJSB7IGNvbG9yOiBncmV5OyB9XG4gICAgfVxuICB9XG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NvbWZvcnQtZGlzdHJpY3QuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmxlZnQsIC5yaWdodCB7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.isHinted = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isHinted = true;
        setTimeout(function () {
            _this.router.navigate(['/districts']);
        }, 3000);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/core/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/home/index.ts":
/*!************************************!*\
  !*** ./src/app/core/home/index.ts ***!
  \************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/core/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/core/interceptors/ria/ria.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/ria/ria.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: RiaInterceptor, riaInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiaInterceptor", function() { return RiaInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riaInterceptor", function() { return riaInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var RiaInterceptor = /** @class */ (function () {
    function RiaInterceptor() {
    }
    RiaInterceptor.prototype.intercept = function (req, next) {
        if (req.url.includes('average_price')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
                body: {
                    arithmeticMean: (Math.random() * 1000).toFixed(2)
                }
            }));
        }
        return next.handle(req);
    };
    RiaInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RiaInterceptor);
    return RiaInterceptor;
}());

var riaInterceptor = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: RiaInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/core/login/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/login/index.ts ***!
  \*************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/core/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/core/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">\n  <h2>Login</h2>\n  <form \n    [formGroup]=\"loginForm\" \n    (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input \n            type=\"text\" \n            formControlName=\"username\" \n            class=\"form-control\" \n            [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n          <div \n            *ngIf=\"submitted && f.username.errors\" \n            class=\"invalid-feedback\">\n              <div *ngIf=\"f.username.errors.required\">\n                Username is required\n              </div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input \n          type=\"password\" \n          formControlName=\"password\" \n          class=\"form-control\" \n          [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div \n          *ngIf=\"submitted && f.password.errors\" \n          class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">\n              Password is required\n            </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button \n          [disabled]=\"loading\" \n          class=\"btn btn-primary\">\n          Login\n        </button>\n        <a \n          routerLink=\"/signup\" \n          class=\"btn btn-link\">\n          Signup\n        </a>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/core/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/core/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n  margin: auto;\n  padding: 20px;\n  width: 70%;\n  height: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zaGlta29uYXovb3B0aS1jbGltYS9zcmMvYXBwL2NvcmUvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLFdBQVU7RUFDVixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0ge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogODAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/core/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/core/services/authentication.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.login(this.f.username.value, this.f.password.value);
    };
    LoginComponent.prototype.login = function (username, password) {
        this.authenticationService.login(username, password);
    };
    LoginComponent.prototype.logout = function () {
        this.authenticationService.logout;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/core/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/navigation/index.ts":
/*!******************************************!*\
  !*** ./src/app/core/navigation/index.ts ***!
  \******************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.component */ "./src/app/core/navigation/navigation.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return _navigation_component__WEBPACK_IMPORTED_MODULE_0__["NavigationComponent"]; });




/***/ }),

/***/ "./src/app/core/navigation/navigation.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/navigation/navigation.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  navigation works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/navigation/navigation.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/navigation/navigation.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/navigation/navigation.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/navigation/navigation.component.ts ***!
  \*********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/core/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/core/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/core/not-found/index.ts":
/*!*****************************************!*\
  !*** ./src/app/core/not-found/index.ts ***!
  \*****************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ "./src/app/core/not-found/not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]; });




/***/ }),

/***/ "./src/app/core/not-found/not-found.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/not-found/not-found.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/not-found/not-found.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/core/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/core/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/services/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/services/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/services/authentication.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var currentUser = this.authenticationService.isLogged;
        if (currentUser) {
            return true;
        }
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/services/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(router) {
        this.router = router;
        this.isLogged = false;
    }
    AuthenticationService.prototype.signup = function (user) {
        var _this = this;
        Object(firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"])()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(function () {
            console.log('registered!');
        })
            .then(function () {
            _this.router.navigate(['/login']);
        })
            .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            }
            else {
                alert(errorMessage);
            }
            console.log(error);
        });
    };
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        Object(firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"])()
            .signInWithEmailAndPassword(email, password)
            .then(function () {
            console.log('logged in!');
        })
            .then(function () {
            _this.isLogged = true;
        })
            .then(function () {
            _this.router.navigate(['/home']);
        })
            .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            }
            else {
                alert(errorMessage);
            }
            console.log(error);
        });
    };
    AuthenticationService.prototype.logout = function () {
        Object(firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"])().signOut();
        this.isLogged = false;
        this.router.navigate(['/login']);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/signup/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/signup/index.ts ***!
  \**************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.component */ "./src/app/core/signup/signup.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return _signup_component__WEBPACK_IMPORTED_MODULE_0__["SignupComponent"]; });




/***/ }),

/***/ "./src/app/core/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-form\">\n  <h2>Register</h2>\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input \n        type=\"text\" \n        formControlName=\"firstName\" \n        class=\"form-control\" \n        [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n      <div \n        *ngIf=\"submitted && f.firstName.errors\" \n        class=\"invalid-feedback\">\n          <div *ngIf=\"f.firstName.errors.required\">\n            First Name is required\n          </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input \n        type=\"text\" \n        formControlName=\"lastName\" \n        class=\"form-control\" \n        [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n      <div \n        *ngIf=\"submitted && f.lastName.errors\" \n        class=\"invalid-feedback\">\n          <div *ngIf=\"f.lastName.errors.required\">\n            Last Name is required\n          </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input \n        type=\"text\" \n        formControlName=\"email\" \n        class=\"form-control\" \n        [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n      <div \n        *ngIf=\"submitted && f.email.errors\" \n        class=\"invalid-feedback\">\n          <div *ngIf=\"f.email.errors.required\">\n            Email is required\n          </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input \n        type=\"password\" \n        formControlName=\"password\" \n        class=\"form-control\" \n        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n      <div \n        *ngIf=\"submitted && f.password.errors\" \n        class=\"invalid-feedback\">\n          <div *ngIf=\"f.password.errors.required\">\n            Password is required\n          </div>\n          <div *ngIf=\"f.password.errors.minlength\">\n            Password must be at least 6 characters\n          </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button \n        [disabled]=\"loading\" \n        class=\"btn btn-primary\">\n        Register\n      </button>\n      <a \n        routerLink=\"/login\" \n        class=\"btn btn-link\">\n        Cancel\n      </a>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/core/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-form {\n  margin: auto;\n  padding: 20px;\n  width: 70%;\n  height: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zaGlta29uYXovb3B0aS1jbGltYS9zcmMvYXBwL2NvcmUvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2IsV0FBVTtFQUNWLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtZm9ybSB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA4MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/core/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/core/services/authentication.service.ts");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, authenticationService) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
                ]]
        });
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService
            .signup(this.registerForm.value);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/core/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/core/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);

var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyC7RiyRN3qaCwtOfg7-BastJUlziHyWp0I",
        authDomain: "opti-clima.firebaseapp.com",
        databaseURL: "https://opti-clima.firebaseio.com",
        projectId: "opti-clima",
        storageBucket: "opti-clima.appspot.com",
        messagingSenderId: "372429267973"
    }
};
firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](environment.firebase);


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC7RiyRN3qaCwtOfg7-BastJUlziHyWp0I",
        authDomain: "opti-clima.firebaseapp.com",
        databaseURL: "https://opti-clima.firebaseio.com",
        projectId: "opti-clima",
        storageBucket: "opti-clima.appspot.com",
        messagingSenderId: "372429267973"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/shimkonaz/opti-clima/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map