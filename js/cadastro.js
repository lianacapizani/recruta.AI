// JS PARA APÓS PREENCHIDO DIRECIONAR PARA A PÁGINA HOME

document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const termos = document.getElementById('termos').checked;
  
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
        input = input.replace(/(\d{3})(\d)/, '$1.$2'); 
        input = input.replace(/(\d{3})(\d)/, '$1.$2'); 
        input = input.replace(/(\d{3})(\d)/, '$1-$2'); 
        e.target.value = input; 
    });



