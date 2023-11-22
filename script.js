// Exemplo de uso do localStorage com os métodos setItem, push, stringify, parse e filter para cadastro de pacientes

// Criar uma lista vazia de pacientes
var Listalist = []; //Comando que cria uma variável patientList e a inicializa como um array vazio. Essa variável é usada para armazenar a lista de pacientes cadastrados.
var count = 1;

// Função para adicionar um novo paciente
function addPessoa(username, telefone) {
  var newPessoa = { id: count++, username: username, telefone: telefone}; //cria um novo objetivo de paciente (newPatient), com as propriedades id, name e age
  Listalist.push(newPessoa); //comando que adiciona o novo paciente ao final da lista de pacientes
  localStorage.setItem('Listalist', JSON.stringify(Listalist)); //o JSON.stringfy converte o objeto JavaScript em uma string JSON
  renderListalist();
}

// Função para excluir um paciente
function deletePessoa(pessoaId) {
  var updatedListalist = Listalist .filter(function (pessoa) {
    return pessoa.id !== pessoatId; //retorna todos os elementos que não sejam no ID selecionado
  });

  if (updatedListalist .length < Listalist .length) { //verifica se a lista atualizada é diferente da lista original
    Listalist  = updatedListalist ;
    localStorage.setItem('Listalist', JSON.stringify(Listalist)); 
    renderListalist ();
  } else {
    alert('Paciente não encontrado.');
  }
}

// Função para recuperar a lista de pacientes do localStorage
function getListalist() {
  var storedList = JSON.parse(localStorage.getItem('Listalist')); //converte a string JSON para objeto JavaScript
  Listalist = storedList || []; //se storedList for um valor válido (não seja nulo ou indefinido). é atribuido a patientList. Caso contrário, patientList recebe um array vazio
}

// Função para renderizar a lista de pacientes no HTML
function renderListalist() {
  var pessoaListElement = document.getElementById('Listalist');
  pessoaListElement.innerHTML = ''; //limpa o conteúdo HTML do elemento patientListElement

  Listalist.forEach(function (pessoa) {
    var listItem = document.createElement('li');
    //renderiza a lista de pacientes. Itera sobre cada paciente na lista encontrada e cria um <li> para cada paciente
    listItem.innerHTML = '<span class="pessoa-username">' + pessoa.username + '</span> (telefone: ' + pessoa.telefone + ') <button class="delete-button" onclick="deletePessoa(' + pessoa.id + ')">Excluir</button>';
    pessoaListElement.appendChild(listItem);
  });
}

// Recuperar a lista de pacientes do localStorage
getListalist();

// Renderizar a lista de pacientes no HTML
renderListalist();

// Event listener para o formulário de cadastro de pacientes
document.getElementById('listaform').addEventListener('submit', function (event) {
  event.preventDefault();
  var usernane = document.getElementById('username');
  var telefone = document.getElementById('telefone');
  addPessoa(username.value, parseInt(telefone.value));
  username.value = '';
  telefone.value = '';
});
