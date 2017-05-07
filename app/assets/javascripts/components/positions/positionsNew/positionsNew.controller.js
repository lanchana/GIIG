angular
  .module('GiiG')
  .controller('PositionsNewController', PositionsNewController);

PositionsIndexController.$inject = ['positionsService'];

function PositionsNewController(positionsService) {
  var vm = this;
   // console.log('1');
    vm.position = {
        name: '',
        description: '',
        qualification: ''
    };

    vm.createPositions = createPositions;

    function createPositions() {
        positionsService.createPosition(vm.position)
                        .then((response) => {
                            if(response.status == 201) {
                                $state.go('positionsIndex')
                            } else {
                                alert('server is Down')
                            }
                        });
    }
}
