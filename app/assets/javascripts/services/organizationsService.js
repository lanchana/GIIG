angular
  .module('GiiG')
  .service('organizationsService', organizationsService);

  organizationsService.$inject = ['$http'];

  function organizationsService($http) {

    var service = {};
    service.getJobs = getJobs;

    function getJobs() {
      return $http.get('/api/organizations/');
   }
   return service;
  }
