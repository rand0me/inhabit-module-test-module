//------------------------------------------------------------------------------
// Name: src/js/TestModule.js
// Author: rand0me <mailto:dandydan2k@gmail.com>
// Timestamp: 2016-08-30T13:43:07.183Z
// Description:
//     test module scaffold
//------------------------------------------------------------------------------

'use strict';

require('styles/TestModule');

var InhabitModuleBase = require('inhabit-module-base');
var tmplTestModule = require('templates/TestModule.hbs');


/**
 * TestModule - constructor
 *
 * @param  {Object} configuration Configuration that coming from InHabit
 * @param  {Object} dependencies  Dependencies that provides InHabit
 * @return {TestModule}
 */
function TestModule(configuration, dependencies) {
  InhabitModuleBase.prototype.constructor.call(this, configuration, dependencies);
}


/**
 * Extending {InhabitModuleBase}
 */
TestModule.prototype = Object.create(InhabitModuleBase.prototype);


/**
 * Return a {Promise} object that must be resolved later indicate that content is ready
 * @returns {Promise}
 */
TestModule.prototype.getContent = function () {
  this.deferred = this.$.Deferred();

  // Replace with some asynchronous task (ajax request for example)
  // or resolve it just without timeout if your module doesn't using any external calls
  setTimeout(function () {
    this.image = 'http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg';
    this.deferred.resolve(this);
  }.bind(this), 200);

  return this.deferred.promise();
};


/**
 * Return a Thumbnail URL
 * @returns {string}
 */
TestModule.prototype.getThumbnail = function () {
  return 'https://pixabay.com/static/uploads/photo/2014/01/17/14/53/cat-246933__180.jpg';
};


/**
 * Return a Title
 * @returns {string}
 */
TestModule.prototype.getTitle = function () {
  return 'TestModule';
};


/**
 * @returns {boolean}
 */
TestModule.prototype.hasContent = function () {
  return true;
};


/**
 * Render content
 * @return {string}
 */
TestModule.prototype.display = function () {
  var template = this.handlebars.compile(tmplTestModule);
  return template(this);
};


/**
 * Return a Type
 * It can be one of {video|game|interactive|quiz}
 * @returns {string}
 */
TestModule.prototype.getType = function () {
  return 'interactive';
};

TestModule.moduleName = "TestModule";
InhabitModuleBase.publish(TestModule);
