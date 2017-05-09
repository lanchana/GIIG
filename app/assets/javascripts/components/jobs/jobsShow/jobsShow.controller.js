angular
  .module('GiiG')
  .controller('JobsShowController', JobsShowController);

JobsShowController.$inject = ['$stateParams', 'jobsService', 'locationsService'];

function JobsShowController($stateParams, jobsService, locationsService) {
  var vm = this;

  vm.job = {};
  vm.location = {};
  var add = {};
  var loc1;
  vm.some = {};
  vm.map = null;

  activate();
  // loc;


  jobsService.getJob($stateParams.location_id, $stateParams.job_id).then(function(resp) {
    vm.job = resp.data;
  });

  locationsService.getLocation($stateParams.location_id).then(function(resp) {
    vm.location = resp.data;
  });
  console.log();
  // vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

  function activate() {
    locationsService.getLocation($stateParams.location_id).then(function(resp) {
      vm.location = resp.data;
      console.log(vm.location);
      add = vm.location;

      loc = add.name+","+add.address+","+add.city+","+add.state;
      console.log(loc);

      jobsService.getGeo(loc).then(function(res) {
        console.log(res.data.results[0].geometry.location);
        var location = res.data.results[0].geometry.location;
        vm.map = {
          center: {
            latitude: location.lat,
            longitude: location.lng
          },
          zoom: 4
        }
          vm.marker = {
                    id: 1,
                    coords : {
                        latitude: location.lat,
                        longitude: location.lng
                    }
                };
        // };
        console.log(vm.map);
        // geo();
        // geo(loc);
      });
    });
  }
};

// console.log(vm.some);




// console.log(window.loc1);
// var address ='atlanta, GA';


// }



