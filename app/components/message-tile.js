import Ember from 'ember';

export default Ember.Component.extend({
editMessageForm: false,
  actions: {
edit(message, params) {
    this.sendAction('edit', message, params);
  }
}
});
