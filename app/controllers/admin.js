import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['mdns'],
  actions: {
    publish: function() {
      this.get('controllers.mdns').publish();
    },
    return: function() {
      this.transitionTo('index');
    },
  }
});
