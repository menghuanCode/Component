import './sass/layout.scss'

const Dom = {
    page: $('.page'),
    bgCircle: $('.bg_circle'),
    modContainer: $('.mod_container'),
    downloadBtn: $('.download_btn'),
    arrowBtn: $('.arrow_btn')
}

const Page = {
    index: 1,
    direction: "vertical",
    state: "start",
    action: "",
    previousIndex: 0
}

main()

function main() {
    BaseFrame()
    EventHandle()
}

function BaseFrame() {
    //todo 渲染基本的UI结构
    Dom.page.height(innerHeight)
    Dom.bgCircle.height(innerHeight)
    Dom.modContainer.height(innerHeight)

    Dom.modContainer.addClass(Page.direction)
    Dom.modContainer.addClass(Page.state)

    Dom.page.each(function (i) {
        $(this).attr("data-id", i + 1)
        $(this).addClass("out")
    })

    Dom.page.eq(Page.index - 1).removeClass('out').addClass('page_ani')
}

function EventHandle() {
    //todo 交互的事件绑定

    // 向上滑动页面
    Dom.modContainer.on('swipeUp', function () {
        console.log("swipeUp")

        // 边界处理
        if (Page.index >= Dom.page.length) {
            return
        }

        // 前进
        Dom.modContainer.addClass('forward').removeClass('backward')
        Dom.page.eq(Page.index - 1).addClass("flow_away").removeClass("page_ani")
        Dom.page.eq(Page.index).addClass("page_ani").removeClass("flow_away out")
        Dom.bgCircle.addClass("page" + Page.index).removeClass("page" + (Page.index - 1))

        Page.action = "backward"
        Page.previousIndex = Page.index++

        // console.log("Page.previousIndex:" + Page.previousIndex + " Page.index:" + Page.index)

        // 如果是最后页面
        if (Page.index === Dom.page.length) {
            Dom.downloadBtn.addClass('btn_show')
            Dom.arrowBtn.hide()
        }

    })

    // 向下滑动页面
    Dom.modContainer.on('swipeDown', function () {
        console.log("swipeDown")

        // 边界处理
        if (Page.index <= 1) {
            return
        }

        // 后退
        Dom.modContainer.addClass('backward').removeClass('forward')
        Dom.page.eq(Page.index - 1).addClass("flow_away").removeClass("page_ani")
        Dom.page.eq(Page.index - 2).addClass("page_ani").removeClass("flow_away out")
        Dom.bgCircle.addClass("page" + (Page.index - 2)).removeClass("page" + (Page.index - 1))

        Page.action = "forward"
        Page.previousIndex = Page.index--

        // console.log("Page.previousIndex:" + Page.previousIndex + " Page.index:" + Page.index)

        Dom.downloadBtn.removeClass('btn_show')
        Dom.arrowBtn.show()
    })


}