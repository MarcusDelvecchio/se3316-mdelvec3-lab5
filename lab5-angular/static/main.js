(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./auth_config.json":
/*!**************************!*\
  !*** ./auth_config.json ***!
  \**************************/
/*! exports provided: domain, clientId, audience, apiUrl, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"domain\":\"dev-lrzuaei7.us.auth0.com\",\"clientId\":\"GXRiFyWhG56vQm3aaY6Z98Ru4UUj6VZd\",\"audience\":\"http://lab5-angular\",\"apiUrl\":\"http://localhost:7000\"}");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var src_app_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var src_app_pages_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/admin/admin/admin.component */ "./src/app/pages/admin/admin/admin.component.ts");
/* harmony import */ var src_app_pages_managers_manager_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/managers/manager/manager.component */ "./src/app/pages/managers/manager/manager.component.ts");
/* harmony import */ var src_app_pages_policies_policies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/policies/policies.component */ "./src/app/pages/policies/policies.component.ts");









const routes = [
    {
        path: '',
        component: src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        pathMatch: 'full',
    },
    {
        path: 'profile',
        component: src_app_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] //,
        //canActivate: [AuthGuard],
    },
    {
        path: 'admin',
        component: src_app_pages_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
    },
    {
        path: 'manager',
        component: src_app_pages_managers_manager_manager_component__WEBPACK_IMPORTED_MODULE_5__["ManagerComponent"],
    },
    {
        path: 'policies',
        component: src_app_pages_policies_policies_component__WEBPACK_IMPORTED_MODULE_6__["PoliciesComponent"],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(auth) {
        this.auth = auth;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 4, consts: [["id", "app", 1, "d-flex", "flex-column", "h-100"], ["class", "container", 4, "ngIf", "ngIfElse"], ["loaded", ""], [1, "container"], [1, "container", "flex-grow-1"], [1, "mt-5"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_template_3_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.auth.isLoading$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main-nav/main-nav.component */ "./src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-content/home-content.component */ "./src/app/components/home-content/home-content.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login-button/login-button.component */ "./src/app/components/login-button/login-button.component.ts");
/* harmony import */ var _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/logout-button/logout-button.component */ "./src/app/components/logout-button/logout-button.component.ts");
/* harmony import */ var _components_dataservice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dataservice */ "./src/app/components/dataservice.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pages_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/admin/admin/admin.component */ "./src/app/pages/admin/admin/admin.component.ts");
/* harmony import */ var _components_sharedDataInterface__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sharedDataInterface */ "./src/app/components/sharedDataInterface.ts");
/* harmony import */ var _pages_managers_manager_manager_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/managers/manager/manager.component */ "./src/app/pages/managers/manager/manager.component.ts");
/* harmony import */ var _components_admin_content_admin_page_content_admin_page_content_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admin-content/admin-page-content/admin-page-content.component */ "./src/app/components/admin-content/admin-page-content/admin-page-content.component.ts");
/* harmony import */ var _components_manager_content_manager_page_content_manager_page_content_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/manager-content/manager-page-content/manager-page-content.component */ "./src/app/components/manager-content/manager-page-content/manager-page-content.component.ts");
/* harmony import */ var _pages_policies_policies_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/policies/policies.component */ "./src/app/pages/policies/policies.component.ts");
/* harmony import */ var _components_policies_content_policies_content_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/policies-content/policies-content.component */ "./src/app/components/policies-content/policies-content.component.ts");




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__["AuthHttpInterceptor"],
            multi: true,
        },
        _components_dataservice__WEBPACK_IMPORTED_MODULE_17__["ConfigService"],
        _components_sharedDataInterface__WEBPACK_IMPORTED_MODULE_20__["DataService"],
        _components_dataservice__WEBPACK_IMPORTED_MODULE_17__["ConfigService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__["AuthModule"].forRoot(Object.assign(Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].auth), { httpInterceptor: {
                    // pass in list of Urls to add the token to
                    // these are the Urls we are going to protect
                    allowedList: [
                        `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/public/update-data`,
                        `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/:username/scheduleData`,
                        `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/user/update-data`,
                        `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/manager/get`,
                        `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/admin/get`,
                        `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/admin/add`,
                        `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/manager/add`,
                        `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/user/get`,
                        `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/reviews`,
                    ],
                } })),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_10__["HomeContentComponent"],
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"],
        _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_8__["MainNavComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
        _components_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_15__["LoginButtonComponent"],
        _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_16__["LogoutButtonComponent"],
        _pages_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
        _pages_managers_manager_manager_component__WEBPACK_IMPORTED_MODULE_21__["ManagerComponent"],
        _components_admin_content_admin_page_content_admin_page_content_component__WEBPACK_IMPORTED_MODULE_22__["AdminPageContentComponent"],
        _components_manager_content_manager_page_content_manager_page_content_component__WEBPACK_IMPORTED_MODULE_23__["ManagerPageContentComponent"],
        _pages_policies_policies_component__WEBPACK_IMPORTED_MODULE_24__["PoliciesComponent"],
        _components_policies_content_policies_content_component__WEBPACK_IMPORTED_MODULE_25__["PoliciesContentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__["AuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_10__["HomeContentComponent"],
                    _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"],
                    _components_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_8__["MainNavComponent"],
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                    _components_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_15__["LoginButtonComponent"],
                    _components_logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_16__["LogoutButtonComponent"],
                    _pages_admin_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
                    _pages_managers_manager_manager_component__WEBPACK_IMPORTED_MODULE_21__["ManagerComponent"],
                    _components_admin_content_admin_page_content_admin_page_content_component__WEBPACK_IMPORTED_MODULE_22__["AdminPageContentComponent"],
                    _components_manager_content_manager_page_content_manager_page_content_component__WEBPACK_IMPORTED_MODULE_23__["ManagerPageContentComponent"],
                    _pages_policies_policies_component__WEBPACK_IMPORTED_MODULE_24__["PoliciesComponent"],
                    _components_policies_content_policies_content_component__WEBPACK_IMPORTED_MODULE_25__["PoliciesContentComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__["AuthModule"].forRoot(Object.assign(Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].auth), { httpInterceptor: {
                            // pass in list of Urls to add the token to
                            // these are the Urls we are going to protect
                            allowedList: [
                                `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/public/update-data`,
                                `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/:username/scheduleData`,
                                `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/user/update-data`,
                                `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/manager/get`,
                                `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/admin/get`,
                                `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/admin/add`,
                                `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/manager/add`,
                                `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/user/get`,
                                `${_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].dev.apiUrl}/api/reviews`,
                            ],
                        } })),
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_13__["AuthHttpInterceptor"],
                        multi: true,
                    },
                    _components_dataservice__WEBPACK_IMPORTED_MODULE_17__["ConfigService"],
                    _components_sharedDataInterface__WEBPACK_IMPORTED_MODULE_20__["DataService"],
                    _components_dataservice__WEBPACK_IMPORTED_MODULE_17__["ConfigService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/admin-content/admin-page-content/admin-page-content.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin-content/admin-page-content/admin-page-content.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AdminPageContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageContentComponent", function() { return AdminPageContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sharedDataInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sharedDataInterface */ "./src/app/components/sharedDataInterface.ts");
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataservice */ "./src/app/components/dataservice.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AdminPageContentComponent_tr_11_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPageContentComponent_tr_11_ng_container_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const review_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleReviewHide(review_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hide Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AdminPageContentComponent_tr_11_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPageContentComponent_tr_11_ng_container_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const review_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.toggleReviewHide(review_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Unhide Review Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AdminPageContentComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminPageContentComponent_tr_11_ng_container_6_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminPageContentComponent_tr_11_ng_container_7_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", review_r1.creator, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r1["reviewContent"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !review_r1.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r1.hidden);
} }
class AdminPageContentComponent {
    constructor(dataService, _configservice) {
        this.dataService = dataService;
        this._configservice = _configservice;
    }
    ngOnInit() {
        this.getReviewData();
    }
    getManagers() {
        let x = this.dataService.getManagers();
        console.log(x);
    }
    getUsers() {
        let x = this.dataService.getUsers();
        console.log(x);
    }
    getReviewData() {
        this._configservice.getReviewData().subscribe(data => {
            this.reviewData = data[data.length - 1]["reviewData"];
            console.log("(getReviewData() response) recieved review data:");
            console.log(this.reviewData);
        });
    }
    toggleReviewHide(rev) {
        let review = rev;
        console.log(review);
        if (review.hidden) {
            for (let i = 0; i < this.reviewData.length; i++) {
                if (this.reviewData[i].Id == review.Id) {
                    this.reviewData[i].hidden = false;
                    console.log(this.reviewData[i].courseNum + " set to show");
                }
            }
        }
        else {
            for (let i = 0; i < this.reviewData.length; i++) {
                if (this.reviewData[i].Id == review.Id) {
                    this.reviewData[i].hidden = true;
                    console.log(this.reviewData[i].courseNum + " set to hide");
                }
            }
        }
        // update database
        this.postReviewData();
    }
    postReviewData() {
        this._configservice.postReviewData(this.reviewData).subscribe(data => {
            this.reviewData = data;
            this.reviewData = this.reviewData.reviewData;
            console.log("(response) updated data:");
            console.log(this.reviewData);
        });
    }
}
AdminPageContentComponent.ɵfac = function AdminPageContentComponent_Factory(t) { return new (t || AdminPageContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sharedDataInterface__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice__WEBPACK_IMPORTED_MODULE_2__["ConfigService"])); };
AdminPageContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminPageContentComponent, selectors: [["app-admin-page-content"]], decls: 12, vars: 1, consts: [[3, "click"], [1, "reviewstable"], [4, "ngFor", "ngForOf"], ["colspan", "7"], [4, "ngIf"]], template: function AdminPageContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-page-content works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPageContentComponent_Template_button_click_2_listener() { return ctx.getManagers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "get managers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminPageContentComponent_Template_button_click_5_listener() { return ctx.getUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "get users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Manage Reviews ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminPageContentComponent_tr_11_Template, 8, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviewData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPageContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-page-content',
                templateUrl: './admin-page-content.component.html',
                styles: []
            }]
    }], function () { return [{ type: _sharedDataInterface__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _dataservice__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/dataservice.ts":
/*!*******************************************!*\
  !*** ./src/app/components/dataservice.ts ***!
  \*******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ConfigService {
    constructor(http) {
        this.http = http;
        this.port = ""; //7000;
        /*
        private GETCourseDataString: string = "http://localhost:" + this.port + "/api/courseData";
        private POSTpublicScheduleDataString: string = "http://localhost:" + this.port + "/api/public/update-data";
        private POSTprivateScheduleDataString: string = "http://localhost:" + this.port + "/api/user/update-data";
        private GETPublicScheduleDataString: string = "http://localhost:" + this.port + "/api/public/scheduleData";
        private GETreviewDataString: string = "http://localhost:" + this.port + "/api/get/reviews";
        private POSTreviewDataString: string = "http://localhost:" + this.port + "/api/reviews";
        */
        // demo routes
        this.GETCourseDataString = "" + this.port + "/api/courseData";
        this.POSTpublicScheduleDataString = "" + this.port + "/api/public/update-data";
        this.POSTprivateScheduleDataString = "" + this.port + "/api/user/update-data";
        this.GETPublicScheduleDataString = "" + this.port + "/api/public/scheduleData";
        this.GETreviewDataString = "" + this.port + "/api/get/reviews";
        this.POSTreviewDataString = "" + this.port + "/api/reviews";
    }
    postPublicScheduleData(content) {
        return this.http.post(this.POSTpublicScheduleDataString, content);
        /* body is in the format body = { scheduleName1: { course1: { COURSE INFO }, course2: { COURSE 2 INFO }, ... }, schedule2: { ... }, ...}*/
    }
    ;
    postPrivateScheduleData(content) {
        return this.http.post(this.POSTprivateScheduleDataString, content);
        /* body is in the format body = { scheduleName1: { course1: { COURSE INFO }, course2: { COURSE 2 INFO }, ... }, schedule2: { ... }, ...}*/
    }
    ;
    getCourseData() {
        return this.http.get(this.GETCourseDataString);
    }
    ;
    getPublicScheduleData() {
        return this.http.get(this.GETPublicScheduleDataString);
    }
    ;
    getPrivateScheduleData(username) {
        let GETPrivateScheduleDataString = "" + this.port + "/api/" + username + "/scheduleData";
        return this.http.get(GETPrivateScheduleDataString);
    }
    ;
    getReviewData() {
        return this.http.get(this.GETreviewDataString);
    }
    postReviewData(data) {
        return this.http.post(this.POSTreviewDataString, data);
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "bg-light", "p-3", "text-center"], [1, "logo"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://auth0.com"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sample project provided by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Auth0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home-content/home-content.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-content/home-content.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function() { return HomeContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice */ "./src/app/components/dataservice.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _sharedDataInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedDataInterface */ "./src/app/components/sharedDataInterface.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function HomeContentComponent_td_324_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HomeContentComponent_td_324_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return { standalone: true }; };
function HomeContentComponent_td_324_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Schedule Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeContentComponent_td_324_div_7_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.scheduleNameInput = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Visibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Public");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_td_324_div_7_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.createSchedule(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.scheduleNameInput)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function HomeContentComponent_td_324_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_td_324_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.toggleNewScheduleFields(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeContentComponent_td_324_ng_container_4_Template, 2, 0, "ng-container", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeContentComponent_td_324_ng_container_5_Template, 2, 0, "ng-container", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeContentComponent_td_324_div_7_Template, 15, 3, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.newScheduleEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newScheduleEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.newScheduleEnabled);
} }
function HomeContentComponent_option_331_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15.key, " ");
} }
function HomeContentComponent_div_342_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 184);
} }
function HomeContentComponent_div_342_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](label_r19);
} }
function HomeContentComponent_div_342_ng_container_8_ng_container_20_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Write a Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_div_342_ng_container_8_ng_container_20_tr_19_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const course_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.submitCourseReview(course_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeContentComponent_div_342_ng_container_8_ng_container_20_tr_20_tr_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const review_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", review_r29.creator, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r29["reviewContent"]);
} }
function HomeContentComponent_div_342_ng_container_8_ng_container_20_tr_20_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeContentComponent_div_342_ng_container_8_ng_container_20_tr_20_tr_4_ng_container_1_Template, 6, 2, "ng-container", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r29 = ctx.$implicit;
    const course_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", review_r29.courseNum == course_r20.course_info[0].class_nbr && review_r29.hidden == false);
} }
function HomeContentComponent_div_342_ng_container_8_ng_container_20_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeContentComponent_div_342_ng_container_8_ng_container_20_tr_20_tr_4_Template, 2, 1, "tr", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.reviewData);
} }
function HomeContentComponent_div_342_ng_container_8_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_div_342_ng_container_8_ng_container_20_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.createCourseReviewtoggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Write a Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_div_342_ng_container_8_ng_container_20_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.toggleShowReviews(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Show Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeContentComponent_div_342_ng_container_8_ng_container_20_tr_19_Template, 9, 0, "tr", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeContentComponent_div_342_ng_container_8_ng_container_20_tr_20_Template, 5, 1, "tr", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const course_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" More Info About ", course_r20["subject"], " ", course_r20["catalog_nbr"], ": ", course_r20["className"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ClassNumber: ", course_r20["course_info"][0]["class_nbr"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Campus and Facility ID: ", course_r20["course_info"][0]["campus"], ", ", course_r20["course_info"][0]["facility_ID"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Enrollment Status: ", course_r20["course_info"][0]["enrl_stat"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" More Details: ", course_r20["course_info"][0]["descr"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description: ", course_r20["catalog_description"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.showCourseReviewSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.showCourseReviewListSection);
} }
function HomeContentComponent_div_342_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_div_342_ng_container_8_Template_td_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const course_r20 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.showMoreCourseInfo(course_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_div_342_ng_container_8_Template_td_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const course_r20 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.showMoreCourseInfo(course_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_div_342_ng_container_8_Template_td_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const course_r20 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.showMoreCourseInfo(course_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_div_342_ng_container_8_Template_td_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const course_r20 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.showMoreCourseInfo(course_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_div_342_ng_container_8_Template_td_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const course_r20 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.showMoreCourseInfo(course_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_div_342_ng_container_8_Template_td_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const course_r20 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.showMoreCourseInfo(course_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeContentComponent_div_342_ng_container_8_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const course_r20 = ctx.$implicit; return course_r20.checked = $event; })("change", function HomeContentComponent_div_342_ng_container_8_Template_input_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const course_r20 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.courseSelected(course_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add to Schedule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeContentComponent_div_342_ng_container_8_ng_container_20_Template, 21, 11, "ng-container", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const course_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r20["subject"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r20["catalog_nbr"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r20["className"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r20["course_info"][0]["class_section"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r20["course_info"][0]["ssr_component"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r20["course_info"][0]["days"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", course_r20["course_info"][0]["start_time"], " - ", course_r20["course_info"][0]["end_time"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", course_r20.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", course_r20["showMoreInfo"]);
} }
function HomeContentComponent_div_342_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeContentComponent_div_342_div_1_Template, 1, 0, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Info Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeContentComponent_div_342_td_6_Template, 2, 1, "td", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "td", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeContentComponent_div_342_ng_container_8_Template, 21, 10, "ng-container", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showInfoTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.columnLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.data);
} }
function HomeContentComponent_ng_container_367_ng_container_1_tr_11_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_ng_container_367_ng_container_1_tr_11_li_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const course_r50 = ctx.$implicit; const courseList_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.removeCourseFromList(courseList_r46.key, course_r50.value["catalog_nbr"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", course_r50.value["subject"], " ", course_r50.value["catalog_nbr"], " ");
} }
function HomeContentComponent_ng_container_367_ng_container_1_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Courses: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeContentComponent_ng_container_367_ng_container_1_tr_11_li_8_Template, 4, 2, "li", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const courseList_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" About ", courseList_r46.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Description: ", ctx_r48.scheduleDataInfo[courseList_r46.key].description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, ctx_r48.scheduleData[courseList_r46.key]));
} }
function HomeContentComponent_ng_container_367_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_ng_container_367_ng_container_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const courseList_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.courseListSelected(courseList_r46.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_ng_container_367_ng_container_1_Template_td_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const courseList_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.showMoreCourseListInfo(courseList_r46.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_ng_container_367_ng_container_1_Template_td_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const courseList_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.showMoreCourseListInfo(courseList_r46.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_ng_container_367_ng_container_1_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const courseList_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.showMoreCourseListInfo(courseList_r46.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeContentComponent_ng_container_367_ng_container_1_tr_11_Template, 10, 5, "tr", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const courseList_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](courseList_r46.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r47.scheduleDataInfo[courseList_r46.key].creator, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r47.getDisplayDate(ctx_r47.scheduleDataInfo[courseList_r46.key].modified), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r47.scheduleDataInfo[courseList_r46.key].length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.scheduleDataInfo[courseList_r46.key].expanded);
} }
function HomeContentComponent_ng_container_367_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeContentComponent_ng_container_367_ng_container_1_Template, 12, 5, "ng-container", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const courseList_r46 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", courseList_r46.value.visibility == "Public" || ctx_r3.showCourseInList(courseList_r46));
} }
function HomeContentComponent_table_371_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit ", ctx_r65.activeScheduleName, "");
} }
function HomeContentComponent_table_371_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function HomeContentComponent_table_371_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_table_371_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r69.deleteCourseList(ctx_r69.activeScheduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeContentComponent_table_371_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Visibility: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Public");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_table_371_ng_container_7_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r71.editCourseList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r68.activeScheduleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r68.scheduleDataInfo[ctx_r68.activeScheduleName].description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r68.scheduleDataInfo[ctx_r68.activeScheduleName].visibility);
} }
function HomeContentComponent_table_371_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_table_371_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.toggleEditCourseList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeContentComponent_table_371_ng_container_4_Template, 2, 1, "ng-container", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeContentComponent_table_371_ng_container_5_Template, 2, 0, "ng-container", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeContentComponent_table_371_button_6_Template, 2, 0, "button", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeContentComponent_table_371_ng_container_7_Template, 22, 3, "ng-container", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.editingCourseList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.editingCourseList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.editingCourseList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.editingCourseList);
} }
function HomeContentComponent_div_373_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cannot Render Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeContentComponent_div_374_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r77.key, " ");
} }
function HomeContentComponent_div_374_tr_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r80 = ctx.$implicit;
    const time_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r79.timeBasedSchedule[time_r78][day_r80.key]);
} }
function HomeContentComponent_div_374_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeContentComponent_div_374_tr_9_td_3_Template, 2, 1, "td", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r78 = ctx.$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](time_r78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx_r76.days, ctx_r76.keepOrder));
} }
function HomeContentComponent_div_374_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "td", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeContentComponent_div_374_td_7_Template, 2, 1, "td", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeContentComponent_div_374_tr_9_Template, 5, 5, "tr", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Time Table: ", ctx_r6.renderedSchedule, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, ctx_r6.days, ctx_r6.keepOrder));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.times);
} }
class HomeContentComponent {
    constructor(_configservice, auth, dataService) {
        this._configservice = _configservice;
        this.auth = auth;
        this.dataService = dataService;
        this.faLink = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLink"];
        this.show = true;
        this.checkboxValue = false;
        this.showInfoTable = false; // info table is rendered only when this is true
        this.showTimeTable = false; // time table is rendered only when this is true
        this.columnLabels = ["Subject", "Course Number", "Class Name", "Section", "Component", "Class Times"]; //todo add course_info columns
        this.data = {};
        this.checked = [];
        this.objectKeys = Object.keys;
        this.activeSchedule = []; // giving errors
        this.selectedCourses = []; // array of SELECTED courses (full data)
        this.scheduleData = {};
        this.profile = null; // user profile data (set on ngOnInit) -> promise recieved from user data
        /* TIME TABLE COMPONENT CODE BELOW
         *
         */
        this.days = { Monday: "M", Tuesday: "Tu", Wednesday: "W", Thursday: "Th", Friday: "F" };
        this.times = ["8:30 AM", "9:30 AM", "10:30 AM", "11:30 AM", "12:30 PM", "1:30 PM", "2:30 PM", "3:30 PM", "4:30 PM", "5:30 PM", "6:30 PM", "7:30 PM", "8:30 PM", "9:30 PM"];
        this.keepOrder = (a, b) => {
            return a;
        };
        this.showInfoTable = false;
        this.showTimeTable = false;
        this.checked = [];
        this.scheduleNameInput = "";
        this.activeScheduleName = "";
        this.timeBasedSchedule = { "8:30 AM": {}, "9:30 AM": {}, "10:30 AM": {}, "11:30 AM": {}, "12:30 PM": {}, "1:30 PM": {}, "2:30 PM": {}, "3:30 PM": {}, "4:30 PM": {}, "5:30 PM": {}, "6:30 PM": {}, "7:30 PM": {}, "8:30 PM": {}, "9:30 PM": {} };
        this.renderedSchedule = "";
        this.dataArray = [];
        this.newScheduleEnabled = false;
        "";
        this.scheduleDataInfo = {}; // note was using this for testing cuz it breaks cuz its not in the scheduleData object but you CAN use it for testing{test1: { creator: "Marcus", modified: "2020-12-3", length: undefined, description: "some description", visiblity: "Private" }};
        this.cannotRenderEmpty = false;
        this.port = 7000; // breaks --> || process.env.API_PORT;
    }
    // populated time table after search is submitted
    renderTableData() {
        let matchingCourses = [];
        let courseData = this.dataArray; // this.dataArry hard coded in ngOninit but get from db todo
        // getting search parameters
        let selectedComponent = document.getElementById("componentDropdown").value;
        let courseId = document.getElementById("courseNumber").value;
        let subjectInput = document.getElementById("subjectDropDown").value;
        let subjCourseKeywords = document.getElementById("subj-course-keyword").value;
        let keywords = document.getElementById("keywords").value;
        // check if any keywords entered, if so prioritize them first
        if (keywords != undefined && subjCourseKeywords != " " && subjCourseKeywords != null) {
            if (keywords.length < 4) {
                alert("Search by keywords must have at least 4 characters");
                this.data = matchingCourses;
                return;
            }
            let keywordsArray = keywords.split(" ");
            console.log(keywordsArray);
            // loop through and search all courses for matching keywords
            for (let keyword of keywordsArray) {
                courseloop: for (let course of courseData) {
                    for (let property of Object.keys(course)) {
                        if (property == "course_info") {
                            for (let subProperty of Object.keys(course["course_info"][0])) { //not why tf does it break without object.keys
                                if (course["course_info"][0][subProperty].toString().includes(keyword)) {
                                    console.log("Match:" + subProperty + " " + keyword);
                                    matchingCourses.push(course);
                                    continue courseloop;
                                }
                            }
                        }
                        else if (course[property].toString().includes(keyword)) { // if not course_ info
                            console.log("Match:" + property + " " + keyword);
                            matchingCourses.push(course);
                            continue courseloop;
                        }
                    }
                }
            }
            console.log("keyword search provided, overriding other searches");
            this.data = matchingCourses;
            if (matchingCourses.length == 0) {
                alert("No courses match inputted search fields");
            }
            return;
        }
        // next check if check if subject/ course code keywords entered, prioritize them next
        if (subjCourseKeywords != undefined && subjCourseKeywords != " " && subjCourseKeywords != null) {
            let keywordsArray2 = subjCourseKeywords.split(" ");
            for (let course of courseData) {
                for (let keyword of keywordsArray2) {
                    // check if first letter of string is number if so we know it is a course code
                    if (this.isNumber(keyword[0])) {
                        // check if letter is specified at the end
                        if (!this.isNumber(keyword[keyword.length - 1])) {
                            console.log("last value NOT number");
                            // create new string with uppercase letter
                            let newString;
                            newString = keyword.substring(0, keyword.length - 1) + keyword.substring(keyword.length - 1).toUpperCase();
                            console.log("NEW STRING: " + newString);
                            // check data for match
                            if (course["catalog_nbr"] == newString) {
                                matchingCourses.push(course);
                                console.log(course["catalog_nbr"] + " added to search results");
                            }
                        }
                        else {
                            alert("A component suffix must be included in course codes (ex. 3316b or 3316B instead of 3316");
                            return;
                        }
                    }
                    else if (course["subject"] == keyword) { // if not a course code, it must be a subject, so compare to course subject
                        matchingCourses.push(course);
                        console.log(course["catalog_nbr"] + " added to search results");
                    }
                }
            }
            console.log("subject and/or course code keyword search provided, overriding other searches");
            this.data = matchingCourses;
            if (matchingCourses.length == 0) {
                alert("No courses match inputted search fields");
            }
            return;
        }
        /* validate that input requirements are fulfilled
          
          if(subjectInput == ""){
            alert("Please select a specific subject to search");
          }
    
          if(!courseId){
            alert("A course ID must be inputted to search");
          }
        */
        // more input validation
        if (courseId.length > 5) {
            alert("No course ID is longer than 5 characters");
            document.getElementById("courseNumber").value = "";
            return;
        }
        if (!this.sanitize(courseId, true)) {
            alert("Course codes contain only characters and numbers");
            return;
        }
        // find courses matching search params 
        for (let course of courseData) {
            if (selectedComponent == "ALL") {
                // todo chop last letter of course code if ALL is enabled? 
                //if(/* last character is letter*/)
                // let cutSearchCourseId = (course.catalog_nbr).toString().substring(0, course.catalog_nbr.length - 1);
                // let cutInputtedCourseId =          
                if (subjectInput === course.subject && (courseId == course.catalog_nbr || course.catalog_nbr.toString().includes(courseId))) {
                    matchingCourses.push(course);
                }
            }
            else {
                if (subjectInput === course.subject && (courseId == course.catalog_nbr || course.catalog_nbr.toString().includes(courseId)) && selectedComponent === course.course_info[0].ssr_component) {
                    matchingCourses.push(course);
                }
            }
        }
        // verify some courses matched, if not alert user
        if (matchingCourses.length == 0) {
            alert("No courses match inputted search fields");
        }
        else {
            console.log(matchingCourses);
        }
        // pass data to data member to be rendered in table
        this.data = matchingCourses;
    }
    isNumber(str) {
        if (str == "1" || str == "2" || str == "3" || str == "4" || str == "5" || str == "6" || str == "7" || str == "8" || str == "9") {
            return true;
        }
        else {
            return false;
        }
    }
    searchSubmitted() {
        // getting dummy data but should be making http request
        this.renderTableData();
        this.showInfoTable = true;
        // delete all this?
        // passing data (js object) to be rendered to table
        //let tableCourses = this.renderInfoTable(this.data);
        // todo after implimenting data fetch make seperate method for rendering table data?
        //this.renderInfoTable(tableCourses);
    }
    // delete?
    renderInfoTable(jsData) {
        this.showInfoTable = true;
    }
    createSchedule() {
        let name = this.scheduleNameInput;
        // if(!this.profile){                // impliment this?broken rn can't test
        //   let user = this.profile.name
        // }
        let description = document.getElementById("scheduleDescription").value;
        let visiblity = document.getElementById("visibilityDropDown").value;
        let currentTime = new Date();
        console.log("visibility: " + visiblity);
        if (!this.scheduleNameInput) {
            alert("Error: schedule name empty");
            return;
        }
        else if (!this.sanitize(name, false)) {
            alert("The schedule name cannot contain special characters");
            return;
        }
        else {
            console.log("schedule " + name + " created by user" + this.profile.name);
            this.scheduleData[name] = {};
            console.log(this.scheduleData);
            // todo get modified date and creator from user
            // todo saitize description?
            this.scheduleDataInfo[name] = { creator: this.profile.name, modified: currentTime, length: 0, description: description, expanded: false, visibility: visiblity };
        }
        this.scheduleNameInput = "";
        this.newScheduleEnabled = false; // hide the create schedule options again
        // update the database with the newly created schedule
        this.updateDb();
    }
    courseSelected(course) {
        let checked = course["checked"];
        if (checked) {
            // push the course object to the array of active courses
            this.selectedCourses.push(course);
            console.log(this.selectedCourses);
        }
        else {
            for (let schedule in this.selectedCourses) {
                if (this.selectedCourses[schedule] == course) {
                    // find index and splice (remove and shift)
                    const index = this.selectedCourses.indexOf(this.selectedCourses[schedule], 0);
                    if (index > -1) {
                        this.selectedCourses.splice(index, 1);
                    }
                    console.log("course removed from selected courses");
                    console.log(this.selectedCourses);
                }
            }
        }
    }
    scheduleSelected(scheduleName) {
        let name = scheduleName;
        try {
            this.activeSchedule = this.scheduleData[name];
            this.activeScheduleName = name;
            console.log("Active schedule changed to " + name);
        }
        catch (error) {
            console.log("Something went wrong; schedule name cannot be found in data");
        }
    }
    showCourseInList(course) {
        let hiddenCourseLists = 0;
        if (!this.profile) {
            return false;
        }
        else if (course.value.creator == this.profile.name) {
            return true;
        }
        else {
            hiddenCourseLists++;
        }
        console.log("Private courses hidden: " + hiddenCourseLists);
    }
    addCoursesToSchedule() {
        if (this.activeScheduleName == null || this.activeScheduleName == "" || this.activeScheduleName == undefined) {
            alert("Please select a schedule to add courses to it.");
            return;
        }
        // check if user is logged in
        if (!this.profile) {
            alert("you must sign in to access this functionality");
            return;
        }
        // check that course list belongs to that user
        if (this.scheduleDataInfo[this.activeScheduleName].creator != this.profile.name) {
            alert("you cannot edit a schedule that you did not create");
            return;
        }
        let activeSchedule = this.activeSchedule;
        let name = this.activeScheduleName;
        let numberOfCourses = this.selectedCourses.length;
        console.log("courses being added = " + numberOfCourses);
        // add selected courses to schedule
        this.scheduleData[name] = this.selectedCourses;
        // set new modified date and length for schedule info
        // TODO get modified date format 
        this.scheduleDataInfo[name].length = numberOfCourses;
        this.scheduleDataInfo[name].modified = new Date();
        console.log(this.scheduleData);
        this.updateDb();
    }
    orderByDate(a, b) {
        let a_dateString = a.value.modified;
        let b_dateString = b.value.modified;
        let a_date = new Date(a_dateString);
        let b_date = new Date(b_dateString);
        let aTIME = a_date.getTime();
        let bTIME = b_date.getTime();
        // order by decending date (epoc time)
        return aTIME > bTIME ? -1 : (bTIME > aTIME ? 1 : 0);
    }
    getDisplayDate(date) {
        let newDate = new Date(date);
        return newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + "-" + (newDate.getHours() + 1) + ":" + (newDate.getMinutes() + 1);
    }
    renderTimeTable() {
        if (this.activeScheduleName == undefined || this.activeScheduleName == "" || this.activeScheduleName == null) {
            alert("Select a schedule from the drop down or click one in the schedule list to render it");
            return;
        }
        this.renderedSchedule = this.activeScheduleName;
        /*convert activeSchedule (array of objects) to organized object of format:
        timeBasedSchedule = {
          "8:30 AM": { monday: COURSE_NAME1, tuesday: COURSE_NAME2, wednesday: {}, ...}
          "9:30 AM": ...
        }
        */
        // schedule object we will be filling in
        let organizedSchedule = { "8:30 AM": {}, "9:30 AM": {}, "10:30 AM": {}, "11:30 AM": {}, "12:30 PM": {}, "1:30 PM": {}, "2:30 PM": {}, "3:30 PM": {}, "4:30 PM": {}, "5:30 PM": {}, "6:30 PM": {}, "7:30 PM": {}, "8:30 PM": {}, "9:30 PM": {} };
        // loop through active schedule data and add
        for (let course of this.activeSchedule) {
            let startTime = course["course_info"][0]["start_time"];
            let endTime = course["course_info"][0]["end_time"];
            let name = course["className"];
            let daysArray = course["course_info"][0]["days"]; // array
            let info = course["catalog_nbr"] + "\n" + name + ": " + course["course_info"][0]["ssr_component"];
            // check if course is longer than one hour
            let duration = (endTime.charAt(0) - startTime.charAt(0));
            //console.log("startTime: " + startTime.charAt(0) + " endTime: "+  endTime.charAt(0) + " duration: " + duration);
            // add course into to object's day slots
            for (let day in this.days) {
                if (daysArray.includes(this.days[day])) { // this.day[days] is "M", "Tu", "W", ...
                    // check if another course in the schedule has written info to this time slot, if so there is conflict
                    if (organizedSchedule[startTime][day] == undefined) {
                        organizedSchedule[startTime][day] = info;
                    }
                    else {
                        organizedSchedule[startTime][day] += "CONFLICT W/ " + course["catalog_nbr"];
                    }
                    // if the course is longer than an hour - removed; not enough time
                    /*
                    if(duration >1){
                      console.log("duration greatee than 1");
                      let times;
          
                      // copy current start time to time array (instead of checking if AM or PM)
                      for(var i = 0; i< duration-1; i++){
                        times[i].push(startTime);
                        console.log(times[i]);
                      }
          
                      // adds 1 hour to start time and adds to array for however many hours more
                      for(var i = 0; i< duration-1; i++){
                        let startTime = times[i]
                        let newTime = startTime.charAt(0) + 1;
                        times[i] = newTime;
                      }
          
                      for(var i = 0; i< times.length; i++){
                        if(organizedSchedule[times[i]][day] == undefined ){
                          organizedSchedule[startTime][day] = info;
                        }else{
                          organizedSchedule[times[i]][day] += "CONFLICT W/ " + course["catalog_nbr"];
                        }
                      }
                    }*/
                }
                else {
                    organizedSchedule[startTime][day] = "";
                }
            }
            //todo impliment courses that are longer than an hour?
        }
        // fill rest of the empty time slots  with blanks
        for (var time of Object.keys(organizedSchedule)) {
            if (Object.keys(organizedSchedule[time]).length === 0) {
                for (var day in this.days) {
                    organizedSchedule[time][day] = "";
                }
            }
        }
        ;
        // note tuesday in days array is 'Tu'
        //console.log(organizedSchedule);
        this.showTimeTable = true;
        this.timeBasedSchedule = organizedSchedule;
        //console.log(this.timeBasedSchedule);
    }
    showMoreCourseInfo(course) {
        let courseNum = course["catalog_nbr"];
        if (course.showMoreInfo) {
            for (let element in this.data) {
                if (courseNum == this.data[element]["catalog_nbr"]) {
                    this.data[element]["showMoreInfo"] = false;
                }
            }
        }
        else {
            for (let element in this.data) {
                if (courseNum == this.data[element]["catalog_nbr"]) {
                    this.data[element]["showMoreInfo"] = true;
                }
            }
        }
    }
    // returns true if the passed string contains only characters, numbers, spaces and underscores
    sanitize(input, isCourseCode) {
        let expressionAllowSpaces = new RegExp('^[a-zA-Z0-9 _]{0,15}$');
        let expressionNoSpaces = new RegExp('^[a-zA-Z0-9]{0,15}$');
        let newExpression = new RegExp("[<\"\/>%\$&#@\[\\\^\$\.\|\?\*\+\(\)\{\}]");
        if (!isCourseCode) {
            if (newExpression.test(input)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            if (expressionNoSpaces.test(input)) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    ;
    // display fields to create new scedule
    toggleNewScheduleFields() {
        if (this.newScheduleEnabled) {
            this.newScheduleEnabled = false;
        }
        else {
            this.newScheduleEnabled = true;
        }
    }
    showMoreCourseListInfo(listName) {
        let name = listName;
        if (this.scheduleDataInfo[name].expanded) {
            this.scheduleDataInfo[name].expanded = false;
            this.showCourseReviewSection = false; // also minimize course review section
        }
        else {
            this.scheduleDataInfo[name].expanded = true;
        }
    }
    courseListSelected(name) {
        if (Object.keys(this.scheduleData[name]).length == 0) {
            console.log("active schedule set to" + name);
            this.showEditButton = true;
            this.cannotRenderEmpty = true;
            this.renderedSchedule = name;
            this.activeScheduleName = name;
            return;
        }
        this.showEditButton = true;
        this.cannotRenderEmpty = false;
        this.activeSchedule = this.scheduleData[name];
        console.log(this.activeSchedule);
        this.activeScheduleName = name;
        this.renderTimeTable();
    }
    deleteCourseList(name) {
        delete this.scheduleData[name];
        delete this.scheduleDataInfo[name];
        this.activeSchedule = undefined;
        this.activeScheduleName = undefined;
        this.showTimeTable = false;
        this.editingCourseList = false;
        this.showEditButton = false;
        console.log(this.scheduleData);
        //todo write to database to delete
    }
    toggleEditCourseList() {
        // console.log(this.scheduleDataInfo[this.activeScheduleName].creator);
        // console.log(this.profile.name);
        // check if user is logged in
        if (!this.profile) {
            alert("you must sign in to access this functionality");
            return;
        }
        // check that course list belongs to that user
        if (this.scheduleDataInfo[this.activeScheduleName].creator != this.profile.name) {
            alert("you cannot edit a schedule that you did not create");
            return;
        }
        if (this.editingCourseList) {
            this.editingCourseList = false;
        }
        else {
            this.editingCourseList = true;
        }
    }
    editCourseList() {
        let newName = document.getElementById("editNameValue").value;
        let newDesc = document.getElementById("editScheduleDescription").value;
        let newVisibility = document.getElementById("editVisibilityDropDown").value;
        var newScheduleDataInfoObject = {};
        if (!newName || newName == "") {
            alert("Please ensure the course list has a name");
            return;
        }
        else if (!this.sanitize(newName, false)) {
            alert("The course list name contain special characters");
            return;
        }
        else if (!this.sanitize(newDesc, false)) {
            alert("The course list description contain special characters");
            return;
        }
        // if nothing has chnaged
        if (newName == this.activeScheduleName && newDesc == this.scheduleDataInfo[this.activeScheduleName].description && newVisibility == this.scheduleDataInfo[this.activeScheduleName].visibility) {
            this.editingCourseList = false;
            return;
        }
        // else, something has changed
        // check if description changed
        if (newDesc != this.scheduleDataInfo[this.activeScheduleName].description) {
            newScheduleDataInfoObject["description"] = newDesc;
        }
        else {
            newScheduleDataInfoObject["description"] = this.scheduleDataInfo[this.activeScheduleName].description;
        }
        // check if visibility changed
        if (newVisibility != this.scheduleDataInfo[this.activeScheduleName].visibility) {
            newScheduleDataInfoObject["visibility"] = newVisibility;
        }
        else {
            newScheduleDataInfoObject["visibility"] = this.scheduleDataInfo[this.activeScheduleName].visibility;
        }
        // update/reset the modified date and creator
        newScheduleDataInfoObject["modified"] = new Date();
        newScheduleDataInfoObject["creator"] = this.profile.name;
        // and last but not least set the new object to the one we've created and delete the old one
        if (newName != this.activeScheduleName) {
            // replace old info object with new one
            this.scheduleDataInfo[newName] = newScheduleDataInfoObject;
            delete this.scheduleDataInfo[this.activeScheduleName];
            // replace it in object with course data
            this.scheduleData[newName] = this.scheduleData[this.activeScheduleName];
            delete this.scheduleData[this.activeScheduleName];
            // set the active schedule to the new one
            this.activeScheduleName = newName;
            this.activeSchedule = this.scheduleData[newName];
        }
        else { // if the name HASNT been changed, simply just replace the existing object with the new one. Nothing changes in the course data object though
            this.scheduleDataInfo[this.activeScheduleName] = newScheduleDataInfoObject;
        }
        this.updateDb();
        console.log("schedule updated");
        this.editingCourseList = false;
    }
    removeCourseFromList(courseList, catalogNumber) {
        // check if user is logged in
        if (!this.profile) {
            alert("you must sign in to access this functionality");
            return;
        }
        // check that course list belongs to that user
        if (!this.scheduleDataInfo[courseList].creator != this.profile.user) {
            alert("you cannot edit a schedule that you did not create");
            return;
        }
        console.log(courseList);
        console.log(catalogNumber);
        for (let i = 0; i < Object.keys(this.scheduleData[courseList]).length; i++) {
            if (this.scheduleData[courseList][i]["catalog_nbr"] == catalogNumber) {
                console.log(this.scheduleData[courseList][i]);
                this.scheduleDataInfo[courseList].length--;
                this.selectedCourses.splice(i, 1);
            }
        }
        this.updateDb();
    }
    // update user data in database
    updateDb() {
        if (!this.profile) {
            alert("you must sign in to access this functionality");
            return;
        }
        let user = this.profile.name;
        // data to be sent to db
        let privateScheduleData = {
            scheduleData: {},
            scheduleDataInfo: {}
        };
        let publicScheduleData = {
            scheduleData: {},
            scheduleDataInfo: {}
        };
        // log
        console.log("scheduleData being posted:");
        console.log(this.scheduleData);
        // creating public and private course list data to send in request
        for (let i = 0; i < Object.keys(this.scheduleDataInfo).length; i++ /*let courseList of this.scheduleDataInfo*/) {
            // if private, add course to privateScheduleData{}
            if (this.scheduleDataInfo[Object.keys(this.scheduleDataInfo)[i]].visibility == "Private") {
                // setting schedule data
                privateScheduleData["scheduleData"][Object.keys(this.scheduleDataInfo)[i]] = this.scheduleData[Object.keys(this.scheduleDataInfo)[i]];
                // setting corresponding schedule data INFO
                privateScheduleData["scheduleDataInfo"][Object.keys(this.scheduleDataInfo)[i]] = this.scheduleDataInfo[Object.keys(this.scheduleDataInfo)[i]];
            }
            // else if, add course to publicScheduleData{}
            else if (this.scheduleDataInfo[Object.keys(this.scheduleDataInfo)[i]].visibility == "Public") {
                // setting schedule data
                publicScheduleData["scheduleData"][Object.keys(this.scheduleDataInfo)[i]] = this.scheduleData[Object.keys(this.scheduleDataInfo)[i]];
                // setting corresponding schedule data INFO 
                publicScheduleData["scheduleDataInfo"][Object.keys(this.scheduleDataInfo)[i]] = this.scheduleDataInfo[Object.keys(this.scheduleDataInfo)[i]];
            }
            else {
                console.log("ERROR COURSE LIST VISIBILITY NOT SET");
            }
        }
        // setting username in body. This is deleted in API before posting
        publicScheduleData["user"] = user;
        privateScheduleData["user"] = user;
        // post to public db
        this._configservice.postPublicScheduleData(publicScheduleData).subscribe();
        // post to private db
        this._configservice.postPrivateScheduleData(privateScheduleData).subscribe();
        // log
        console.log("db updated");
    }
    getPrivateScheduleData() {
        // check if user is logged in first 
        if (!this.profile) {
            return;
        }
        this._configservice.getPrivateScheduleData(this.profile.name).subscribe((data) => {
            console.log(data);
            /* (data) is in the format:
            *    data = {
            *      scheduleDataInfo: { {...}, {...}, {...}, ...}
            *      scheduleData: { {...}, {...}, {...}, ...}
            *    }                                                   */
            // add to scheduleDataInfo array from scheduleDataInfo (property that's value is the object) in the returned data
            for (let key of Object.keys(data)) {
                // add scheduleDataInfo from returned data to our schedule data info
                if (key == "scheduleDataInfo") {
                    for (let i = 0; i < Object.keys(data[key]).length; i++) {
                        this.scheduleDataInfo[Object.keys(data[key])[i]] = data["scheduleDataInfo"][Object.keys(data["scheduleDataInfo"])[i]];
                        // this.scheduleDataInfo[ SCHEDULE NAME ] = collectionItem["scheduleDataInfo"] VALUE
                    }
                }
                // add scheduleData from returned data to our schedule data 
                else if (key == "scheduleData") {
                    for (let i = 0; i < Object.keys(data[key]).length; i++) {
                        this.scheduleData[Object.keys(data[key])[i]] = data["scheduleData"][Object.keys(data["scheduleData"])[i]];
                        // this.scheduleData[ SCHEDULE NAME ] = collectionItem["scheduleData"] VALUE
                    }
                }
                else {
                    console.log("something broked returned data has more than scheduleDataInfo and scheduleData properties");
                }
            }
            // setting all courses expanded to false
            for (let courseList of Object.keys(this.scheduleDataInfo)) {
                this.scheduleDataInfo[courseList].expanded = false;
            }
        });
    }
    createCourseReviewtoggle() {
        if (this.showCourseReviewSection) {
            this.showCourseReviewSection = false;
        }
        else {
            if (!this.profile) {
                alert("you must sign in to access this functionality");
                return;
            }
            this.showCourseReviewSection = true;
        }
    }
    toggleShowReviews() {
        if (this.showCourseReviewListSection) {
            this.showCourseReviewListSection = false;
        }
        else {
            // get the review data from db before showing
            this.getReviewData();
            this.showCourseReviewListSection = true;
        }
    }
    submitCourseReview(course) {
        let review = document.getElementById("courseReview").value;
        if (!review || review == "") {
            alert("Please enter a review to be submitted");
            return;
        }
        else if (!this.sanitize(review, false)) {
            alert("The review cannot contain special characters");
            return;
        }
        // todo sanitize review
        // get the course id
        let classNum = course["course_info"][0]["class_nbr"];
        let reviewObject = { courseNum: classNum, reviewContent: review, creator: this.profile.name, hidden: false, Id: this.reviewId };
        console.log(this.reviewData);
        this.reviewData.push(reviewObject);
        this.showCourseReviewListSection = false;
        this.postReviewData();
        //this.getReviewData();
        console.log(this.reviewData);
        alert("review submitted");
    }
    getManagers() {
        let x = this.dataService.getManagers();
        console.log(x);
    }
    postReviewData() {
        this._configservice.postReviewData(this.reviewData).subscribe(data => {
            this.reviewData = data;
            this.reviewData = this.reviewData.reviewData;
            console.log("(response) updated data:");
            this.reviewId = this.reviewData.length - 1;
        });
    }
    getReviewData() {
        this._configservice.getReviewData().subscribe(data => {
            console.log(data);
            this.reviewData = data[data.length - 1]["reviewData"];
            this.reviewId = data.length - 1;
            console.log("(getReviewData() response) recieved review data:");
            console.log(this.reviewData);
        });
    }
    ngOnInit() {
        // get user data
        this.auth.user$.subscribe((profile) => {
            let profileJson = JSON.stringify(profile, null, 2);
            this.profile = JSON.parse(profileJson);
            console.log(this.profile);
        });
        // getting course data to populate tables with
        this._configservice.getCourseData().subscribe(data => {
            this.dataArray = data;
            console.log("course data recieved");
        });
        // getting review data
        this.getReviewData();
        /*this._configservice.getReviewData().subscribe(data => {
          this.reviewData = data;
          console.log("(getReviewData() response) recieved review data:");
          console.log(this.reviewData);
        });*/
        // getting PUBLIC schedule data from backend
        this._configservice.getPublicScheduleData().subscribe((data) => {
            console.log(data);
            /* (data) is in the format:
            *    data = {
            *      scheduleDataInfo: { {...}, {...}, {...}, ...}
            *      scheduleData: { {...}, {...}, {...}, ...}
            *    }                                                   */
            // add to scheduleDataInfo array from scheduleDataInfo (property that's value is the object) in the returned data
            for (let key of Object.keys(data)) {
                // add scheduleDataInfo from returned data to our schedule data info
                if (key == "scheduleDataInfo") {
                    for (let i = 0; i < Object.keys(data[key]).length; i++) {
                        this.scheduleDataInfo[Object.keys(data[key])[i]] = data["scheduleDataInfo"][Object.keys(data["scheduleDataInfo"])[i]];
                        // this.scheduleDataInfo[ SCHEDULE NAME ] = collectionItem["scheduleDataInfo"] VALUE
                    }
                }
                // add scheduleData from returned data to our schedule data 
                else if (key == "scheduleData") {
                    for (let i = 0; i < Object.keys(data[key]).length; i++) {
                        this.scheduleData[Object.keys(data[key])[i]] = data["scheduleData"][Object.keys(data["scheduleData"])[i]];
                        // this.scheduleData[ SCHEDULE NAME ] = collectionItem["scheduleData"] VALUE
                    }
                }
                else {
                    console.log("something broked returned data has more than scheduleDataInfo and scheduleData properties");
                }
            }
            // setting all courses expanded to false
            for (let courseList of Object.keys(this.scheduleDataInfo)) {
                this.scheduleDataInfo[courseList].expanded = false;
            }
        });
        // get administrator
        // get PRIVATE (user specific) schedule info from backend 
        // check if user is logged in first 
        if (!this.profile) {
            console.log("user not signed in; cannot get private data");
            return;
        }
        this._configservice.getPrivateScheduleData(this.profile.name).subscribe((data) => {
            console.log(data);
            /* (data) is in the format:
            *    data = {
            *      scheduleDataInfo: { {...}, {...}, {...}, ...}
            *      scheduleData: { {...}, {...}, {...}, ...}
            *    }                                                   */
            // add to scheduleDataInfo array from scheduleDataInfo (property that's value is the object) in the returned data
            for (let key of Object.keys(data)) {
                // add scheduleDataInfo from returned data to our schedule data info
                if (key == "scheduleDataInfo") {
                    for (let i = 0; i < Object.keys(data[key]).length; i++) {
                        this.scheduleDataInfo[Object.keys(data[key])[i]] = data["scheduleDataInfo"][Object.keys(data["scheduleDataInfo"])[i]];
                        // this.scheduleDataInfo[ SCHEDULE NAME ] = collectionItem["scheduleDataInfo"] VALUE
                    }
                }
                // add scheduleData from returned data to our schedule data 
                else if (key == "scheduleData") {
                    for (let i = 0; i < Object.keys(data[key]).length; i++) {
                        this.scheduleData[Object.keys(data[key])[i]] = data["scheduleData"][Object.keys(data["scheduleData"])[i]];
                        // this.scheduleData[ SCHEDULE NAME ] = collectionItem["scheduleData"] VALUE
                    }
                }
                else {
                    console.log("something broked returned data has more than scheduleDataInfo and scheduleData properties");
                }
            }
            // setting all courses expanded to false
            for (let courseList of Object.keys(this.scheduleDataInfo)) {
                this.scheduleDataInfo[courseList].expanded = false;
            }
        });
        // console.log(this.scheduleDataInfo);
        // console.log(this.scheduleData);
    }
    ;
}
HomeContentComponent.ɵfac = function HomeContentComponent_Factory(t) { return new (t || HomeContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dataservice__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sharedDataInterface__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
HomeContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeContentComponent, selectors: [["app-home-content"]], decls: 375, vars: 14, consts: [[1, "padEntireBody"], [1, "westernInformation"], [1, "controlColumn"], ["name", "subjectSelection", "id", "subjectSelection"], [1, "required-field"], ["name", "subjectDropDown", "id", "subjectDropDown"], ["value", ""], ["value", "ACTURSCI"], ["value", "AMERICAN"], ["value", "ANATCELL"], ["value", "ANTHRO"], ["value", "APPLMATH"], ["value", "ARABIC"], ["value", "AH"], ["value", "ARTHUM"], ["value", "ASTRONOM"], ["value", "BIBLSTUD"], ["value", "BIOCHEM"], ["value", "BIOLOGY"], ["value", "BME"], ["value", "BIOSTATS"], ["value", "BUSINESS"], ["value", "CALCULUS"], ["value", "CGS"], ["value", "CBE"], ["value", "CHEMBIO"], ["value", "CHEM"], ["value", "CSI"], ["value", "CHINESE"], ["value", "CHURCH"], ["value", "CHURLAW"], ["value", "CHURMUSI"], ["value", "CEE"], ["value", "CLASSICS"], ["value", "CMBPROG"], ["value", "COMMSCI"], ["value", "COMPLIT"], ["value", "COMPSCI"], ["value", "CA"], ["value", "DANCE"], ["value", "DIGICOMM"], ["value", "DIGIHUM"], ["value", "DISABST"], ["value", "EARTHSCI"], ["value", "ECONOMIC"], ["value", "EELC"], ["value", "ECE"], ["value", "ENGSCI"], ["value", "ENGLISH"], ["value", "ENVIRSCI"], ["value", "EPID"], ["value", "EPIDEMIO"], ["value", "FIMS"], ["value", "FAMLYSTU"], ["value", "FLDEDUC"], ["value", "FILM"], ["value", "FINMOD"], ["value", "FOODNUTR"], ["value", "FRENCH"], ["value", "GEOGRAPH"], ["value", "GEOLOGY"], ["value", "GERMAN"], ["value", "GGB"], ["value", "GLE"], ["value", "GREEK"], ["value", "GPE"], ["value", "HEALTSCI"], ["value", "HEBREW"], ["value", "HISTTHEO"], ["value", "HISTORY"], ["value", "HISTSCI"], ["value", "HOMILET"], ["value", "HUMANECO"], ["value", "HUMANRS"], ["value", "INDIGSTU"], ["value", "INTEGSCI"], ["value", "ICC"], ["value", "INTERDIS"], ["value", "INTREL"], ["value", "ITALIAN"], ["value", "JAPANESE"], ["value", "JEWISH"], ["value", "MTP-BRJR"], ["value", "KINESIOL"], ["value", "LATIN"], ["value", "LAW"], ["value", "LS"], ["value", "LINGUIST"], ["value", "LITURST"], ["value", "LITURGIC"], ["value", "MOS"], ["value", "MTP-MKTG"], ["value", "MATH"], ["value", "MME"], ["value", "MSE"], ["value", "MIT"], ["value", "MEDBIO"], ["value", "MEDHINFO"], ["value", "MEDSCIEN"], ["value", "MEDIEVAL"], ["value", "MICROIMM"], ["value", "MORALTHE"], ["value", "MTP-MMED"], ["value", "MCS"], ["value", "MUSIC"], ["value", "NEURO"], ["value", "NURSING"], ["value", "ONEHEALT"], ["value", "PASTTHEO"], ["value", "PATHOL"], ["value", "PERSIAN"], ["value", "PHARM"], ["value", "PHILST"], ["value", "PHILOSOP"], ["value", "PHYSICS"], ["value", "PHYSIOL"], ["value", "PHYSPHRM"], ["value", "POLISCI"], ["value", "PPE"], ["value", "PSYCHOL"], ["value", "REHABSCI"], ["value", "RELEDUC"], ["value", "RELSTUD"], ["value", "SACRTHEO"], ["value", "SCHOLARS"], ["value", "SCIENCE"], ["value", "SOCLJUST"], ["value", "SOCSCI"], ["value", "SOCWORK"], ["value", "SOCIOLOG"], ["value", "SE"], ["value", "SPANISH"], ["value", "SPEECH"], ["value", "SPIRTHEO"], ["value", "STATS"], ["value", "SA"], ["value", "SYSTHEO"], ["value", "THANAT"], ["value", "THEATRE"], ["value", "THEOETH"], ["value", "THEOLST"], ["value", "THESIS"], ["value", "TJ"], ["value", "VISARTS"], ["value", "WTC"], ["value", "WOMENST"], ["value", "WORLDLIT"], ["value", "WRITING"], [1, "optional-field"], ["id", "courseNumber", "type", "text", "placeholder", "eg. 1023B"], ["id", "componentDropdown", "type", "text", "placeholder", "LEC, TUT or LAB"], ["value", "ALL"], ["value", "LEC"], ["value", "TUT"], ["value", "LAB"], ["id", "subj-course-keyword", "type", "text", "placeholder", "eg. ECE 1023B"], ["id", "keywords", "type", "text", "placeholder", "eg. FINANCIAL ANALYSIS", "value", "ACTU"], [1, "submit"], ["type", "submit", "autofocus", "", 1, "btn", "btn-info", "span2", 3, "click"], ["class", "controlColumn", 4, "ngIf"], ["id", "scheduleDropDown", 3, "change"], ["value", "none"], [4, "ngFor", "ngForOf"], ["id", "infoTableContainer", 4, "ngIf"], [1, "courseListTable"], [1, "courseListMiddleRowWidth100percent"], [3, "click"], [1, "courseListTableHeaderRow"], [1, "editOptionsTd"], [1, "editOptionsDiv"], [4, "ngIf"], ["id", "timeTableContainer", 4, "ngIf"], ["name", "scheduleCreateSection", "id", "subjectSelection", 4, "ngIf"], ["name", "scheduleCreateSection", "id", "subjectSelection"], ["id", "scheduleName", "type", "text", "placeholder", "morning classes", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["id", "scheduleDescription"], ["id", "visibilityDropDown"], ["selected", "selected"], ["id", "infoTableContainer"], ["class", "lineDivider", 4, "ngIf"], [1, "infoTable"], [1, "infoTableHeaderTr"], ["class", "infoTableTd", 4, "ngFor", "ngForOf"], [1, "infoTableTd"], [1, "lineDivider"], [1, "infoTableTr"], [1, "infoTableTd", 3, "click"], [1, "infoTableTd-smaller", 3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], ["colspan", "7"], ["class", "infoTableTr", 4, "ngIf"], ["id", "courseReview"], [1, "reviewstable"], [1, "courseListTableTd"], [1, "courseListTitle", 3, "click"], [1, "courseListTableTd", 3, "click"], ["colspan", "5"], ["class", "redDelete", "type", "submit", "autofocus", "", 3, "click", 4, "ngIf"], ["type", "submit", "autofocus", "", 1, "redDelete", 3, "click"], ["id", "editNameValue", "type", "text", 3, "value"], ["id", "editScheduleDescription", 3, "value"], ["id", "editVisibilityDropDown", 3, "value"], ["value", "public"], ["value", "private", "selected", "selected"], ["id", "timeTableContainer"], [1, "timeTable"], [1, "timeTableTr"], [1, "timetableTimeTd"], ["class", "timeTableDayTr", 4, "ngFor", "ngForOf"], ["timeTableTr", "", 4, "ngFor", "ngForOf"], [1, "timeTableDayTr"], ["timeTableTr", ""], ["class", "timeTableTd", 4, "ngFor", "ngForOf"], [1, "timeTableTd"]], template: function HomeContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About this site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This site provide varius functionalitites for managing your Western Courses. Various functionalities are available in this home page such as searching through the available courses by various properties, viewing course details and leaving reviews on courses, creating custom course lists with names and then adding courses to them and viewing the various course lists, including ones set to public by others. Furthermore, selected coure lists can be rendered into a time table to display the weekly schedule for the list, and can be modified by the creator. Click on course list names in the table to render them or on the row to expand the list to shows its details and the courses in the list. Courses can also be expanded to show additional details by clicking rows in the table. Coursereviews can be found and created to be publicly displayed in the courses information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Subject:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Actuarial Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " American Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Anatomy and Cell Biology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Anthropology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Applied Mathematics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Arabic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Art History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Arts and Humanities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Astronomy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Biblical Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Biochemistry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Biology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Biomedical Engineering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Biostatistics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Business Administration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Calculus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Centre for Global Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Chem & Biochem Engineering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Chemical Biology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Chemistry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Childhood & Social Institutns ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Chinese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Church History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Church Law ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Church Music ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Civil & Envrnmntl Engineering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Classical Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Combined Program Enrollment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Communication Sci & Disorders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Comparative Lit & Culture ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Computer Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Creative Arts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Dance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Digital Communication ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Digital Humanities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Disability Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Earth Sciences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Economics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Education English Language Cen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Elect & Computer Engineering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Engineering Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Environmental Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Epidemiology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Epidemiology & Biostatistics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " FIMS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Family Studies & Human Develop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Field Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Film Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Financial Modelling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Foods and Nutrition ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " French ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Geography ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Geology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " German ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Global Great Books ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Governance,Leadership & Ethics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Greek ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Green Process Engineering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Health Sciences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Hebrew ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "option", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Historical Theology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "option", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "option", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " History of Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Homiletics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Human Ecology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "option", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Human Rights Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "option", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Indigenous Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "option", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " Integrated Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "option", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Intercultural Communications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "option", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Interdisciplinary Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " International Relations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Italian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "option", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Japanese ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "option", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Jewish Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "option", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Journalism-Broadcasting Fanshw ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "option", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Kinesiology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Latin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "option", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Law ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "option", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Leadership Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "option", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Linguistics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "option", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Liturgical Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "option", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Liturgics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "option", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Management & Organizational St ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "option", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Marketing - Fanshawe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "option", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Mathematics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "option", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Mech & Materials Engineering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "option", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, " Mechatronic Systems Engineerin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "option", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Media, Information &Technocult ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "option", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Medical Biophysics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "option", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Medical Health Informatics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "option", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Medical Sciences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "option", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Medieval Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "option", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " Microbiology & Immunology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "option", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Moral Theology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "option", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " Multimed Dsgn & Prod Fanshawe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "option", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Museum and Curatorial Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "option", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " Music ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "option", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Neuroscience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "option", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " Nursing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "option", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " One Health ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "option", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Pastoral Theology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "option", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Pathology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "option", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Persian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "option", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " Pharmacology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "option", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Philosophical Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "option", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " Philosophy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "option", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " Physics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "option", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Physiology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "option", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " Physiology and Pharmacology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "option", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Political Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "option", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Politics, Philosophy, Economic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "option", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " Psychology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "option", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " Rehabilitation Sciences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "option", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Religious Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "option", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Religious Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "option", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " Sacramental Theology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "option", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Scholars Electives ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "option", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "option", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " Social Justice & Peace Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "option", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " Social Science ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "option", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " Social Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "option", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Sociology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "option", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " Software Engineering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "option", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " Spanish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "option", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " Speech ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "option", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " Spiritual Theology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "option", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " Statistical Sciences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "option", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " Studio Art ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "option", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " Systematic Theology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "option", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " Thanatology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "option", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " Theatre Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "option", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " Theological Ethics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "option", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Theological Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "option", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " Thesis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "option", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " Transitional Justice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "option", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " Visual Arts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "option", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " Western Thought & Civilization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "option", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " Women's Studies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "option", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " World Literatures and Cultures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "option", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " Writing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Course Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "input", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Course Component:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "select", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "option", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "option", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Lecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "option", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "option", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Labotory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "Subject Code and/or Course Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "input", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Search Course Data By Keyword");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "input", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "button", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_Template_button_click_322_listener() { return ctx.searchSubmitted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](324, HomeContentComponent_td_324_Template, 8, 3, "td", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](325, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Select Active Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "select", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeContentComponent_Template_select_change_329_listener($event) { return ctx.scheduleSelected($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "option", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](331, HomeContentComponent_option_331_Template, 2, 1, "option", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](332, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "button", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_Template_button_click_334_listener() { return ctx.addCoursesToSchedule(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Add Courses To Active Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "Render Time Table for Active Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "button", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_Template_button_click_339_listener() { return ctx.renderTimeTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Render");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](342, HomeContentComponent_div_342_Template, 9, 3, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "table", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "td", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Public Course Lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, " (Click Course Names to Render Timetable)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "button", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeContentComponent_Template_button_click_355_listener() { return ctx.getPrivateScheduleData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Get private lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "table", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "tr", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Creator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Modified Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Number of Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](367, HomeContentComponent_ng_container_367_Template, 2, 1, "ng-container", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](368, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](371, HomeContentComponent_table_371_Template, 8, 4, "table", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](373, HomeContentComponent_div_373_Template, 3, 0, "div", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](374, HomeContentComponent_div_374_Template, 10, 6, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](324);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](325, 7, ctx.auth.isAuthenticated$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](332, 9, ctx.scheduleData));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showInfoTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](368, 11, ctx.scheduleDataInfo, ctx.orderByDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEditButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cannotRenderEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTimeTable);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]], styles: [".westernInformation[_ngcontent-%COMP%] { \n\tbackground-color : lightblue;\n\tfont-family : sans-serif;\n\t-webkit-text-decoration-color: grey;\n\t        text-decoration-color: grey;\n }\n.controlColumn[_ngcontent-%COMP%]{\n\twidth: 25%;\n\tborder-collapse: collapse;\n\ttext-align: top;\n\tpadding-top: 0;\n\tborder-top: 0;\n }\n.scheduleSelectContainer[_ngcontent-%COMP%]{\n \twidth: 65%;\n }\n.submit[_ngcontent-%COMP%]{\n\tmargin-top: 15px;\n}\n.submitButton[_ngcontent-%COMP%] {\n\tbackground-color : darkblue;\n\twidth: 100%;\n\tborder: none;\n\tpadding: 9px 20px;\n\tfont-size: 16px;\n\tcursor: pointer;\n\ttext-align: center;\n}\n.required-field[_ngcontent-%COMP%]::after {\n\tcontent: \"*\";\n\tcolor: red;\n}\n.lineDivider[_ngcontent-%COMP%]{\n\tbackground-color: black;\n\theight: 2px;\n\twidth: 100%;\n}\n.link[_ngcontent-%COMP%] {\n\ttext-decoration: none;\n}\n.searchSection[_ngcontent-%COMP%] {\n\tfont-size: 40px;\n\t-webkit-text-decoration-color: grey;\n\t        text-decoration-color: grey;\n }\n.padEntireBody[_ngcontent-%COMP%] {\n\tmax-width:1500px;\n\tborder:2px solid #000000;\n\tpadding:1rem;\n\tmargin:1rem auto; \n\tmargin-right: 0;\n\tmargin-left: 0;\n}\n.boldentext[_ngcontent-%COMP%] {\n \tfont-weight: bold;\n }\n.timeTable[_ngcontent-%COMP%]{\n\twidth: 100%;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n\ttable-layout: fixed;\n\tmargin-left:auto; \n\tmargin-right:auto;\n\tborder: 1px solid black; \n }\n.timeTableTd[_ngcontent-%COMP%]{\n\tborder: 1px solid black; \n\t\n\ttext-align: center;\n\tfont-size: small;\n\twidth: 19%;\n}\n.timetableTimeTd[_ngcontent-%COMP%]{\n\tborder: 1px solid black; \n\t\n\ttext-align: left;\n\tfont-size: small;\n\twidth: 5%;\n}\n.timeTableDayTr[_ngcontent-%COMP%]{\n\tborder: 1px solid black; \n\t\n\ttext-align: center;\n\tfont-size: small;\n\theight: 10%;\n\tbackground-color: lightgrey; \n}\n.timeTableTr[_ngcontent-%COMP%]{\n\tborder: 1px solid black; \n\t\n\ttext-align: center;\n\tfont-size: small;\n\theight: 18%;\n}\n.infoTable[_ngcontent-%COMP%]{\n    \n    border: 1px solid black; \n    \n    border-spacing: 0;\n}\n.infoTableTd[_ngcontent-%COMP%]{\n    width: 16%;\n    border: 1px solid black;\n}\n.infoTableTd-smaller[_ngcontent-%COMP%]{\n    width: 10%;\n    border: 1px solid black;\n}\n.infoTableTr[_ngcontent-%COMP%]{\n    border: 1px solid black; \n}\n.infoTableHeaderTr[_ngcontent-%COMP%]{\n    border: 1px solid black;\n    background-color: lightgrey; \n}\n.infoTableMoreInfoTd[_ngcontent-%COMP%]{\n    column-span: 7;\n    \n}\n.courseListTable[_ngcontent-%COMP%]{\n\tborder-spacing: 0;\n}\n.courseListTableHeaderRow[_ngcontent-%COMP%]{\n\tborder: 1px solid black;\n    background-color: lightgrey; \n}\n.courseListTableTd[_ngcontent-%COMP%]{\n    width: 20%;\n    border: 1px solid black;\n}\n.courseListTitle[_ngcontent-%COMP%]:hover{\n    text-decoration: underline;\n}\n.editOptionsSubTable[_ngcontent-%COMP%]{\n\twidth:100%;\n}\n.editOptionsTd[_ngcontent-%COMP%]{\n\twidth:100%;\n\talign-self: center;\n\talign-content: center;\n}\n.editOptionsDiv[_ngcontent-%COMP%]{\n\t\n\talign-self: center;\n\talign-content: center;\n\tmargin-right: 8em;\n\tmargin-left: 8em;\n}\n.courseListTable[_ngcontent-%COMP%]{\n\twidth:100%;\n}\n.courseListMiddleRowWidth100percent[_ngcontent-%COMP%]{\n\twidth:70%;\n}\n.redDelete[_ngcontent-%COMP%]{\n\tbackground-color: #ff4d4d;\n}\n.reviewstable[_ngcontent-%COMP%]{\n\tborder: 1px solid black;\n\twidth: 70%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRTdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtDQUNDLDRCQUE0QjtDQUM1Qix3QkFBd0I7Q0FDeEIsbUNBQTJCO1NBQTNCLDJCQUEyQjtDQUMzQjtBQUVBO0NBQ0EsVUFBVTtDQUNWLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsY0FBYztDQUNkLGFBQWE7Q0FDYjtBQUVBO0VBQ0MsVUFBVTtDQUNYO0FBRUQ7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLDJCQUEyQjtDQUMzQixXQUFXO0NBQ1gsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7QUFDWDtBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLFdBQVc7Q0FDWCxXQUFXO0FBQ1o7QUFFQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MsZUFBZTtDQUNmLG1DQUEyQjtTQUEzQiwyQkFBMkI7Q0FDM0I7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQix3QkFBd0I7Q0FDeEIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsY0FBYztBQUNmO0FBRUM7RUFDQyxpQkFBaUI7Q0FDbEI7QUFFQTtDQUNBLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QjtBQUdEO0NBQ0MsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFVBQVU7QUFDWDtBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtDQUN2QixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLFNBQVM7QUFDVjtBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCwyQkFBMkI7QUFDNUI7QUFFQTtDQUNDLHVCQUF1QjtDQUN2Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0RBQWtEO0lBQ2xELGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxjQUFjO0lBQ2QsMkJBQTJCO0FBQy9CO0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLHVCQUF1QjtJQUNwQiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0NBQ0MsVUFBVTtBQUNYO0FBRUE7Q0FDQyxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsVUFBVTtBQUNYO0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBvbmVudFN0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4ud2VzdGVybkluZm9ybWF0aW9uIHsgXG5cdGJhY2tncm91bmQtY29sb3IgOiBsaWdodGJsdWU7XG5cdGZvbnQtZmFtaWx5IDogc2Fucy1zZXJpZjtcblx0dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBncmV5O1xuIH1cblxuIC5jb250cm9sQ29sdW1ue1xuXHR3aWR0aDogMjUlO1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHR0ZXh0LWFsaWduOiB0b3A7XG5cdHBhZGRpbmctdG9wOiAwO1xuXHRib3JkZXItdG9wOiAwO1xuIH1cblxuIC5zY2hlZHVsZVNlbGVjdENvbnRhaW5lcntcbiBcdHdpZHRoOiA2NSU7XG4gfVxuXG4uc3VibWl0e1xuXHRtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnN1Ym1pdEJ1dHRvbiB7XG5cdGJhY2tncm91bmQtY29sb3IgOiBkYXJrYmx1ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlcjogbm9uZTtcblx0cGFkZGluZzogOXB4IDIwcHg7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXF1aXJlZC1maWVsZDo6YWZ0ZXIge1xuXHRjb250ZW50OiBcIipcIjtcblx0Y29sb3I6IHJlZDtcbn1cblxuLmxpbmVEaXZpZGVye1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0aGVpZ2h0OiAycHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ubGluayB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNlYXJjaFNlY3Rpb24ge1xuXHRmb250LXNpemU6IDQwcHg7XG5cdHRleHQtZGVjb3JhdGlvbi1jb2xvcjogZ3JleTtcbiB9XG5cbi5wYWRFbnRpcmVCb2R5IHtcblx0bWF4LXdpZHRoOjE1MDBweDtcblx0Ym9yZGVyOjJweCBzb2xpZCAjMDAwMDAwO1xuXHRwYWRkaW5nOjFyZW07XG5cdG1hcmdpbjoxcmVtIGF1dG87IFxuXHRtYXJnaW4tcmlnaHQ6IDA7XG5cdG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4gLmJvbGRlbnRleHQge1xuIFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG4gfVxuIFxuIC50aW1lVGFibGV7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcblx0dGFibGUtbGF5b3V0OiBmaXhlZDtcblx0bWFyZ2luLWxlZnQ6YXV0bzsgXG5cdG1hcmdpbi1yaWdodDphdXRvO1xuXHRib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXG4gfVxuXG4gXG4udGltZVRhYmxlVGR7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBcblx0LyogdGFibGUtbGF5b3V0OiBmaXhlZDsgKi9cblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IHNtYWxsO1xuXHR3aWR0aDogMTklO1xufVxuXG4udGltZXRhYmxlVGltZVRke1xuXHRib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXG5cdC8qdGFibGUtbGF5b3V0OiBmaXhlZDsqL1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRmb250LXNpemU6IHNtYWxsO1xuXHR3aWR0aDogNSU7XG59XG5cbi50aW1lVGFibGVEYXlUcntcblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7IFxuXHQvKiB0YWJsZS1sYXlvdXQ6IGZpeGVkOyAqL1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogc21hbGw7XG5cdGhlaWdodDogMTAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7IFxufVxuXG4udGltZVRhYmxlVHJ7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBcblx0LyogdGFibGUtbGF5b3V0OiBmaXhlZDsgKi9cblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IHNtYWxsO1xuXHRoZWlnaHQ6IDE4JTtcbn1cblxuLmluZm9UYWJsZXtcbiAgICAvKnRhYmxlLWxheW91dDogZml4ZWQ7Ki9cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXG4gICAgLypib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlOyAgdGhlIGRlZmF1bHQgb3B0aW9uICovXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi5pbmZvVGFibGVUZHtcbiAgICB3aWR0aDogMTYlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaW5mb1RhYmxlVGQtc21hbGxlcntcbiAgICB3aWR0aDogMTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaW5mb1RhYmxlVHJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IFxufVxuXG4uaW5mb1RhYmxlSGVhZGVyVHJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5OyBcbn1cblxuLmluZm9UYWJsZU1vcmVJbmZvVGR7XG4gICAgY29sdW1uLXNwYW46IDc7XG4gICAgLypib3JkZXI6IDFweCBzb2xpZCBibGFjazsqL1xufVxuXG4uY291cnNlTGlzdFRhYmxle1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuLmNvdXJzZUxpc3RUYWJsZUhlYWRlclJvd3tcblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5OyBcbn1cblxuLmNvdXJzZUxpc3RUYWJsZVRke1xuICAgIHdpZHRoOiAyMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5jb3Vyc2VMaXN0VGl0bGU6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5lZGl0T3B0aW9uc1N1YlRhYmxle1xuXHR3aWR0aDoxMDAlO1xufVxuXG4uZWRpdE9wdGlvbnNUZHtcblx0d2lkdGg6MTAwJTtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lZGl0T3B0aW9uc0Rpdntcblx0LypmbG9hdDpyaWdodDsqL1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0bWFyZ2luLXJpZ2h0OiA4ZW07XG5cdG1hcmdpbi1sZWZ0OiA4ZW07XG59XG5cbi5jb3Vyc2VMaXN0VGFibGV7XG5cdHdpZHRoOjEwMCU7XG59XG5cbi5jb3Vyc2VMaXN0TWlkZGxlUm93V2lkdGgxMDBwZXJjZW50e1xuXHR3aWR0aDo3MCU7XG59XG5cbi5yZWREZWxldGV7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjRkNGQ7XG59XG5cbi5yZXZpZXdzdGFibGV7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXHR3aWR0aDogNzAlXG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-content',
                templateUrl: './home-content.component.html',
                styleUrls: ['../componentStyles.css']
            }]
    }], function () { return [{ type: _dataservice__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }, { type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _sharedDataInterface__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadingComponent {
    constructor() {
        this.loadingImg = 'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';
    }
    ngOnInit() { }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 2, vars: 1, consts: [[1, "spinner"], ["alt", "Loading...", 3, "src"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.loadingImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/login-button/login-button.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/login-button/login-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginButtonComponent", function() { return LoginButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");



class LoginButtonComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() { }
    loginWithRedirect() {
        this.auth.loginWithRedirect();
    }
}
LoginButtonComponent.ɵfac = function LoginButtonComponent_Factory(t) { return new (t || LoginButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginButtonComponent, selectors: [["app-login-button"]], decls: 2, vars: 0, consts: [[1, "btn", "btn-primary", "btn-block", 3, "click"]], template: function LoginButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginButtonComponent_Template_button_click_0_listener() { return ctx.loginWithRedirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Log in\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-button',
                templateUrl: './login-button.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/logout-button/logout-button.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/logout-button/logout-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: LogoutButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutButtonComponent", function() { return LogoutButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");




class LogoutButtonComponent {
    constructor(auth, doc) {
        this.auth = auth;
        this.doc = doc;
    }
    ngOnInit() { }
    logout() {
        this.auth.logout({ returnTo: this.doc.location.origin });
    }
}
LogoutButtonComponent.ɵfac = function LogoutButtonComponent_Factory(t) { return new (t || LogoutButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
LogoutButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutButtonComponent, selectors: [["app-logout-button"]], decls: 2, vars: 0, consts: [[1, "btn", "btn-danger", "btn-block", 3, "click"]], template: function LogoutButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutButtonComponent_Template_button_click_0_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Log out\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logout-button',
                templateUrl: './logout-button.component.html',
                styles: [],
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main-nav/main-nav.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/main-nav/main-nav.component.ts ***!
  \***********************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _sharedDataInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharedDataInterface */ "./src/app/components/sharedDataInterface.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function () { return { exact: true }; };
function MainNavComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function MainNavComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Management ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class MainNavComponent {
    constructor(auth, data) {
        this.auth = auth;
        this.data = data;
        this.admin = "mdelvec3@uwo.ca"; // todo backend
    }
    ngOnInit() {
        // getting user profile data so we can determin if we should render admin tab
        this.auth.user$.subscribe((profile) => {
            let profileJson = JSON.stringify(profile, null, 2);
            this.email = JSON.parse(profileJson).email;
            console.log("user email:" + this.email);
        });
        // get admin
        this.assignAdmin();
        //this.data.getAdmin.subscribe(message => this.message = message) cuz not an observable but might have to do that
    }
    // MOVED OUTSIDE BC USER HAS TO BE LOGGED IN
    // getting managers from sharedDataInterface
    getManagers() {
        this.managers = this.data.getManagers();
        console.log(this.managers);
    }
    assignAdmin() {
        //this.admin = this.data.getAdmin();    // todo setup admin and manager backend
        this.admin = "mdelvec3@uwo.ca";
    }
    // check if user is manager
    userIsManager() {
        if (!this.email) {
            return false;
        }
        if (!this.managers) {
            this.getManagers();
            console.log("getting managers");
        }
        if (this.managers.includes(this.email)) {
            return true;
        }
        else {
            return false;
        }
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sharedDataInterface__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], decls: 12, vars: 6, consts: [[1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "router-link-exact-active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/profile", "routerLinkActive", "router-link-exact-active", 1, "nav-link"], ["routerLink", "/policies", "routerLinkActive", "router-link-exact-active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["class", "nav-item", 4, "ngIf"], ["routerLink", "/admin", "routerLinkActive", "router-link-exact-active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/manager", "routerLinkActive", "router-link-exact-active", 1, "nav-link", 3, "routerLinkActiveOptions"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Policies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainNavComponent_div_10_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainNavComponent_div_11_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email == ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsManager());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBTztBQUNUIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-nav',
                templateUrl: './main-nav.component.html',
                styleUrls: ['./main-nav.component.css'],
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _sharedDataInterface__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/manager-content/manager-page-content/manager-page-content.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/manager-content/manager-page-content/manager-page-content.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ManagerPageContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerPageContentComponent", function() { return ManagerPageContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ManagerPageContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManagerPageContentComponent.ɵfac = function ManagerPageContentComponent_Factory(t) { return new (t || ManagerPageContentComponent)(); };
ManagerPageContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagerPageContentComponent, selectors: [["app-manager-page-content"]], decls: 2, vars: 0, template: function ManagerPageContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "manager-page-content works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerPageContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manager-page-content',
                templateUrl: './manager-page-content.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/components/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_button_login_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login-button/login-button.component */ "./src/app/components/login-button/login-button.component.ts");
/* harmony import */ var _logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logout-button/logout-button.component */ "./src/app/components/logout-button/logout-button.component.ts");







function NavBarComponent_app_login_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login-button");
} }
function NavBarComponent_app_logout_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-logout-button");
} }
class NavBarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 10, vars: 6, consts: [[1, "nav-container", "mb-3"], [1, "navbar", "navbar-expand-md", "navbar-light", "bg-light"], [1, "container"], [1, "navbar-brand", "logo"], [1, "navbar-nav", "ml-auto"], [4, "ngIf"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavBarComponent_app_login_button_6_Template, 1, 0, "app-login-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavBarComponent_app_logout_button_8_Template, 1, 0, "app-logout-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.auth.isAuthenticated$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx.auth.isAuthenticated$));
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_2__["MainNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _login_button_login_button_component__WEBPACK_IMPORTED_MODULE_4__["LoginButtonComponent"], _logout_button_logout_button_component__WEBPACK_IMPORTED_MODULE_5__["LogoutButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css'],
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/policies-content/policies-content.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/policies-content/policies-content.component.ts ***!
  \***************************************************************************/
/*! exports provided: PoliciesContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesContentComponent", function() { return PoliciesContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function PoliciesContentComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delvecchio Course Management Inc. Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from (the \u201CSite\u201D). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PERSONAL INFORMATION WE COLLECT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as \u201CDevice Information.\u201D We collect Device Information using the following technologies: - \u201CCookies\u201D are data files that are placed on your device or computer and often include an anonymous unique ide78ntifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org. - \u201CLog files\u201D track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps. - \u201CWeb beacons,\u201D \u201Ctags,\u201D and \u201Cpixels\u201D are electronic files used to record information about how you browse the Site. When we talk about \u201CPersonal Information\u201D in this Privacy Policy, we are talking both about Device Information and Order Information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "HOW DO WE USE YOUR PERSONAL INFORMATION?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns). We use you email information solely for login and authentication purposes and do not share nor disclose is to any company or service external to our website. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "SHARING YOUR PERSONAL INFORMATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " We use you email information solely for login and authentication purposes and do not share nor disclose is to any company or service external to our website. The only case in which we would share your Personal Information would be to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "DO NOT TRACK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\nPlease note that we do not alter our Site\u2019s data collection and use practices when we see a Do Not Track signal from your browser.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "DATA RETENTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\nWhen you sign up through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "CHANGES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\nWe may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CONTACT US");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\nFor more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at mdelvec33@uwo.ca or by mail using the details provided below: 2222 Manycourses St., London, ON, L1p0a6, Canada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PoliciesContentComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Acceptable use Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This acceptable use policy (\"Policy\") sets forth the general guidelines and acceptable and prohibited uses of the 3316-lab5.com website (\"Website\" or \"Service\") and any of its related products and services (collectively, \"Services\"). This Policy is a legally binding agreement between you (\"User\", \"you\" or \"your\") and this Website operator (\"Operator\", \"we\", \"us\" or \"our\"). By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. If you are entering into this Agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this Agreement, in which case the terms \"User\", \"you\" or \"your\" shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this Agreement, you must not accept this Agreement and may not access and use the Website and Services. You acknowledge that this Agreement is a contract between you and the Operator, even though it is electronic and is not physically signed by you, and it governs your use of the Website and Services. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Prohibited activities and uses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " You may not use the Website and Services to publish content or engage in activity that is illegal under applicable law, that is harmful to others, or that would subject us to liability, including, without limitation, in connection with any of the following, each of which is prohibited under this Policy: - Distributing malware or other malicious code. - Disclosing sensitive personal information about others. - Collecting, or attempting to collect, personal information about third parties without their knowledge or consent. - Distributing pornography or adult related content. - Promoting or facilitating prostitution or any escort services. - Hosting, distributing or linking to child pornography or content that is harmful to minors. - Promoting or facilitating gambling, violence, terrorist activities or selling weapons or ammunition. - Engaging in the unlawful distribution of controlled substances, drug contraband or prescription medications. - Managing payment aggregators or facilitators such as processing payments on behalf of other businesses or charities. - Facilitating pyramid schemes or other models intended to seek payments from public actors. - Threatening harm to persons or property or otherwise harassing behavior. - Infringing the intellectual property or other proprietary rights of others. - Facilitating, aiding, or encouraging any of the above activities through the Website and Services. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "System abuse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Any User in violation of the Website and Services security is subject to criminal and civil liability, as well as immediate account termination. Examples include, but are not limited to the following: Use or distribution of tools designed for compromising security of the Website and Services. Intentionally or negligently transmitting files containing a computer virus or corrupted data. Accessing another network without permission, including to probe or scan for vulnerabilities or breach security or authentication measures. Unauthorized scanning or monitoring of data on any network or system without proper authorization of the owner of the system or network. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Service resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " You may not consume excessive amounts of the resources of the Website and Services or use the Website and Services in any way which results in performance issues or which interrupts the Services for other Users. Prohibited activities that contribute to excessive use, include without limitation: - Deliberate attempts to overload the Website and Services and broadcast attacks (i.e. denial of service attacks). - Engaging in any other activities that degrade the usability and performance of the Website and Services. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "No spam policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " You may not use the Website and Services to send spam or bulk unsolicited messages. We maintain a zero tolerance policy for use of the Website and Services in any manner associated with the transmission, distribution or delivery of any bulk e-mail, including unsolicited bulk or unsolicited commercial e-mail, or the sending, assisting, or commissioning the transmission of commercial e-mail that does not comply with the U.S. CAN-SPAM Act of 2003 (\"SPAM\"). Your products or services advertised via SPAM (i.e. Spamvertised) may not be used in conjunction with the Website and Services. This provision includes, but is not limited to, SPAM sent via fax, phone, postal mail, email, instant messaging, or newsgroups. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Defamation and objectionable content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " We value the freedom of expression and encourage Users to be respectful with the content they post. We are not a publisher of User content and are not in a position to investigate the veracity of individual defamation claims or to determine whether certain material, which we may find objectionable, should be censored. However, we reserve the right to moderate, disable or remove any content to prevent harm to others or to us or the Website and Services, as determined in our sole discretion. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Copyrighted content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Copyrighted material must not be published via the Website and Services without the explicit permission of the copyright owner or a person explicitly authorized to give such permission by the copyright owner. Upon receipt of a claim for copyright infringement, or a notice of such violation, we may, at our discretion, run an investigation and, upon confirmation, may remove the infringing material from the Website and Services. We may terminate the Service of Users with repeated copyright infringements. Further procedures may be carried out if necessary. We will assume no liability to any User of the Website and Services for the removal of any such material. If you believe your copyright is being infringed by a person or persons using the Website and Services, please get in touch with us to report copyright infringement. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Security");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " You take full responsibility for maintaining reasonable security precautions for your account. You are responsible for protecting and updating any login account provided to you for the Website and Services. You must protect the confidentiality of your login details, and you should change your password periodically. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Enforcement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " We reserve our right to be the sole arbiter in determining the seriousness of each infringement and to immediately take corrective actions, including but not limited to: - Suspending or terminating your Service with or without notice upon any violation of this Policy. Any violations may also result in the immediate suspension or termination of your account. - Disabling or removing any content which is prohibited by this Policy, including to prevent harm to others or to us or the Website and Services, as determined by us in our sole discretion. - Reporting violations to law enforcement as determined by us in our sole discretion. - A failure to respond to an email from our abuse team within 2 days, or as otherwise specified in the communication to you, may result in the suspension or termination of your account. - Suspended and terminated User accounts due to violations will not be re-activated. Nothing contained in this Policy shall be construed to limit our actions or remedies in any way with respect to any of the prohibited activities. In addition, we reserve at all times all rights and remedies available to us with respect to such activities at law or in equity. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Reporting violations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " If you have discovered and would like to report a violation of this Policy, please contact us immediately. We will investigate the situation and provide you with full assistance. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Changes and amendments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " We reserve the right to modify this Policy or its terms relating to the Website and Services at any time, effective upon posting of an updated version of this Policy on the Website. When we do, we will revise the updated date at the bottom of this page. Continued use of the Website and Services after any such changes shall constitute your consent to such changes. Policy was created with WebsitePolicies. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Acceptance of this policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Website and Services. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contacting us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to it, you may send an email to lab5-email@uwo.ca This document was last updated on December 6, 2020 This policy is publicly accessible via: https://www.websitepolicies.com/policies/view/lnfirD1e\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PoliciesContentComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "If you believe your content has been taken down in error, or wish to contest a DMCA notice, you can submit a counter-notice to the service provider. A successful counter-notification will typically remove any \"strikes\" against your account relating to the particular notice. A counter-notification must include:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "(A) your physical or electronic signature;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "(B) an identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(C) a statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(D) your name, address, and telephone number; and");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "(E) a statement that you consent to the jurisdiction of Federal District Court for the judicial district in which you reside, or if you live outside of the United States, for any judicial district in which Twitch may be found, and that you will accept service of process from the organization or an agent of the organization.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Unless the copyright holder files a copyright infringement lawsuit against you after receiving your counter-notice, your content will typically be restored to the platform. If the copyright holder does file a lawsuit against you, expect the content to remain offline until the lawsuit is resolved.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Repeat Infringement As part of the DMCA, companies are required to implement a repeat infringer policy. If your account is subject to multiple successful claims, you can expect that account to be terminated. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class PoliciesContentComponent {
    constructor() {
        this.showDCMA = false;
        this.showPrivacy = false;
        this.showAcceptableUse = false;
    }
    ngOnInit() {
    }
    toggleDCMA() {
        if (this.showDCMA) {
            this.showDCMA = false;
        }
        else {
            this.showDCMA = true;
        }
    }
    toggleShowAcceptableuse() {
        if (this.showAcceptableUse) {
            this.showAcceptableUse = false;
        }
        else {
            this.showAcceptableUse = true;
        }
    }
    toggleShowPrivacy() {
        if (this.showPrivacy) {
            this.showPrivacy = false;
        }
        else {
            this.showPrivacy = true;
        }
    }
}
PoliciesContentComponent.ɵfac = function PoliciesContentComponent_Factory(t) { return new (t || PoliciesContentComponent)(); };
PoliciesContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PoliciesContentComponent, selectors: [["app-policies-content"]], decls: 14, vars: 3, consts: [[3, "click"], [4, "ngIf"]], template: function PoliciesContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " does its best to provide you with the functionalitites and services you need for your Western course needs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Below is information regarding our site policies and terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PoliciesContentComponent_Template_button_click_5_listener() { return ctx.toggleShowPrivacy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PoliciesContentComponent_ng_container_7_Template, 30, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PoliciesContentComponent_Template_button_click_8_listener() { return ctx.toggleShowAcceptableuse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Acceptable Use Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PoliciesContentComponent_ng_container_10_Template, 41, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PoliciesContentComponent_Template_button_click_11_listener() { return ctx.toggleDCMA(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "DCMA Notice & Takedown Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PoliciesContentComponent_ng_container_13_Template, 19, 0, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPrivacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAcceptableUse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDCMA);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoliciesContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-policies-content',
                templateUrl: './policies-content.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/sharedDataInterface.ts":
/*!***************************************************!*\
  !*** ./src/app/components/sharedDataInterface.ts ***!
  \***************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

//import { BehaviorSubject } from 'rxjs';



class DataService {
    // might need to do this
    //currentManagers = this.managers.asObservable();
    //currentAdmin = this.admin.asObservable();
    constructor(http) {
        this.http = http;
        // admin email is adminemail123@gmail.com
        // pass is same 
        this.admin = "adminemail123@gmail.com";
        this.managers = ["marcusdel2112@rogers.com", "adminemail123@gmail.com"];
        this.users = [];
        this.getAdminString = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dev.apiUrl + "/api/admin/get";
        this.getManagersString = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dev.apiUrl + "/api/manager/get";
        this.getUsersString = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dev.apiUrl + "/api/user/get";
    }
    getAdmin() {
        return this.admin;
    }
    removeManager(email) {
        // find and remove specified email
        for (let i = 0; i < this.managers.length; i++) {
            if (email == this.managers[i]) {
                this.managers.splice(i, 1);
            }
        }
    }
    // might break cuz theres more prperties than just user
    getManagers() {
        this.getManagersFromApi().subscribe(returnedObj => {
            for (let object of returnedObj) {
                this.managers.push(object.email);
            }
            console.log(this.managers);
        });
        return this.managers;
    }
    getUsers() {
        this.getUsersFromApi().subscribe(returnedObj => {
            for (let object of returnedObj) {
                this.users.push(object.email);
            }
        });
        return this.users;
    }
    addManager(email) {
        if (!this.managers.includes(email)) {
            this.managers.push(email);
        }
        else {
            console.log("email already included in managers lists");
        }
    }
    getManagersFromApi() {
        return this.http.get(this.getManagersString);
    }
    ;
    getUsersFromApi() {
        return this.http.get(this.getUsersString);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/admin/admin/admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/admin/admin/admin.component.ts ***!
  \******************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _components_sharedDataInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/sharedDataInterface */ "./src/app/components/sharedDataInterface.ts");
/* harmony import */ var _components_admin_content_admin_page_content_admin_page_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/admin-content/admin-page-content/admin-page-content.component */ "./src/app/components/admin-content/admin-page-content/admin-page-content.component.ts");





class AdminComponent {
    constructor(auth, data) {
        this.auth = auth;
        this.data = data;
    }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_sharedDataInterface__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 2, vars: 0, template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-admin-page-content");
    } }, directives: [_components_admin_content_admin_page_content_admin_page_content_component__WEBPACK_IMPORTED_MODULE_3__["AdminPageContentComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _components_sharedDataInterface__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/home-content/home-content.component */ "./src/app/components/home-content/home-content.component.ts");



class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-content");
    } }, directives: [_components_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_1__["HomeContentComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/managers/manager/manager.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/managers/manager/manager.component.ts ***!
  \*************************************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _components_sharedDataInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/sharedDataInterface */ "./src/app/components/sharedDataInterface.ts");
/* harmony import */ var _components_manager_content_manager_page_content_manager_page_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/manager-content/manager-page-content/manager-page-content.component */ "./src/app/components/manager-content/manager-page-content/manager-page-content.component.ts");





class ManagerComponent {
    constructor(auth, data) {
        this.auth = auth;
        this.data = data;
    }
    ngOnInit() {
    }
}
ManagerComponent.ɵfac = function ManagerComponent_Factory(t) { return new (t || ManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_sharedDataInterface__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
ManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagerComponent, selectors: [["app-manager"]], decls: 2, vars: 0, template: function ManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-manager-page-content");
    } }, directives: [_components_manager_content_manager_page_content_manager_page_content_component__WEBPACK_IMPORTED_MODULE_3__["ManagerPageContentComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manager',
                templateUrl: './manager.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _components_sharedDataInterface__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/policies/policies.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/policies/policies.component.ts ***!
  \******************************************************/
/*! exports provided: PoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesComponent", function() { return PoliciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_policies_content_policies_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/policies-content/policies-content.component */ "./src/app/components/policies-content/policies-content.component.ts");



class PoliciesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PoliciesComponent.ɵfac = function PoliciesComponent_Factory(t) { return new (t || PoliciesComponent)(); };
PoliciesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PoliciesComponent, selectors: [["app-policies"]], decls: 2, vars: 0, template: function PoliciesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-policies-content");
    } }, directives: [_components_policies_content_policies_content_component__WEBPACK_IMPORTED_MODULE_1__["PoliciesContentComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoliciesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-policies',
                templateUrl: './policies.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ProfileComponent_div_9_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.profileJson);
} }
function ProfileComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_9_div_9_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r1.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.profileJson);
} }
class ProfileComponent {
    constructor(auth) {
        this.auth = auth;
        this.profileJson = null;
    }
    ngOnInit() {
        this.auth.user$.subscribe((profile) => (this.profileJson = JSON.stringify(profile, null, 2)));
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 11, vars: 3, consts: [[4, "ngIf"], [1, "row", "align-items-center", "profile-header"], [1, "col-md-2", "mb-3"], ["alt", "User's profile picture", 1, "rounded-circle", "img-fluid", "profile-picture", 3, "src"], [1, "col-md", "text-center", "text-md-left"], [1, "lead", "text-muted"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-12", "text-light", "bg-dark", "p-4"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " You use will use an ID Token to get the profile information of a logged-in user. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This route should be protected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_div_9_Template, 10, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


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
/* harmony import */ var _auth_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth_config.json */ "./auth_config.json");
var _auth_config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../auth_config.json */ "./auth_config.json", 1);
//import { domain, clientId, audience, apiUrl } from '../../auth_config.json';

const environment = {
    production: false,
    auth: {
        domain: _auth_config_json__WEBPACK_IMPORTED_MODULE_0__["domain"],
        clientId: _auth_config_json__WEBPACK_IMPORTED_MODULE_0__["clientId"],
        redirectUri: window.location.origin,
        audience: _auth_config_json__WEBPACK_IMPORTED_MODULE_0__["audience"],
    },
    dev: {
        apiUrl: _auth_config_json__WEBPACK_IMPORTED_MODULE_0__["apiUrl"],
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marcusdelvecchio/sy3/se3316/labs/lab5/se3316-mdelvec3-lab5/lab5-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map