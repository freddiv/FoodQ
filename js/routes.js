// routes.js
angular.module('jobApp')
.config( ['$routeProvider', function($routeProvider) {
    $routeProvider

      .when('/addApplicant', {
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
  }])