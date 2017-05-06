angular
 .module('GiiG')
 .factory('jobsService', jobsService);

jobsService.$inject = ['$http'];

function jobsService($http) {
    var service = {};

    service.getJobs = getJobs;
    service.createJob = createJob;
    service.deleteJob = deleteJob;

    return service;

    function getJobs() {
        return $http.get('/api/locations/:location_id/jobs');
    }

    function createJob(job, location_id) {
        return $http.post('/api/locations/'+location_id+'/jobs/', job);
    }

    function deleteJob(location_id, job_id) {
        console.log("delete job 3");
        return $http.delete('/api/locations/'+location_id+'/jobs/'+job_id);
    }
}
