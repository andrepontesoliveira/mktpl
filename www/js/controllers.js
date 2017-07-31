angular.module('app.controllers', [])
  
.controller('listTest', function ($scope, Api){
	Api.getApi().then(function(result){
	$scope.list = result.data;
	})

})





.controller('marketPlaceCtrl', ['$scope', '$stateParams', '$ionicUser', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $state) {
    
    $scope.userData = $ionicUser.details;

    
    
}



])
   
.controller('cartCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('artificialIntelligenceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('applicationsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('devOpsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {
    
    $scope.userData = $ionicUser.details;

    $scope.logout = function(){
        $ionicAuth.logout();
        $state.go('menu.login');
    }
    
    $scope.autenticated = function(){
        if ($ionicAuth.isAuthenticated()) {
        // Make sure the user data is going to be loaded
        return true;
        }else{
        return null
        }
        
    }

}])
   
.controller('futureOfAICtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloud2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudTechnologyBringsNewRolesForITCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('aREFEDERALAGENCIESCLOUDREADYCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dEVOPSAREYOUREADYTOSHIFTTOCONTINUOUSDELIVERYCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('whatSInANameCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('mAKINGDEVOPSATSCALESTICKCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {

    $scope.data = {
        'email': '',
        'password': ''
    }
    
    $scope.error = '';
    
    if ($ionicAuth.isAuthenticated()) {
        // Make sure the user data is going to be loaded
        $ionicUser.load().then(function() {});
        $state.go('menu.marketPlace'); 
    }
    
    
    $scope.login = function(){
        $scope.error = '';
        $ionicAuth.login('basic', $scope.data).then(function(){
            $state.go('menu.marketPlace');
        }, function(){
            $scope.error = 'Error logging in.';
        })
    }

}])
   
.controller('signupCtrl', ['$scope', '$stateParams', '$ionicAuth', '$ionicUser', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicAuth, $ionicUser, $state) {
    
    $scope.data = {
        'name': '',
        'email': '',
        'password': ''
    }
    
    $scope.error='';

    $scope.signup = function(){
        
        $scope.error = '';

        $ionicAuth.signup($scope.data).then(function() {
            // `$ionicUser` is now registered
            $ionicAuth.login('basic', $scope.data).then(function(){
              $state.go('menu.marketPlace');
            });
        }, function(err) {
            
            var error_lookup = {
                'required_email': 'Missing email field',
                'required_password': 'Missing password field',
                'conflict_email': 'A user has already signed up with that email',
                'conflict_username': 'A user has already signed up with that username',
                'invalid_email': 'The email did not pass validation'
            }    
        
            $scope.error = error_lookup[err.details[0]];
        });
    }

}])
 