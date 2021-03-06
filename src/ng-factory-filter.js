var a = angular.module('ngFactoryFilter', []);


a.factory('factoryFilter', ['$q', function($q) {
	return {
		trigger: function (haystack, columnName, filterText) {
			var filteredList = [];
			return $q(function(resolve, reject) {
				if(filterText == "") {
					resolve(haystack);
				}
				else {
					angular.forEach(haystack, function(data, key){
						var pl_name = data[columnName].toLowerCase();

						if(pl_name.indexOf(filterText.toLowerCase()) > -1){
							filteredList.push(data);
						}

					});
					resolve(filteredList);
				}
			});
		}
	}
}]);