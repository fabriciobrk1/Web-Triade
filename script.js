function handleSubmit(event) {
  event.preventDefault(); 

  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome && mensagem) {
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
    document.getElementById('nome').value = '';
    document.getElementById('mensagem').value = '';
  }
}

const perfis = [
  {
    nome: "LinkedIn",
    descricao: "Veja meu perfil profissional",
    imagem: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    link: "https://www.linkedin.com/in/fabriciobresende"
  },
  {
    nome: "GitHub",
    descricao: "Confira meus repositórios",
    imagem: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    link: "https://github.com/fabriciobrk1"
  }
];



function gerarCards() {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  perfis.forEach(perfil => {
    container.innerHTML += `
      <div class="card shadow" style="width: 18rem;">
        <img src="${perfil.imagem}" class="card-img-top" alt="${perfil.nome}">
        <div class="card-body text-center">
          <h5 class="card-title">${perfil.nome}</h5>
          <p class="card-text">${perfil.descricao}</p>
          <a href="${perfil.link}" target="_blank" class="btn btn-primary">Acessar</a>
        </div>
      </div>
    `;
  });
}







function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  
  const isDark = document.body.classList.contains('dark-mode');
  document.getElementById('themeToggle').innerHTML = isDark
  ? '<i class="bi bi-sun-fill"></i>'
  : '<i class="bi bi-moon-fill"></i>';

  
  localStorage.setItem('modoEscuro', isDark);
}


window.onload = function () {
  gerarCards(); 

  const modoEscuro = localStorage.getItem('modoEscuro') === 'true';
  if (modoEscuro) {
    document.body.classList.add('dark-mode');
    document.getElementById('themeToggle').innerHTML= '<i class="bi bi-sun-fill"></i>';
  }
};



