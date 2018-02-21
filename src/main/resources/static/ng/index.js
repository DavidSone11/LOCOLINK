'use strict';


var app = angular
  .module('LocoLinkApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'flow',
    'ngResource',
    'smart-table',
    'ngAnimate',
    'ngCookies',
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

