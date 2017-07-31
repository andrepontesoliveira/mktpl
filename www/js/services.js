angular.module('app.services', [])

.factory('Api', function($http) {
   return{
     getApi: function() {
       return $http({
         url: 'https://meuapp-6e189.firebaseio.com/categoria.json',
         method: 'GET'
       })
     }
   };
}) 

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);