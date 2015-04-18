var signIn=angular.module('MainApp.controllers.signIn',['ionic']);signIn.controller('SignInController',function($rootScope,$scope,$timeout,$http,$state,$ionicLoading,$ionicPopup){var link=$rootScope.eSettings.sDefaultView;$scope.isRemember=false;$scope.warnings={mes:["","","","",""],reset:function(num){this.mes[num]=""},check:function(num){if(this.mes[num]==""){return true}else return false}};$scope.user=new User();var showAlert=function(){var alertPopup=$ionicPopup.alert({title:'Registered!',template:'Welcome to EasiLendar!',});$timeout(function(){alertPopup.close()},3000)};$scope.signIn=function(){if(!$scope.user.checkChar()){$rootScope.goToState('warning')}else{var id=$scope.user.id;var pass=$scope.user.password;var ref=new Firebase("https://radiant-inferno-3243.firebaseio.com/Users/"+id);$rootScope.databaseLoading();ref.once("value",function(snapshot){var user=snapshot.val();if(user==null||user.password!=pass){$rootScope.goToState('warning')}else{$rootScope.eUser={uID:id,uName:user.name,uAvatar:user.avatar,uEmail:user.gmail,uPassword:pass,uRemember:$scope.isRemember,uFriend:user.friends,uVIP:user.VIP,isLogin:true,uRequested:user.requested,uGmailCalendar:user.g_calendar,uLocalCalendar:user.local_calendar,uFRequest:(user.noti==null?null:user.noti.fRequest),uFAccepted:(user.noti==null?null:user.noti.fAccept),uFRLength:0,uFALength:0,};$rootScope.eUser.uGmailCalendar=$rootScope.convertCal($rootScope.eUser.uGmailCalendar);$rootScope.eUser.uLocalCalendar=$rootScope.convertCal($rootScope.eUser.uLocalCalendar);$rootScope.setUFRL();$rootScope.setUFAL();$scope.user.reset();$rootScope.goHome()}},function(errorObject){$rootScope.goToState('warning')})}};$scope.register=function(){for(var i=0;i<5;i++){$scope.warnings.reset(i)}var flag=[];var check=false;flag[0]=$scope.user.checkID();flag[1]=$scope.user.checkName();flag[2]=$scope.user.checkEmail();flag[3]=$scope.user.checkPass();flag[4]=$scope.user.checkCPass();for(var i=0;i<5;i++){if(typeof(flag[i])=="string"){$scope.warnings.mes[i]=flag[i];check=true}}if(!check){var ref=new Firebase("https://radiant-inferno-3243.firebaseio.com/Users/"+$scope.user.id);$rootScope.databaseLoading();ref.once('value',function(snapshot){if(snapshot.val()!=null){$scope.warnings.mes[0]="Existed";check=true}if(!check){var pos=$scope.user.email.search("@");var mail;if(pos==-1){mail=$scope.user.email}else{mail=$scope.user.email.slice(0,pos)}ref.set({name:$scope.user.name,password:$scope.user.password,avatar:0,VIP:0,gmail:mail,});showAlert();$scope.user.reset();$rootScope.goToState('form')}})}};function User(){this.id="";this.name="";this.email="";this.password="";this.re_password="";this.reset=function(){this.id="";this.name="";this.email="";this.password="";this.re_password=""};this.checkChar=function(){if(this.id.length>15||this.id.length<4)return false;for(var i=0;i<this.id.length;i++){if(this.id.charCodeAt(i)<48)return false;else if(this.id.charCodeAt(i)>57&&this.id.charCodeAt(i)<65)return false;else if(this.id.charCodeAt(i)>90&&this.id.charCodeAt(i)<97&&this.id.charCodeAt(i)!=95)return false;else if(this.id.charCodeAt(i)>122)return false}return true};this.checkID=function(){if(this.id==""){return"Required"}else if(!this.checkChar()){if(this.id.length<4){return"ID is too short"}else if(this.id.length>15){return"ID is too long"}else{return"Unexpected"}}else{return true}};this.checkName=function(){if(this.name==""){return"Required"}return true};this.checkEmail=function(){if(this.email==""){return"Required"}else if(-1==this.email.search("@gmail.com")){return"Unvalid Email"}return true};this.checkPass=function(){if(this.password==""){return"Required"}else if(this.password.length<8){return"Too short"}else if(this.password.length>16){return"Too long"}return true};this.checkCPass=function(){if(this.re_password==""){return"Required"}else if(this.re_password!=this.password){return"Not match"}return true}}});
