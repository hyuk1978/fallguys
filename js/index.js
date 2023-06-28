const about = $('.tab_box li');
const circle = $('.about_us_line i');
const h2 = $('.left_tab h2');
const rightTab = $('.right_tab');
const leftImg = $('.about_left_img');

about.click(function(){
    if (about.hasClass('tab_selected')) {
        $(this).siblings().removeClass('tab_selected');
        $(this).addClass('tab_selected');
        
        if ($(this).hasClass('tab1')) {
            circle.css({left: '44px'});
            h2.html('<span>새로운</span> <br> 라운드!');
            leftImg.attr('src', './images/fallguys/step1.png');
        }
        if ($(this).hasClass('tab2')) {
            circle.css({left: '280px'});
            h2.html('<span>새로운</span> <br> 장애물!');
            leftImg.attr('src', './images/fallguys/step2.png');
        }
        if ($(this).hasClass('tab3')) {
            circle.css({left: '508px'});
            h2.html('<span>환상적인</span> <br> 스테이지!');
            leftImg.attr('src', './images/fallguys/step3.png');
        }
    }
});

// 로딩시 마다 랜덤한 비디오
function showRandomVideo() {
    var videos = Array.from(document.querySelectorAll('#head_video video'));
    var randomIndex = Math.floor(Math.random() * videos.length);

    videos.forEach(function(video, index) {
        if (index === randomIndex) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}

window.addEventListener('load', showRandomVideo);



// gnb 호버기능
// $('nav').mouseenter(function(){
//     // $(".head_fixed").css({"padding-bottom":"240px", "background-color" : "rgba(12,54,28,1)"});
//     $(".head_fixed").css({"padding-bottom":"240px"});
//     $('.sub_menu').fadeIn(400);
// })
// $('nav').mouseleave(function(){
//     // $(".head_fixed").css({"padding-bottom":"0", "background-color" : "rgba(12,54,28,0.9)"});
//     $(".head_fixed").css({"padding-bottom":"0"});
//     $('.sub_menu').fadeOut(10);
// })
// $('.head_fixed').mouseenter(function() {
//     $(".head_fixed").css("padding-bottom", "180px");
//     $(".gnb").css("padding-bottom", "180px");
//     $('.sub_menu').css("display", "block");
//     $('.logo').css("top", "-58px"); /* 이미지를 헤더 상단 아래로 이동시킵니다 */
// });

// $('.head_fixed').mouseleave(function() {
//     $(".head_fixed").css("padding-bottom", "0");
//     $(".gnb").css("padding-bottom", "0");
//     $('.sub_menu').css("display", "none");
//     $('.logo').css("top", "0px"); /* 이미지를 초기 위치로 되돌립니다 */
// });

// FAQ 아코디언
$('.faq_tab_event p').click(function(){
    var isActive = $(this).hasClass('active');

    // 슬라이드 토글
    $(this).siblings('.faq_tab_content').stop().slideToggle('fast');
    $(this).parents('li').stop().siblings().children('div').slideUp('fast');

    // 이미지 회전
    var clickedImg = $(this).children('img');
    clickedImg.css({"transform" : isActive ? "none" : "rotate(45deg)"});

    // 다른 이미지 회전 제거
    $('.faq_tab_event p').not($(this)).removeClass('active');
    $('.faq_tab_event p img').not(clickedImg).css({"transform" : "none"});

    // 현재 요소에 대한 회전 토글
    $(this).toggleClass('active');
});

// about tab 기능
$(".weare_tab").show();

// 탭 클릭 이벤트 핸들러 등록
$(".tab1").click(function() {
  // 모든 탭 내용 숨기기
    $(".tab_text").hide();
  // 선택한 탭 내용 보이기
    $(".weare_tab").show();
});

$(".tab2").click(function() {
    $(".tab_text").hide();
    $(".wedo_tab").show();
});

$(".tab3").click(function() {
    $(".tab_text").hide();
    $(".wework_tab").show();
});

// a태그 막기
$("a[href='#']").click(function(e) {
    e.preventDefault();
});

// 비디오 재생 기능
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

// 비디오 play, stop
video.mouseenter(function(){
    if(video.mouseenter){
        btn.show()
    }else{
        btn.hide()
    }
})


// 번역 원본보기 이벤트

// $('.translation').click(function(){
//     if($(this).hasClass('jp')){
//         $(this).siblings('p').text('한국 여행을 갔을 때 방문한 핸드드립 커피 전문점 CoF, 벌써 그립다~');
//         $(this).text("원문 보기");
//         $(this).removeClass("jp");
//         $(this).addClass("kr");
//     }else if($(this).hasClass('kr')){
//                 $(this).siblings('p').text('韓国旅行で訪れたハンドドリップコーヒー専門店 CoF、もう懐かしいです～。');
//                 $(this).text("번역 보기");
//                 $(this).removeClass("kr");
//                 $(this).addClass("jp");        
//         }
//     }
// )

$('.translation').click(function(){
    if($(this).hasClass('kr')){
        $(this).siblings('p').text('韓国旅行で訪れたハンドドリップコーヒー専門店 CnF、もう懐かしいです～。');
        $(this).text("번역 보기");
        $(this).removeClass("kr");
        $(this).addClass("jp");
    }else if($(this).hasClass('jp')){
        $(this).siblings('p').text('한국 여행을 갔을 때 방문한 핸드드립 커피 전문점 CnF, 벌써 그립다~');
        $(this).text("원문 보기");
        $(this).removeClass("jp");
        $(this).addClass("kr");        
    }
});