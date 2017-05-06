angular
 .module('GiiG')
 .factory('jobsService', jobsService);

jobsService.$inject = ['$http'];

function jobsService($http) {
    var service = {};

    service.getJobs = getJobs;
    service.createJob = createJob;

    return service;

    function getJobs() {
        return $http.get('/api/locations/:location_id/jobs');
    }

    function createJob(job, location_id) {
        return $http.post('/api/locations/'+location_id+'/jobs/', job);
    }
}
