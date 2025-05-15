
const chats = [
  { id: 'grupo1', nome: 'CS Squad' },
  { id: 'grupo2', nome: 'Pokémon Fanclub' }
];

const mensagens = {
  grupo1: [
    { autor: 'Você', conteudo: 'Ventilador de teto' },
    { autor: 'Amigo', conteudo: 'Adoro doenças respiratorias' }
  ],
  grupo2: [
    { autor: 'Você', conteudo: 'Pokemon fav?' },
    { autor: 'Eu', conteudo: 'Flygon' }
  ]
};

// Função para inicializar a UI
function init() {
  const sidebar = document.getElementById('sidebar');
  const conversation = document.getElementById('conversation');

  // Cria elementos de chat na sidebar
  chats.forEach(chat => {
    const div = document.createElement('div');
    div.classList.add('chat');
    div.textContent = chat.nome;
    div.onclick = () => showChat(chat.id);
    sidebar.appendChild(div);

    // Cria containers para cada chat
    const chatBox = document.createElement('div');
    chatBox.id = chat.id;
    chatBox.classList.add('chat-box', 'hidden');
    conversation.appendChild(chatBox);
  });
}

// Mostra mensagens do chat
function showChat(id) {
  document.querySelectorAll('.chat-box').forEach(box => {
    box.classList.add('hidden');
    box.innerHTML = '';
  });
  const box = document.getElementById(id);
  mensagens[id].forEach(msg => {
    const p = document.createElement('p');
    p.classList.add('message');
    p.innerHTML = `<span class="author">${msg.autor}:</span> ${msg.conteudo}`;
    box.appendChild(p);
  });
  box.classList.remove('hidden');
}

// Inicializa ao carregar a página
window.onload = init;

