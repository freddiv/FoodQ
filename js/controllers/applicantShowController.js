angular.module('jobApp')
.controller('ApplicantShowController', ['$routeParams','$http', function($routeParams,$http) {
	var controller = this;
	  $http({ method: "get", url: "/applicants/" + $routeParams.id}).success(function(data){
	    controller.applicant = data;
	  });
	}] );