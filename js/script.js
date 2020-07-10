
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
        music('Ideal and the Real.mp3');
        color('blue');
    })

    $('#music2').click(function() {
        music('Price.mp3');
        color('yellow');
    })

    $('#music3').click(function() {
        music('Tokyo Daylight.mp3');
        color('lime');
    })

    $('#music4').click(function() {
        music('');
        color('#222222');
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

    /* Smooth scrolling to Links within Page */
    var scrollLink = $('.scroll');
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500 )
    })

    /* Show Manga/Manhwa Section */
    $('#interest-item-4').click(function() {
        $(".manga").css("height", "100%");
        for (i = 1; i < 4; i++) {
            $('.manga-item-' + i).css({"opacity": "1","transform": "translateY(0%)"});
        }
        selectSound();
    })

    /* Close Manga/Manhwa Section */
    $('#close1').click(function() {
        $(".manga").css("height", "0%");
        for (i = 1; i < 4; i++) {
            $('.manga-item-' + i).css({"opacity": "0","transform": "translateY(30%)"});
        }
        $('.manga-item-1').css("transition-delay", "0s");
        $('.manga-item-2').css("transition-delay", "0.25s");
        $('.manga-item-3').css("transition-delay", "0.5s");
        selectSound();
    })

    /* Show Slime Section */
    $('.manga-item-1').click(function() {
        if (document.documentElement.clientWidth < 900) {
            $(".slime").css("height", "100%");
            $(".slime h1").css("transform", "translateY(0%)");
            $(".slime p").css({"opacity": "1", "transform": "translateY(0%)"});
        }
        else {
            $('.manga-item-1').css({"transform": "translateX(100%)", "transition-delay": "1s"});
            $(".manga h1").css({"transform": "translateY(0%)", "transition-delay": "2.5s"});
            $(".slime").css({"height": "0%", "transition": "2s", "transition-delay": "2.5s"});
            $(".manga h1").css("transform", "translateY(150%)");
            $(".slime").css("height", "100%");
            $('.manga-item-2').css({"opacity": "0","transform": "translateY(-10%)", "transition-delay": "0.25s"});
            $('.manga-item-3').css({"opacity": "0","transform": "translateY(-10%)", "transition-delay": "0.50s"});
            $(".slime h1").css("transform", "translateY(0%)");
            $(".slime p").css({"opacity": "1", "transform": "translateY(0%)"});
            $(".slime-pic").css({"opacity": "1", "transform": "translateX(0%)"});
        }
        selectSound();
        music('Slime.mp3');
    })

    /* Close Slime Section */
    $('#close2').click(function() {
        if (document.documentElement.clientWidth < 900) {
            $(".slime").css("height", "0%");
            $(".slime h1").css("transform", "translateY(150%)");
            $(".slime p").css({"opacity": "0", "transform": "translateY(30%)"});
        }
        else {
            $('.manga-item-1').css("transform", "translateX(0%)");
            $(".manga h1").css({"transform": "translateY(0%)", "transition-delay": "0.5s"});
            $(".slime").css({"height": "0%", "transition": "1s", "transition-delay": "1s"});
            $('.manga-item-2').css({"opacity": "1","transform": "translateY(0%)"});
            $('.manga-item-3').css({"opacity": "1","transform": "translateY(0%)"});
            $(".slime h1").css("transform", "translateY(150%)");
            $(".slime p").css({"opacity": "0", "transform": "translateY(30%)"});
            $(".solo-pic").css({"opacity": "0", "transform": "translateX(30%)"});
        }
        selectSound();
        music('');
    })

    /* Show Solo Section */
    $('.manga-item-2').click(function() {
        if (document.documentElement.clientWidth < 900) {
            $(".solo").css("height", "100%");
            $(".solo h1").css("transform", "translateY(0%)");
            $(".solo p").css({"opacity": "1", "transform": "translateY(0%)"});
        }
        else {
            $('.manga-item-2').css({"transition-delay": "1s"});
            $(".manga h1").css({"transform": "translateY(0%)", "transition-delay": "2.5s"});
            $(".solo").css({"height": "0%", "transition": "2s", "transition-delay": "2.5s"});
            $(".manga h1").css("transform", "translateY(150%)");
            $(".solo").css("height", "100%");
            $('.manga-item-1').css({"opacity": "0","transform": "translateY(-10%)", "transition-delay": "0.25s"});
            $('.manga-item-3').css({"opacity": "0","transform": "translateY(-10%)", "transition-delay": "0.50s"});
            $(".solo h1").css("transform", "translateY(0%)");
            $(".solo p").css({"opacity": "1", "transform": "translateY(0%)"});
            $(".solo-pic").css({"opacity": "1", "transform": "translateX(0%)"});
        }
        selectSound();
        music('Army of the King.mp3');
    })

    /* Close Solo Section */
    $('#close3').click(function() {
        if (document.documentElement.clientWidth < 900) {
            $(".solo").css("height", "0%");
            $(".solo h1").css("transform", "translateY(150%)");
            $(".solo p").css({"opacity": "0", "transform": "translateY(30%)"});
        }
        else {
            $(".manga h1").css({"transform": "translateY(0%)", "transition-delay": "0.5s"});
            $(".solo").css({"height": "0%", "transition": "1s", "transition-delay": "1s"});
            $('.manga-item-1').css({"opacity": "1","transform": "translateY(0%)"});
            $('.manga-item-3').css({"opacity": "1","transform": "translateY(0%)"});
            $(".solo h1").css("transform", "translateY(150%)");
            $(".solo p").css({"opacity": "0", "transform": "translateY(30%)"});
            $(".solo-pic").css({"opacity": "0", "transform": "translateX(30%)"});
        }
        selectSound();
        music('');
    })

    /* Show OPM Section */
    $('.manga-item-3').click(function() {
        if (document.documentElement.clientWidth < 900) {
            $(".opm").css("height", "100%");
            $(".opm h1").css("transform", "translateY(0%)");
            $(".opm p").css({"opacity": "1", "transform": "translateY(0%)"});
        }
        else {
            $('.manga-item-3').css({"transform": "translateX(-100%)", "transition-delay": "1s"});
            $(".manga h1").css({"transform": "translateY(0%)", "transition-delay": "2.5s"});
            $(".opm").css({"height": "0%", "transition": "2s", "transition-delay": "2.5s"});
            $(".manga h1").css("transform", "translateY(150%)");
            $(".opm").css("height", "100%");
            $('.manga-item-1').css({"opacity": "0","transform": "translateY(-10%)", "transition-delay": "0.25s"});
            $('.manga-item-2').css({"opacity": "0","transform": "translateY(-10%)", "transition-delay": "0.50s"});
            $(".opm h1").css("transform", "translateY(0%)");
            $(".opm p").css({"opacity": "1", "transform": "translateY(0%)"});
            $(".opm-pic").css({"opacity": "1", "transform": "translateX(0%)"});
        }
        selectSound();
        music('OPM.mp3');
    })

    /* Close OPM Section */
    $('#close4').click(function() {
        if (document.documentElement.clientWidth < 900) {
            $(".opm").css("height", "0%");
            $(".opm h1").css("transform", "translateY(150%)");
            $(".opm p").css({"opacity": "0", "transform": "translateY(30%)"});
        }
        else {
            $('.manga-item-3').css("transform", "translateX(0%)");
            $(".manga h1").css({"transform": "translateY(0%)", "transition-delay": "0.5s"});
            $(".opm").css({"height": "0%", "transition": "1s", "transition-delay": "1s"});
            $('.manga-item-1').css({"opacity": "1", "transform": "translateY(0%)"});
            $('.manga-item-2').css({"opacity": "1", "transform": "translateY(0%)"});
            $(".opm h1").css("transform", "translateY(150%)");
            $(".opm p").css({"opacity": "0", "transform": "translateY(30%)"});
            $(".opm-pic").css({"opacity": "0", "transform": "translateX(30%)"});
        }
        selectSound();
        music('');
    })

    /* Change Pic when Hovering on Close Button */
    $('.close').mouseenter(function() {
        for(i = 1; i < 5; i++) {
            $('#close' + i).attr("src", "img/close-btn1.png");
        }
        hoverSound();
    })

    $('.close').mouseleave(function() {
        for(i = 1; i < 5; i++) {
            $("#close" + i).attr("src", "img/close-btn.png");
        }
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

/* Background Music */
function music(music) {
    $('#audio').attr('src','audio/' + music);
}

/*Background Color */
function color(color) {
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
