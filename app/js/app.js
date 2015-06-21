console.log("app");

// DZ.ready(function(sdk_options){
//   console.log('DZ SDK is ready', sdk_options);
//
// });

angular.module('myApp', [])
  .controller('ExampleController', function($scope) {
    $scope.track = {
      id: 64920076
    };


    DZ.init({
      appId  : '159921',
      channelUrl : 'http://YOUR_DOMAIN/channel.html',
      player: {
        container: 'player',
        width : 800,
        height : 300,
        onload : function(){
          DZ.player.playTracks([$scope.track.id]);
          $scope.$watch('track.id', function(id, oldId) {
            DZ.player.playTracks([id]);
          });
        }
      }
    });


  });
