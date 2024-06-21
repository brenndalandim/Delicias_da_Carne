// Inicio carrossel
imgCarrossel = document.getElementById("img_carrossel")
const imagens = ["./assets/img/carne_banner1.jpg", "./assets/img/carne_banner2.jpg"]
let i = 0
function trocarImagem() {
  imgCarrossel.src = imagens[i]
  i++
  if(i >= imagens.length){
    i = 0
  }
}
setInterval(trocarImagem,4000)
// Fim Carrossel