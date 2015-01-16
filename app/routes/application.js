import Ember from 'ember';

export default Ember.Route.extend({
  solicitarMdns: function() {
    this.controllerFor('mdns');
  }.on('init')
});
