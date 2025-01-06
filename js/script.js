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


  // Registrar plugin una sola vez
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









