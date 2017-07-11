/**
 * Created by danielhuang on 7/5/17.
 */
function makeActive(id){
    $(id).removeClass('inactive')
}

function pad(n) {
    return (n < 10) ? ('0' + n) : n;
}

var bbash_time = new Date('Sep 26, 2017 02:00:00 GMT');

$(document).ready(function() {

    $('.bruin').mouseenter(function(){
        $('#hover').addClass('inactive')
        $('#pre-click').addClass('inactive');
        $('#post-click').removeClass('inactive');
        $('.text').addClass('inactive');
    });
    $('.bash').mouseenter(function(){
        $('#hover').addClass('inactive');
        $('#pre-click').addClass('inactive');
        $('#post-click').removeClass('inactive');
        $('.text').addClass('inactive');
    });
    $('.bruin').mouseleave(function(){
        $('#hover').removeClass('inactive');
        $('#post-click').addClass('inactive');
        $('#pre-click').removeClass('inactive');
        $('.text').removeClass('inactive');
    });
    $('.bash').mouseleave(function(){
        $('#hover').removeClass('inactive');
        $('#post-click').addClass('inactive');
        $('#pre-click').removeClass('inactive');
        $('.text').removeClass('inactive');
    });
    $('#q').mouseenter(function(){
        $('#hover').addClass('inactive')
        $('#pre-click').addClass('inactive');
        $('#post-click').addClass('inactive');
        $('#2k17').removeClass('inactive');
        $('.text').addClass('inactive');
        $('body').css({'background-color':'black'})
    });
    $('#q').mouseleave(function(){
        $('#hover').removeClass('inactive');
        $('#post-click').addClass('inactive');
        $('#pre-click').removeClass('inactive');
        $('#2k17').addClass('inactive');
        $('.text').removeClass('inactive');
        $('body').css({'background-color':'white'})
    });
//Fade in Animations
    var delay = 600;
    setTimeout(makeActive('#hover'), 2000);
    setTimeout(makeActive, 2*delay, '#pre-click');
    setTimeout(makeActive, 3*delay, '#countdown');
    setTimeout(makeActive, 4.5*delay, '#sponsors');

//Functions to control countdown timer
    function update() {
        var units = countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS;
        var count_obj = countdown(null, bbash_time, units);
        var daystr = pad(count_obj.days) + '\xa0\xa0\xa0DAYS';
        var timestr = pad(count_obj.hours) +
            '\xa0\xa0\xa0:\xa0\xa0\xa0' + pad(count_obj.minutes) + '\xa0\xa0\xa0:\xa0\xa0\xa0' + pad(count_obj.seconds);
        $('#countdown .days').text(daystr);
        $('#countdown .time').text(timestr);
    }

    if($('html').width() <= 900){
        $('#slow-wave').attr('src','assets/images/WavyGif_P1_Mobile.gif');
        $('#fast-wave').attr('src','assets/images/WavyGif_P2_Mobile.gif');
        $('.question').attr('src','assets/images/-----_Mobile.gif');
        $('#tap').text('tap to experience...')
    }

    $('.moving_gif a').click(function(event){
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            event.preventDefault();
        }
    });

    update();
    window.setInterval(update, 1000);
});

