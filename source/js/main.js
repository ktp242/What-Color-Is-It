/**
 * main and config
 *
 * Require configuration and definition of main
 */
require.config({

  // Increase the wait time before giving up on a script
  waitSeconds: 15,

  baseUrl: 'js',

  paths: {
    // Core Libraries
    jquery: 'jquery',
    lodash: 'lodash',

    // Helper Modules
    helpers: 'apps/helpers',

    // 3rd party
    controller: 'modules/controller'
  },

  // Sets the configuration for your third party scripts that are not
  // AMD compatible
  shim: {
    lodash: {
      exports: '_'
    }
  }
}); // end require.config

/**
 * main
 */
require([
  'jquery',
  'lodash',
  'apps/master/app',
  'controller',
], function($, _, App, controller) {
  'use strict';

  // Start the application
  App.start();
});
