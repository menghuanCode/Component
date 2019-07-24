'use strict'

import "@src/sass/layout.scss"

import { TweenMax } from 'gsap'

import goods from './goods'

import H5 from "@src/js/H5.js"

const h5 = new H5()

let V = {
    max: 6,
    price: 0,
    goodsIndex: 0,
    goods: goods,
    shopCat: [],
    isMaxCat: false,
    barX: -460
}


function getGoods() {
    return V.goods[V.goodsIndex]
}

let goodsSlideList = [
    'images/x11.png','images/x12.png','images/x13.png','images/x15.png',
    'images/x16.png','images/x17.png','images/x18.png','images/x19.png','images/x20.png',
    'images/x21.png','images/x22.png','images/x23.png','images/x24.png','images/x25.png',
    'images/x26.png','images/x27.png','images/x28.png','images/x29.png','images/x30.png',
    'images/x31.png','images/x32.png','images/x33.png','images/x34.png','images/x35.png',
    'images/x36.png','images/x37.png','images/x38.png','images/x39.png','images/x40.png',
    'images/x41.png','images/x42.png','images/x14.png',
]

h5
    .setWrapper('shopWrapper', { noOffset: true, css: { position: "relative", top: 0, width: "2045px", height: "748px", overflow: "hidden", marginTop: 0}})
    .setShade('shade', { noOffset: true, css: { position: "absoluted", top: 0, width: "2045px", height: "748px", backgroundColor: "rgba(0, 0, 0, 0.74)", display: "none"}})

for (let i = 0, goods = V.goods; i < goods.length; i++) {
    let _cfg = { index: i, modal: "GoodsModal", isBuy: 0, type: "image" }
    let item = goods[i] = $.extend({}, _cfg, goods[i])

    h5.addGoods(item)
}

