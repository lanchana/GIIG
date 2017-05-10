angular
 .module('GiiG')
 .factory('jobseekersService', jobseekersService);

jobseekersService.$inject = ['$http'];

function jobseekersService($http) {
    var service = {};

    service.getJobs = getJobs;
    service.updateJob = updateJob; //accepting job
    // service.createJob = createJob;
    // service.deleteJob = deleteJob;
    // service.getJob = getJob;
    // service.updateJob = updateJob;

    return service;

    function getJobs() {
        return $http.get('/api/jobseekers');
    }

    function updateJob(job_id) {
        console.log("at the service 48: " + job_id);
        return $http.put('/api/jobseekers/' + job_id);
    }
    
}