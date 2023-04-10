/* MENU
------------------------------ */
function menu() {
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.burger');

    burger.onclick = (e) => {
        e.preventDefault();
        document.body.classList.toggle('menu-active');
    }
}

menu();

/* SLIDERS
------------------------------ */
new Splide('.home-slider .splide', {
	type: 'fade',
	arrows: false,
	autoplay: true
}).mount();

new Splide('.partners .splide', {
	type: 'loop',
	arrows: false,
	autoplay: true,
	perPage: 4,
  	perMove: 1,
  	gap: '140px',
    breakpoints: {
        991: {
            perPage: 3,
            gap: '0px',
        },
        750: {
            perPage: 1,
        }
    }
}).mount();

/* ANIMATION PAGE
------------------------------ */
function animScrollPage() {
    const elems = document.querySelectorAll('.animated');
    const options = {rootMargin: '0px'}
   
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting)
                entry.target.classList.add('show');
            else 
            	entry.target.classList.remove('show');
        });
    }, options);
   
    elems.forEach(elem => {
        observer.observe(elem);
    });
}
   
animScrollPage(); 