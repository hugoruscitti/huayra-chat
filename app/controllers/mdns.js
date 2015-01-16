import Ember from 'ember';

var mdns = require('mdns-js');

export default Ember.Controller.extend({
  contador: 0,

  saludar: function() {
    this.tick();
  }.on('init'),

  tick: function() {
    this.incrementProperty('contador');
    Ember.run.later(this, this.tick, 1000);
  },


  publish: function() {


    var browser = mdns.createBrowser(); //defaults to mdns.ServiceType.wildcard
    //var browser = mdns.createBrowser(mdns.tcp('googlecast'));
    //var browser = mdns.createBrowser(mdns.tcp("workstation"));

    browser.on('ready', function onReady() {
      console.log('browser is ready');
      browser.discover();
    });


    browser.on('update', function onUpdate(data) {
      console.log('data:', data);
    });

  },
});
