

var sec1top = $('.sec1').offset().top
var sec2top = $('.sec2').offset().top-200
var sec3top = $('.sec3').offset().top-200
var sec4top = $('.sec4').offset().top-200
var sct = 0;
var ww = $(window).height()

let text = document.querySelector('.typing')
let typewriter = new Typewriter(text, {
    loop:true
})

// section1 타이핑효과 코드
typewriter
    .typeString('Welcome')
    .pauseFor(0)
    .typeString('<br/>')
    .typeString('to my')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Port-')
    .pauseFor(0)
    .typeString('<br/>')
    .typeString('Folio')
    .pauseFor(4000)
    .start();

// function count(jumsu, cname, time) {
//     let count = 0
//     let stop = setInterval(function(){
//         count++
//         if (count<=jumsu) {
//             $(cname).find('.myscore').text(count+'%')
//         } else {
//             clearInterval(stop)
//         }
//     }, time)
// }

// 다크모드 토글코드
$('.darkToggle').on('click',function(e){
    e.preventDefault()
    $(this).find('.toggleIcon').toggleClass('on')
    if ( $('.toggleIcon').hasClass('on') ) {
        $('.toggleIcon').animate({
            left:'23px'
        },200);
        $('.toggleIcon').css({
            background:'#999'
        });
        $('.darkToggle').css({
            border:'2px solid #999'
        })
        $('html').css({
            background: 'linear-gradient(180deg, #243B55, #141E30)'
        });
        $('.loadHeight').css({
            background: 'linear-gradient(to bottom, #ccc, #243B55)'
        });
        $('.loadingBar > i').css({
            color:'#395fab'
        })
    } else {
        $('.toggleIcon').animate({
            left:'2px'
        },200);
        $('.toggleIcon').css({
            background:'#fff'
        });
        $('.darkToggle').css({
            border:'2px solid #fff'
        })
        $('html').css({
            background: 'linear-gradient(180deg, #bce6ff, #2d82b5)'
        });
        $('.loadHeight').css({
            background: 'linear-gradient(to bottom, #56ccf2, #2f80ed)'
        });
        $('.loadingBar > i').css({
            color:'#015c92'
        });

    }
})

// Section1 밑으로화살표 코드
$('.sec1 .sec1down > img').on('click',function(e){
    e.preventDefault()
    var sec2top = $('.sec2').offset().top
    $('html, body').stop().animate({
        scrollTop:sec2top
    },500)
    // $(window).scrollTop(sec2top).animate(500)
})

// 메뉴바 클릭시 페이지 이동 코드
var flag = false
$('.header .menu li a').on('click',function(e){
    e.preventDefault()
    flag = true
    $(this).parent().addClass('on').siblings().removeClass('on')
    var num = $(this).parent().index()
    var secDist = $('section').eq(num).offset().top
    $('section').eq(num).addClass('on').siblings().removeClass('on')
    $('html, body').stop().animate({
        scrollTop : secDist
    }, 500, function(){
    flag = false
    })
    
})

$(window).on('scroll',function(){
    var currentPercentage = ($(window).scrollTop() / ($(document).outerHeight() - $(window).height())) * 100;
    
    console.log(currentPercentage)
    $('.loadingBar i').css({
        'top':`${currentPercentage}%`
    })
    $('.loadingBar .loadHeight').css({
        'height':`${currentPercentage-3}%`
    })
    
    sct = $(this).scrollTop()
    if (sct>=sec1top && sct<sec2top && !flag ) {
        $('.header .menu li').eq(0).addClass('on').siblings().removeClass('on')
        $('.header').css({display:'none'})
        $('section').eq(0).addClass('on').siblings().removeClass('on')
        $('.sec2 .skillcontainer').removeClass('on')

    }
    else if (sct>=sec2top && sct<sec3top && !flag  ) {
        $('.header .menu li').eq(1).addClass('on').siblings().removeClass('on')
        $('.header').css({display:'block'})
        $('section').eq(1).addClass('on').siblings().removeClass('on')
    }
    else if (sct>=sec3top && sct<sec4top && !flag  ) {
        $('.header').css({display:'block'})
        $('.header .menu li').eq(2).addClass('on').siblings().removeClass('on')
        $('section').eq(2).addClass('on').siblings().removeClass('on')

    }
    else if (sct>=sec4top && !flag ) {
        $('.header').css({display:'block'})
        $('.header .menu li').eq(3).addClass('on').siblings().removeClass('on')
        $('section').eq(3).addClass('on').siblings().removeClass('on')


    }
})

