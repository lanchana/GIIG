angular
  .module('GiiG')
  .controller('OrganizationsController', OrganizationsController);

OrganizationsController.$inject =  ['$stateParams',
                                    '$state',
                                    'organizationsService',
                                    'locationsService',
                                    'jobsService',
                                    '$filter'];

function OrganizationsController($stateParams,
                                 $state,
                                 organizationsService,
                                 locationsService,
                                 jobsService,
                                 $filter) {

  var vm = this;

  vm.jobs = [];

  vm.locations = [];
  vm.postJob = postJob;
  vm.jobDelete = jobDelete;
  vm.checkDates = checkDates;
  vm.goEdit = goEdit;
  vm.processBilling = processBilling;

  activate();



  function activate() {
    organizationsService.getJobs().then(function(response) {
        vm.jobs = response.data;
        console.log(response);
    });

    locationsService.getLocations().then(function(response) {
        vm.locations = response.data;
        // console.log(vm.locations);
    });
  }

  function findDifferenceInTime(job) {
    var end_time_h = $filter('date')(job.end_time, 'hh');
    console.log (end_time_h);
    var start_time_h = $filter('date')(job.start_time, 'hh');
    console.log (start_time_h);
    var end_time_m = $filter('date')(job.end_time, 'mm');
    console.log (end_time_m);
    var start_time_m = $filter('date')(job.start_time, 'mm');
    console.log (start_time_m);
    var end_time_total_minutes = parseInt(end_time_h * 60) + parseInt(end_time_m);
    console.log (end_time_total_minutes);
    var start_time_total_minutes = parseInt(start_time_h * 60) + parseInt(start_time_m);
    console.log (start_time_total_minutes);
    var minutes = end_time_total_minutes - start_time_total_minutes;
    console.log (minutes);
    var hours = minutes / 60;
    console.log (hours);

    // I am only putting this in because some of the initial data was wrong.
    hours = Math.abs(hours);

    return hours
  }

  function processBilling(job) {
    // later this will be actual time

    console.log("Job | " + job.end_time);
    console.log("Job | " + job.start_time);

    var hours = findDifferenceInTime(job);
    console.log("hours | " + hours);
    var salary = hours * job.hourly_wage;
    console.log("salary | " + salary);
    organizationsService.processBill(salary).then(function(response) {
      console.log ("back from stripe!");
    });

  }

  function goEdit(location_id, job_id) {
    console.log("At the controller");
    $state.go('jobsEdit', ({location_id:location_id, job_id:job_id}));
  }

  function checkDates(jobDate) {
    var current_date = $filter('date')(new Date(), 'yyyy-MM-dd');
    if (jobDate < current_date) {
      console.log ("TRUE!");
      return true
    } else {
      return false
    }
  }

  function jobDelete(location_id, job_id) {
    console.log("delete"+ job_id);
    jobsService.deleteJob(location_id, job_id)
      .then(function(response) {
        activate();
      });
  }

  function postJob(location) {
    console.log('hitting postJob');
    $state.go('jobsNew', ({location_id: location.id}));
  }
  
}
