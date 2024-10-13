const riddle = {
  question: 'Висит груша нельзя скушать',
  correctAnswer: 'лампочка',
  hints: ['это съедобное', 'это фрукт'],
  tries: 3,
  checkAnswer(ans) {
    // TODO: написать логику проверки правильного ответа
    // alert для пользователя, console.log()
    if (this.tries === 0) {
      const outOfTriesMessage = `❌ Игра окончена`;
      print(outOfTriesMessage);
      return;
    }

    if (ans === this.correctAnswer) {
      const successMessage = `✅ Правильный ответ`;
      print(successMessage);
    } else {
      let hintIndex = this.tries % this.hints.length;

      const hintMessage = this.tries > 1 ? `Подсказка: ${this.hints[hintIndex]}` : '';

      const failMessage = `❌ Неправильный ответ.\n${hintMessage}`;

      print(failMessage);
      this.tries--;
    }
  },
};

function print(msg) {
  alert(msg);
  console.log(msg);
}

window.onload = function () {
  document.getElementById('riddle').innerText = riddle.question;
};

function check() {
  const input = document.getElementsByTagName('input')[0];

  const guessedAnswer = input.value;

  if (guessedAnswer) {
    // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
    riddle.checkAnswer(guessedAnswer);
  }
}
