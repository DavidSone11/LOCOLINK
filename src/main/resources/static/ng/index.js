'use strict';


var app = angular
  .module('LocoLinkApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'flow',
    'ngResource',
    'ngSanitize',
    'angucomplete-alt',
    'smart-table',
    'ngAnimate',
    'AxelSoft',
    'ngCookies',
    'angular-confirm',
    'toaster',
    'ngSanitize'

  ]).factory('TokenInterceptor', function($q, $window,$location) {
	  return {
		    request: function(config) {
		      config.headers = config.headers || {};
		      if ($window.sessionStorage.token) {
		        config.headers['X-Access-Token'] = $window.sessionStorage.token;
		        config.headers['X-Key'] = $window.sessionStorage.user;
		        config.headers['Content-Type'] = config.headers['Content-Type'] || "application/json";
		      }
		      return config || $q.when(config);
		    },

		    response: function(response) {
		    	if(response.status === 401 || response.status === 403) {
	                /* I need to resend the same request with token included here
	                 * if the token exist in local storage
	                 */
	                $location.path('/login');
	            }
		      return response || $q.when(response);
		    }
		  };
		})
  app.config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider','$httpProvider',
           function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider,$httpProvider) {


    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'ng/directives/dashboard/dashboard.tmpl.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'LocoLinkApp',
                    files:[
                    'ng/directives/header/header.directive.js',
                    'ng/directives/sidebar/sidebar.directive.js',

                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'homeCtrl',
        templateUrl:'ng/directives/home/home.tmpl.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'LocoLinkApp',
              files:[
              'ng/controllers/home.controller.js'
              ]
            })
          }
        }
      });

   $httpProvider.interceptors.push('TokenInterceptor');
  }]);

