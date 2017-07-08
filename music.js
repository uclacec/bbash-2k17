/**
 * Created by danielhuang on 7/5/17.
 */

var madeon = new Audio('assets/music/Porter_Robinson__Madeon___Shelter_(Official_Audio).mp3');

$('#music #top-row #b').on("mouseenter",function (){
    madeon.play();
    $('#body').css({'background-image':'url(assets/images/porteon.png)'});
});
$('#music #top-row #b').on("mouseleave click",function(){
    madeon.pause();
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
}
