angular
    .module('GiiG')
    .controller('JobsNewController', JobsNewController);

JobsNewController.$inject = ['$state', '$stateParams', 'jobsService', 'positionsService'];

function JobsNewController($state, $stateParams, jobsService, positionsService) {
    var vm = this;

    vm.job = {
        position_type: '',
        description: '',
        start_time: '',
        end_time: '',
        date: '',
        hourly_wage: '',
        actual_start_time: '',
        actual_end_time: ''
    };

    vm.location = $stateParams.location_id;
    vm.saveJob = saveJob;
    vm.returnDescription = returnDescription;
    vm.positions = [];

    activate();

    function activate() {
      positionsService.getPositions()
        .then(function(response) {
        vm.positions = response.data;
        console.log(vm.positions[0])
        //console.log("getting positions | ");
      });
    }

    function saveJob() {
      jobsService.createJob(vm.job, vm.location)
        .then((response) => {
          if(response.status == 201) {
            $state.go('organization')
          } else {
            alert('server is down')
          }
      });
    }

    function returnDescription(position_type) {
      console.log("position type:" + vm.job.position_type);
      console.log("position_type:" + position_type);
      var posi = vm.positions.find(name: vm.job.position_type);
      console.log ("i am showing " + posi)
    }
}
