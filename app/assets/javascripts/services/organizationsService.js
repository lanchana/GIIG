angular
  .module('GiiG')
  .service('organizationsService', organizationsService);

  organizationsService.$inject = ['$http'];

  function organizationsService($http) {

    var service = {};
    service.getJobs = getJobs;
    service.processBill = processBill;
     
    return service;

    function getJobs() {
      return $http.get('/api/organizations');
    }

    function processBill(salary) {
      console.log("Services | " + salary);
      return $http.get('/api/organizations/' + salary);
     }

  }
