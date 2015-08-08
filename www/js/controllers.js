angular.module('starter.controllers', [])

.controller('ConfigCtrl', function ($scope) {
  // $ionicPlatform.ready(function () {
  //   $ionicLoading.show({
  //     template: 'Loading...'
  //   });
  //
  //   Database.load(function (success) {
  //     console.log(success);
  //     $ionicLoading.hide();
  //   }, function (error) {
  //     console.log(error);
  //     $ionicLoading.hide();
  //   })
  // });
})

.controller('InboxCtrl', function ($scope) {

})

.controller('CategoriesCtrl', function ($scope, Categories) {
  $scope.categories = Categories.all();

  $scope.remove = function (category) {
    Categories.remove(category);
  };
})

.controller('CategoriesDetailCtrl', function ($scope) {

})

.controller('FeedCtrl', function ($scope) {

});
