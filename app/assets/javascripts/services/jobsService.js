angular
 .module('GiiG')
 .factory('jobsService', jobsService);

jobsService.$inject = ['$http'];

function jobsService($http) {
    var service = {};

    service.getJobs = getJobs;

    return service;

    function getJobs() {
        return $http.get('/api/locations/:location_id/jobs');
    }
}
