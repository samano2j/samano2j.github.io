
$(window).scroll(function() {
    parallax();
})

/* Parallax */
function parallax() {

    var wScroll = $(window).scrollTop();

    $(' .parallax--bg').css('background-position', 'center ' + (wScroll * 0.75) + 'px')

}

$(document).ready(function(){
    $('#music').click(function() {
        $('#audio').attr('src','audio/Life Will Change.mp3');
    })

    $('#backstory-btn').click(function() {
        backstory();
        $(this).remove();
    })
})

function backstory() {
    $('#backstory-p').text('Nothing Special. Grew up in a city that is otherwise known as the Gulf Tiger or the City of Gold. Studied in a private school and achieved the top rank n class for a few years. And unfortunately, moved to the country refer to as Great White North.');
    $('#backstory-p').css('text-indent','2rem');
}