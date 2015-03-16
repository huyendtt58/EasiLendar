/**
 * starter: Can Duy Cat
 * owner: Ngo Duc Dung
 * last update: 17/03/2015
 * type: friend panel controller
 */

angular.module('MainApp.controllers.sideMenu.friendPanel', [])

.controller('friendPanelController', function($scope, $rootScope, $ionicPopup) {
     $scope.searchFriend = '';
     $scope.mShow = false;	
     $scope.avatars = ["img/ava1.png","img/ava2.png","img/ava3.png","img/ava4.png",
                      "img/ava5.png","img/ava6.png","img/ava7.png","img/ava8.png"
                      ];
     $scope.friends = [
                         {image: $scope.avatars[0], name:'Ngo Duc Dung', status: "I'm busy now", vip: false},
                         {image: $scope.avatars[7], name:'Nguyen Thi Luong', status: "I'm free now", vip: false},
                         //{image:"img/ava1.png", name:'Can Duy Cat', status: "I'm busy now", vip: true},
                         {image: $scope.avatars[4], name:'Nguyen Minh Trang', status: "I'm busy now", vip:true},
                         {image: $scope.avatars[0], name:'Nguyen Manh Duy', status: "I'm free now", vip: false},
                         {image: $scope.avatars[5], name:'Taylor Swiff', status: "I'm busy now", vip: true},
                         {image: $scope.avatars[1], name:'Johnny Depp', status: "I'm busy now", vip: true},
                         {image: $scope.avatars[6], name:'Katty Perry', status: "I'm busy now", vip: true},
                         {image: $scope.avatars[2], name:'Barack Obama', status: "I'm busy now", vip: true},
                         {image: $scope.avatars[1], name:'Justin Timberlake', status: "I'm busy now", vip:true},
                         {image: $scope.avatars[0], name:'Justin Bieber', status: "I'm free now", vip: false},
                         {image: $scope.avatars[5], name:'Emma Stone', status: "I'm free now", vip: true},
                         {image: $scope.avatars[7], name:'Meryl Streep', status: "I'm busy now", vip: true},
                         {image: $scope.avatars[6], name:'Kim kardashian', status: "I'm free now", vip: true},
                         {image: $scope.avatars[0], name:'Cristiano Ronaldo', status: "I'm busy now", vip: true},
                         {image: $scope.avatars[1], name:'Tom Cruise', status: "I'm busy now", vip: true},
                         {image: $scope.avatars[1], name:'Brad Pitt', status: "I'm busy now", vip: true},
                         {image: $scope.avatars[4], name:'Nguyen Ngoc Mai Anh', status: "I'm free now", vip: false},
                         {image: $scope.avatars[2], name:'Luu Hieu Minh', status: "I'm free now", vip: false},
       		];
    
      $scope.deleteFriend = function(friend){
      		$scope.friends.splice($scope.friends.indexOf(friend),1);
      }

      $scope.viewProfile = function(friend){
         $rootScope.eFriend.fName = $scope.friends[$scope.friends.indexOf(friend)].name;
         $rootScope.eFriend.fAvatar = friend.image;
      }
})

.directive('togglefriend', function($document){  
       return {
            restrict: 'E',    
            link: function(scope, element, attr, $index) {
                  scope.visible = false;
                  scope.toggleFunc = function(){
                        scope.visible = !scope.visible;
                  };
                  $document.bind('click',function(event){
                        var isClickedElement = element.find(event.target).length > 0;
                        if (isClickedElement) return;
                        scope.visible = false;
                        scope.$apply();
                  });
            }
      };  
})

.directive('slideToggleFriend', function() {  
      return {
            restrict: 'A',      
            scope:{
            isOpen: "=slideToggleFriend"
            },  
            link: function(scope, element, attr) {
                  element.hide();
                  scope.$watch('isOpen', function(newVal,oldVal){
                    if(newVal !== oldVal){ 
                      element.stop().slideToggle(200);
                    }
                });
          }
      };  
})

.directive('opacitySearchInput',function(){
	return{
		restrict: 'A',
		link: function(scope,element,attrs){
			element.bind('focus',function(){
				element.parent().removeClass('search-friend-input-blur');
				element.parent().addClass('search-friend-input-focus');
			});
			element.bind('blur',function(){
				element.parent().addClass('search-friend-input-blur');
			});
		}
	};
})

