/* abre e fecha o menu quando clicar no icone hambuerguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu ,escondê-lo */
const links = document.querySelectorAll('nav ul li a')
for ( const link of links) {
link.addEventListener('click', function (){
    nav.classList.remove('show')
})

}
// carrousel //
const swiper = new Swiper('.swiper', {
  loop: true,
   
    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  });




