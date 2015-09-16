'use strict'

angular.module('jobApp.directives',[]);

angular.module('jobApp.directives').directive('appVersion',function(version){
	return {
		restrict: 'AE',
		link: function(scope,elem,attrs){
			elem.html(version);
		}
	}	
});