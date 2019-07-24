import IScroll from 'iscroll'
import loadImage from "../libs/imageloader"

import { TweenLite } from 'gsap'


const H5 = function () {

    let phoneModel = {
        width: 375,
        height: 667,
        zoom: 1
    }

    let zoom = Math.min(innerWidth, 640)/phoneModel.width
    zoom = Math.min(1, zoom)

    this.h5 = $(`<div id="h5" class="h5" style="zoom:${zoom}"><div class="shop" id="shop"></div></div></div>`)
    this.shop = this.h5.find('#shop')

    this.images = []
    this.Goods = []
    this.Modals = {}
    this.Slides = {}

    this.top = 0

    this.__addAttribute = function (view, el, cfg = {}) {
        let css = cfg.css || {}

        if (!cfg.noOffset) {
            css.left = css.left && css.left + -23
        }

        cfg.tap && view.on('click', cfg.tap)
        css.zIndex && view.css("zIndex", css.zIndex)

        el.css(css)
        cfg.matrix && view.css('transform', 'matrix('+ cfg.matrix +')')
        cfg.bg && el.css('background-image', 'url(' + cfg.bg + ')')
        cfg.type && el.addClass(cfg.type)
    }

    this.setWrapper = function (name, cfg = {}) {
        let view = $(`<div class="wrapper" id="${cfg.id || name}"></div>`)
        this.__addAttribute(view, view, cfg)

        this.top = innerHeight < 736 ? -40 : (innerHeight - view.height())/2
        view.css('marginTop', this.top)

        this.wrapper = view

        this.shop.append(view)
        return this
    }

    this.setShade = function (name, cfg = {}) {
        let view = $(`<div class="view dyname shade" id="${cfg.id || name}"></div>`)
        this.__addAttribute(view, view, cfg)

        this.top = innerHeight < 736 ? -40 : (innerHeight - view.height())/2
        view.css('marginTop', this.top)

        this.shade = view

        this.h5.append(view)
        return this
    }

    /**
     * 添加视图，默认操作
     * @param name
     * @param cfg
     * @returns {H5}
     */
    this.addView = function (name, cfg = {}) {
        let view = $(`<div class="view dyname"><div class="el el_${name}"></div></div>`)
        let el = view.find('.el')
        this.__addAttribute(view, el, cfg)
        this.wrapper.append(view)


        this.__eventBind(view, cfg, this)

        return this
    }

    /**
     * 添加商品，做一些商品商品才有的操作
     * @param name
     * @param cfg
     * @returns {H5}
     */
    this.addGoods = function (cfg = {}) {
        let view = $(`<div class="view goods dyname"><div class="el"></div></div>`)
        let el = view.find('.el')
        this.__addAttribute(view, el, cfg)
        this.wrapper.append(view)

        el.on('click', () => {
            cfg.modal && this.Modals[cfg.modal].modal.trigger('open', cfg)
        })

        this.__eventBind(view, cfg)

        return this
    }

    /**
     * 添加时间
     * @param name
     * @param cfg
     * @returns {H5}
     */
    this.addTime = function (name, cfg) {
        cfg.noOffset = true
        let view = $(`<div class="view time"><div class="el el_${name}"></div></div>`)
        let el = view.find('.el')

        el.css({
            fontSize: "18px",
            color: "rgb(94, 255, 32)",
            fontWeight: "bold",
            fontFamily: `"Microsoft YaHei", "Hiragino Sans GB", SimHei, STHeiti`,
            textAlign: "center"
        })

        this.__addAttribute(view, el, cfg)

        setInterval(function () {
            let date = new Date()
            el.html(date.getHours() + ":" + date.getMinutes())
        }, 1000)

        this.wrapper.append(view)
        return this
    }

    /**
     * 添加处理，不是在 this.wrapper 容器里，是在h5的容器里
     * @param name
     * @param cfg
     * @returns {H5}
     */
    this.addHandle = function (name, cfg) {
        cfg.noOffset = true
        let view = $(`<div class="view handle dyname"></div>`)

        let css = cfg.css || {}
        css.top = this.top > 0 ? css.top : css.top + this.top

        this.__addAttribute(view, view, cfg)
        this.shop.append(view)

        view.on('click', () => {
            cfg.modal && this.Modals[cfg.modal].modal.trigger('open', cfg)
        })


        this.__eventBind(view, cfg)


        return this
    }

    this.__slide = function (name, cfg) {

        let list = cfg.list || []
        let html = ''

        for(let i = 0; i < list.length; i++) {
            let item = list[i]
            html += `<div class="item" data-index="${i}" style="width: 100%; height: 100%; display: none; background-image: url('${item || ''}');background-size: cover;"></div>`
            item && this.images.push(item)
        }


        return html
    }


    /**
     * 添加列表
     * @param name
     * @param cfg
     * @returns {H5}
     */
    this.addSlide = function (name, cfg) {
        cfg.noOffset = true

        let view = $(`<div class="view slide dyname" id="${cfg.id || name}"><div class="wrapper"></div></div>`)
        let wrapper = view.find('.wrapper')

        let css = cfg.css || {}
        css.top = this.top > 0 ? css.top : css.top + this.top
        wrapper.css({ width: "100%", height: '100%' })

        this.__addAttribute(view, view, cfg)

        let slide = this.__slide(name, cfg)

        wrapper.html(slide)
        this.shop.append(view)

        let event = cfg.on || Object.create(null)

        event.onLoad && event.onLoad(wrapper)

        this.__eventBind(view, cfg, view)

        this.Slides[name] = view

        return this
    }


    this.__view = function (cfg) {
    }

    this.__eventBind = function (view, cfg, params) {

        let events = cfg.on || Object.create(null)
        let eventKeys = Object.keys(events)

        // events && console.log(events.open)

        for (let i = 0; i < eventKeys.length; i++) {
            let event = eventKeys[i]

            if (event === 'load') {
                events[event].call(params)
                continue
            }

            view.on(event, (function () {
                let args = _.tail(arguments)
                events[event].call(params, ...args)
            }))
        }
    }

    /**
     * 添加modal
     * @param name
     * @param cfg
     * @returns {H5}
     */
    this.addModal = function (name, cfg) {
        let that = this
        let id = cfg.id || name
        let modal = $(`<div class="view modal dyname" id="${id}"><div class="wrapper"></div></div>`)
        let wrapper = modal.find('.wrapper')

        this.Modals[id] = Object.create(null)
        this.Modals[id].modal = modal
        this.Modals[id].shade = this.shade

        this.__eventBind(modal, cfg, this.Modals[id])

        for(let i = 0; i < cfg.layout.length; i++) {
            let item = cfg.layout[i]
            item.noOffset = true

            let view = $(`<div class="view dyname modal_${item.name}"></div>`)
            this.__addAttribute(view, view, item)

            switch (item.type) {
                case "image": {
                    wrapper.append(view)
                    break
                }
                case "text": {
                    view.text(item.text)
                    wrapper.append(view)
                    break
                }
                case "slide": {
                    let slide = this.__slide(item.name, item)
                    view.html(slide)
                    wrapper.append(view)
                    let event = cfg.on || Object.create(null)
                    event.onLoad && event.onLoad(wrapper)
                    break
                }
                case "list": {
                    wrapper.append(view)
                    break
                }
                case "view": {
                    wrapper.append(view)
                    break
                }
            }

            // 事件绑定
            that.Modals[id][item.name] = view
            item.on && this.__eventBind(view, item, that.Modals[id])
        }

        this.__addAttribute(modal, modal, cfg)
        let config = Object.assign({}, { view: modal, wrapper: wrapper }, cfg)
        this.h5.append(modal)

        config.open ? modal.fadeIn() : modal.addClass('hide').css('opacity', 0)

        return this
    }

    this.getSlide = function (name) {
        return this.Slides[name]
    }

    this.getModal = function (name) {
        return this.Modals[name]
    }




    /* H5对象初始化呈现 */
    this.loader = function () {

        let that = this
        let count = this.images.length - 1

        let loader = $(`<div id="loader"><div class="logo"></div><div class="progress"><div class="rate" id="rate"></div></div></div>`)
        let rate = loader.find('#rate')

        $('body').append(loader)


        loadImage(this.images,  () => {
            loader.remove()

            $('body').append(this.h5)
            let myIScroll = new IScroll('#shop', { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false, mouseWheel: true, tap: true })

            window.iScroll = myIScroll

        }, (progress) => {
                let par = (progress / count * 100)
                rate.css('width', par + "%")
        }, 10000)

    }


    return this
}



export default H5
