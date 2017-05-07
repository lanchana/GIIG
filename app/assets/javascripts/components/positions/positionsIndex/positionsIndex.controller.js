angular
  .module('GiiG')
  .controller('PositionsIndexController', PositionsIndexController)

PositionsIndexController.$inject = ['positionsService'];

function PositionsIndexController(positionsService) {
  var vm = this;

  vm.positions = [];
  vm.deletePosition = deletePosition;

  activate();

  function activate() {
  positionsService.getPositions().then((response) => {
    vm.positions = response.data;
  });
}
    function deletePosition(position_id) {
        // console.log(position_id);
        positionsService.deletePosition(position_id)
                        .then((response) => {
                            activate();
                        })
    }
}
