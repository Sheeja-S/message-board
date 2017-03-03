import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },

    saveMessage1() {
    var params = {
      question: this.get('question'),
      author: this.get('author'),
      note: this.get('note')
    };
    this.set('addNewMessage', false);
    this.sendAction('saveMessage2', params);
  }
}
});
