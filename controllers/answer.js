qAndA.AnswerController = Ember.ObjectController.extend({
  needs: ['question'],
  actions: {
    deleteAnswer: function() {
      if(confirm('Really delete this answer?')) {
        var question = this.get('controllers.question.model');
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
