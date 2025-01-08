console.log("funcionaaaa pls");


// acordeon 
jQuery ( '.accordion-cell' ).click (  function  ( ) {
    if ( jQuery ( this ).hasClass ( 'collapsed' ) ) {
      jQuery ( this ).removeClass ( 'collapsed' );
      jQuery ( this ).siblings ( ).removeClass ( 'expanded' );
      jQuery ( this ).addClass ( 'expanded' );
      jQuery ( this ).siblings ( ).addClass ( 'collapsed' );
    }
    else {
      jQuery ( this ).toggleClass ( 'expanded' );
      jQuery ( this ).siblings ( ).toggleClass ( 'collapsed' );
    }
  } );

 
gsap.registerPlugin(ScrollTrigger);

// Animación 2: Scroll horizontal

gsap.to(".ScrollContent", {
  x: () => -(document.querySelector(".ScrollContent").scrollWidth - document.documentElement.clientWidth), // Mueve horizontalmente
  ease: "none",
  scrollTrigger: {
    trigger: "#ScrollContainer", 
    pin: true, // Fija la sección
    scrub: 1, // Sincroniza con el scroll
    start: "top top", // Inicia en la parte superior
    end: () => "+=" + document.querySelector("#ScrollContainer").scrollWidth, // Finaliza después del ancho total
  },
});

// aparece el texto 
gsap.to(".reveal", {
  opacity: 1, 
  x: "0%", 
  duration: 1, 
  scrollTrigger: {
    trigger: "#ApScroll", 
    start: "top 80%", 
    end: "top 30%", 
    scrub: 1, // Sincroniza el scroll con la animación
    // markers: true, 
  },
});

// HEADER MOVER IMAGENES 
const images = document.querySelectorAll('.arrastra');

images.forEach((image) => {
    image.onmousedown = function (event) {

        document.body.append(image);// Mover la imagen al cuerpo para evitar problemas con el contenedor

        function moveAt(pageX, pageY) {
            image.style.left = pageX - image.offsetWidth / 2 + 'px';
            image.style.top = pageY - image.offsetHeight / 2 + 'px';
        }// Centrar la imagen en las coordenadas

        moveAt(event.pageX, event.pageY);// Colocar la imagen bajo el puntero inicialmente

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }// Función para mover la imagen con el puntero

        document.addEventListener('mousemove', onMouseMove);// Hacer caso al movimiento del ratón

        image.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);// Soltar imagen al soltar rató
            image.onmouseup = null; // Quitar el listener de mouseup
        };n
    };

    image.ondragstart = function () {
        return false;
    };
});

// titulo header baja 

gsap.timeline()
  .to(".big-text", { 
    opacity: 1,  
    y: 50,       
    duration: 1,  
    ease: "power2.out" 
  });


//partciclesssss
particlesJS("particles-js", {"particles":{"number":{"value":200,"density":{"enable":true,"value_area":881.8766334760375}},"color":{"value":"#ffeea7"},"shape":{"type":"star","stroke":{"width":5,"color":"#ffffff"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.9,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":112.2388442605866,"color":"#fa6327","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"top","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":1603.4120608655228,"rotateY":2485.28869434156}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":71.92807192807193,"size":20,"duration":1,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
