
window.onload = function(){
    const appearOptions = {
        rootMargin: "0px 0px -350px 0px"
    };

    const sliders = document.querySelectorAll(".slide-in");

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
        });
    },
    appearOptions);
    

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

    const appearAfterOptions = {}
    const slidersAfter = document.querySelectorAll(".slide-after");

    const appearOnScrollAfter = new IntersectionObserver(function(
        entries,
        appearOnScrollAfter
    ) {
        entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appearAfter");
            appearOnScroll.unobserve(entry.target);
        }
        });
    },
    appearOptions);
    

    slidersAfter.forEach(sliderAfter => {
        appearOnScrollAfter.observe(sliderAfter);
    });

    const sectionOne = document.querySelector(".whoami");
    const sectionTwo = document.querySelector(".backstory");
    const sectionThree = document.querySelector(".skillset");
    const sectionFour = document.querySelector(".interest");
    const sectionFive = document.querySelector(".future");

    const sectionOneOptions = {rootMargin: "-200px 0px -200px 0px"};
    const sectionTwoOptions = {rootMargin: "-200px 0px -200px 0px"};
    const sectionThreeOptions = {rootMargin: "-200px 0px -200px 0px"};
    const sectionFourOptions = {rootMargin: "-200px 0px -200px 0px"};
    const sectionFiveOptions = {rootMargin: "-200px 0px -200px 0px"};

    const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            $('#link1').removeClass("active");
          } else {
            $('#link1').addClass("active");
          }
        });
      },
      sectionOneOptions);

      const sectionTwoObserver = new IntersectionObserver(function(
        entries,
        sectionTwoObserver
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            $('#link2').removeClass("active");
          } else {
            $('#link2').addClass("active");
          }
        });
      },
      sectionTwoOptions);

      const sectionThreeObserver = new IntersectionObserver(function(
        entries,
        sectionThreeObserver
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            $('#link3').removeClass("active");
          } else {
            $('#link3').addClass("active");
          }
        });
      },
      sectionThreeOptions);

      const sectionFourObserver = new IntersectionObserver(function(
        entries,
        sectionFourObserver
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            $('#link4').removeClass("active");
          } else {
            $('#link4').addClass("active");
          }
        });
      },
      sectionFourOptions);

      const sectionFiveObserver = new IntersectionObserver(function(
        entries,
        sectionFiveObserver
      ) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            $('#link5').removeClass("active");
          } else {
            $('#link5').addClass("active");
          }
        });
      },
      sectionFiveOptions);
    

    sectionOneObserver.observe(sectionOne);
    sectionTwoObserver.observe(sectionTwo);
    sectionThreeObserver.observe(sectionThree);
    sectionFourObserver.observe(sectionFour);
    sectionFiveObserver.observe(sectionFive);


}


$(window).scroll(function() {
    parallax();
})

/* Parallax */
function parallax() {

    var wScroll = $(window).scrollTop();

    $(' .parallax--bg').css('background-position', 'center ' + (wScroll * 0.75) + 'px')

}

$(document).ready(function(){

    var audio = document.getElementById("audio");
    audio.volume = 0.3;

    $('#music').click(function() {
        $('#music-menu').toggle();
        var select = new Audio();
        select.src = "audio/select.mp3"
        select.play();
    })

    $("#music").mouseenter(function() {
        var bleep = new Audio();
        bleep.src = "audio/button.mp3"
        bleep.play();
    })

    $('#music1').click(function() {
        $('#audio').attr('src','audio/Butterfly Kiss.mp3');
        $('.transition').css('background-color', 'blue');
    })

    $('#music2').click(function() {
        $('#audio').attr('src','audio/Ideal and the Real.mp3');
        $('.transition').css('background-color', 'yellow');
    })

    $('#music3').click(function() {
        $('#audio').attr('src','audio/Life Will Change.mp3');
        $('.transition').css('background-color', 'red');
    })

    $('#music4').click(function() {
        $('#audio').attr('src','audio/Price.mp3');
        $('.transition').css('background-color', 'green');
    })

    $('#music5').click(function() {
        $('#audio').attr('src','audio/Royal Days.mp3');
        $('.transition').css('background-color', 'violet');
    })

    $('#music6').click(function() {
        $('#audio').attr('src','audio/So Boring.mp3');
        $('.transition').css('background-color', 'orange');
    })

    $('#music7').click(function() {
        $('#audio').attr('src','audio/Tokyo Daylight.mp3');
        $('.transition').css('background-color', 'lime');
    })

    $('#music8').click(function() {
        $('#audio').attr('src',' ');
        $('.transition').css('background-color', '#222222');
    })

    $('#backstory-btn').click(function() {
        backstory();
        $(this).remove();
    })

    $(':button').hover(function() {
        var bleep = new Audio();
        bleep.src = "audio/button.mp3"
        bleep.play();
    })

    $(':button').click(function() {
        var select = new Audio();
        select.src = "audio/select.mp3"
        select.play();
    })

    var i = 0;

    for(i=1; i < 9; i++) {
        $('#music' + i).mouseenter(function() {
            var bleep = new Audio();
            bleep.src = "audio/button.mp3"
            bleep.play();
        })

        $('#music' + i).click(function() {
            var select = new Audio();
            select.src = "audio/select.mp3"
            select.play();
        })
    }

    $('#music-menu').mouseleave(function() {
        $('#music-menu').hide();
    })

    for(i=1; i < 6; i++) {
        $('#link' + i).mouseenter(function() {
            var bleep = new Audio();
            bleep.src = "audio/button.mp3"
            bleep.play();
        })

        $('#link' + i).click(function() {
            var select = new Audio();
            select.src = "audio/select.mp3"
            select.play();
        })
    }

    var scrollLink = $('.scroll');

    //Smoorh scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500 )
    })
})

function backstory() {
    $('#backstory-p').text('Nothing Special. Grew up in a city that is otherwise known as the Gulf Tiger or the City of Gold. Studied in a private school and achieved the top rank n class for a few years. And unfortunately, moved to the country refer to as Great White North.');
    $('#backstory-p').css('text-indent','2rem');
}