var sec1top = $('.sec1').offset().top
var sec2top = $('.sec2').offset().top
var sec3top = $('.sec3').offset().top
var sec4top = $('.sec4').offset().top
var sct = 0;
var ww = $(window).height()

function count(jumsu, cname, time) {
    let count = 0
    let stop = setInterval(function(){
        count++
        if (count<=jumsu) {
            $(cname).find('.myscore').text(count+'%')
        } else {
            clearInterval(stop)
        }
    }, time)
}


var flag = false
$('.header .menu li a').on('click',function(e){
    e.preventDefault()
    flag = true
    $(this).parent().addClass('on').siblings().removeClass('on')
    var num = $(this).parent().index()
    var secDist = $('section').eq(num).offset().top
    $('html, body').stop().animate({
        scrollTop : secDist
    }, 500, function(){
    flag = false
    })
})

$(window).on('scroll',function(){
    sct = $(this).scrollTop()
    if (sct>=sec1top && sct<sec2top && !flag ) {
        $('.header .menu li').eq(0).addClass('on').siblings().removeClass('on')
        $('.header').css({display:'none'})
    }
    else if (sct>=sec2top && sct<sec3top && !flag  ) {
        $('.header .menu li').eq(1).addClass('on').siblings().removeClass('on')
        $('.header').css({display:'block'})
        if ( !$('.sec2 .skillcontainer').hasClass('on') ) {
            $('.sec2 .skillcontainer').addClass('on')
            count(80, '.html', 20)
            count(80, '.css', 20)
            count(60, '.js', 20)
            count(70, '.jquery', 20)
            count(30, '.react', 30)
        }
    }
    else if (sct>=sec3top && sct<sec4top && !flag  ) {
        $('.header .menu li').eq(2).addClass('on').siblings().removeClass('on')
    }
    else if (sct>=sec4top && !flag ) {
        $('.header .menu li').eq(3).addClass('on').siblings().removeClass('on')
    }
})

var offTop = 0;
$('section').on('mousewheel',function(e,delta){
    // console.log(delta) : 아래스크롤시 = -1, 위로스크롤시 = +1값 출력
    if (delta<0) {
        offTop = $(this).next().offset().top
    } else if (delta>0) {
        offTop = $(this).prev().offset().top
    }
    $('html').stop().animate({
        scrollTop:offTop
    },500)
})

// 비행기 다시 움직이게
$('.sec1 span i').on('click',function(){
    $(this).css({animation:'imove 1.5s 10 linear'})
})



