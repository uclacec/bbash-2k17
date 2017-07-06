/**
 * Created by danielhuang on 7/5/17.
 */

var madeon = new Audio('assets/music/Porter_Robinson__Madeon___Shelter_(Official_Audio).mp3');

$('.madeon-button').on("mouseenter",function (){madeon.play(); });
$('.madeon-button').on("mouseleave click",function(){madeon.pause();});
