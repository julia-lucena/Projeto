
var Listalist = []; 
var count = 1;


function addPessoa(username, telefone) {
  var newPessoa = { id: count++, username: username, telefone: telefone}; 
  Listalist.push(newPessoa);
  localStorage.setItem('Listalist', JSON.stringify(Listalist)); 
  renderListalist();
}


function deletePessoa(pessoaId) {
  var updatedListalist = Listalist .filter(function (pessoa) {
    return pessoa.id !== pessoaId; 
  });

  if (updatedListalist .length < Listalist .length) { 
    Listalist  = updatedListalist ;
    localStorage.setItem('Listalist', JSON.stringify(Listalist)); 
    renderListalist ();
  } else {
    alert('Pessoa não encontrada.');
  }
}


function getListalist() {
  var storedList = JSON.parse(localStorage.getItem('Listalist')); 
  Listalist = storedList || []; 
}


function renderListalist() {
  var pessoaListElement = document.getElementById('Listalist');
  pessoaListElement.innerHTML = ''; 

  Listalist.forEach(function (pessoa) {
    var listItem = document.createElement('li');
    listItem.innerHTML = '<span class="pessoa-username">' + pessoa.username + '</span> (telefone: ' + pessoa.telefone + ') <button class="delete-button" onclick="deletePessoa(' + pessoa.id + ')">Excluir</button>';
    pessoaListElement.appendChild(listItem);
  });
}

function limparTudo(){
  let lista = document.getElementById("Listalist");
  while (lista.firstChild){
  lista.removeChild(lista.firstChild);
  }
  localStorage.clear();
  }

getListalist();
renderListalist();


document.getElementById('listaform').addEventListener('submit', function (event) {
  event.preventDefault();
  var username = document.getElementById('username');
  var telefone = document.getElementById('telefone');
  var endereco = document.getElementById('endereco');
  var complemento = document.getElementById('complemento');
  var numero = document.getElementById('numero');
  var email = document.getElementById('email');
  var opn = document.getElementById('opn');

  addPessoa(username.value, parseInt(telefone.value));

  username.value = '';
  telefone.value = '';
  endereco.value = '';
  complemento.value = '';
  numero.value = '';
  email.value = '';
  opn.value = '';

  document.getElementsByName('todos')[0].checked = false;
  document.getElementsByName('vidro')[0].checked = false;
  document.getElementsByName('metais')[0].checked = false;
  document.getElementsByName('papel')[0].checked = false;
  document.getElementsByName('eletronico')[0].checked = false;
});
