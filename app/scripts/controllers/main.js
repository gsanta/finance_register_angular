'use strict';

angular.module('financeRegisterApp')
.controller('MainCtrl', function ($scope) {

});

angular.module('financeRegisterApp')
.controller('ProductsCtrl', function ($scope, localStorageService) {
	localStorageService.add('localStorageKey','Add this!');
});

angular.module('financeRegisterApp')
.controller('ProductsCreateCtrl', function ($scope, localStorageService) {
	$scope.product = {}
	$scope.addProduct = function() {
		localStorageService.add(0,$scope.product);
	}
});