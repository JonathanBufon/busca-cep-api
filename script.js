function buscarCep() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
  
    if (cep.length !== 8) {
      alert("Digite um CEP válido com 8 dígitos.");
      return;
    }
  
    fetch(`consulta.php?cep=${cep}`)
      .then(response => response.json())
      .then(data => {
        const resultadoDiv = document.getElementById('resultado');
  
        if (data.erro) {
          resultadoDiv.style.display = 'block';
          resultadoDiv.innerHTML = `<strong>CEP não encontrado.</strong>`;
        } else {
          resultadoDiv.style.display = 'block';
          resultadoDiv.innerHTML = `
            <strong>CEP:</strong> ${data.cep}<br>
            <strong>Logradouro:</strong> ${data.logradouro}<br>
            <strong>Bairro:</strong> ${data.bairro}<br>
            <strong>Cidade:</strong> ${data.localidade}<br>
            <strong>Estado:</strong> ${data.uf}<br>
          `;
        }
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao consultar o CEP.');
      });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const inputCEP = document.getElementById("cep");
    const botaoBuscar = document.getElementById("buscar");
  
    inputCEP.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        botaoBuscar.click();
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle-mode");
    const body = document.body;
  
    toggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
  
      if (body.classList.contains("dark-mode")) {
        toggle.textContent = "☀️ Modo Claro";
      } else {
        toggle.textContent = "🌙 Modo Escuro";
      }
    });
  });
  