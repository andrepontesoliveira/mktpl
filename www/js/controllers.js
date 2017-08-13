angular.module('app.controllers', ['firebase'])

.controller('ArtigoCtrl', function ArtigoCtrl($scope, $location, $firebase, $firebaseArray) {
	
	// var config = {
	// 	apiKey: "AIzaSyCEsHKoEycSk4zFVH2bUIKEVPLmRNRGsl8",
	// 	authDomain: "mktplace-38546.firebaseapp.com",
	// 	databaseURL: "https://mktplace-38546.firebaseio.com",
	// 	storageBucket: "mktplace-38546.appspot.com",
	// };
	// firebase.initializeApp(config);
  
	var artigoRef = firebase.database().ref('/artigo');
	$scope.editando = false;
	$scope.artigos = $firebaseArray(artigoRef);
	$scope.novoArtigo = null;
	$scope.key = null;
	$scope.categoria = null;
	$scope.artigoConsultado = null;
	inicializarArtigo();


	$scope.$watch('artigos', function(){
		var total = 0;
		var remaining = 0;
		$scope.artigos.forEach(function(artigo){
			total++;
			if (artigo.completed === false) {
				remaining++;
			}
		});
		$scope.totalCount = total;
	}, true);

	$scope.addArtigo = function(){

		if ($scope.novoArtigo.Titulo === "") {
			alert('Informe um título');
			return;
        }
        
        $scope.novoArtigo.categ = parseInt($scope.novoArtigo.categ);

		var generatedId = parseInt((Math.random() * 100), 10);
		// push to firebase
		artigoRef.child(generatedId).set($scope.novoArtigo);
		$scope.novoArtigo = '';
	};

	$scope.editarArtigo = function(artigo){
		$scope.editando = true;
		$scope.novoArtigo = artigo;
	};

	// update artigo for changes we made
	$scope.salvarArtigo = function(){
		$scope.artigos.$save($scope.novoArtigo);
		inicializarArtigo();
	};

	$scope.removeArtigo = function(artigo){
		$scope.artigos.$remove(artigo);
	};
	
	$scope.cancelar = function(artigo){
		inicializarArtigo();
		$scope.editando = false;
	};
	
	$scope.consultar = function(){
		$scope.artigoConsultado = $scope.artigos.$getRecord($scope.key);
	};
	
	$scope.consultarPorCategoria = function(){
		var privateTodosRef = artigoRef.orderByChild("categ").equalTo(parseInt($scope.categoria));
		var privateTodos;

		privateTodosRef.on("value", function(response) {
		  $scope.artigoConsultado = response.val();
		});
		$scope.artigos = $firebaseArray(privateTodosRef);
	};
	
	$scope.limparFiltro = function(){
		$scope.categoria = null;
		$scope.artigos = $firebaseArray(artigoRef);
	};
	
	
	function inicializarArtigo() {
		$scope.novoArtigo = {
			"Titulo" : "",
			"categ" : null,
			"completeText" : "",
			"icon" : "",
			"id" : null,
			"image" : "",
			"resumo" : ""
		};
	};



})

