'use strict';

angular.module('financeRegisterApp')
.controller('MainCtrl', function ($scope) {

});

angular.module('financeRegisterApp')
.controller('ProductsCtrl', function ($scope, localStorageService) {
	$scope.productsArray = [];
	
	(function fetchProducts() {
		var keyArray = localStorageService.keys();
		var resultArray = [];
		for(var i = 0; i < keyArray.length; i++) {
			resultArray.unshift( localStorageService.get( keyArray[i] ) );
			resultArray[0].id = keyArray[i];
		}

		$scope.productsArray = resultArray;
	})()

	$scope.getProducts = function() {
		return $scope.productsArray;//fetchProducts();
		//return localStorageService.get('localStorageKey');
	}
});

angular.module('financeRegisterApp')
.controller('ProductsCreateCtrl', function ($scope, localStorageService, $location) {
	$scope.product = {}
	$scope.addProduct = function(isValid) {
		
		if (isValid) {
			$scope.product.createdAt = new Date();
			localStorageService.add( new Date().getTime() ,$scope.product);

			$location.path('/products');
		}
	}

	$scope.cancel = function() {

		$location.path('/products');
	}
});

angular.module('financeRegisterApp')
.controller('ProductEditCtrl', function ($scope, localStorageService, $location, $routeParams) {
	(function() {
		$scope.product = localStorageService.get( $routeParams.productId );
	})()

	$scope.saveProduct = function( isValid ) {

		if (isValid) {
			localStorageService.set( $routeParams.productId , $scope.product );
			$location.path('/products');
		}
	}

	$scope.deleteProduct = function() {
		localStorageService.remove( $routeParams.productId );
		$location.path('/products');
	}

	$scope.newProductFromThisItem = function() {
		$scope.product.createdAt = new Date();
		localStorageService.add( new Date().getTime() ,$scope.product);
		$location.path('/products');
	}
});