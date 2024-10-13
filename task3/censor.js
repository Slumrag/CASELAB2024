function censor() {
  const dictionary = [];

  return (string1, string2) => {
    if (string2 === null || string2 === undefined) {
      return dictionary.reduce((acc, pair) => acc.replaceAll(pair[0], pair[1]), string1);
    } else {
      dictionary.push([string1, string2]);
    }
  };
}

// const changeScene = censor();
// const changeScene2 = censor();
// const testString = 'PHP is the most popular programming language for backend web-development';

// changeScene('PHP', 'JS');
// changeScene2(' ', '-');

// console.log(changeScene(testString), '\n', changeScene2(testString));

// changeScene('backend', 'frontend');

// console.log(changeScene(testString));
