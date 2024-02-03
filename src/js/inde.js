/*
Objetivo 1 - Quando o usuario clicar no botao de selecao de plataforma deve abrir uma caixa com os botoes de seleçao de plataforma
    Passo 1 - pegar o botao de seleçao de plataforma no JS pra poder verificar quando o usuario clicar em cima dele

    Passo 2 - adicionar a classe ativo no botao pra que o conteudo deke aoareça

    passo 3 - pegar o clique do usuario no JS

    passo 4 - quando o usuario clicar,adicionar a classe ativo na listagem de plataformas dentro do botao pra que o conteudo apareça


Objetivo 2 - caso a lista de botoes de plataforma ja esteja aparecendo e o usuario clicar no botao de fechar, o conteudo deve ser escondido

    passo 1 - verificar se o botao ja foi ativo pelo usuario, se sim, devemos remover a classe ativo pra que ele esconda o conteudo novamente


*/

const botao = document.querySelector(".btn-plataforma");


const elementoplataformas = document.querySelector(".btn-plataforma .platafotmas");

botao.addEventListener("click", () =>{
    console.log("o botao foi clicado");
    
    elementoplataformas.classList.add("ativo");

    const botaoEstaaberto = elementoplataformas.classList.contains("ativo");

    if(botaoEstaaberto){
        elementoplataformas.classList.remove("ativo");
    }else{

    }
})