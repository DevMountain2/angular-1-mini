angular.module('friendsList').controller('mainCtrl', function($scope) {
  $scope.friends = ['Zach', "Riley", "Frank", "Eric", "Kara"]
  $scope.addFriend = function(friend){
    $scope.friends.push(friend)
  }
})
