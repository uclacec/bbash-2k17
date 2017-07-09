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

    $('.moving_gif').mouseenter(function(){
        $('#pre-click').addClass('inactive');
        $('#post-click').removeClass('inactive');
        $('body').addClass('madeon-background');
        $('.text').addClass('inactive');
    });
    $('.moving_gif').mouseleave(function(){
        $('#post-click').addClass('inactive');
        $('#pre-click').removeClass('inactive');
        $('body').removeClass('madeon-background');
        $('.text').removeClass('inactive');
    });
//Fade in Animations
    var delay = 300;
    setTimeout(makeActive, 300, '#pre-click');
    setTimeout(makeActive, 2*delay, '#countdown');
    setTimeout(makeActive, 3*delay, '#sponsors');

//Functions to control countdown timer
    function update() {
        var units = countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS;
        var count_obj = countdown(null, bbash_time, units);
        var timestr = pad(count_obj.days) + '\xa0\xa0\xa0DAYS\xa0\xa0\xa0' + pad(count_obj.hours) +
            '\xa0\xa0\xa0:\xa0\xa0\xa0' + pad(count_obj.minutes) + '\xa0\xa0\xa0:\xa0\xa0\xa0' + pad(count_obj.seconds);
        $('#countdown').text(timestr);
    }

    update();
    window.setInterval(update, 1000);
});

