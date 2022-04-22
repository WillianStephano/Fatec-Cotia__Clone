/* Menu principal fixo ao rolar a pagina */
window.onscroll = function() {myFunction()};

const navbar = document.getElementById("barra-menu");
const sticky = navbar.offsetTop;

function myFunction() {
   if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
   } else {
      navbar.classList.remove("sticky");
   }
}





/* Toggle Menu */
const btToggle = document.querySelector('.bt-toggle')
const menuNav = document.querySelector('.menu-lista')
const menunav2 = document.querySelector('.area-exclusiva-nav')

btToggle.addEventListener('click', function () {
   menuNav.classList.toggle('menu-ativo')
   menunav2.classList.toggle('menu-ativo')
   
})






/* Carrosel */
//Selecionando elementos do HTML
const imgCarrosel = document.querySelector('.img_carrosel')
const btProximo = document.querySelector('.bt_proximo')
const btAnterior = document.querySelector('.bt_anterior')

//Objeto com imagens 
const colecaoImg =[
   {
      id: 1,
      img: 'Conteudo/banner-cursos-fatec-cotia.jpg',
   },
   {
      id: 2,
      img: 'Conteudo/dsm.jpg',
   },
   
   {
      id: 3,
      img: 'Conteudo/banner-01.jpg',
   },
   
]
// Imagen inicial 
let imgAtual = 0

//Ao carregar a pagina a imag X ira ser apresentada por meio da funcao
window.addEventListener('DOMContentLoaded', function () {
   mostrarImg(imgAtual)
})

//Mudar o depoimento baseado na variavel "item" que recebe a posicao atual do array por meio de var
function mostrarImg() {
   const item = colecaoImg[imgAtual]
   imgCarrosel.src = item.img
}


//Botao ao clicar altera a imagem avançando para proxima
btProximo.addEventListener ('click',function() {
   imgAtual++
   if (imgAtual > colecaoImg.length - 1) {
      imgAtual = 0
   }
   mostrarImg()
})

//Botao ao clicar retorna uma imagem
btAnterior.addEventListener ('click',function(){
   imgAtual--
   if (imgAtual < 0) {
      imgAtual = colecaoImg.length - 1
   }
   mostrarImg()
})