angular
 .module('GiiG')
 .factory('applicantService', applicantService);

applicantService.$inject = ['$http'];

function applicantService($http) {
    var service = {};

    service.getApplicant = getApplicant;
    service.getApplicantJobs = getApplicantJobs;
    // service.deleteJob = deleteJob;
    // service.getJob = getJob;
    // service.updateJob = updateJob;

    return service;

    function getApplicant(jobseeker_id) {
        return $http.get('/api/applicant/' + jobseeker_id);
    }

    function getApplicantJobs(jobseeker_id) {
        return $http.get('/api/applicant/' + jobseeker_id + '/edit');
    }

}
   
