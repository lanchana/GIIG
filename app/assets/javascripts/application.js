// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require materialize
//= require materialize-sprockets
//= require angular/angular
//= require angular-ui-router/release/angular-ui-router
//= require_self
//= require_tree .

angular
  .module('GiiG', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('jobseeker', {
        url: '/jobseeker',
        component: 'jobseeker'
      })
      .state('organization', {
        url: '/organization',
        component: 'orgDash'
      })
      .state('skillsIndex', {
        url: '/skills',
        component: 'skillsIndex'
      })
      .state('skillsEdit', {
        url: '/skills/:id',
        component: 'skillsEdit'
      })
      .state('skillsNew', {
        url: '/skills/new',
        component: 'skillsNew'
      })
      .state('jobsNew', {
        url: '/locations/:location_id/jobs/new',
        component: 'jobsNew'
      })
      .state('jobsIndex', {
        url: '/locations/:location_id/jobs',
        component: 'jobsIndex'
      })
      .state('jobsEdit', {
        url: '/locations/:location_id/jobs/:job_id/edit',
        component: 'jobsEdit'
      })
      .state('positionsIndex', {
        url: '/positions',
        component: 'positionsIndex'
      })
      .state('positionsNew', {
        url: '/positions/new',
        component: 'positionsNew'
      })
      .state('positionsEdit', {
        url: '/positions/:id',
        component: 'positionsEdit'
      })
      .state('locationsIndex', {
        url: '/locations',
        component: 'locationsIndex'
      })
      .state('locationsNew', {
        url: '/locations/new',
        component: 'locationsNew'
      })
      .state('locationsEdit', {
        url: '/locations/:id',
        component: 'locationsEdit'
      });


    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
