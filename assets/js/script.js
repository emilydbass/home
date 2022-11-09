var swiper = new Swiper(".workSlider", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.work-button-next',
    },
});


function myFunction() {
    var dots = document.getElementById("dots");
    var btnText = document.getElementById("myBtn");
    var moreText = document.getElementById("more");
    
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "See more!"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "See less!"; 
        moreText.style.display = "inline";
      }
   }


   document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
      heightRatio: 0.5,
    } ).mount();
  } );

  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#card-carousel', {
          perPage    : 2,
          breakpoints: {
              640: {
                  perPage: 1,
              },
          },
    } ).mount();
  } );


  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#fullscreen-carousel', {
          width : '80vh',
          height: '80vh',
    } ).mount();
  } );


  // SHOW the project code

  function showCode() {
   

}


function showCode2() {
  var state = document.getElementById("Xcel")
  window.alert("Coming soon! Check out the LC for Robots project while you wait.");
}

