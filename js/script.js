
/* Adding observers and effects on scroll */
window.onload = function(){
    
    /* Add observers to each sections with class slide-in and to add class appear on scroll to produce effect
       add class active to update side menu  */
    const sliders = document.querySelectorAll(".slide-in");
    const appearOptions = {
      rootMargin: "-200px 0px -200px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
        if (!entry.isIntersecting) {
          var i;
          for(i = 1; i < 6; i++) {
            $('#link' + i).removeClass("active");
          }
            return;
        } else {
            entry.target.classList.add("appear");
            console.log(entry.target.className);
            if(entry.target.classList.contains('whoami')) {
              $('#link1').addClass("active");
            }
            else if(entry.target.classList.contains('backstory')) {
              $('#link2').addClass("active");
            }
            else if(entry.target.classList.contains('skillset')) {
              $('#link3').addClass("active");
            }
            else if(entry.target.classList.contains('interest')) {
              $('#link4').addClass("active");
            }
            else if(entry.target.classList.contains('future')) {
              $('#link5').addClass("active");
            }
        }
        });
    },
    appearOptions);

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

    /* Add observers for sections with class slide-after and to add class appearAfter on scroll to produce effect */
    const slidersAfter = document.querySelectorAll(".slide-after");
    const appearAfterOptions = {}

    const appearOnScrollAfter = new IntersectionObserver(function(
        entries,
        appearOnScrollAfter
    ) {
        entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appearAfter");
        }
        });
    },
    appearOptions);

    slidersAfter.forEach(sliderAfter => {
        appearOnScrollAfter.observe(sliderAfter);
    });

}

/* When refresh, move to the top of the page */
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

$(document).ready(function(){
    /* Adding Sounds to Music Logo */
    $('#music').click(function() {
        $('#music-menu').toggle();
        selectSound();
    })

    $("#music").mouseenter(function() {
        hoverSound();
    })

    /* Change Volume of Background Music */
    var audio = document.getElementById("audio");
    audio.volume = 0.3;

    /* Adding Background Music and Changing Background Color */
    $('#music1').click(function() {
        musicColor('Ideal and the Real.mp3', 'blue');
    })

    $('#music2').click(function() {
        musicColor('Price.mp3', 'yellow');
    })

    $('#music3').click(function() {
        musicColor('Tokyo Daylight.mp3', 'lime');
    })

    $('#music4').click(function() {
        musicColor('', '#222222');
    })

    /* Adding Background Description */
    $('#backstory-btn').click(function() {
        backstory();
        $(this).remove();
    })

    /* Adding Sounds for Button */
    $(':button').hover(function() {
        hoverSound();
    })

    $(':button').click(function() {
        selectSound();
    })

    var i = 0;

    /* Adding Sounds for each item in Music Menu */
    for(i=1; i < 9; i++) {
        $('#music' + i).mouseenter(function() {
            hoverSound();
        })

        $('#music' + i).click(function() {
            selectSound();
        })
    }

    /* Hide Music Menu */
    $('#music-menu').mouseleave(function() {
        $('#music-menu').hide();
    })

    /* Adding Select Sound to Links in Side Menu */
    for(i=1; i < 6; i++) {
        $('#link' + i).click(function() {
            selectSound();
        })
    }

    /* Smoorh scrolling to Links within Page */
    var scrollLink = $('.scroll');
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500 )
    })

})

/* Parallax effect */
$(window).scroll(function() {
  parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();
    $(' .parallax--bg').css('background-position', 'center ' + (wScroll * 0.75) + 'px')
}

/* Background Music and Color */
function musicColor(music, color) {
    $('#audio').attr('src','audio/' + music);
    $('.transition').css('background-color', color);
}

/* Backstory Description */
function backstory() {
    $('#backstory-p').text('Nothing Special. Grew up in a city that is otherwise known as the Gulf Tiger or the City of Gold. Studied in a private school and achieved the top rank n class for a few years. And unfortunately, moved to the country refer to as Great White North.');
    $('#backstory-p').css('text-indent','2rem');
}

/* Select Sound */
function selectSound() {
   var select = new Audio();
    select.src = "audio/select.mp3"
    select.play();
}

/* Hover Sound */
function hoverSound() {
    var hover = new Audio();
    hover.src = "audio/button.mp3"
    hover.play();
}
