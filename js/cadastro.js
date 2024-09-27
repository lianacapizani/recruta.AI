// JS PARA APÓS PREENCHIDO DIRECIONAR PARA A PÁGINA HOME

document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Coletar dados do formulário
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const termos = document.getElementById('termos').checked;
  
    // Validar e salvar informações (simplificado)
    if (nome && sobrenome && cpf && dataNascimento && email && senha && termos) {
      alert('Cadastro realizado com sucesso!');
      window.location.href ='../index.html';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  

// CPF AJUSTAR APÓS DIGITAR

    document.getElementById('cpf').addEventListener('input', function (e) {
        let input = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
        input = input.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o ponto após os 3 primeiros dígitos
        input = input.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o ponto após os próximos 3 dígitos
        input = input.replace(/(\d{3})(\d)/, '$1-$2'); // Adiciona o traço antes dos últimos 2 dígitos
        e.target.value = input; // Atualiza o valor do input
    });


//JS PARA OCULTAR OU NÃO A SENHA

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#senha");

togglePassword.addEventListener("click", function () {
  // Alternar o tipo de input de 'password' para 'text'
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  
  // Alternar o ícone entre olho aberto e fechado
  this.classList.toggle("fa-eye-slash");
});
