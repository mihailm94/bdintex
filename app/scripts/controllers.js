'use strict';

angular.module('bdintex', [])

	.controller('GalleryController', ['$scope','shirtFactory', function($scope, shirtFactory){
		$scope.shirts = shirtFactory.getShirts();
	}])

	.controller('CarouselController', ['$scope', function($scope){
		
	}])
;
