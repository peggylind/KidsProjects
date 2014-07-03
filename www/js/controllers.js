'use strict';

/* Controllers */

var KidsControllers = angular.module('KidsControllers',['ui.router','angular-gestures']);

KidsControllers.controller('MainCtrl', ['$scope',
  function($scope) {
//      $scope.cx = 50;
//    $scope.myDrag = function($event) {
//        console.log($event.gesture);
//        $scope.gesture = $event.gesture;
//    };
    $scope.type = '--';      
    $scope.handleGesture = function($event) {
//http://stackoverflow.com/questions/10246305/android-browser-touch-events-stop-display-being-updated-inc-canvas-elements-h/10495741#10495741
        function touchHandlerDummy(e) 
            {
                e.preventDefault();
                return false;
            }
        document.addEventListener("touchstart", touchHandlerDummy, false);
        document.addEventListener("touchmove", touchHandlerDummy, false);
        document.addEventListener("touchend", touchHandlerDummy, false);
        console.log($event.type)
        $scope.type = $event.type;
        $scope.gesture = $event.gesture;
        $scope.topPostion = $event.gesture.center.pageY;
    };
    $scope.alert = function(text){
        alert(text);
    };
  }])
.directive('moveDiver', function() {
  return {
    restrict: 'AE',
    replace: true,
    template: '<p style="background-color:{{color}}">Hello World',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        elem.css('background-color', 'white');
        scope.$apply(function() {
          scope.color = "white";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
      });
    }
  };
});
//.controller('loginCtrl', ['$scope', 'databaseConnection',
//  function($scope, $rootScope, databaseConnection) {
//    $scope.submit = function() {
//        if ($scope.userName && $scope.passWord) {
//            $scope.loginMsg = "Thank you for logging in!";
//            $scope.loginResult = databaseConnection.login({userName:$scope.userName, passWord:$scope.passWord});
//            $scope.userName = '';
//            $scope.passWord = '';
//        } else if (!$scope.userName) {
//            $scope.loginMsg = "Please enter your username!";
//            $scope.loginResult = "";
//        } else if (!$scope.passWord) {
//            $scope.loginMsg = "Please enter your password!";
//            $scope.loginResult = "";
//        }
//    };
//    $rootScope.$on("$stateChangeStart",  //http://www.frederiknakstad.com/2014/02/09/ui-router-in-angular-client-side-auth/
//    function (event, toState, toParams, 
//              fromState, fromParams) {
//        if (!Auth.authorize(toState.data.access)) {
//            $rootScope.error = "Access denied";
//            event.preventDefault();
//        };
//        if(fromState.url === '^') {
//            if(Auth.isLoggedIn()) {
//                //$state.go('user.home');
//            } else {
//                //$rootScope.error = null;
//                //$state.go('anon.login');
//            };
//        };
//    });
//  }]);                

//.controller('menuCtrl', ['$scope', '$state',
//  function($scope, $state) {
//    $scope.goBack = function() {
//        //window.history.back();
//        $state.go('^');
//    };
//  }]);

/*//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function myCtrl($scope){

// %%%%%%%%%% to talk to DB %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var databaseController = angular.module('databaseControllerModule', []);
databaseController.controller('dbDisplayController', ['$scope', 'databaseConnection',
  function($scope, databaseConnection) {
    $scope.hello = databaseConnection.hello();
    $scope.queryResult = databaseConnection.query();    
    databaseConnection.login({"data": {userName:"user", passWord: "pass"}}, function(value){
        $scope.login = value;
        $scope.loginData = JSON.parse(value.data);
    });
    
    $scope.send = function(){
        $scope.user = databaseConnection.queryWebService({"queryA":$scope.queryA});
        $scope.pass = databaseConnection.queryWebService({"query1":$scope.query1});        
        $scope.inputText='';
        
    };
      
  }]);*/


