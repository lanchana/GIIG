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

  function processBilling(job) {

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

  function processBilling(job_id) {

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
