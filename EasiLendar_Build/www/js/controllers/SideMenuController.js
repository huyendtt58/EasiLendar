angular.module('MainApp.controllers.sideMenu',['MainApp.controllers.sideMenu.friendPanel']).controller('sideMenuController',function($scope,$ionicSideMenuDelegate){$scope.toggleLeft=function(){$ionicSideMenuDelegate.toggleLeft();};}).directive('friendPanel',function(){return{restrict:'E',templateUrl:'templates/friend-panel.html',}}).directive('menuPanel',function(){return{restrict:'E',templateUrl:'templates/menu-panel.html',}})