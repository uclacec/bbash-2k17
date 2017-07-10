/**
 * Created by danielhuang on 7/5/17.
 */
$(window).on("load", function() {
    // weave your magic here.
    var song = new Audio('assets/music/Porter_Robinson__Madeon___Shelter_(Official_Audio).mp3');
// //R
// var song1 = new Audio('assets/music/song.mp3');
// //U
// var song2 = new Audio('assets/music/song.mp3');
// //I
// var song3 = new Audio('assets/music/song.mp3');
// //N
// var song4 = new Audio('assets/music/song.mp3');
// //BA
// var song5 = new Audio('assets/music/song.mp3');
// //S
// var song6 = new Audio('assets/music/song.mp3');
// //A
// var song7 = new Audio('assets/music/song.mp3');
// //H
// var song8 = new Audio('assets/music/song.mp3');

//letter B (bruin)
    $('#music #top-row #b').on("mouseenter",function (){
        song.play();
        $('#body').css({'background-image':'url(assets/images/backgrounds/1B_Chance.jpg)'});
    });
    $('#music #top-row #b').on("mouseleave click",function(){
        song.pause();
        $('#body').css({'background-image':'url()'})
    });

//letter R
    $('#music #top-row #r').on("mouseenter",function (){
        //song1.play();
        $('#body').css({'background-image':'url(assets/images/backgrounds/2R_Crowd.jpg)'});
    });
    $('#music #top-row #r').on("mouseleave click",function(){
        //song1.pause();
        $('#body').css({'background-image':'url()'})
    });

//letter U
    $('#music #top-row #u').on("mouseenter",function (){
        //song2.play();
        $('#body').css({'background-image':'url(assets/images/backgrounds/3U_Madeon.jpg)'});
    });
    $('#music #top-row #u').on("mouseleave click",function(){
        //song2.pause();
        $('#body').css({'background-image':'url()'})
    });

//letter I
    $('#music #top-row #i').on("mouseenter",function (){
        //song3.play();
        $('#body').css({'background-image':'url(assets/images/backgrounds/4I_Dance.jpg)'});
    });
    $('#music #top-row #i').on("mouseleave click",function(){
        //song3.pause();
        $('#body').css({'background-image':'url()'})
    });

//letter N
    $('#music #top-row #n').on("mouseenter",function (){
        //song4.play();
        $('#body').css({'background-image':'url(assets/images/backgrounds/5N_SweaterJoe.jpg)'});
    });
    $('#music #top-row #n').on("mouseleave click",function(){
        //song4.pause();
        $('#body').css({'background-image':'url()'})
    });

//letter BA
    $('#music #bottom-row #ba').on("mouseenter",function (){
        //song5.play();
        $('#body').css({'background-image':'url(assets/images/backgrounds/6B_Carnival.jpg)'});
    });
    $('#music #bottom-row #ba').on("mouseleave click",function(){
        //song5.pause();
        $('#body').css({'background-image':'url()'})
    });

//letter A
    $('#music #bottom-row #a').on("mouseenter",function (){
        //song6.play();
        $('#body').css({'background-image':'url(assets/images/backgrounds/7A_SweaterBeats.jpg)'});
    });
    $('#music #bottom-row #a').on("mouseleave click",function(){
        //song6.pause();
        $('#body').css({'background-image':'url()'})
    });

//letter S
    $('#music #bottom-row #s').on("mouseenter",function (){
        //song7.play();
        $('#body').css({'background-image':'url(assets/images/backgrounds/8S_Crowd.jpg)'});
    });
    $('#music #bottom-row #s').on("mouseleave click",function(){
        //song7.pause();
        $('#body').css({'background-image':'url()'})
    });

//letter H
    $('#music #bottom-row #h').on("mouseenter",function (){
        //song7.play();
        $('#body').css({'background-image':'url(assets/images/backgrounds/9H_TyDolla$ign.jpg)'});
    });
    $('#music #bottom-row #h').on("mouseleave click",function(){
        //song7.pause();
        $('#body').css({'background-image':'url()'})
    });

    if($('html').width() <= 600){
        //[b, r, u, i, n, ba, a, s, h]
        var tapped = [false, false, false, false, false, false, false, false, false];
        $('.container-fluid').on('click',function(){
            //madeon.pause();
            $('#body').css({'background-image':''});
            tapped = [false, false, false, false, false, false, false, false, false];
            $('#post-click').addClass('inactive');
            $('#pre-click').removeClass('inactive');
            $('#2k17').addClass('inactive');
            $('.text').removeClass('inactive');
            $('body').css({'background-color':'white'})
        });
        //B
        $('#music #top-row #b').on("click",function (){
            if(tapped[0] === false){
                //song.play();
                $('#body').css({'background-image':'url(assets/images/backgrounds/1B_Chance.jpg)'});
                tapped[0] = true;
                $('#post-click').removeClass('inactive');
                $('#pre-click').addClass('inactive');
            } else {
                tapped[0] = false;
                //song.pause();
                $('#post-click').addClass('inactive');
                $('#pre-click').removeClass('inactive');
                $('#body').css({'background-image':''});
                $('.text').removeClass('inactive');
            }
        });
        //R
        $('#music #top-row #r').on("click",function (){
            if(tapped[1] === false){
                //song1.play();
                $('#body').css({'background-image':'url(assets/images/backgrounds/2R_Crowd.jpg)'});
                tapped[1] = true;
                $('#post-click').removeClass('inactive');
                $('#pre-click').addClass('inactive');
            } else {
                tapped[1] = false;
                //song1.pause();
                $('#post-click').addClass('inactive');
                $('#pre-click').removeClass('inactive');
                $('#body').css({'background-image':''});
                $('.text').removeClass('inactive');
            }
        });
        //U
        $('#music #top-row #u').on("click",function (){
            if(tapped[2] === false){
                //song2.play();
                $('#body').css({'background-image':'url(assets/images/backgrounds/3U_Madeon.jpg)'});
                tapped[2] = true;
                $('#post-click').removeClass('inactive');
                $('#pre-click').addClass('inactive');
            } else {
                tapped[2] = false;
                //song2.pause();
                $('#post-click').addClass('inactive');
                $('#pre-click').removeClass('inactive');
                $('#body').css({'background-image':''});
                $('.text').removeClass('inactive');
            }
        });
        //I
        $('#music #top-row #i').on("click",function (){
            if(tapped[3] === false){
                //song3.play();
                $('#body').css({'background-image':'url(assets/images/backgrounds/4I_Dance.jpg)'});
                tapped[3] = true;
                $('#post-click').removeClass('inactive');
                $('#pre-click').addClass('inactive');
            } else {
                tapped[3] = false;
                //song3.pause();
                $('#post-click').addClass('inactive');
                $('#pre-click').removeClass('inactive');
                $('#body').css({'background-image':''});
                $('.text').removeClass('inactive');
            }
        });
        //N
        $('#music #top-row #n').on("click",function (){
            if(tapped[4] === false){
                //song4.play();
                $('#body').css({'background-image':'url(assets/images/backgrounds/5N_SweaterJoe.jpg)'});
                tapped[4] = true;
                $('#post-click').removeClass('inactive');
                $('#pre-click').addClass('inactive');
            } else {
                tapped[4] = false;
                //song4.pause();
                $('#post-click').addClass('inactive');
                $('#pre-click').removeClass('inactive');
                $('#body').css({'background-image':''});
                $('.text').removeClass('inactive');
            }
        });
        //BA
        $('#music #bottom-row #ba').on("click",function (){
            if(tapped[5] === false){
                //song5.play();
                $('#body').css({'background-image':'url(assets/images/backgrounds/6B_Carnival.jpg)'});
                tapped[5] = true;
                $('#post-click').removeClass('inactive');
                $('#pre-click').addClass('inactive');
            } else {
                tapped[5] = false;
                //song5.pause();
                $('#post-click').addClass('inactive');
                $('#pre-click').removeClass('inactive');
                $('#body').css({'background-image':''});
                $('.text').removeClass('inactive');
            }
        });
        //A
        $('#music #bottom-row #a').on("click",function (){
            if(tapped[6] === false){
                //song6.play();
                $('#body').css({'background-image':'url(assets/images/backgrounds/7A_SweaterBeats.jpg)'});
                tapped[6] = true;
                $('#post-click').removeClass('inactive');
                $('#pre-click').addClass('inactive');
            } else {
                tapped[6] = false;
                //song6.pause();
                $('#post-click').addClass('inactive');
                $('#pre-click').removeClass('inactive');
                $('#body').css({'background-image':''});
                $('.text').removeClass('inactive');
            }
        });
        //S
        $('#music #bottom-row #s').on("click",function (){
            if(tapped[7] === false){
                //song7.play();
                $('#body').css({'background-image':'url(assets/images/backgrounds/8S_Crowd.jpg)'});
                tapped[7] = true;
                $('#post-click').removeClass('inactive');
                $('#pre-click').addClass('inactive');
            } else {
                tapped[7] = false;
                //song7.pause();
                $('#post-click').addClass('inactive');
                $('#pre-click').removeClass('inactive');
                $('#body').css({'background-image':''});
                $('.text').removeClass('inactive');
            }
        });
        //H
        $('#music #bottom-row #h').on("click",function (){
            if(tapped[8] === false){
                //song8.play();
                $('#body').css({'background-image':'url(assets/images/backgrounds/9H_TyDolla$ign.jpg)'});
                tapped[8] = true;
                $('#post-click').removeClass('inactive');
                $('#pre-click').addClass('inactive');
                $('#2k17').addClass('inactive');
                $('.text').addClass('inactive');
                $('body').css({'background-color':'white'})
            } else {
                tapped[8] = false;
                //song8.pause();
                $('#post-click').addClass('inactive');
                $('#pre-click').removeClass('inactive');
                $('#body').css({'background-image':''});
                $('.text').removeClass('inactive');
            }
        });
        $('#music #bottom-row #qm').on("click",function (){
            if(tapped[8] === false){
                tapped[8] = true;
                $('#pre-click').addClass('inactive');
                $('#post-click').addClass('inactive');
                $('#2k17').removeClass('inactive');
                $('.text').addClass('inactive');
                $('body').css({'background-color':'black'})
            } else {
                tapped[8] = false;
                $('#post-click').addClass('inactive');
                $('#pre-click').removeClass('inactive');
                $('#2k17').addClass('inactive');
                $('.text').removeClass('inactive');
                $('body').css({'background-color':'white'})
            }
        });
    }

});
