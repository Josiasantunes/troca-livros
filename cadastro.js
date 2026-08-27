const BANCO_USUARIO = "ususarioCadastrados";


document.getElementById("btn-cadastrar").addEventListener('click',() => {

    const novoUsuario = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        Usuario: document.getElementById("Usuario").value,
        senha: document.getElementById("senha").value,
        confirmaSenha: document.getElementById("confirma-senha"),value,
    };

    if ( novoUsuario.senha != novoUsuario.confirmaSenha){
       const msgErro =  document.getElementById("msg-erro");
       msgErro.textContent = "As senhas não coincidem.Tente novamente.";
       msgErro.style.color = "red";

       return;
    } 

    
    localStorage.setItem(BANCO_USUARIO, JSON.stringify(novoUsuario));
    alert("Usuario cadastrado com sucesso!");
    location.href = "login.html";

})
