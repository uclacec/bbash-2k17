/**
 * Created by danielhuang on 7/5/17.
 */
var madeon = new Audio('assets/music/Porter_Robinson__Madeon___Shelter_(Official_Audio).mp3');
//R
var song1 = new Audio('assets/music/song.mp3');
//U
var song2 = new Audio('assets/music/song.mp3');
//I
var song3 = new Audio('assets/music/song.mp3');
//N
var song4 = new Audio('assets/music/song.mp3');
//BA
var song5 = new Audio('assets/music/song.mp3');
//S
var song6 = new Audio('assets/music/song.mp3');
//A
var song7 = new Audio('assets/music/song.mp3');
//H
var song8 = new Audio('assets/music/song.mp3');

//letter B (bruin)
$('#music #top-row #b').on("mouseenter",function (){
    madeon.play();
    $('#body').css({'background-image':'url(assets/images/porteon.png)'});
});
$('#music #top-row #b').on("mouseleave click",function(){
    madeon.pause();
    $('#body').css({'background-image':'url()'})
});

//letter R
$('#music #top-row #r').on("mouseenter",function (){
    song1.play();
    $('#body').css({'background-image':'url(assets/images/...)'});
});
$('#music #top-row #r').on("mouseleave click",function(){
    song1.pause();
    $('#body').css({'background-image':'url()'})
});

//letter U
$('#music #top-row #u').on("mouseenter",function (){
    song2.play();
    $('#body').css({'background-image':'url(assets/images/...)'});
});
$('#music #top-row #r').on("mouseleave click",function(){
    song2.pause();
    $('#body').css({'background-image':'url()'})
});

//letter I
$('#music #top-row #i').on("mouseenter",function (){
    song3.play();
    $('#body').css({'background-image':'url(assets/images/...)'});
});
$('#music #top-row #i').on("mouseleave click",function(){
    song3.pause();
    $('#body').css({'background-image':'url()'})
});

//letter N
$('#music #top-row #n').on("mouseenter",function (){
    song4.play();
    $('#body').css({'background-image':'url(assets/images/...)'});
});
$('#music #top-row #n').on("mouseleave click",function(){
    song4.pause();
    $('#body').css({'background-image':'url()'})
});

//letter BA
$('#music #bottom-row #ba').on("mouseenter",function (){
    song5.play();
    $('#body').css({'background-image':'url(assets/images/...)'});
});
$('#music #bottom-row #ba').on("mouseleave click",function(){
    song5.pause();
    $('#body').css({'background-image':'url()'})
});

//letter A
$('#music #bottom-row #a').on("mouseenter",function (){
    song6.play();
    $('#body').css({'background-image':'url(assets/images/...)'});
});
$('#music #bottom-row #a').on("mouseleave click",function(){
    song6.pause();
    $('#body').css({'background-image':'url()'})
});

//letter S
$('#music #bottom-row #s').on("mouseenter",function (){
    song7.play();
    $('#body').css({'background-image':'url(assets/images/...)'});
});
$('#music #bottom-row #s').on("mouseleave click",function(){
    song7.pause();
    $('#body').css({'background-image':'url()'})
});

//letter H
$('#music #bottom-row #h').on("mouseenter",function (){
    song7.play();
    $('#body').css({'background-image':'url(assets/images/...)'});
});
$('#music #bottom-row #h').on("mouseleave click",function(){
    song7.pause();
    $('#body').css({'background-image':'url()'})
});

if($('window').width() <= 500){
    //[b, r, u, i, n, ba, a, s, h]
    var tapped = [false, false, false, false, false, false, false, false, false];
    $('#music #top-row #b').on("click",function (){
        if(tapped[0] === false){
            madeon.play();
            $('#body').css({'background-image':'url(assets/images/porteon.png)'});
            tapped = true;
        } else {
            madeon.pause();
            $('#body').css({'background-image':'url()'})
        }
    });
    $('#music #top-row #r').on("click",function (){
        if(tapped[1] === false){
            madeon.play();
            $('#body').css({'background-image':'url(assets/images/porteon.png)'});
            tapped = true;
        } else {
            madeon.pause();
            $('#body').css({'background-image':'url()'})
        }
    });

}
