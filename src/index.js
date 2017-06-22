(function showAnswer() {
  var answerButtonId = 'answer_button';
  var answerTextId = 'answer_text';

  var answerButton = document.getElementById(answerButtonId);
  answerButton.addEventListener('click', function() {
    answerButton.style.display = 'none';
    var answerText = document.getElementById(answerTextId);
    answerText.textContent = 'Gets jalapeño business!';
  });
}());
