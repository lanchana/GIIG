angular
 .module('GiiG')
 .factory('jobsService', jobsService);

jobsService.$inject = ['$http'];

function jobsService($http) {
    var service = {};

    service.getJobs = getJobs;
    service.createJob = createJob;
    service.deleteJob = deleteJob;
    service.getJob = getJob;
    service.updateJob = updateJob;
    service.getGeo = getGeo;

    return service;

    function getJobs(location_id) {
        return $http.get('/api/locations/' + location_id + '/jobs');
    }

    function createJob(job, location_id) {
        return $http.post('/api/locations/'+location_id+'/jobs/', job);
    }

    function deleteJob(location_id, job_id) {
        return $http.delete('/api/locations/'+location_id+'/jobs/'+job_id);
    }

    function updateJob(location_id, job_id, job) {
        console.log("service" + job.position_type);
        return $http.patch('/api/locations/'+location_id+'/jobs/'+job_id, job);
    }

    function getJob(location_id, job_id) {
        return $http.get('/api/locations/'+location_id+'/jobs/'+job_id)
    }

    function getGeo(loc) {
        return $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+loc+'&key=AIzaSyAohMMx5Ns4F5hhjZolRS29Ey9X5ZfKftU');
    }
}
