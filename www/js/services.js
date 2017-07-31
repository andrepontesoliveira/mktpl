angular.module('app.services', [])

.factory('Api', function($http) {
   return{
     getApi: function() {
       return $http({
         url: 'https://mktplace-38546.firebaseio.com/categoria.json',
         method: 'GET'
       })
     }
   };
}) 

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);