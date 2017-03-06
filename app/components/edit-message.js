import Ember from 'ember';

export default Ember.Component.extend({
  editMessageForm: false,
    actions: {
      editMessageForm() {
        this.set('editMessageForm', true);
      },
      edit(message) {
        var params = {
          question: this.get('question'),
          note: this.get('note'),
          author: this.get('author'),
        };
        this.set('editMessageForm', false);
        this.sendAction('edit', message, params);
      }
    }
  });
