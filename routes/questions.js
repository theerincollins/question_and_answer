// return this.store.find('question')

qAndA.QuestionsRoute = Ember.Route.extend({
    controllerName: 'questions',
    renderTemplate: function() {
      this.render('questions');
    }
    model: function() {
      return questions;
    }
});
