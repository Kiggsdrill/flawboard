'use strict';

/*angular.module('flawwengApp')
.directive('sidebarleft', function () {
	return {
		templateUrl: 'components/sidebar/sidebar-left.html',
		restrict: 'E',
		controller: 'SidebarLeftCtrl'
	};

})
.directive('showSideBar', function(){
	return{
		restrict: 'A',
		link: function (scope, element, attrs){
			element.bind('click', function(event){
				event.preventDefault();
				angular.element('div#main').toggleClass('sidebar-hide');
			});
		}
	}
}); */

angular.module('flawboardApp')
  .directive('sidebarleft', () => ({
    templateUrl: 'components/sidebar/sidebar-left.html',
    restrict: 'E',
    controller: 'SidebarLeftCtrl',
    controllerAs: 'sidebarleft'
  }));
