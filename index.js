const grupos = [{
  id : "grupoClasse15", nome: "Classe Matematica"  
},
{
  id : "grupoCriado24", nome: "grupoStarupLegal"
},
{
  id : "grupocriado54", nome: "GrupoHistoriaDaArte"
}];

const messages = {
  grupoClasse15: [
    {autor: 'Kaue', conteudo: 'Bom dia grupo'},
    {autor: 'Sasha', conteudo: 'Bom dia galera, o que vai cair na prova?'},
    {autor: 'Violet', conteudo: 'Acho que tudo desde a ultima prova tirando o conteudo da prova passada'}
  ],

  grupoCriado24: [
    {autor: 'Gabriel', conteudo: 'E se a gente fizer panfletos? vcs acham que da certo?'},
    {autor: 'Adore', conteudo: 'Acho que daria bastante certo sim'},
    {autor: 'Adore', conteudo: 'botar naquelas paredes né?'},
    {autor: 'Fernando', conteudo: 'sim'}
  ],

  grupocriado54: [
    {autor: 'Fernando', conteudo: 'Ok, acho legal a gente dividir o trabalho bastante entre quem vai fazer a parte de personagem e background já que são igualmente importantes'},
    {autor: 'Aquaria', conteudo: 'eu quero ficar com a parte de background'},
    {autor: 'Bob', conteudo: 'Massa, eu quero ajudar no background também'}
  ]
};

function codigoPrincipal(){
  const sidebar = document.getElementById("sidebar");
  const conversation = document.getElementById("conversation");

  grupos.forEach(grupoChat => {
    const divChatIndividual = document.createElement('div');
    divChatIndividual.classList.add('chat');
    divChatIndividual.textContent = grupoChat.nome;
    divChatIndividual.onclick = () => mostrarChat(grupoChat.id);
    sidebar.appendChild(divChatIndividual);

    const chatBox = document.createElement('div');
    chatBox.id = grupoChat.id;
    chatBox.classList.add('chatBoxClass', 'hidden');
    conversation.appendChild(chatBox);
  });
}

function mostrarChat(id){
  document.querySelectorAll('.chatBoxClass').forEach(box => {
    box.classList.add('hidden');
    box.innerHTML = '';
  });

  const box = document.getElementById(id);
  messages[id].forEach(mensagem => {
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('message');
    paragrafo.innerHTML = `<span class="author">${mensagem.autor}:</span> ${mensagem.conteudo}`;
    box.appendChild(paragrafo);
  });
  box.classList.remove('hidden');
}

document.addEventListener("DOMContentLoaded", codigoPrincipal);