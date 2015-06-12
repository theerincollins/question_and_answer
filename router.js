qAndA.Router.map(function() {
  this.resource('questions', {path: '/'}, function() {
    this.resource('answers');
  });
  this.resource('question', {path: 'questions/:question_id'})

});
