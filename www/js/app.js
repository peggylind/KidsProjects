'use strict';

/* App Module */

var KidsApp = angular.module('KidsApp', ['ui.router','KidsControllers', 'ngAnimate']);

KidsApp.config(
  function($stateProvider, $urlRouterProvider) {
      
    $urlRouterProvider.otherwise('partials/bedroom');
      
    $stateProvider
    .state('pokechase', {
          url: "",
          views: {
            "app": { templateUrl: "partials/pokechase.html", controller:'MainCtrl'}
          }
      })
    .state('select', {
          url: "",
          views: {
            "app": { templateUrl: "partials/pokechase_character_select.html", controller:'MainCtrl'}
          }
      })
    
  });

//KidsApp.directive('myDraggable', ['$document', function($document) {
//    return function(scope, element, attr) {
//      var startX = 0, startY = 0, x = 0, y = 0;
//
//      element.css({
//       position: 'absolute',       
//       cursor: 'pointer'
//      });
//
//      element.on('mousedown', function(event) {
//        // Prevent default dragging of selected content
//        event.preventDefault();
//        startX = event.pageX - x;
//        startY = event.pageY - y;
//        $document.on('mousemove', mousemove);
//        $document.on('mouseup', mouseup);
//      });
//
//      function mousemove(event) {
//        y = event.pageY - startY;
//        x = event.pageX - startX;
//        element.css({
//          top: y + 'px',
//          left:  x + 'px'
//        });
//      }
//
//      function mouseup() {
//        $document.off('mousemove', mousemove);
//        $document.off('mouseup', mouseup);
//      }
//    };
//  }]);


    