.controller('marketPlaceCtrl', ['$scope', '$stateParams', '$ionicUser', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $state) {
 

    $scope.doRefresh = function() {
    
    console.log('Refreshing!');
    $timeout( function() {

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 100)};
    $scope.userData = $ionicUser.details;

    $scope.exibeCategoria = function(id){
        $state.go('menu.exibeCategoria', {idCategoria: id});
    }
    
    
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

.controller('criarartigoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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

    alert($stateParams);

}])
   
.controller('menuCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {
    

    
    $scope.doRefresh = function() {
    
    console.log('Refreshing!');
    $timeout( function() {

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 100)};
    
    var userMail = $ionicUser.details.email;

        $scope.isAdmin = function(){
        if (userMail == "admin1@admin.com" || userMail == "admin2@admin.com" ) {
        // Make sure the user data is going to be loaded
        return true;
        }else{
        return null
        }
        
    }



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
.controller('categoriasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
     
        
        

}])


.controller('ArtigosDevOpsController',['$scope','$state', 'ArtigosDevOpsdataFactory', 
        function ($scope,$state ,ArtigosDevOpsdataFactory) {   

    getArtigosDevOps();

   

     function getArtigosDevOps() {
        ArtigosDevOpsdataFactory.getArtigosDevOps()
             .then(function (response) {
                 $scope.artigoDevops = response.data;
             }, function (error) {
                 $scope.status = 'Unable to load customer data: ' + error.message;
             });
     };


}])


.controller('categsController',['$scope','$state', 'CategdataFactory', 
        function ($scope,$state ,CategdataFactory) {       
    
    $scope.nome;
    $scope.link;
    $scope.doRefresh = function() {
    getCategs();
    console.log('Refreshing!');
    $timeout(function() {

    
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 100)};
    getCategs();

     function getCategs() {
        CategdataFactory.getCategs()
             .then(function (response) {
                 $scope.list = response.data;
             }, function (error) {
                 $scope.status = 'Unable to load customer data: ' + error.message;
             });
     };

    $scope.updateCustomer = function (id) {
        

         CategdataFactory.updateCustomer(cust)
          .then(function (response) {
              $scope.status = 'Updated Customer! Refreshing customer list.';
          }, function (error) {
              $scope.status = 'Unable to update customer: ' + error.message;
          });
    };

    $scope.insertCateg = function (nome) {
        var generatedId = parseInt((Math.random() * 100), 10);
        var link = "menu."+nome+"(generatedId)";

               var data ={
                  nome: nome,
                  link: link,
                  id: generatedId};
       
            
        CategdataFactory.insertCateg(data,generatedId)
            .then(function (response) {
               $state.go('menu.categorias');
               getCategs()
            }, function(error) {
                $scope.status = 'Unable to insert categorie: ' + error.message;
                alert($scope.status);
            });
    };
    
     $scope.deleteCateg = function (id) {
         
        
         CategdataFactory.deleteCateg(id)
         .then(function (response) {
             $scope.status = 'Deleted Categ! Refreshing customer list.';
          alert( $scope.status);
         }, function (error) {
             $scope.status = 'Unable to delete categ: ' + error.message;
           alert( $scope.status);  
         });
      };



}])
   
.controller('adicionarCategoriaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}])


.controller('orcamentoController',['$scope','$state', 'OrcamentodataFactory', 
        function ($scope,$state,OrcamentodataFactory) {
    
    $scope.nome;
    $scope.email;
    $scope.fone;
    $scope.doRefresh = function() {
        getOrcamento();
        console.log('Refreshing!');
        $timeout(function() {

    
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 100)};
    getOrcamento();

     function getOrcamento() {
        OrcamentodataFactory.getOrcamento()
             .then(function (response) {
                 $scope.orcamento = response.data;
             }, function (error) {
                 $scope.status = 'Unable to load customer data: ' + error.message;
             });
     };

  

    $scope.insertOrcamento = function (nome,email,fone,servint,status) {
                  var data ={
                  nome: nome,
                  email: email,
                  fone: fone,
                  servint: servint,
                  status: status
                };
    
                  OrcamentodataFactory.insertOrcamento(data)
            .then(function (response) {
               $state.go('menu.orcamentosucesso');
               getOrcamento()
            }, function(error) {
                $scope.status = 'Unable to insert categorie: ' + error.message;
                alert($scope.status);
            });
    };
    
    

}])

.controller('orcamentoGetController',['$scope','$state', 'OrcamentodataFactory', 
        function ($scope,$state,OrcamentodataFactory) {
    
    $scope.nome;
    $scope.email;
    $scope.fone;
    $scope.doRefresh = function() {
        getOrcamento();
        console.log('Refreshing!');
        $timeout(function() {

    
      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 100)};
    getOrcamento();

     function getOrcamento() {
        OrcamentodataFactory.getOrcamento()
             .then(function (response) {
                 $scope.orcamento = response.data;
             }, function (error) {
                 $scope.status = 'Unable to load customer data: ' + error.message;
             });
     };

    $scope.insertOrcamento = function (nome,email,fone) {
                  var data ={
                  nome: nome,
                  email: email,
                  fone: fone};
    
                  OrcamentodataFactory.insertOrcamento(data)
            .then(function (response) {
               $state.go('menu.orcamentosucesso');
               getOrcamento()
            }, function(error) {
                $scope.status = 'Unable to insert categorie: ' + error.message;
                alert($scope.status);
            });
    };
    
    

}])


.controller('orcamentoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,) {



}])

.controller('exibeCategoriaCtrl', ['$scope', '$state', '$stateParams', 'firebase', '$firebaseArray','$timeout',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    function ($scope, $state, $stateParams, firebase, $firebaseArray, $timeout) {

        var artigoRef = firebase.database().ref('/artigo');

        $scope.initialForm = function () {
            $scope.consultaArtigos($stateParams.idCategoria);
            
        };
    
        $scope.doRefresh = function() {
            
            $timeout( function() {
                $scope.consultaArtigos($stateParams.idCategoria);
                //Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
        
            }, 100)
        };

        $scope.consultaArtigos = function(idCategoria){
            var privateTodosRef = artigoRef.orderByChild("categ").equalTo(idCategoria);
            var privateTodos;

            $scope.listaArtigos = $firebaseArray(privateTodosRef);
        };
        
        $scope.detalharArtigo = function(id){
            $state.go('menu.detalheArtigo', {idArtigo: id});
        };

        $scope.initialForm();   

    }]
)

.controller('detalheArtigoCtrl', ['$scope', '$stateParams', 'firebase', '$firebaseArray','$timeout',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller

    function ($scope, $stateParams, firebase, $firebaseArray, $timeout) {

        var ref = firebase.database().ref('/artigo');

        $scope.initialForm = function () {
            $scope.detalharArtigo($stateParams.idArtigo);
            
        };
    
        $scope.doRefresh = function() {
            
            $timeout( function() {
                $scope.detalharArtigo($stateParams.idArtigo);
                //Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
        
            }, 100)
        };

        $scope.detalharArtigo = function(idArtigo){
            $scope.lista = $firebaseArray(ref);

            $scope.lista.$loaded().then(function(lista) {
                $scope.artigo = lista.$getRecord(parseInt(idArtigo));
            });

        };

        $scope.initialForm();   

    }]
)
;
 
 