
let users = [];
const UserAdmin = {
	name: "ADM",
	email: "ADM@gmail.com",
	type: "ADM",
	password: "ADM",
}
users.push(UserAdmin);
//Cria Usuario
function createUser() {
	const nameInput = document.getElementById('name');
	const emailInput = document.getElementById('email');
	const passwordInput = document.getElementById('password');
	const typeInput = document.getElementById('type');
	const confirmPassword = document.querySelector('confirm-password');

	if (password !== confirmPassword) {
		alert('As senhas não coincidem!');
	} else {
		alert(`Cadastro realizado com sucesso!\nNome: ${nameInput}\nE-mail: ${emailInput}\nSenha: ${passwordInput}`);
		const newUser = {
			name: nameInput.value,
			email: emailInput.value,
			type: typeInput.value,
			password: passwordInput.value,
		};

		users.push(newUser);
		renderUsers();
	}
}
//Deleta Usuario
function deleteUser(index) {
	users.splice(index, 1);
	renderUsers();
}
//Exibe todos os Funcionarios
function renderUsers() {
	const userList = document.getElementById('user-list');

	userList.innerHTML = '';

	users.forEach((user, index) => {
		const row = document.createElement('tr');
		const nameCell = document.createElement('td');
		const emailCell = document.createElement('td');
		const passwordCell = document.createElement('td');
		const deleteCell = document.createElement('td');
		const deleteButton = document.createElement('button');

		nameCell.innerText = user.name;
		emailCell.innerText = user.email;
		passwordCell.innerText = user.password;

		deleteButton.innerText = 'Delete';
		deleteButton.onclick = () => deleteUser(index);
		deleteCell.appendChild(deleteButton);

		row.appendChild(nameCell);
		row.appendChild(emailCell);
		row.appendChild(passwordCell);
		row.appendChild(deleteCell);

		userList.appendChild(row);
	});
}
//Cancela Tela
document.getElementById("cancelBtn").addEventListener("click", function () {
	document.getElementById("username").removeAttribute("required");
	document.getElementById("password").removeAttribute("required");
	window.history.back();
});


