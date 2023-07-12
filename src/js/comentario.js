// Seleciona o formulário e a seção de comentários na página
const form = document.querySelector('form');
const commentSection = document.querySelector('#comment-section');

// Verifica se já existem comentários salvos no localStorage
let comments = JSON.parse(localStorage.getItem('comments')) || [];

// Função para renderizar os comentários na tela
const renderComments = () => {
  var Titulo = document.getElementById('PostTitle');
  var tituloDoComentarioJSON = sessionStorage.getItem('TituloDoComentario');
  var tituloNoticia = JSON.parse(tituloDoComentarioJSON);
  Titulo.textContent = tituloNoticia.TituloDoComentario;
  commentSection.innerHTML = '';
  comments.forEach((comment, index) => {
    if (comment.TituloDoComentario == Titulo.textContent) {
      const newComment = document.createElement('div');
      newComment.className = 'comment';
      newComment.innerHTML = `
        <h3>${comment.name}</h3>
        <p>${comment.content}</p>
      `;
      var userJSON = sessionStorage.getItem('user');
      var user = JSON.parse(userJSON);
      const name = user.name;
      if (name == comment.name) {
        newComment.innerHTML = `
          <h3>${comment.name}</h3>
          <p>${comment.content}</p>
          <div class="comment-actions">
            <button class="edit-button" data-index="${index}">Editar</button>
            <button class="delete-button" data-index="${index}">Excluir</button>
          </div>
          `;
        commentSection.appendChild(newComment);
      }
      commentSection.appendChild(newComment);
    }
  }
  )
};

// Função para adicionar um novo comentário
const addComment = (name, content, TituloDoComentario) => {
  const newComment = { name, content, TituloDoComentario };
  comments.push(newComment);
  localStorage.setItem('comments', JSON.stringify(comments));
  renderComments();
};

// Adiciona um ouvinte de evento de envio ao formulário
form.addEventListener('submit', (event) => {
  // Impede que o formulário seja enviado e a página seja atualizada
  event.preventDefault();
  // Seleciona os campos de nome e comentário do formulário
  var Titulo = document.getElementById('PostTitle');
  var userJSON = sessionStorage.getItem('user');
  var user = JSON.parse(userJSON);
  const TituloDoComentario = Titulo.textContent;
  const name = user.name;
  const content = document.querySelector('#comment').value;
  // Adiciona o novo comentário
  addComment(name, content, TituloDoComentario);
  // Limpa os campos de nome e comentário no formulário
  document.querySelector('#comment').value = '';
});

// Adiciona um ouvinte de evento de clique à seção de comentários
commentSection.addEventListener('click', (event) => {
  // Verifica se o botão clicado é um botão de edição
  if (event.target.classList.contains('edit-button')) {
    const index = event.target.getAttribute('data-index');
    const comment = comments[index];
    // Altera o formulário para exibir os dados do comentário selecionado para edição
    var userJSON = sessionStorage.getItem('user');
    var Titulo = document.getElementById('PostTitle');
    var userJSON = sessionStorage.getItem('user');
    var user = JSON.parse(userJSON);
    var user = JSON.parse(userJSON);
    const TituloDoComentario = Titulo.textContent;
    const name = user.name;
    document.querySelector('#comment').value = comment.content;
    // Remove o comentário da lista
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    renderComments();
  }
  // Verifica se o botão clicado é um botão de exclusão
  else if (event.target.classList.contains('delete-button')) {
    const index = event.target.getAttribute('data-index');
    // Remove o comentário da lista
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    renderComments();
  }
});

if(!sessionStorage.user){
  alert("você precisa logar")
  window.history.back();
};

// Renderiza os comentários na tela quando a página é carregada
renderComments();