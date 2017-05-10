angular
    .module('GiiG')
    .controller('JobsNewController', JobsNewController);

JobsNewController.$inject = ['$state', '$stateParams' , 'jobsService'];

function JobsNewController($state, $stateParams,  jobsService) {

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

    vm.location_id = $stateParams.location_id;

    vm.saveJob = saveJob;

    function saveJob() {
        jobsService.createJob(vm.job, vm.location_id)
                   .then((response) => {
                    if(response.status == 201) {
                        $state.go('jobsIndex',{location_id: vm.location_id})
                    } else {
                        alert('server is down')
                    }
                   });
    }
}
