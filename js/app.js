'use strict'

var jobApp = angular.module('jobApp', [ 'ngRoute' ]);
  
jobApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addApplicant', {
        templateUrl: 'templates/applicants/add.html',
        controller: 'AddApplicantController',
        controolerAs: "addApplicantCtrl"
      }).
      when('/showApplicants', {
        templateUrl: 'templates/show-applicants.html',
        controller: 'ShowApplicantsController'
      })
      .
      when('/welcome', {
        templateUrl: 'templates/welcome.html',
        controller: "WelcomeController",
        controolerAs: "welcomeCtrl"
      }).
      otherwise({
        redirectTo: '/welcome'
      });
  }]);

jobApp.controller('AddApplicantController', function($scope) {
    
    $scope.h2 = 'Please create an account';
    $scope.p = 'Create an account using your email address. You can then answer our Applicant Questionaire.';
});
 
 
jobApp.controller('ShowApplicantsController', function($scope) {
 
    $scope.message = 'This is the Show Applicants screen';
 
});

jobApp.controller('WelcomeController', function($scope) {
	 
    $scope.message = 'This is the Welcome screen';
 
});