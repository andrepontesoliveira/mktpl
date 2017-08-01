angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.marketPlace', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/marketPlace.html',
        controller: 'marketPlaceCtrl'
      }
    }
  })

  .state('menu.cart', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('menu.AI', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/artificialIntelligence.html',
        controller: 'artificialIntelligenceCtrl'
      }
    }
  })

  .state('menu.Applications', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/applications.html',
        controller: 'applicationsCtrl'
      }
    }
  })

  .state('menu.Cloud', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu.DevOps', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/devOps.html',
        controller: 'devOpsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.futureOfAI', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/futureOfAI.html',
        controller: 'futureOfAICtrl'
      }
    }
  })

  .state('menu.cloud2', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud2.html',
        controller: 'cloud2Ctrl'
      }
    }
  })

  .state('menu.cloudTechnologyBringsNewRolesForIT', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloudTechnologyBringsNewRolesForIT.html',
        controller: 'cloudTechnologyBringsNewRolesForITCtrl'
      }
    }
  })

  .state('menu.aREFEDERALAGENCIESCLOUDREADY', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aREFEDERALAGENCIESCLOUDREADY.html',
        controller: 'aREFEDERALAGENCIESCLOUDREADYCtrl'
      }
    }
  })

  .state('menu.dEVOPSAREYOUREADYTOSHIFTTOCONTINUOUSDELIVERY', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dEVOPSAREYOUREADYTOSHIFTTOCONTINUOUSDELIVERY.html',
        controller: 'dEVOPSAREYOUREADYTOSHIFTTOCONTINUOUSDELIVERYCtrl'
      }
    }
  })

  .state('menu.whatSInAName', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/whatSInAName.html',
        controller: 'whatSInANameCtrl'
      }
    }
  })

  .state('menu.mAKINGDEVOPSATSCALESTICK', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mAKINGDEVOPSATSCALESTICK.html',
        controller: 'mAKINGDEVOPSATSCALESTICKCtrl'
      }
    }
  })

  .state('menu.login', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.signup', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('menu.categorias', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/categorias.html',
        controller: 'categoriasCtrl'
      }
    }
  })

  .state('menu.adicionarCategoria', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adicionarCategoria.html',
        controller: 'adicionarCategoriaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page3')


});