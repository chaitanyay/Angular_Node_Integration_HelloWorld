var helloWorldAngularModule = angular.module('helloWorldModule', []);

function helloWorldController($scope, $http) {
	
	$scope.showMessage = function() {
		var data=$scope.formData;
		$http.post('/api/showMessage',data).success(function(response) {
			if (response)
				$scope.responseMessage = response;
				}, function (response) {
				$scope.msg = "Service not Exists";
				$scope.statusval = response.status;
				$scope.statustext = response.statusText;
				$scope.headers = response.headers();
				});
	};
}
