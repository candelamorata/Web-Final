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

// scroll horizontal scroll trigger 
    gsap.registerPlugin(ScrollTrigger);

    let contents= gsap.utils.toArray(".content");
    
    gsap.to(contents,{
      xPercent: -100 * (contents.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger:"#HorScroll",
        pin: true,
      scrub: 1,      },
    });
