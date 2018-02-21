'use strict';

angular.module('LocoLinkApp')
	.directive('header',function(){
		return {
	        templateUrl:'ng/directives/header/header.tmpl.html',
	        restrict: 'E',
	        replace: true,
	        controller : function($scope){

	        }
		}
	});


