// Ionic GTD app
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ng-cordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('config', {
    url: '/config',
    templateUrl: 'templates/config.html',
    controller: 'ConfigCtrl'
  })

  .state('tab.inbox', {
    url: '/inbox',
    views: {
      'tab-inbox': {
        templateUrl: 'templates/inbox.html',
        controller: 'InboxCtrl'
      }
    }
  })

  .state('tab.categories', {
      url: '/categories',
      views: {
        'tab-categories': {
          templateUrl: 'templates/categories.html',
          controller: 'CategoriesCtrl'
        }
      }
    })
    .state('tab.categories-detail', {
      url: '/categories/:categoryID',
      views: {
        'tab-categories': {
          templateUrl: 'templates/categories-detail.html',
          controller: 'CategoriesDetailCtrl'
        }
      }
    })

  .state('tab.feed', {
    url: '/feed',
    views: {
      'tab-feed': {
        templateUrl: 'templates/feed.html',
        controller: 'FeedCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/inbox');

});
