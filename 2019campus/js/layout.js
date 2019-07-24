(function () {

  let Dom = {
    btnMusic: $('#J-btn-music'),
    globalContainer: $('.global-container'),
    jobTouch: $('.touch-cnt-2'),
    jobScene:$('.scene-4-1'),
    joyCnt: $('.joy-cnt'),
    jobCnt: $('.job-cnt')
  };


  main();

  function main() {
    EventHandle();
  }

  function EventHandle() {

    let jobInit = false;
    let jobIndex = 1;
    let noTouch = true;
    let startX, endX, deltaX;

    let pages = new Swiper('.swiper-container', {
          direction: 'vertical',
          on: {
              slideChangeTransitionEnd: function () {
                  let index = this.activeIndex + 1;
                  Dom.globalContainer[0].className = 'global-container s' + index;

                  if (index === 4) {
                      if (!jobInit) {
                          jobInit = true;
                          noTouch = false;
                          jobSceneToggle(1);
                          jobCntToggle(1);
                      }
                  }
              }
          }
      });

    Dom.btnMusic.tap(function () {
        Dom.btnMusic.toggleClass('off');
    });

    Dom.jobTouch.on('touchstart', function (e) {
      if (noTouch) { return; }
      let touch = e.touches[0];
        startX = touch.pageX
    })

    Dom.jobTouch.on('touchmove', function (e) {
      let touch = e.touches[0];
        endX = touch.pageX
      deltaX = startX - endX;

      if (noJobRound()) {
          noTouch = true;
          return;
      }

      let dx = 0;
      if (deltaX > 0) {
        dx = Math.abs(deltaX) > innerWidth/3 ? -innerWidth/3 : -deltaX;
      } else {
        dx = Math.abs(deltaX) > innerWidth/3 ? innerWidth/3 : -deltaX;
      }


      let x =  -(jobIndex - 1) * innerWidth + dx;
      Dom.joyCnt.attr('style', 'transition: none 0s ease 0s; transform: translate3d('+  x +'px, 0px, 0px)')
    })

    Dom.jobTouch.on('touchend', function (e) {

        if (noTouch) {
            noTouch = false;
            return;
        }

        Dom.joyCnt.attr('style', null)

        if (deltaX === undefined || Math.abs(deltaX) < 50) {
          return;
        }

        // 滑动 左正右负
        if (deltaX > 0) {
            jobSceneToggle(jobIndex + 1);
            jobCntToggle(1)
        } else {
            jobSceneToggle(jobIndex - 1);
            jobCntToggle(-1)
        }

        startX = endX = deltaX = undefined;

    })

    function jobSceneToggle(index) {
      jobIndex = index;
      Dom.jobScene[0].className = 'scene-4-1 j' + jobIndex;
    }

    function jobCntToggle(num) {
      let i = jobIndex - 1;

      num = -num;

      let pDirection = num === -1 ? 'left' : 'right';
      let cDirection = num === 1 ? 'left': 'right';

      Dom.jobCnt[i + num] && (Dom.jobCnt[i + num].className = 'job-cnt job-cnt-'+ (jobIndex + num) +' out-' + pDirection);
      Dom.jobCnt[i] && (Dom.jobCnt[i].className = 'job-cnt job-cnt-'+ (jobIndex) +' in-' + cDirection);
    }
  
    function noJobRound() {
        // 边界问题
        if ((jobIndex === 1 && deltaX < 0) || (jobIndex === Dom.jobCnt.length && deltaX > 0)) {
            return true;
        }
    }

  }



})()

