'use strict';

angular.module('bdintex')
	
		.factory('shirtFactory', function(){
			var factory = {};
			var shirts = [
			{
				_id: 0,
				name: 'shirt1',
				image: 'img/shirt1.png'
			},
			{
				_id: 1,
				name: 'shirt2',
				image: 'img/shirt2.png'
			},
			{
				_id: 2,
				name: 'shirt3',
				image: 'img/shirt3.png'
			},
			{
				_id: 3,
				name: 'shirt4',
				image: 'img/shirt4.png'
			},
			{
				_id: 4,
				name: 'shirt5',
				image: 'img/shirt5.png'
			},
			{
				_id: 5,
				name: 'shirt6',
				image: 'img/shirt6.png'
			},

			];

			factory.getShirts = function(){
				return shirts;
			};
			factory.getShirt = function(index){
				return shirts[index];
			};
			return factory;

		})

;