$('.sec2 .skill .html5').circleProgress({
    value: 0 ,
    size:150,
})
$('.sec2 .skill .css').circleProgress({
    value: 0 ,
    size:150,
})
$('.sec2 .skill .javascript').circleProgress({
    value: 0 ,
    size:150,
})
$('.sec2 .skill .jQuery').circleProgress({
    value: 0 ,
    size:150,
})
$('.sec2 .skill .React').circleProgress({
    value: 0 ,
    size:150,
})
$('.sec2 .skill .ai').circleProgress({
    value: 0 ,
    size:150,
})

function startgage(){
    $('.sec2 .skill .html5').circleProgress({
        value: 0.9,
        startAngle: 300,
        size:150,
        fill:{
            gradient:["#f12711","#f5af19"],
            gradientAngle: Math.PI / 2
        },
        lineCap:'round',
        animation:{
            duration:2200,
            easing:"swing"
        }
    })
    .on('circle-animation-progress',
        function(event, progress) {
            $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
        })
    $('.sec2 .skill .css').circleProgress({
        value: 0.8,
        startAngle: 300,
        size:150,
        fill:{
            gradient:["#56ccf2","#2f80ed"],
            gradientAngle: Math.PI / 2
        },
        lineCap:'round',
        animation:{
            duration:2200,
            easing:"swing"
        }
    }).on('circle-animation-progress',
    function(event, progress) {
        $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
    })
    $('.sec2 .skill .javascript').circleProgress({
        value: 0.6,
        startAngle: 300,
        size:150,
        fill:{
            gradient:["#ffca28","#fffc00"],
            gradientAngle: Math.PI / 2
        },
        lineCap:'round',
        animation:{
            duration:2200,
            easing:"swing"
        }
    }).on('circle-animation-progress',
    function(event, progress) {
        $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
    })
    $('.sec2 .skill .jQuery').circleProgress({
        value: 0.7,
        startAngle: 300,
        size:150,
        fill:{
            gradient:["#1e3c72","#2a5298"],
            gradientAngle: Math.PI / 2
        },
        lineCap:'round',
        animation:{
            duration:2200,
            easing:"swing"
        }
    })
    .on('circle-animation-progress',
    function(event, progress) {
        $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
    })
    $('.sec2 .skill .React').circleProgress({
        value: 0.7,
        startAngle: 300,
        size:150,
        fill:{
            gradient:["#2193b0","#6dd5ed"],
            gradientAngle: Math.PI / 2
        },
        lineCap:'round',
        animation:{
            duration:2200,
            easing:"swing"
        }
    })
    .on('circle-animation-progress',
    function(event, progress) {
        $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
    })
    $('.sec2 .skill .ai').circleProgress({
        value: 0.9 ,
        startAngle: 300,
        size:150,
        fill:{
            gradient:["#f7971e","#ffd200"],
            gradientAngle: Math.PI / 2
        },
        lineCap:'round',
        animation:{
            duration:2200,
            easing:"swing"
        }
    })
    .on('circle-animation-progress',
    function(event, progress) {
        $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
    })
}

// var offTop = 0;
// $('section').on('mousewheel',function(e,delta){
//     // console.log(delta) : 아래스크롤시 = -1, 위로스크롤시 = +1값 출력
//     if (delta<0) {
//         offTop = $(this).next().offset().top
//     } else if (delta>0) {
//         offTop = $(this).prev().offset().top
//     }
//     $('html').stop().animate({
//         scrollTop:offTop
//     },500)
// });

// 원형그래프 영역

$('.sec2 .skill .html').circleProgress({
    value: 0.8,
    startAngle: 300,
    size:200,
    fill:{
        gradient:["#06afe8","#77c04a"],
        gradientAngle: Math.PI / 2
    },
    animation:{
        duration:2200,
        easing:"swing"
    },
})

// 슬라이드 영역
$('.sec3 .slideInner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:700,
    arrows:true,
    fade:true,
    prevArrow:'<button class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>',
})




