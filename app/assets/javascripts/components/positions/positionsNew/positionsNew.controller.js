angular
  .module('GiiG')
  .controller('PositionsNewController', PositionsNewController);

PositionsNewController.$inject = ['$state', 'positionsService'];

function PositionsNewController($state, positionsService) {
  var vm = this;
   // console.log('1');
    vm.position = {
        name: '',
        description: '',
        qualification: ''
    };

    vm.createPositions = createPositions;

    function createPositions() {
        console.log(vm.position);
        positionsService.createPosition(vm.position)
                        .then((response) => {
                            console.log(response);
                            if(response.status == 200) {
                                $state.go('positionsIndex');
                            } else {
                                alert('server is Down');
                            }
                        });
    }
}
