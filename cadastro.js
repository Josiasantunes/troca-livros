const BANCO_USUARIO = "usuariosCadastrados";

const usuarioCadastrados = JSON.parse(localStorage.getItem(BANCO_USUARIO)) || [];
const emailDigitado = document.getElementById("email").value;
const senhaDigitada = document.getElementById("senha").value;

const msglogin = document.getElementById("msg-login");

document.getElementById("form-cadastro").addEventListener("submit", (e) => {
    e.preventDefault();

    const novoUsuario = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        usuario: document.getElementById("usuario").value,
        senha: document.getElementById("senha").value,
        confirmaSenha: document.getElementById("confirma-senha").value
    }
    const usuarioCadastrados = JSON.parse(localStorage.getItem(BANCO_USUARIO)) || [];
    const msgErro = document.getElementById("msg-erro");
//validacao das senhas diferentes
    if ( novoUsuario.senha != novoUsuario.confirmaSenha){
       msgErro.textContent = "As senhas não coincidem.Tente novamente.";
       msgErro.style.color = "red";

       return;
    } 

    // validacao que os campos estao preenchidos
    if(novoUsuario.nome === "" || novoUsuario.email === "" || novoUsuario.usuario === "" || novoUsuario.senha === ""){
        msgErro.textContent = "preencha todos os campos...";
        msgErro.style.color = "red";

        return;
    }
    //validacao se o usuario ja existe
    if(usuarioCadastrados != null){
        const emailExiste = usuarioCadastrados.some(usuario => usuario.email
             === novoUsuario.email);

            const usuarioExiste = usuarioCadastrados.some(usuario => usuario.usuario ===
                 novoUsuario.usuario);

        if(usuarioExiste){
            msgErro.textContent = "email ou usuario ja utilizados";
            msgErro.style.color = "red";
            return;
        }
    }
    const usuarioEncotrado = usuarioCadastrados.find(u  => u.email === emailDigitado && u.senha 
        === senhaDigitada || u.usuario === emailDigitado && u.senha === senhaDigitada);

        if(!usuarioEncotrado){
            msgErro.textContent = "usuario ou senha incorretos";
            msgErro.style.color = "red";

        }else{
            msgErro.textContent = "login realizado com sucesso!";
            msgErro.style.color = "green";
            location.href = "index.html";
        }


    usuarioCadastrados.push(novoUsuario);

    localStorage.setItem(BANCO_USUARIO, JSON.stringify(usuarioCadastrados));

    alert("cadastrado realizado com sucesso!");
    
    location.href = "login.html";

});
