import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['mdns'],
  timer: function() {
    return this.get('controllers.mdns.contador');
  }.property('controllers.mdns.contador'),
});
