angular.module('jobApp')
.controller('ApplicantCreateController', [function() {
  this.saveApplicant = function(applicant){
    $http({method: 'POST', url: '/applicants', data: applicant});
  };
}]);