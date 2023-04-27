
const rightButton = document.querySelector(".right-button");
rightButton.addEventListener("click", function () {

  const rightBar = document.querySelector(".right-bar");
  const currentBar = parseInt(getComputedStyle(rightBar).right);
  if (currentBar === 0) {
    rightBar.style.right = '-600px';;
  } else {
    rightBar.style.right = "0px";
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
//Faz Tela de Login na RightBar
const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function () {
  fetch("login.html")
    .then(response => response.text())
    .then(data => {
      const telaLogin = document.getElementById("loginCadastroBtn");
      telaLogin.innerHTML = data;
    })
    .catch(error => console.log(error));
});
//Faz Tela de Cadastro na RightBar
const cadastroBtn = document.getElementById('cadastroBtn');
cadastroBtn.addEventListener('click', function () {
  fetch("cadastro.html")
    .then(response => response.text())
    .then(data => {
      const telaCadastro = document.getElementById("loginCadastroBtn");
      telaCadastro.innerHTML = data;
    })
    .catch(error => console.log(error));
});

//Cancela Tela de Login na RightBar
// const cancelBtn = document.getElementById('cancelBtn');
// cancelBtn.addEventListener('click', function() {
//       history.back();
//     });

const cancelBtn = document.getElementsByClassName('cancelBtnData');
cancelBtn.addEventListener('click', function () {
  fetch("login.html")
    .then(response => response.text())
    .then(data => {
      const telaLogin = document.getElementById("loginCadastroBtn");
      telaLogin.innerHTML = data;

      // Go back to previous page after updating content
      history.back();
    })
    .catch(error => console.log(error));
});
