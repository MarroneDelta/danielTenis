let body = document.querySelector("body")
// document = Apelido do html
// querySelector = pegar do html / selecionador




function mudarVisual(cor,imagem){
    body.style.background = cor
    const imagemTenis = document.querySelector(".imagem-tenis");
    imagemTenis.src = imagem;
}