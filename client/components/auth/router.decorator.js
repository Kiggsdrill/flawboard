'use strict';

(function() {

angular.module('flawboardApp.auth')
  .run(function($rootScope, $location, Auth) {    
    // Redirect to login if route requires auth and the user is not logged in, or doesn't have required role
    $rootScope.$on('$routeChangeStart', function(event, next) {    
      if(!next.authenticate) {
        return;
      }

      let query = typeof next.authenticate === 'string' ? Auth.hasRole : Auth.isLoggedIn;
      if(!Auth.isLoggedIn()){
        $location.path('/login');
      }
     /* query(1,2).then(good => {
        if(!good) {
          event.preventDefault();
          console.log(good);
          Auth.isLoggedIn().then(is => {
            $location.path(is ? '/' : '/login');
          });
        }
      }); */

    });    
  });

})();
