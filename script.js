console.log('hello!');
var numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  cubeWrapper = document.getElementById('cube'),
  appendCubeElement;
numbersArray.forEach(function (item, index) {
  cubeWrapper.innerHTML += '<li data-item=' + item + '>' + item + '</li>';
});
shuffleArray = function () {
  console.log('helloshuffleArrayshuffleArrayshuffleArray!');
  var index = 0;
  numbersArray = numbersArray.sort(function () {
    return 0.5 - Math.random();
  });
  cubeWrapper.innerHTML = '';
  while (index < numbersArray.length) {
    var cubeItem = document.createElement('li');
    cubeItem.innerHTML = numbersArray[index];
    cubeItem.setAttribute('data-item', numbersArray[index]);
    cubeWrapper.appendChild(cubeItem);
    ++index;
  }
};
sortArray = function () {
  var index = 0;
  numbersArray = numbersArray.sort(function (a, b) {
    return a - b;
  });
  cubeWrapper.innerHTML = '';
  while (index < numbersArray.length) {
    var cubeItem = document.createElement('li');
    cubeItem.innerHTML = numbersArray[index];
    cubeItem.setAttribute('data-item', numbersArray[index]);
    cubeWrapper.appendChild(cubeItem);
    ++index;
  }
};
//Another way of shuffling items
shuffleArrayValues = function (numbersArrayItems) {
  var _a;
  var index = 0,
    numbersArray = numbersArrayItems;
  cubeWrapper.innerHTML = '';
  for (var i = numbersArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    (_a = [numbersArray[j], numbersArray[i]]),
      (numbersArray[i] = _a[0]),
      (numbersArray[j] = _a[1]);
  }
};
//using callback to sufflearray value
shufflingArray = function () {
  var index = 0;
  shuffleValues(numbersArray);
  cubeWrapper.innerHTML = '';
  while (index < numbersArray.length) {
    var cubeItem = document.createElement('li');
    cubeItem.innerHTML = numbersArray[index];
    cubeItem.setAttribute('data-item', numbersArray[index]);
    cubeWrapper.appendChild(cubeItem);
    ++index;
  }
};
