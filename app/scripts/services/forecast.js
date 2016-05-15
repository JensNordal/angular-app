'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.forecast
 * @description
 * # forecast
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=3129598b80f286fb2221017a394e68b4', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
