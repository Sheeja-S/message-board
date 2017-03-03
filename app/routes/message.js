import Ember from 'ember';


export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('message', params.message_id);
  },
  actions:{
  saveAnswer(params) {
        var newAnswer = this.store.createRecord('answer', params);
        var message = params.message;
        message.get('answers').addObject(newAnswer);
        newAnswer.save().then(function() {
          return message.save();
        });
        this.transitionTo('message', message);
      }
    }
});
