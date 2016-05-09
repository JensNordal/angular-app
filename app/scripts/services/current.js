'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.current
 * @description
 * # current
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=3129598b80f286fb2221017a394e68b4', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us'
        },
        isArray:false
      }
    });
  });
