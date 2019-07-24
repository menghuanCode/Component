import "swiper/dist/css/swiper.min.css"
import Swiper from 'swiper'

import "../libs/layer_mobile/need/layer.css"
import Layer from 'layer'

import loadImage from "../libs/imageloader"

function rem(size) {
    if (!size) { return undefined; }

    // 是不是百分比
    let isPer = String(size).slice(-1) === "%"
    return isPer ? size : (parseFloat(size) / 32) + 'rem'
}

const H5 = function () {

    this.container = $(`<div id="h5" class="h5"></div>`)
    this.swiper = $(`<div class="swiper-container"><div class="swiper-wrapper">`)
    this.music = $(`<div class="music"></div>`)
    this.page = []
    this.images = []

    this.container.append(this.music)
    this.container.append(this.swiper)

    /**
     * 新增音频
     * @param src 音频路径地址
     * @returns {H5} h5对象
     */
    this.addAudio = function (src) {
        let dom = $(`<div class="audio"><audio autoplay="" loop="" src="${src}"></audio><button class="playing"></button></div>`)
        let audio = dom.find('audio')[0]
        let btn = dom.find('button')
        this.music.append(dom)

        let play = true

        btn.on('click', function () {
            $(this).addClass(play ? 'pause' : 'playing').removeClass(play ? 'playing' : 'pause')
            play ? audio.pause() :  audio.play()
            play = !play
        })

        return this
    }


    /**
     * 添加页面
     * @param name 页面名称
     * @returns {H5}    返回H5对象
     */
    this.addPage = function (name = "", cfg = {}) {
        let swiperWrapper  = this.swiper.find('.swiper-wrapper')
        let dom = $(`<div class="swiper-slide page ${name}" id="${name}"><div class="wrapper"></div></div>`)
        let wrapper = dom.find('.wrapper')

        wrapper.css({
            width: rem(cfg.width),
            height: rem(cfg.height),
            top: rem(cfg.top)
        })

        this.page.push(dom)
        swiperWrapper.append(dom)

        return this
    }

    /**
     * 添加元素
     * @param name  元素名称
     * @param cfg   元素定义
     * @returns {H5}    返回h5对象
     */
    this.addElement = function (name, cfg = {}) {
        let dom = $(`<div class="element element_${name} animated"></div>`)
        let page = this.page.slice(-1)[0]
        let wrapper = page.find('.wrapper')

        if (cfg.bg) {
            dom.css("background-image", `url(${cfg.bg})`)
            this.images.push(cfg.bg)
        }

        dom.css({
            "width": rem(cfg.width),
            "height": rem(cfg.height),
            "left": rem(cfg.x),
            "top": rem(cfg.y),
            "z-index": cfg.zIndex,
            "backgroundColor": cfg.backgroundColor
        })

        if (cfg.animated && typeof cfg.animated === "object") {
            dom.css({
                "animation": `${cfg.animated["duration"] || "1s"} ${cfg.animated["timingFunction"] || "linear"} ${cfg.animated["delay"] || "1s"} ${cfg.animated["iterationCount"] || 1} ${cfg.animated["direction"] || "normal"} ${cfg.animated["fillMode"] || "both"} running ${cfg.animated["name"] || ""};`
            })
        }

        wrapper.append(dom)
        return this
    }

    /**
     * 添加圆
     * @param name  元素名称
     * @param cfg   元素定义
     * @returns {H5}    返回h5对象
     */
    this.addRadio = function (name, cfg) {
        let dom = $(`<div class="radio radio_${name} animated"><span>${cfg.text || ''}</span></div>`)
        let page = this.page.slice(-1)[0]
        let wrapper = page.find('.wrapper')


        cfg.animated = cfg.animated || {}

        if (cfg.bg) {
            dom.css("background-image", `url(${cfg.bg})`)
            this.images.push(cfg.bg)
        }

        dom.css({
            "width": rem(cfg.size),
            "height": rem(cfg.size),
            "lineHeight": rem(cfg.size),
            "left": rem(cfg.x),
            "top": rem(cfg.y),
            "z-index": cfg.zIndex,
            "fontSize": rem(cfg.fontSize),
            "backgroundColor": cfg.backgroundColor
        })


        if (cfg.animated && typeof cfg.animated === "object") {
            dom.css({
                "animation": `${cfg.animated["duration"] || "1s"} ${cfg.animated["timingFunction"] || "linear"} ${cfg.animated["delay"] || "1s"} ${cfg.animated["iterationCount"] || 1} ${cfg.animated["direction"] || "normal"} ${cfg.animated["fillMode"] || "both"} running ${cfg.animated["name"] || ""};`
            })
        }

        wrapper.append(dom)
        return this
    }

    /**
     * 添加文字
     * @param name  文字名称
     * @param cfg   文字定义
     * @returns {H5}    返回h5对象
     */
    this.addText = function (name, cfg) {
        let dom = $(`<div class="text text_${name} animated ${cfg.type || ''}"><span class="animated">${cfg.text}</span></div>`)
        let page = this.page.slice(-1)[0]
        let wrapper = page.find('.wrapper')

        cfg.lineHeight = !cfg.lineHeight ? rem(cfg.height) : cfg.lineHeight


        dom.css({
            "width": rem(cfg.width),
            "height": rem(cfg.height),
            "lineHeight": cfg.lineHeight,
            "left": rem(cfg.x),
            "top": rem(cfg.y),
            "fontSize": rem(cfg.fontSize),
            "fontFamily": cfg.fontFamily,
            "z-index": cfg.zIndex,
            "text-align": cfg.textAlign
        })

        if (cfg.animated && typeof cfg.animated === "object") {
            dom.css({
                "animation": `${cfg.animated["duration"] || "1s"} ${cfg.animated["timingFunction"] || "linear"} ${cfg.animated["delay"] || "1s"} ${cfg.animated["iterationCount"] || 1} ${cfg.animated["direction"] || "normal"} ${cfg.animated["fillMode"] || "both"} running ${cfg.animated["name"] || ""};`
            })
        }

        cfg.css && dom.css(cfg.css)


        wrapper.append(dom)
        return this
    }

    /**
     * 添加列表
     * @param name  列表名称
     * @param cfg   列表定义
     * @returns {H5}    返回h5对象
     */
    this.addList = function (name, cfg) {
        let dom = $(`<div class="list list_${name} animated"></div>`)
        let page = this.page.slice(-1)[0]
        let wrapper = page.find('.wrapper')
        let html = ''
        let items = cfg.items || []

        cfg.type && dom.addClass(cfg.type)

        dom.css({
            "width": rem(cfg.width),
            "height": rem(cfg.height),
            "lineHeight": cfg.lineHeight,
            "left": rem(cfg.x),
            "top": rem(cfg.y),
            "fontSize": rem(cfg.fontSize),
            "fontFamily": cfg.fontFamily,
            "z-index": cfg.zIndex,
            "text-align": cfg.textAlign,
            "color": cfg.color
        })

        if (cfg.animated && typeof cfg.animated === "object") {
            dom.css({
                "animation": `${cfg.animated["duration"] || "1s"} ${cfg.animated["timingFunction"] || "linear"} ${cfg.animated["delay"] || "1s"} ${cfg.animated["iterationCount"] || 1} ${cfg.animated["direction"] || "normal"} ${cfg.animated["fillMode"] || "both"} running ${cfg.animated["name"] || ""};`
            })
        }

        for(let i = 0; i < items.length; i++) {
            let item = items[i]
            html += `<div class="item" style="width: ${rem(item["width"] || cfg["width"])}; line-height: ${item["lineHeight"] || cfg["lineHeight"]}"><span>${item.text}</span></div>`;
        }


        dom.html(html)

        wrapper.append(dom)
        return this
    }

    /**
     * 添加表单
     * @param name  表单名称
     * @param cfg   表单定义
     * @returns {H5}    返回h5对象
     */
    this.addForm = function (name, cfg) {
        let dom = $(`<div class="form form_${name} animated"></div>`)
        let page = this.page.slice(-1)[0]
        let wrapper = page.find('.wrapper')
        let items = cfg.items || []
        let jobs = cfg.jobs || {}

        if (cfg.type === "recruit") {
            dom.addClass("recruit_form")
        }

        let _form = Object.create(null)

        let itemsEl = $("<div class='items'></div>")
        let jobsEl = $(`<div class='jobs'><div class='title'>${jobs.title}</div><ul></ul></div>`)
        let jobsList = jobsEl.find('ul')

        // 生成js
        for(let i = 0; i < items.length; i++) {
            let item = items[i]
            let html = $(`<div class="item"><input type="${item.type || "text"}" id="${item.name}" placeholder="${item.placeholder}" value="${item.value}"></div>`)
            let ipt = html.find('input')
            let _placeholder = ""
            ipt.on('focus', function () {
                _placeholder = this.placeholder
                this.placeholder = ""
            })
            ipt.on('blur', function () {
                this.placeholder = _placeholder
                _placeholder = ""
            })

            ipt.on('focus input blur', function () {
                _form[this.id] = this.value
            })

            itemsEl.append(html)
        }

        _form["jobs"] = []

        // 生成js
        for(let i = 0, items = jobs.items; i < items.length; i++) {
            let item = items[i]
            let html = $(`<li><label for="${item.name}"><input type="${item.type || "checkbox"}" id="${item.name}" value="${item.value}"><span>${item.value}</span></label></li>`)
            let ipt = html.find('input')
            let _placeholder = ""
            ipt.on('click', function () {
                if (!this.checked) {
                    _form['jobs'] = _form['jobs'].filter(_ => _ !== this.value)
                } else {
                    _form['jobs'].push(this.value)
                }
            })

            jobsList.append(html)
        }

        let btn = $('<div class="submit">我要报名</div>')

        btn.on('click', () => {
            this.tip("報名成功")
        })

        dom.append(itemsEl)
        dom.append(jobsEl)
        dom.append(btn)
        wrapper.append(dom)
        return this
    }

    /**
     * 添加地圖
     * @param name  地圖名称
     * @param cfg   地圖定义
     * @returns {H5}    返回h5对象
     */
    this.addMap = function (name, cfg) {
        let dom = $(`<div class="map map_${name} animated"><div class="__wrapper"></div></div>`)
        let page = this.page.slice(-1)[0]
        let wrapper = page.find('.wrapper')
        let __wrapper = dom.find('.__wrapper')

        if (cfg.bg) {
            dom.css("background-image", `url(${cfg.bg})`)
            this.images.push(cfg.bg)
        }

        let a = $(`<a class="link">导航</a>`)

        dom.css({
            "width": rem(cfg.width),
            "height": rem(cfg.height),
            "lineHeight": cfg.lineHeight,
            "left": rem(cfg.x),
            "top": rem(cfg.y),
            "fontSize": rem(cfg.fontSize),
            "fontFamily": cfg.fontFamily,
            "z-index": cfg.zIndex,
            "text-align": cfg.textAlign,
            "color": cfg.color
        })

        cfg.link && a.attr('href', cfg.link)

        __wrapper.append(a)
        wrapper.append(dom)
        return this
    }

    /**
     * 添加电话
     * @param name  电话名称
     * @param cfg   电话定义
     * @returns {H5}    返回h5对象
     */
    this.addPhone = function (name, cfg) {
        let dom = $(`<div class="phone phone_${name} animated"></div>`)
        let page = this.page.slice(-1)[0]
        let wrapper = page.find('.wrapper')

        let a = $(`<a class="tel"></a>`)

        dom.css({
            "width": rem(cfg.width),
            "height": rem(cfg.height),
            "lineHeight": cfg.lineHeight,
            "left": rem(cfg.x),
            "top": rem(cfg.y),
            "fontSize": rem(cfg.fontSize),
            "fontFamily": cfg.fontFamily,
            "z-index": cfg.zIndex,
            "text-align": cfg.textAlign,
            "color": cfg.color
        })

        cfg.text && a.text(cfg.text)
        cfg.tel && a.attr('href', "tel://" + cfg.tel)

        dom.append(a)
        wrapper.append(dom)
        return this
    }

    // 信息提示
    this.tip = function (text) {
        Layer.open({
            content: text,
            skin: 'msg',
            time: 2
        })

        return this
    }

    /* H5对象初始化呈现 */
    this.loader = function () {

        let that = this
        let page = this.page.slice(-1)[0]
        let count = this.images.length - 1
        let rate = 0

        let loader = $(`<div id="loader"><div class="logo"></div><div class="rate" id="rate">${rate}%</div></div>`)

        $('body').append(loader)

        loadImage(this.images,  () => {
            loader.remove()
            $('body').append(this.container)
            let h5 = new Swiper(this.swiper, {
                init: false,
                direction: "vertical",
                loop: true,
                mousewheel: {
                    enabled: true,
                    invert: true,
                },
                on: {
                    init() {
                        page = that.page.slice(0)[0]
                        page && page.find('.wrapper').trigger('onLoad')
                    }
                }
            })
            h5.init()
        }, (progress) => {
                rate = (progress / count * 100)
                loader.find('.rate').text(rate + "%")
        }, 10000)

    }
    

    return this
}

export default H5