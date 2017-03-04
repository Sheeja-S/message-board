import Ember from 'ember';

export default Ember.Component.extend({
  editMessageForm: false,
    actions: {
      editMessageForm() {
        this.set('editMessageForm', true);
      },
      edit(message) {
        var params = {
          owner: this.get('question'),
          city: this.get('note'),
          type: this.get('author')
        };
        this.set('editMessageForm', false);
        this.sendAction('edit', message, params);
      }
    }
  });
