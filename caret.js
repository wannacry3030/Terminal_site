//retorna uma referência para um elemento no documento com o elid especificado como seu id.
function $(elid) {
  return document.getElementById(elid);
}

var cursor;
window.onload = init;

//inicializa o script definindo a propriedade de estilo left de um elemento com o id "cursor" como "0px"
function init() {
  cursor = $("cursor");
  cursor.style.left = "0px";
}

// substitui os caracteres de uma nova linha (\n) na string txt por elementos <br>.
function nl2br(txt) {
  return txt.replace(/\n/g, "");
}

// define a propriedade innerHTML de um elemento com o id "typer" com o valor de 'from.value', com os caracteres da nova linha substituídos por elementos <br>.
function typeIt(from, e) {
  e = e || window.event;
  var w = $("typer");
  var tw = from.value;
  if (!pw) {
    w.innerHTML = nl2br(tw);
  }
}

// move um elemento com o id "cursor" para a esquerda ou para a direita no documento com base nas setas pressionadas pelo usuário. O parâmetro count especifica o número de vezes que o elemento deve ser movido.
function moveIt(count, e) {
  e = e || window.event;
  var keycode = e.keyCode || e.which;
  if (keycode == 37 && parseInt(cursor.style.left) >= 0 - (count - 1) * 10) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && parseInt(cursor.style.left) + 10 <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
}

// registra a string txt na console.
function alert(txt) {
  console.log(txt);
}
