$(function() {
  var windowHeight = $(window).height();
  var isSofamove = false;
  var isSection2Animation = true;
  $('.next').click((e) => {
    $.fn.fullpage.moveSectionDown();
  })

  $('#fullpage').fullpage({
    navigation: true,
    loopBottom: true,
    afterLoad: function(anchorLink, index) {
      if (index == 2 && isSection2Animation) {
        $('.next').fadeOut();
        $('.search').show().animate({
          right: 370
        }, 500, 'easeOutBack', function() {
          $('.search-words').animate({
            opacity: 1
          }, 500, function() {
            $('.search').hide()
            $('.search-02-1').show().animate({
              'height': 30,
              'width': 148,
              'right': 250,
              'bottom': 451
            }, 500)
            $('.goods-02').animate({
              'width': 441,
              'height': 218
            }, 500)
            $('.words-01').animate({
              opacity: 0
            }, 500)
            $('.words-02').animate({
              opacity: 1
            }, 500, function() {
              $('.next').fadeIn()
            })
            isSection2Animation = false;
          })
        })
      }
    },

    onLeave: function(index, nextIndex, direction) {
      $('.next').fadeOut();
      if (index == 2 && nextIndex == 3) {
        $('.next').fadeOut();
        $('.shirt-02').show().animate({
          'bottom': -(windowHeight - 250),
          'width': 207,
          'left': 260
        }, 500, function() {
          $('.img01-a').animate({
            'opacity': 1
          }, 500)
          $('.btn-white').animate({
            'opacity': 1
          }, 500, function() {
            $('.next').fadeIn();
          })
        });
        $('.cover').show();
      }

      if (index == 3 && nextIndex == 4) {
        $('.shirt-02').hide();
        $('.t1f').show().animate({
          'bottom': -((windowHeight - 250) + 50),
          'left': 258
        }, 500, function() {
          $(this).hide();
          $('.car-img').show();
          $('.car').animate({
            'left': 2000
          }, 3000, 'easeInElastic', function() {
            $('.note').show();
            $('.note-img').animate({
              'opacity': 1
            }, 500);
            $('.word-04').hide();
            $('.words-04-a').animate({
              'opacity': 1
            }, 500, function() {
              $('.next').fadeIn();
            })
          })
        });
      }

      if (index == 4 && nextIndex == 5) {
        // 小手上来
        $(".hand-05").animate({
          "bottom": 0
        }, 2000, function() {
          // 鼠标显示
          $(".mouse-05-a").animate({
            "opacity": 1
          });
          // 沙发从 800 到  70
          $(".t1f-05").show().animate({
            "bottom": 70
          }, 1000, function() {
            // 单子上走 走完之后 文字翻转
            $(".order-05").animate({
              "bottom": 390
            }, function() {
              $(".words-05").addClass("words-05-a");
              $(".next").fadeIn();
            });
          })
        });
      }
      // 第5屏幕到第6屏幕过渡
      if (index == 5 && nextIndex == 6) {
        // 沙发的距离 当前屏幕的高度 减去  box 的 bottom  500
        $(".t1f-05").animate({
          "bottom": -(windowHeight - 500),
          "left": "40%",
          "width": 65
        }, 1500, function() {
          $(".t1f-05").hide();
        });

        $(".box-06").animate({
          "left": "38%"
        }, 1500, function() {
          $(this).animate({
            "bottom": 40
          }, 500, function() {
            $(this).hide();

            // 行走的过程就是 背景移动的过程
            // 背景jqury 里面改变比较麻烦  backgroundPositionX  x坐标 
            // 
            $(".section6").animate({
              "backgroundPositionX": "100%"
            }, 4000, function() {
              // 当背景动画执行完毕  boy 大小复原  
              $(".boy").animate({
                "height": 305,
                "bottom": 116
              }, 1000, function() {
                $(this).animate({
                  "right": 500
                }, 500, function() {
                  // 门显示出来 模拟打开门的效果
                  $(".door").animate({
                    "opacity": 1
                  }, 200, function() {
                    // 之后girl 显示出来
                    $(".girl").show().animate({
                      "right": 350,
                      "height": 306
                    }, 500, function() {
                      $(".pop-07").show();
                      $(".next").fadeIn();
                    })
                  });
                });
              });
            });
            // 光的速度
            $(".words-06-a").show().animate({
              "left": "30%"
            }, 2000, "easeOutElastic");
            $(".pop-06").show();
          });
        });
      }

      // 第6屏幕到第7屏幕过渡
      if (index == 6 && nextIndex == 7) {
        $('.next').fadeOut();
        setInterval(function() {
          $(".star").animate({
            "width": 120
          }, 500, function() {
            $(".good-07").show();
            $(".next").fadeIn();
          });
        }, 2000)
      }

      // 这是第8屏幕动画

      // $(".beginShoping").mouseenter(function(event) {
      //     $(".btn-08-a").show();
      // }).mouseleave(function(event) {
      //    $(".btn-08-a").hide();
      // });
      // hover 来替代更简洁  以后一个盒子鼠标经过显示离开隐藏  我们就可以用hover和toggle混搭想必也是极好的
      $(".beginShoping").hover(function() {
        $(".btn-08-a").toggle(); //  toggle  显示和隐藏的切换
      });
      // 大手跟随鼠标移动  
      $(document).mousemove(function(event) {
        var x = event.pageX - $(".hand-08").width() / 2; // 获得鼠标在页面中的x坐标
        var y = event.pageY + 10; // 获得鼠标在页面中的y坐标

        // 手的top 值不能小于 这个大小minY   当前屏幕的高度 K  减去手的高度  449 
        var minY = windowHeight - 449;
        // 把 鼠标在页面中的坐标 给  hand 大手 left  top 
        if (y < minY) {
          y = minY;
        }

        $(".hand-08").css({
          "left": x,
          "top": y
        });
      });

      // 当我们点击 再来一次的 时候， 分两步进行
      $(".again").click(function(event) {
        // 1. 返回第1屏幕 
        $.fn.fullpage.moveTo(1);
        // 2. 所有的动画都复原 就是原来没有看过的样子 
        // 核心原理就是  让我们的图片（做动画的元素 清除 行内样式就可以）
        // 所有带有动画的div 盒子 添加 move 类名
        $("img, .move").attr("style", "");
        isSection2Animation = true;
      });
    }
  })
});
