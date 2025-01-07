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
    trigger: "#ScrollContainer", // Activa al entrar en esta sección
    pin: true, // Fija la sección
    scrub: 1, // Sincroniza con el scroll
    start: "top top", // Inicia en la parte superior
    end: () => "+=" + document.querySelector("#ScrollContainer").scrollWidth, // Finaliza después del ancho total
  },
});

// aparece el texto 
gsap.to(".reveal", {
  opacity: 1, // Hace que el texto sea visible
  x: "0%", // Mueve el texto a su posición original
  duration: 1, // Duración de la animación
  scrollTrigger: {
    trigger: "#ApScroll", // Inicia la animación cuando entra en la sección #ApScroll
    start: "top 80%", // Empieza la animación cuando el top de la sección esté al 80% de la pantalla
    end: "top 30%", // Termina la animación cuando el top de la sección esté al 30% de la pantalla
    scrub: 1, // Sincroniza el scroll con la animación
    // markers: true, 
  },
});









