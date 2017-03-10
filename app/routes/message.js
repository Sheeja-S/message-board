import Ember from 'ember';


export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('message', params.message_id);
  },
  actions:{
    edit(message, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            message.set(key,params[key]);
          }
        });
        message.save();
        this.transitionTo('index');
      },

      saveAnswer(params){
        var newAnswer = this.store.createRecord('answer',params);
        newAnswer.save();
        this.transitionTo('index');
    }
    }
    });
