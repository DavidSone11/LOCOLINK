'use strict';

angular.module('LocoLinkApp')
	.directive('sidebar',function(){
		return {
	        templateUrl:'ng/directives/sidebar/sidebar.tmpl.html',
	        restrict: 'E',
	        replace: true,
	        controller : function($scope){

	        }
		}
	});


