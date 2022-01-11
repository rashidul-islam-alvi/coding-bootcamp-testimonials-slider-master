const slides = document.querySelectorAll('.slide');
const next = document.querySelector ('.next');
const prev = document.querySelector('.prev');



next.addEventListener("click", function nextSlide() {

  const current = document.querySelector('.current');
  current.classList.remove ('current');

  if (current.nextElementSibling)
   {
       current.nextElementSibling.classList.add ('current');
   }

   else {
       slides[0].classList.add('current');
   }

} );


prev.addEventListener("click", function prevSlide() {

    const current = document.querySelector('.current');
    current.classList.remove ('current');
  
    if (current.previousElementSibling)
     {
         current.previousElementSibling.classList.add ('current');
     }
  
     else {
         slides[slides.length-1].classList.add('current');
     }
  
  } );

