angular.module('app.services', [])
 .factory('CategdataFactory', ['$http', function($http) {

    var urlBase = 'https://mktplace-38546.firebaseio.com/categoria.json';
    var dataFactory = {};

    dataFactory.getCategs = function () {
        return $http.get(urlBase);
    };

    dataFactory.getCateg = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertCateg = function (data,generatedId) {
        return $http.put("https://mktplace-38546.firebaseio.com/categoria/" + generatedId + ".json" ,data);
    };

    dataFactory.updateCateg = function (categ) {
        return $http.put(urlBase + '/' + cust.ID, categ)
    };

    dataFactory.deleteCateg = function (id) {
        return $http.delete('https://mktplace-38546.firebaseio.com/categoria/' + id + '.json');
    };

    return dataFactory;
}])

.service('CategdataService', ['$http', function ($http) {
  var urlBase = 'https://mktplace-38546.firebaseio.com/categoria.json';

        this.getCategs = function () {
            return $http.get(urlBase);
        };

        this.getCateg = function (id) {
            return $http.get(urlBase + '/' + id);
        };

        this.insertCateg = function (categ,link) {
            return $http.post(urlBase, categ,link);
        };

        this.updateCateg = function (categ) {
            return $http.put(urlBase + '/' + categ.ID, categ)
        };

        this.deleteCateg = function (id) {
            return $http.delete(urlBase + '/' + id);
        };


}]);
 
