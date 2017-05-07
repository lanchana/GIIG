angular
 .module('GiiG')
 .factory('skillsService', skillsService);

skillsService.$inject = ['$http'];

function skillsService($http) {
 var service = {};

 service.getSkills = getSkills;
 service.getSkill = getSkill;
 service.createSkill = createSkill;
 service.updateSkill = updateSkill;
 service.deleteSkill = deleteSkill;

 return service;

 function getSkills() {
   return $http.get('/api/skills');
 }

 function getSkill(id) {
   return $http.get('/api/skills/' + id);
 }

 function createSkill(skill) {
   return $http.post('/api/skills/', skill);
 }

 function updateSkill(skill_id, skill) {
   return $http.patch('/api/skills/' + skill_id, skill);
 }

 function deleteSkill(skill_id) {
    return $http.delete('/api/skills/'+skill_id);
 }
}
