console.log('hello!');
var cubeNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  shuffleNodes = document.getElementById('cube'),
  appendCubeElement;
cubeNumber.forEach(function (item, index) {
  shuffleNodes.innerHTML += '<li data-item=' + item + '>' + item + '</li>';
});
shuffle = function () {
  console.log('shuffle==>shuffle==>shuffle!');
  var index = 0;
  cubeNumber = cubeNumber.sort(function () {
    return 0.5 - Math.random();
  });
  shuffleNodes.innerHTML = '';
  while (index < cubeNumber.length) {
    var cubeItem = document.createElement('li');
    cubeItem.innerHTML = cubeNumber[index];
    cubeItem.setAttribute('data-item', cubeNumber[index]);
    shuffleNodes.appendChild(cubeItem);
    ++index;
  }
};
sorting = function () {
  var index = 0;
  cubeNumber = cubeNumber.sort(function (a, b) {
    return a - b;
  });
  shuffleNodes.innerHTML = '';
  while (index < cubeNumber.length) {
    var cubeItem = document.createElement('li');
    cubeItem.innerHTML = cubeNumber[index];
    cubeItem.setAttribute('data-item', cubeNumber[index]);
    shuffleNodes.appendChild(cubeItem);
    ++index;
  }
};
