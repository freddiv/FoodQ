'use strict'

angular.module('jobApp', [ 'ngRoute' ])
.controller('AddApplicantController', function($scope) {
    
    $scope.h2 = 'Please create an account';
    $scope.p = 'Create an account using your email address. You can then answer our Applicant Questionaire.';
})
.controller('ShowApplicantsController', function($scope) {
 
    $scope.message = 'This is the Show Applicants screen';
 
})
.controller('WelcomeController', function($scope) {
	 
    $scope.message = 'This is the Welcome screen';
 
});