h5
    .addView('bg', { type: "image", bg: "images/bg.png", matrix: "1, 0, 0, 1, 1045, 374", noOffset: true, css: {position: "absolute", left: -1045, top: -374, width: 2090, height: 748, zIndex: 1} })
    .addView('people', { type: "image", bg: "images/people.png", matrix: "1, 0, 0, 1, 725, 380", css: {position: "absolute", left: -90, top: -277, width: 181, height: 554, zIndex: 1} })
    .addView('people', { type: "image", bg: "images/people.png", matrix: "1, 0, 0, 1, 725, 380", css: {position: "absolute", left: -90, top: -277, width: 181, height: 554, zIndex: 1} })
    .addView('sign', { type: "image", bg: "images/sign.png", matrix: "1, 0, 0, 1, 146, 226", css: {position: "absolute", left: -96, top: -147, width: 192, height: 295, zIndex: 1} })
    .addView('lamp', { type: "image", bg: "images/lamp.png", matrix: "1, 0, 0, 1, 279, 142", css: {position: "absolute", left: -60, top: -154, width: 120, height: 309, zIndex: 1} })
    .addView('boardPetsCanEntry', { type: "image", bg: "images/board_petsCanEntry.png", matrix: "1, 0, 0, 1, 126, 413", css: {position: "absolute", left: -64, top: -32, width: 129, height: 64, zIndex: 1} })
    .addView('iconCat', { type: "image", bg: "images/icon_cat.png", matrix: "1, 0, 0, 1, 86, 476", css: {position: "absolute", left: -22, top: -20, width: 46, height: 40, zIndex: 1} })
    .addView('iconDog', { type: "image", bg: "images/icon_dog.png", matrix: "1, 0, 0, 1, 142, 476", css: {position: "absolute", left: -23, top: -20, width: 46, height: 40, zIndex: 1} })
    .addView('boardStoreEntrance', { type: "image", bg: "images/board_shopEntrance.png", matrix: "1, 0, 0, 1, 140, 548", css: {position: "absolute", left: -77, top: -37, width: 155, height: 76, zIndex: 1} })
    .addView('license', { type: "image", bg: "images/license.png", matrix: "1, 0, 0, 1, 450, 160", css: {position: "absolute", left: -91, top: -64, width: 182, height: 128, zIndex: 1} })
    .addView('socket', { type: "image", bg: "images/socket.png", matrix: "1, 0, 0, 1, 434, 296", css: {position: "absolute", left: -40, top: -50, width: 80, height: 100, zIndex: 1} })
    .addView('basket', { type: "image", bg: "images/basket.png", matrix: "1, 0, 0, 1, 325, 602", css: {position: "absolute", left: -63, top: -84, width: 125, height: 167, zIndex: 4} })
    .addView('computer', { type: "image", bg: "images/computer.png", matrix: "1, 0, 0, 1, 680, 311", css: {position: "absolute", left: -158, top: -100, width: 316, height: 201, zIndex: 1} })
    .addView('desk', { type: "image", bg: "images/desk.png", matrix: "1, 0, 0, 1, 669, 552", css: {position: "absolute", left: -198, top: -166, width: 397, height: 333, zIndex: 6} })
    .addView('shopTip', { type: "image", bg: "images/shop_tip.png", matrix: "1, 0, 0, 1, 711, 547", css: {position: "absolute", left: -98, top: -118, width: 197, height: 236, zIndex: 7} })
    // 第一个货架
    .addView('shelf', { type: "image", bg: "images/shelf.png", matrix: "1, 0, 0, 1, 1019, 153", css: {position: "absolute", left: -188, top: -104, width: 376, height: 208, zIndex: 7} })
    .addView('shelfFence', { type: "image", bg: "images/shelf_fence.png", matrix: "1, 0, 0, 1, 1021, 236", css: {position: "absolute", left: -188, top: -19, width: 375, height: 38, zIndex: 9} })
    .addView('shelf', { type: "image", bg: "images/shelf.png", matrix: "1, 0, 0, 1, 1022, 350", css: {position: "absolute", left: -188, top: -104, width: 376, height: 208, zIndex: 7} })
    .addView('shelfFence', { type: "image", bg: "images/shelf_fence.png", matrix: "1, 0, 0, 1, 1024, 432", css: {position: "absolute", left: -188, top: -19, width: 375, height: 38, zIndex: 9} })
    .addView('shelf', { type: "image", bg: "images/shelf.png", matrix: "1, 0, 0, 1, 1022, 547", css: {position: "absolute", left: -188, top: -104, width: 376, height: 208, zIndex: 7} })
    .addView('shelfFence', { type: "image", bg: "images/shelf_fence.png", matrix: "1, 0, 0, 1, 1027, 628", css: {position: "absolute", left: -188, top: -19, width: 375, height: 38, zIndex: 9} })
    .addView('shelfBottom', { type: "image", bg: "images/shelf_bottom.png", matrix: "1, 0, 0, 1, 1027, 670", css: {position: "absolute", left: -188, top: -29, width: 377, height: 58, zIndex: 9} })
    // 第二个货架
    .addView('shelf', { type: "image", bg: "images/shelf.png", matrix: "1, 0, 0, 1, 1392, 150", css: {position: "absolute", left: -188, top: -104, width: 376, height: 208, zIndex: 7} })
    .addView('shelfFence', { type: "image", bg: "images/shelf_fence.png", matrix: "1, 0, 0, 1, 1394, 234", css: {position: "absolute", left: -188, top: -19, width: 375, height: 38, zIndex: 9} })
    .addView('shelf', { type: "image", bg: "images/shelf.png", matrix: "1, 0, 0, 1, 1395, 347", css: {position: "absolute", left: -188, top: -104, width: 376, height: 208, zIndex: 7} })
    .addView('shelfFence', { type: "image", bg: "images/shelf_fence.png", matrix: "1, 0, 0, 1, 1397, 430", css: {position: "absolute", left: -188, top: -19, width: 375, height: 38, zIndex: 9} })
    .addView('shelf', { type: "image", bg: "images/shelf.png", matrix: "1, 0, 0, 1, 1395, 543", css: {position: "absolute", left: -188, top: -104, width: 376, height: 208, zIndex: 7} })
    .addView('shelfFence', { type: "image", bg: "images/shelf_fence.png", matrix: "1, 0, 0, 1, 1400, 626", css: {position: "absolute", left: -188, top: -19, width: 375, height: 38, zIndex: 9} })
    .addView('shelfBottom', { type: "image", bg: "images/shelf_bottom.png", matrix: "1, 0, 0, 1, 1400, 667", css: {position: "absolute", left: -188, top: -29, width: 377, height: 58, zIndex: 9} })
    // 第三个货架
    .addView('shelf', { type: "image", bg: "images/shelf.png", matrix: "1, 0, 0, 1, 1766, 147", css: {position: "absolute", left: -188, top: -104, width: 376, height: 208, zIndex: 7} })
    .addView('shelfFence', { type: "image", bg: "images/shelf_fence.png", matrix: "1, 0, 0, 1, 1767, 233", css: {position: "absolute", left: -188, top: -19, width: 375, height: 38, zIndex: 9} })
    .addView('shelf', { type: "image", bg: "images/shelf.png", matrix: "1, 0, 0, 1, 1769, 344", css: {position: "absolute", left: -188, top: -104, width: 376, height: 208, zIndex: 7} })
    .addView('shelfFence', { type: "image", bg: "images/shelf_fence.png", matrix: "1, 0, 0, 1, 1770, 429", css: {position: "absolute", left: -188, top: -19, width: 375, height: 38, zIndex: 9} })
    .addView('shelf', { type: "image", bg: "images/shelf.png", matrix: "1, 0, 0, 1, 1769, 540", css: {position: "absolute", left: -188, top: -104, width: 376, height: 208, zIndex: 7} })
    .addView('shelfFence', { type: "image", bg: "images/shelf_fence.png", matrix: "1, 0, 0, 1, 1772, 625", css: {position: "absolute", left: -188, top: -19, width: 375, height: 38, zIndex: 9} })
    .addView('shelfBottom', { type: "image", bg: "images/shelf_bottom.png", matrix: "1, 0, 0, 1, 1772, 664", css: {position: "absolute", left: -188, top: -29, width: 377, height: 58, zIndex: 9} })
    .addView('shopMailbox', { type: "image", bg: "images/shop_mailbox.png", matrix: "1, 0, 0, 1, 2001, 160", css: {position: "absolute", left: -43, top: -48, width: 86, height: 97, zIndex: 3}, on: {
        click: function () {
            let commentsModal = this.getModal('commentsModal')
            commentsModal.modal.trigger('open')
        }
        } })


    // 第三个货架
    .addGoods('catOrnament', { type: "image", bg: "images/g31.png", matrix: "1, 0, 0, 1, 1902, 600", css: {position: "absolute", left: -39, top: -31, width: 77, height: 63, zIndex: 8} })

    .addTime('currentTime', { matrix: "1, 0, 0, 1, 602, 242", css: {position: "absolute", left: -76, top: -22, width: 100, height: 30, lineHeight: "2em", zIndex: 8} })
    .addHandle('shopCat', {
        bg: "images/shopCat.png",
        css: {position: "absolute", left: 10, top: 690, width: 50, height: 50, zIndex: 8},
        on: {
            click() {
                let Modal = h5.getModal("shopCatModal")
                Modal.modal.trigger('open')
            }
        }
    })
    .addHandle('shopHot', {
        bg: "images/shopHot.png",
        css: {position: "absolute", right: 10, top: 690, width: 50, height: 50, zIndex: 8},
        on: {
            click() {
                let Modal = h5.getModal("hotModal")
                Modal.modal.trigger('open')
            }
        }
    })
    // .addHandle('shopRank', { bg: "images/shopRank.png", css: {position: "absolute", right: 70, top: 690, width: 50, height: 50, zIndex: 8} })
    .addSlide('shopNumber', {
        css: { position: "absolute", left: 43, top: 690, width: 20, height: 20, zIndex: 9 },
        list: ['images/n0.png', 'images/n1.png', 'images/n2.png', 'images/n3.png', 'images/n4.png', 'images/n5.png', 'images/n6.png'],
        on: {
            load() {
                let index = V.shopCat.length || 0
                this.find('.item').eq(index).show()
            },
            change() {
                let index = V.shopCat.length
                this.find('.item').hide()
                this.find('.item').eq(index).show()
            }
        }
    })
    // 商品modal
    .addModal('GoodsModal', {
        open: false,
        noOffset: true,
        css: {position: "absolute", top: "50%", left: "50%", width: 254, height: 265, marginLeft: -127, marginTop: -134, zIndex: 1200, transform: 'matrix(1, 0, 0, 1, 0, 100)'},
        on: {
            open(goods) {
                V.goodsIndex = goods.index
                modalOpen.call(this)
                this.goodsSlide.trigger('change', goods)
                this.goodsBuyBtn.trigger('change', goods)
            },
            close() {
                modalClose.call(this)
            }
        },
        layout: [
            { name: "bg", type: "image", bg: "images/bg1.png", css: {position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: 1}},
            {
                name: "close",
                type: "image",
                bg: "images/close.png",
                css: {position: "absolute", left: "100%", top: 0, width: 50, height: 50, marginLeft: -40, marginTop: -10, zIndex: 1},
                on: {
                    click() {
                        this.modal.trigger('close')
                    }
                }
            },
            {
                name: "goodsSlide",
                type: "slide",
                css: {position: "absolute", left: 32, top: -72, width: 195, height: 325, zIndex: 1},
                list: goodsSlideList,
                on: {
                    change(goods) {
                        let index = _.indexOf(goodsSlideList, goods.cover)
                        this.goodsSlide.find('.item').css('display', 'none')
                        this.goodsSlide.find('.item').eq(index).css('display', 'block')
                    }
                }
            },
            {
                name: "goodsBuyBtn",
                type: "slide",
                css: {position: "absolute", left: 150, top: 180, width: 80, height: 45, zIndex: 1},
                list: [ 'images/buy.png', 'images/buyed.png' ],
                on: {
                    change(goods) {
                        this.goodsBuyBtn.find('.item').css('display', 'none')
                        this.goodsBuyBtn.find('.item').eq(goods.isBuy).css('display', 'block')
                    },
                    click() {
                        let goods = V.goods[V.goodsIndex]

                        if (goods.isBuy) {
                            return;
                        }

                        goods.isBuy = goods.isBuy ? 0 : 1
                        V.price += goods.price

                        let shopNumberSlider = h5.getSlide("shopNumber")
                        V.shopCat.push(goods)

                        shopNumberSlider.trigger('change')
                        this.goodsBuyBtn.trigger('change', goods)


                        modalClose.call(this, function () {
                            // 滿足6个商品
                            if (V.shopCat.length === V.max && !V.isMaxCat) {
                                V.isMaxCat = true
                                let shopCatMaxModal = h5.getModal('shopCatMaxModal')
                                shopCatMaxModal.modal.trigger('open')
                            }
                        })
                    }
                }
            }
        ],
    })
    // 购物车modal
    .addModal('shopCatModal', {
        open: false,
        noOffset: true,
        css: {position: "absolute", top: "50%", left: "50%", width: 295, height: 394, marginLeft: -147.5, marginTop: -198.5, zIndex: 1200, transform: 'matrix(1, 0, 0, 1, 0, 100)'},
        on: {
            open() {
                modalOpen.call(this)
                this.goodsList.trigger('change')
                this.titleSlide.trigger('change')
                this.shopCatPrice.trigger('change')
                this.shopCatMsg.trigger('change')
                this.submitBtn.trigger('change')
                this.submitBtnMsg.trigger('change')
                this.close.trigger('change')
            },
            close() {
                modalClose.call(this)
            }
        },
        layout: [
            { name: "bg", type: "image", bg: "images/bg2.png", css: {position: "absolute", left: 0, top: 0, width: "100%", height: "100%", zIndex: 1}},
            { name: "close", type: "image", bg: "images/close.png",
                css: {position: "absolute", left: "100%", top: 0, width: 50, height: 50, marginLeft: -32, marginTop: -15, zIndex: 1},
                on: {
                    change() {
                        V.shopCat.length === V.max && this.close.hide()
                    },
                    click() {
                        this.modal.trigger('close')
                    }
                }
            },
            {
                name: "titleSlide",
                type: "slide",
                css: {position: "absolute", left: 36, top: 40, width: 220, height: 21, zIndex: 1},
                list: ["images/t1.png", "images/t2.png", "images/t3.png", "images/t4.png", "images/t5.png"],
                on: {
                    change() {
                        if (!V.shopCat.length || V.shopCat.length >= V.max) {
                            this.titleSlide.find('.item').css('display', 'none')
                            return;
                        }

                        let index = V.max - V.shopCat.length - 1
                        this.titleSlide.find('.item').css('display', 'none')
                        this.titleSlide.find('.item').eq(index).css('display', 'block')
                    }
                }
            },
            {
                name: "goodsList",
                type: "list",
                css: {position: "absolute", left: 30, top: 75, width: 240, height: 21, zIndex: 1},
                on: {
                    change() {
                        let html = ""
                        for (let i = 0, cat = V.shopCat; i < cat.length; i++) {
                            let item = cat[i]
                            html += `<div class='item' style='float:left; width: 80px;height: 60px;margin-bottom: 25px; background: url("${item.catCover}") center no-repeat/100% 100%'></div>`
                        }

                        this.goodsList.html(html)
                    }
                }
            },
            {
                name: 'shopCatPrice',
                type: 'text',
                css: {position: "absolute", left: 160, top: 286, width: 120, height: 21, color: '#ff5c5c', zIndex: 1, fontFamily: `"Hiragino Sans GB", "Microsoft YaHei", SimHei, STHeiti`, fontWeight: "bold"},
                on: {
                    change() {
                        if (!V.price) {
                            this.shopCatPrice.text(``)
                            return;
                        }
                        this.shopCatPrice.text(`共计${V.price}元，包邮`)
                    }
                }
            },
            {
                name: 'shopCatMsg',
                type: 'image',
                bg: 'images/t7.png',
                css: {position: "absolute", left: 100, top: 240, width: 169, height: 33, zIndex: 1},
                on: {
                    load() {
                        this.shopCatMsg.css('opacity', 0)
                    },
                    change() {
                        if (!isShopCompleted()) {
                            return;
                        }

                        this.shopCatMsg.css('opacity', 1)
                        TweenMax.to(this.shopCatMsg, 1, {
                            transform: "matrix(1, 0, 0, 1, 0, 10)",
                            yoyo: true,
                            repeat: -1,
                            ease: Linear.easeNode
                        })


                    }
                }
            },
            {
                name: 'submitBtn',
                type: 'image',
                bg: 'images/btn1.png',
                css: {position: "absolute", left: 154, top: 310, width: 118, height: 45, zIndex: 1},
                on: {
                    click() {
                        iScroll.scrollTo(V.barX, 0)
                        
                        modalClose.call(this, function () {
                            let receiptModal = h5.getModal('receiptModal')
                            receiptModal.modal.trigger('open')
                        })
                        
                    },
                    change() {
                        if (!V.price) {
                            this.submitBtn.hide()
                            return;
                        }
                        this.submitBtn.show()
                    }
                }
            },
            {
                name: 'submitBtnMsg',
                type: 'image',
                bg: 'images/t6.png',
                css: {position: "absolute", left: 132, top: 362, width: 140, height: 10, zIndex: 1},
                on: {
                    click() {

                    },
                    change() {
                        if (!V.price) {
                            this.submitBtnMsg.hide()
                            return;
                        }
                        this.submitBtnMsg.show()
                    }
                }
            },
        ],
    })
    // 购物车满了modal
    .addModal('shopCatMaxModal',  {
        open: false,
        noOffset: true,
        css: {position: "absolute", top: "50%", left: "50%", width: 266, height: 200, marginLeft: -133, marginTop: -100, zIndex: 1200, transform: 'matrix(1, 0, 0, 1, 0, 100)'},
        on: {
            open() {
                modalOpen.call(this)
            },
            close() {
                modalClose.call(this)
            }
        },
        layout: [
            { name: "msg", type: "image", bg: "images/msg1.png",
                css: {position: "absolute", left: 0, top: 0, width: 266, height: 138, zIndex: 1},
            },
            {
                name: "sureBtn",
                type: "image",
                bg: "images/btn2.png",
                css: {position: "absolute", left: 100, top: 150, width: 80, height: 45, zIndex: 1},
                on: {
                    click() {
                        modalClose.call(this, function () {
                            let shopCatModal = h5.getModal("shopCatModal")
                            shopCatModal.modal.trigger('open')
                        })
                    }
                }
            }
        ],
    })
    // 留言modal
    .addModal('commentsModal',  {
        open: false,
        noOffset: true,
        css: {position: "absolute", top: 50, left: 30, width: 314, height: 540, zIndex: 1200, transform: 'matrix(1, 0, 0, 1, 0, 100)'},
        on: {
            open() {
                modalOpen.call(this)
            },
            close() {
                modalClose.call(this)
            }
        },
        layout: [
            { name: "bg", type: "image", bg: "images/bg3.png",
                css: {position: "absolute", left: 0, top: 0, width: 314, height: 518, zIndex: 1},
            },
            { name: "title", type: "image", bg: "images/mt1.png",
                css: {position: "absolute", left: 110, top: 40, width: 92, height: 30, zIndex: 1},
            },
            { name: "slogan", type: "image", bg: "images/t8.png",
                css: {position: "absolute", left: 50, top: 80, width: 214, height: 18, zIndex: 1},
            },
            { name: "btn", type: "image", bg: "images/btn3.png",
                css: {position: "absolute", left: 202, top: 446, width: 80, height: 44, zIndex: 1},
            },
            { name: "close", type: "image", bg: "images/close.png",
                css: {position: "absolute", left: "50%", top: "100%", width: 50, height: 50, marginLeft: -32, marginTop: -15, zIndex: 1},
                on: {
                    click() {
                        this.modal.trigger('close')
                    }
                }
            }
        ],
    })
    // 热门modal
    .addModal('hotModal',  {
        open: false,
        noOffset: true,
        css: {position: "absolute", top: 50, left: 30, width: 314, height: 540, zIndex: 1200, transform: 'matrix(1, 0, 0, 1, 0, 100)'},
        on: {
            open() {
                modalOpen.call(this)
            },
            close() {
                modalClose.call(this)
            }
        },
        layout: [
            { name: "bg", type: "image", bg: "images/bg3.png",
                css: {position: "absolute", left: 0, top: 0, width: 314, height: 518, zIndex: 1},
            },
            { name: "hot1_title", type: "image", bg: "images/mt2.png",
                css: {position: "absolute", left: 110, top: 40, width: 92, height: 30, zIndex: 1},
            },
            { name: "hot1_pic", type: "image", bg: "images/x75.png",
                css: {position: "absolute", left: 117, top: 80, width: 80, height: 65, zIndex: 1},
            },
            { name: "hot1_text1", type: "text",
                css: {position: "absolute", left: 42, top: 150, width: 231, height: 21, zIndex: 1, textAlign: "center",  color: '#433629', fontFamily: `SimHei, STHeiti`, fontWeight: "bold"},
                text: "猫"
            },
            { name: "hot1_text2", type: "text",
                css: {position: "absolute", left: 42, top: 180, width: 231, height: 21, zIndex: 1, textAlign: "center", color: '#433629', fontFamily: `SimHei, STHeiti`, fontWeight: "bold"},
                text: "养只猫"
            },
            { name: "hot1_text2", type: "text",
                css: {position: "absolute", left: 42, top: 210, width: 231, height: 21, zIndex: 1, textAlign: "center", color: '#433629', fontFamily: `SimHei, STHeiti`, fontWeight: "bold"},
                text: "共售出1419 份"
            },
            { name: "hot2_title", type: "image", bg: "images/mt3.png",
                css: {position: "absolute", left: 110, top: 270, width: 92, height: 30, zIndex: 1},
            },
            { name: "hot2_pic", type: "image", bg: "images/x64.png",
                css: {position: "absolute", left: 117, top: 310, width: 80, height: 65, zIndex: 1},
            },
            { name: "hot2_text1", type: "text",
                css: {position: "absolute", left: 42, top: 380, width: 231, height: 21, zIndex: 1, textAlign: "center",  color: '#433629', fontFamily: `SimHei, STHeiti`, fontWeight: "bold"},
                text: "泳镜"
            },
            { name: "hot2_text2", type: "text",
                css: {position: "absolute", left: 42, top: 410, width: 231, height: 21, zIndex: 1, textAlign: "center", color: '#433629', fontFamily: `SimHei, STHeiti`, fontWeight: "bold"},
                text: "学会游泳"
            },
            { name: "hot2_text2", type: "text",
                css: {position: "absolute", left: 42, top: 440, width: 231, height: 21, zIndex: 1, textAlign: "center", color: '#433629', fontFamily: `SimHei, STHeiti`, fontWeight: "bold"},
                text: "仅售出11份"
            },
            { name: "close", type: "image", bg: "images/close.png",
                css: {position: "absolute", left: "50%", top: "100%", width: 50, height: 50, marginLeft: -32, marginTop: -15, zIndex: 1},
                on: {
                    click() {
                        this.modal.trigger('close')
                    }
                }
            }
        ],
    })
    // 小票modal
    .addModal('receiptModal',  {
        open: false,
        noOffset: true,
        css: {position: "absolute", top: 60, left: 12, width: 350, height: 1000, zIndex: 1200, transform: 'matrix(1, 0, 0, 1, 0, 0)'},
        on: {
            load() {
                let wrapper = this.modal.find('.wrapper')[0]
                let y = 0
                let startY, endY, deltaY, my
                wrapper.addEventListener('touchstart', function (event) {
                    let touches = event.touches[0]
                    startY = touches.clientY
                })

                wrapper.addEventListener('touchmove', function (event) {
                    let touches = event.touches[0]
                    endY = touches.clientY
                    deltaY = endY - startY
                    my = y + deltaY
                    $(this).attr('style', 'transform:matrix(1, 0, 0, 1, 0, '+ my +'); opacity: 0.98;')
                })

                wrapper.addEventListener('touchend', function () {
                    y = my
                    $(this).attr('style', 'transform:matrix(1, 0, 0, 1, 0, '+ y +'); opacity: 1;')
                })
            },
            open() {
                modalOpen.call(this)
                this.goodsList.trigger('change')
                this.priceDesc.trigger('change')
                this.button.trigger('change')
            },
            close() {
                modalClose.call(this)
            }
        },
        layout: [
            { name: "bg", type: "image", css: {position: "absolute", left: 0, top: 0, width: 350, height: 1000, zIndex: 1, backgroundColor: '#f7f2e8'} },
            { name: "title", type: "image", bg: "images/logo1.png",
                css: {position: "absolute", left: 25, top: 35, width: 197, height: 92, zIndex: 1},
            },
            { name: "titleCut", type: "image", bg: "images/cut.png",
                css: {position: "absolute", left: 20, top: 140, width: 310, height: 8, zIndex: 1},
            },
            {
                name: 'goodsList', type: "list",
                css: {position: "absolute", left: 20, top: 150, width: 310, zIndex: 1, background: "url('images/cut.png') bottom no-repeat/100%", paddingBottom: 50 },
                on: {
                    load() {
                    },
                    change() {
                        let html = ''
                        for(let i = 0; i < V.shopCat.length; i++) {
                            let item = V.shopCat[i]
                            html += `
                            <div class="item" style="display: flex; position: relative;">
                                <div class="dyname" style="width: 90px; height: 80px; margin: 18px 0 0 5px; background: url('${item.catCover}') center no-repeat/100% 100%"></div>
                                <div class="dyname" style="background: url('images/dashed.png') bottom no-repeat; background-size: 100%; margin: 0 25px 0 0; flex: 1; position: relative;">
                                    <div style="position: absolute; right: 0; bottom: 0; width: 100%;">
                                        <div class="mean" style="margin-left: auto; width: 160px; height: 32px; flex: 1; background: url('${item.meanCover}') center no-repeat/cover"></div>
                                        <div style="color: #6d6358; font-size: 12px;text-align: right;margin-bottom: 8px; display: flex; justify-content: space-between;">
                                            <div>
                                            <span class="name" style="padding: 5px;">${item.name}</span>                                      
</div>
                                            <div>
                                                <span class="number" style="padding: 5px;">x${item.number || 1}</span>  
                                                <span class="price" style="padding: 5px;">${item.price}</span>                                      
                                            </div>                                  
                                        </div>                               
                                    </div>                                    
                                </div>
                            </div>
                        `
                        }
                        this.goodsList.html(html)

                    }
                }
            },
            {
                name: 'priceDesc', type: "view",
                css: {position: "absolute", left: 20, width: 310, zIndex: 1},
                on: {
                    change() {
                        let html = `
                            <ul class="" style="color: #6d6358; font-size: 13px; line-height: 26px;">
                                <li class="item" style="display: flex; position: relative;justify-content: space-between;">
                                    <div class="dyname">商品数量</div>
                                    <div class="dyname">${V.shopCat.length}</div>
                                </li>
                                <li class="item" style="display: flex; position: relative;justify-content: space-between;">
                                    <div class="dyname">实收</div>
                                    <div class="dyname">${V.price}元</div>
                                </li>
                            </ul>
                        `

                        this.priceDesc.html(html)
                        let top = this.goodsList.height() + this.goodsList.offset().top
                        this.priceDesc.css('top', top)
                        // debugger
                    }
                }
            },
            { name: "button", type: "image", bg: "images/btn4.png",
                css: {position: "absolute", left: 200, top: 35, width: 132, height: 43, zIndex: 1},
                on: {
                    change() {
                        let top = this.priceDesc.height() + this.priceDesc.offset().top
                        this.button.css('top', top)
                        this.bg.height(top + 150)
                    }
                }
            }
        ],
    })

h5.loader()


function modalOpen() {
    this.shade.fadeIn()
    this.modal.removeClass('hide')
    TweenMax.to(this.modal, 0.5, {
        transform: "matrix(1, 0, 0, 1, 0, 0)",
        opacity: 1
    }, 0.5)
}

function modalClose(cb) {
    let that = this
    this.shade.fadeOut()
    TweenMax.to(this.modal, 0.5, {
        transform: "matrix(1, 0, 0, 1, 0, 100)",
        opacity: 0,
        onComplete: function () {
            that.modal.addClass('hide')
            cb && cb()
        }
    })
}

function isShopCompleted() {
    return V.shopCat.length === V.max
}