/**
 * apps/master/app
 * ================================================
 * This is an application I tried to reproduce from
 * a very similiar application I have seen online.
 * The concept is not original, however, I tried to
 * re-write it to make my own version of the 
 * mechanism. It is based on the boilerplate from 
 * CPB Interactive Technical Department.
 * 
 * Kang Peng 20150507
 * ================================================
 */

define('apps/master/app', [
  'settings'
], function() {

  'use strict';

  var App = {};

  /**
   * start()
   *
   * Gets the application running
   */
  App.start = function() {
    //$('main').append('<p>App Started</p>');
    //console.log('App Started');
  };

  return App;

});
