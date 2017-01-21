var a = angular.module('ngFactoryFilter', []);


a.factory('factoryFilter', ['$q', function($q) {
	return {
		trigger: function (haystack, filterText) {
			var filteredList = [];
			return $q(function(resolve, reject) {
				filteredList = haystack;
				resolve(filteredList);
			});
		}
	}
}]);