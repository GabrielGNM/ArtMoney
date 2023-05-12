
const rightButton = document.querySelector(".right-button");
rightButton.addEventListener("click", function () {

  const rightBar = document.querySelector(".right-bar");
  const currentBar = parseInt(getComputedStyle(rightBar).right);
  if (currentBar === 0) {
    rightBar.style.right = '-600px';;
  } else {
    rightBar.style.right = "0px";
  }

  if (sessionStorage.length !== 0) {
    //Acessa o Session storage
    var userJSON = sessionStorage.getItem('user');
    var user = JSON.parse(userJSON);
  
  
    //altera HTML do RightBar
    var tituloRightBar = document.getElementById("tituloRightBar");
    tituloRightBar.textContent = "Bem Vindo " + user.name;
  }
});

const image = document.querySelector('.imgPerfil');
const button = document.querySelector('.imgPerfil');

button.addEventListener('click', function () {
  if (image.src.endsWith('perfil-de-usuario.png')) {
    image.src = './img/cardapio.png';
    image.style
  } else {
    image.src = './img/perfil-de-usuario.png';
  }
});
