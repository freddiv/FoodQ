angular.module('jobApp')
.controller('QuestionController', function($http){
    var questions,
    controller = this;
     $http({method:'GET', url:'/questions'})
     .success(function(data){
       controller.questions = data;
     });
   });