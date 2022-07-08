const colors = document.getElementsByClassName('color');
colors[0].style.backgroundColor = 'black';
let pixels = document.getElementsByClassName('pixel');
let selected = document.querySelector('.selected');
let cor = document.querySelector('.selected').style.backgroundColor;
let button = document.getElementById('clear-board');
let generateBoard = document.getElementById('generate-board');
let rubber = document.getElementById('rubber');
let random = document.getElementById('random');

function whitePixel() {
  for (let i of pixels) {
    i.style.backgroundColor = 'white';
  }
}

function removeElemento(board) {
  for (let i = pixels.length; i > pixels.length; i -= 1) {
    board.removeChild(pixels[i]);
  }
}

function tamPaleta() {
  let input = document.getElementById('board-size').value;
  let board = document.getElementById('pixel-board');

  if (input === '' || input < 1) {
    console.log(input);
    alert('Board inválido!');
  } else if (input >= 5 && input <= 50) {
    for (let i = pixels.length - 1; i >= 0; i -= 1) {
      board.removeChild(pixels[i]);
    }
    for (i = 0; i < input * input; i += 1) {
      let elemento = document.createElement('div');
      elemento.className = 'pixel';
      elemento.style.backgroundColor = 'white';
      board.appendChild(elemento);
    }
    board.style.gridTemplateColumns = 'repeat(' + input + ',40px)';
    pixels = document.getElementsByClassName('pixel');
  } else if (input < 5) {
    input = 5;
    for (let i = pixels.length - 1; i >= 0; i -= 1) {
      board.removeChild(pixels[i]);
    }
    for (i = 0; i < input * input; i += 1) {
      let elemento = document.createElement('div');
      elemento.className = 'pixel';
      elemento.style.backgroundColor = 'white';
      board.appendChild(elemento);
    }
    board.style.gridTemplateColumns = 'repeat(' + input + ',40px)';
    pixels = document.getElementsByClassName('pixel');
  } else if (input > 50) {
    input = 50;
    for (let i = pixels.length - 1; i >= 0; i -= 1) {
      board.removeChild(pixels[i]);
    }
    for (i = 0; i < input * input; i += 1) {
      let elemento = document.createElement('div');
      elemento.className = 'pixel';
      elemento.style.backgroundColor = 'white';
      board.appendChild(elemento);
    }
    board.style.gridTemplateColumns = 'repeat(' + input + ',40px)';
    pixels = document.getElementsByClassName('pixel');
  }
  clickPixels();
}

function corRandon() {
  for (let i = 1; i < colors.length; i += 1) {
    const color =
      'rgb(' +
      Math.random() * 255 +
      ',' +
      Math.random() * 255 +
      ',' +
      Math.random() * 255 +
      ')';
    colors[i].style.backgroundColor = color;
  }
}

function clickPixels() {
  for (let i of pixels) {
    i.addEventListener('click', function (event) {
      event.target.style.backgroundColor = cor;
    });
  }
}

corRandon();
whitePixel();
clickPixels();

for (let x of colors) {
  x.addEventListener('click', function (event) {
    selected = document.querySelector('.selected');
    selected.className = 'color';
    event.target.classList = 'selected color';
    cor = document.querySelector('.selected').style.backgroundColor;
  });
}

rubber.addEventListener('click', function(){
  cor = 'white';
});

random.addEventListener('click', corRandon);
button.addEventListener('click', whitePixel);
generateBoard.addEventListener('click', tamPaleta);
