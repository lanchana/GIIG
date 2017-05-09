angular
 .module('GiiG')
 .factory('jobseekersService', jobseekersService);

jobseekersService.$inject = ['$http'];

function jobseekersService($http) {
    var service = {};

    service.getJobs = getJobs;
    // service.createJob = createJob;
    // service.deleteJob = deleteJob;
    // service.getJob = getJob;
    // service.updateJob = updateJob;

    return service;

    function getJobs(user_id) {
        console.log ("Userservice 10: " + user_id);
        return $http.get('/api/jobseekers/');
    }

    
}