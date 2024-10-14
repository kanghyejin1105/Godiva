$(document).ready(function(){
  let i = 0;
  let count = $(".banner>li").length;
  let ins = $(".left_conts>li").length;

  // let autoSlide = setInterval(function(){
  //   if(i == count-1){
  //     i=0;
  //   }else{
  //     i++;
  //   }
  //     asd()
  // },4000);

  function asd(){
    $(".bn_conts").stop().animate({"top":"-200px"});
    $(".nav>li").removeClass("on");
    $(".nav>li").eq(i).addClass("on");
    $(".banner>li").stop().fadeOut();
    $(".banner>li").eq(i).stop().fadeIn(function(){
      $(".bn_conts").stop().animate({"top":"0px"});
    });
  }

  $(".nav>li").click(function(){
    i = $(this).index();
      asd();
  });

  $(".gnb").mouseover(function(){
    $(".gnb").stop().animate({"height":"300px"})
  });
  $(".gnb").mouseleave(function(){
    $(".gnb").stop().animate({"height":"80px"})
  });

  // 탭메뉴
  $(".menu_bt>li").click(function(){
    let list = $(this).index();
    $(".menu_conts>li").stop().fadeOut();
    $(".menu_conts>li").eq(list).stop().fadeIn();
    $(".menu_bt>li").removeClass("highlight")
    $(this).addClass("highlight")
  });

  $(".next_ar").click(function(){
    $(".m_con").stop().animate({"left":"-700px"})
  });
  $(".prev_ar").click(function(){
    $(".m_con").stop().animate({"left":"0px"})
  });

  // 베이커리
  $(".b_conts>li").mouseover(function(){
    $(this).children().stop().animate({"bottom":"130px"});
    $(this).find("p").addClass("slr");
  });
  $(".b_conts>li").mouseleave(function(){
    $(this).children().stop().animate({"bottom":"30px"})
    $(this).find("p").removeClass("slr");
  });

  setInterval(function(){
    if(i == ins-1){
      i = 0;
    }else{
      i++;
    }
    showright()
    showleft()
  },3000);

  $(".e_circle").mouseover(function(){
    $(".e_item").css({"z-index":"-1"})
  });
  $(".e_circle").mouseleave(function(){
    $(".e_item").css({"z-index":"1"})
  });

  function showleft(){
    $(".left_conts").stop().animate({"margin-top":"-100%"},1000,function(){
      $(".left_conts>li").first().appendTo(".left_conts");
      $(".left_conts").css({"margin-top":"-40%"});
  });
  }
  function showright(){
    $(".right_conts").stop().animate({"margin-top":"23%"},1000,function(){
      $(".right_conts>li").last().prependTo(".right_conts");
      $(".right_conts").css({"margin-top":"-40%"});
  });
  }

  // 푸터
  $(".f_bt").click(function(){
    $(".family").slideToggle();
  });

  //모바일
  $(".h_word").click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active").siblings().slideUp();
    }else{
        $(this).removeClass("active").siblings().slideUp();
        $(this).addClass("active").siblings().slideDown();
    }
  });

  $("#header .conger").click(function(){
    $(".h_wrap").stop().animate({"right":"0px"});
  });
  $("#header .h_wrap .close").click(function(){
    $(".h_wrap").stop().animate({"right":"-100%"});
  });


});