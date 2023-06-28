var video = $('#mont_video');
var btn = $('#mont_btn');
btn.children().last().hide();
btn.click(function(){
    if(video.get(0).paused){
        video.get(0).play();
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
        
        // btn.children().first().css({display:'none'});
        // btn.children().last().css({display:'block'});
    }else{
        video.get(0).pause();
        btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');

        // btn.children().last().css({display:'none'});
        // btn.children().first().css({display:'block'});
    };
})

video.mouseenter(function(){
    if(video.mouseenter){
        btn.show()
    }else{
        btn.hide()
    }
})
// 비디오의 초기값을 설정한 후 메서드 적용 play 또는 pause
// get = eq??
// html 메서드를 이용하여 기존값 바꿔주기