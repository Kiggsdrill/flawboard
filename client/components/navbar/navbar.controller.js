'use strict';

class NavbarController {
  //start-non-standard

  messages=[{
    author:'Shakira',
    message: 'Whenever wherever!',
    date: 'Today'
  },{
    author:'Rihanna',
    message: 'Bitch better have my money!',
    date: 'Today'

  }];

  isCollapsed = true;
  //end-non-standard

  constructor($location, Auth) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser; 
  }

  isActive(route) {
    return route === this.$location.path();
  }

  add(){
    this.messages.push({
      author:'Britney',
      message: 'LOL',
      date: 'Today'

    });
  }

}

angular.module('flawboardApp')
.controller('NavbarController', NavbarController);
