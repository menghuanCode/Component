'use strict'

import "@src/sass/layout.scss"


import H5 from "@src/js/H5.js"

const h5 = new H5()

h5.addAudio("https://res.huanqing365.com/upload/audios/20181113/8740aa6b03422a3755bad4406bf6ef73.mp3")

// 第一个页面
h5.addPage("first_page", {width: 320, height: 504, top: 32})
    .addRadio('r1', { size: 7, x: 111, y: 228, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r2', { size: 25, x: 79, y: 244, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r3', { size: 15, x: 81, y: 277, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "1s" } })
    .addRadio('r4', { size: 8, x: 9.5, y: 223, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "1s" } })
    .addRadio('r5', { size: 254, x: -68, y: -36, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })

    .addElement('bg', { width: 385.5, height: 578.5, x: -32.5, y: -28, zIndex: 0, bg: 'images/bg.png', animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addElement('logo', { width: 195.5, height: 291.5, x: -25, y: -76, zIndex: 2, bg: 'images/logo.png', animated: { name: "rotateIn", duration: "1s", delay: "2s" } })
    .addElement('people', { width: 296.5, height: 418, x: 24, y: 21, zIndex: 2, bg: 'images/people.png', animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addElement('t1', { width: 273.5, height: 155, x: 22.5, y: 300.5, zIndex: 3, bg: 'images/t1.png', animated: { name: "fadeInUp", duration: "1s", delay: "3s" } })
    .addElement('t1_s', { width: 276.5, height: 158, x: 22, y: 300, zIndex: 2, bg: 'images/t1_s.png', animated: { name: "fadeInUp", duration: "1s", delay: "3s" } })
    .addElement('t2', { width: 112.5, height: 27.5, x: 23, y: 307.5, zIndex: 3, bg: 'images/t2.png', animated: { name: "fadeInLeft", duration: "1s", delay: "3s" } })
    .addElement('t2_s', { width: 115.5, height: 30.5, x: 22, y: 307, zIndex: 2, bg: 'images/t2_s.png', animated: { name: "fadeInLeft", duration: "1s", delay: "3s" } })
    .addElement('t3', { width: 23.5, height: 86.5, x: 222.5, y: 300.5, zIndex: 3, bg: 'images/t3.png', animated: { name: "fadeInDown", duration: "1s", delay: "3s" } })
    .addElement('t3_s', { width: 25.5, height: 90.5, x: 222.5, y: 300, zIndex: 2, bg: 'images/t3_s.png', animated: { name: "fadeInDown", duration: "1s", delay: "3s" } })
    .addText('t1', { width: 273.5, height: 26.5, x: 22.5, y: 467.189, zIndex: 2, type: "primary", text: 'XXX有限责任公司', fontSize: 15 })
// 第二个页面
h5.addPage("second_page", {width: 320, height: 504, top: 32})
    .addRadio('r1', { size: 6, x: 296, y: 278, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r2', { size: 6, x: 160, y: 72, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r3', { size: 6, x: 20, y: 390, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r4', { size: 6, x: 212, y: 386, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r5', { size: 8, x: 110, y: 380, zIndex: 1, animated: { name: "fadeInNormal", duration: "1s", delay: "0s" } })
    .addRadio('r6', { size: 14, x: 276, y: 150, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r7', { size: 14, x: 58, y: 466, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r8', { size: 14, x: 182, y: 436, zIndex: 1, animated: { name: "slideRight;", duration: "1s", delay: "0s" } })
    .addRadio('r9', { size: 14, x: 10, y: 32, zIndex: 1, animated: { name: "slideRight;", duration: "1s", delay: "0s" } })
    .addRadio('r10', { size: 25, x: 18, y: 304, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r11', { size: 25, x: 180, y: 400, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r12', { size: 118, x: 24, y: 12, zIndex: 1, text: "市场部总监", fontSize: 18, backgroundColor: "#000", animated: { name: "fadeIn", duration: "1s", delay: "0s" } })
    .addRadio('r13', { size: 94, x: 194, y: 40, zIndex: 1, text: "策划经理", fontSize: 18, backgroundColor: "#cd0e1d", animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addRadio('r14', { size: 58, x: 2, y: 406, zIndex: 1, text: "……", fontSize: 18, backgroundColor: "#000", animated: { name: "fadeIn", duration: "1s", delay: "0s" } })
    .addRadio('r15', { size: 254, x: 32, y: 122, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "0s" } })
    .addRadio('r16', { size: 134, x: 192, y: 372, zIndex: 1, text: "营销副总经理", fontSize: 18, backgroundColor: "#000", animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addRadio('r17', { size: 94, x: 32, y: 322, zIndex: 1, text: "策划经理", fontSize: 18, backgroundColor: "#cd0e1d", animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addRadio('r18', { size: 108, x: 156, y: 262, zIndex: 1, backgroundColor: "#cd0e1d", animated: { name: "fadeIn", duration: "1s", delay: "1s" } })

    .addElement('t4', { width: 123, height: 123, x: 81, y: 164, zIndex: 2, bg: 'images/t4.png', animated: { name: "fadeInDown", duration: "1s", delay: "0s" } })
    .addElement('t5', { width: 28, height: 114, x: 210, y: 164, zIndex: 2, bg: 'images/t5.png', animated: { name: "fadeInRight", duration: "1s", delay: "1s" } })
    .addElement('t6', { width: 86, height: 30, x: 81, y: 290, zIndex: 2, bg: 'images/t6.png', animated: { name: "fadeInLeft", duration: "1s", delay: "1s" } })
    .addElement('t7', { width: 88, height: 42, x: 176, y: 290, zIndex: 2, bg: 'images/t7.png', animated: { name: "fadeInUp", duration: "1s", delay: "1s" } })
// 第三个页面
h5.addPage("third_page", {width: 320, height: 504, top: 32})
    .addRadio('r1', { size: 7, x: 216, y: 80, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r2', { size: 8, x: 170, y: 170, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r3', { size: 14, x: 250, y: 120, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r4', { size: 25, x: 220, y: 102, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r5', { size: 8, x: 9.5, y: 223, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "1s" } })
    .addRadio('r6', { size: 254, x: -68, y: -36, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addRadio('r7', { size: 254, x: 170, y: 360, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })

    .addElement('bg', { width: 385.5, height: 578.5, x: -32.5, y: -28, zIndex: 0, bg: 'images/bg.png', animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addElement('logo', { width: 195.5, height: 291.5, x: -25, y: -76, zIndex: 2, bg: 'images/logo.png', animated: { name: "rotateIn", duration: "1s", delay: "2s" } })
    .addElement('t8', { width: 86, height: 85.5, x: 217, y: 400, zIndex: 3, bg: 'images/t8.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('t8_s', { width: 86, height: 85.5, x: 217, y: 401, zIndex: 2, bg: 'images/t8_s.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('sq', { width: 96, height: 96, x: 250, y: 416, zIndex: 2, backgroundColor: "#000", animated: { name: "rotateInDownRight", duration: "1s", delay: "2s" } })
    .addElement('photo', { width: 167, height: 167, x: -22, y: 368, zIndex: 3, bg: "images/photo.png", animated: { name: "rotateInDownRight", duration: "1s", delay: "2s" } })
    .addElement('photo_s', { width: 168, height: 168, x: -33.5, y: 372, zIndex: 2, bg: "images/photo_s.png", animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })

    .addText('t1', { width: 248, height: 125, lineHeight: 1.8, x: 36, y: 230, zIndex: 2, text: 'XXXX房地产投资有限公司始创于2012年8月8日，是一家以房地产营销策划代理为核心，整合房地产分销渠道、项目策划、营销代理、营销顾问等业务于一体的房地产综合服务机构。', fontSize: 14, textAlign: "left", animated: { name: "fadeInDown", duration: "1s", delay: "3s" } })
// 第四个页面
h5.addPage("four_page", {width: 320, height: 504, top: 32})
    .addRadio('r1', { size: 7, x: 216, y: 80, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r2', { size: 8, x: 170, y: 170, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r3', { size: 14, x: 250, y: 120, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r4', { size: 25, x: 220, y: 102, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r5', { size: 8, x: 9.5, y: 223, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "1s" } })
    .addRadio('r6', { size: 254, x: -68, y: -36, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addRadio('r7', { size: 254, x: 170, y: 360, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })

    .addElement('bg', { width: 385.5, height: 578.5, x: -32.5, y: -28, zIndex: 0, bg: 'images/bg.png', animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addElement('logo', { width: 195.5, height: 291.5, x: -25, y: -76, zIndex: 2, bg: 'images/logo.png', animated: { name: "rotateIn", duration: "1s", delay: "2s" } })
    .addElement('t9', { width: 86, height: 85.5, x: 217, y: 400, zIndex: 3, bg: 'images/t9.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('t9_s', { width: 86, height: 85.5, x: 217, y: 401, zIndex: 2, bg: 'images/t9_s.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('sq', { width: 96, height: 96, x: 250, y: 416, zIndex: 2, backgroundColor: "#000", animated: { name: "rotateInDownRight", duration: "1s", delay: "2s" } })
    .addElement('photo', { width: 167, height: 167, x: 214, y: -14, zIndex: 3, bg: "images/photo.png", animated: { name: "rotateInDownRight", duration: "1s", delay: "2s" } })
    .addElement('photo_s', { width: 168, height: 168, x: 215, y: -29, zIndex: 2, bg: "images/photo_s.png", animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })

    .addElement('s1', { width: 20, height: 24, x: 223, y: 176, zIndex: 2, bg: "images/s1.png", animated: { name: "slideDown", duration: "1s", delay: "2s" } })
    .addElement('s2', { width: 20, height: 24, x: 253, y: 330, zIndex: 2, bg: "images/s1.png", animated: { name: "slideUp", duration: "1s", delay: "2s" } })

    .addText('t1', { width: 36, height: 154, lineHeight: 1, x: 249, y: 174, zIndex: 2, text: '优越的薪酬', fontFamily: "MicrosoftYaHei", fontSize: 30, animated: { name: "fadeInUp", duration: "1s", delay: "3s" } })
    .addText('t2', { width: 36, height: 154, lineHeight: 1, x: 212, y: 202, zIndex: 2, text: '丰厚的福利', fontFamily: "MicrosoftYaHei", fontSize: 30, animated: { name: "fadeInDown", duration: "1s", delay: "3s" } })
    .addText('t3', { width: 160, height: 124, lineHeight: 1.8, x: 18, y: 288, zIndex: 2, text: '底薪+高额提成+舒适的宿舍+优越的办公环境+岗位津贴+提升培训+户外拓展训练+带薪休假+年度旅游+年终奖金等。', fontFamily: "SimHei", fontSize: 14, textAlign: "left", animated: { name: "fadeInDown", duration: "1s", delay: "3s" } })

h5.addPage("job1_page", {width: 320, height: 504, top: 32})
    .addRadio('r1', { size: 7, x: 216, y: 80, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r2', { size: 8, x: 170, y: 170, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r3', { size: 14, x: 250, y: 120, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r4', { size: 25, x: 220, y: 102, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r5', { size: 8, x: 9.5, y: 223, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "1s" } })
    .addRadio('r6', { size: 254, x: -68, y: -36, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addRadio('r7', { size: 254, x: 170, y: 360, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })

    .addElement('bg', { width: 385.5, height: 578.5, x: -32.5, y: -28, zIndex: 0, bg: 'images/bg.png', animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addElement('logo', { width: 195.5, height: 291.5, x: -25, y: -76, zIndex: 2, bg: 'images/logo.png', animated: { name: "rotateIn", duration: "1s", delay: "2s" } })
    .addElement('t10', { width: 86, height: 85.5, x: 217, y: 400, zIndex: 3, bg: 'images/t10.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('t10_s', { width: 86, height: 85.5, x: 217, y: 401, zIndex: 2, bg: 'images/t10_s.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('sq', { width: 96, height: 96, x: 250, y: 416, zIndex: 2, backgroundColor: "#000", animated: { name: "rotateInDownRight", duration: "1s", delay: "2s" } })
    .addElement('portrait1', { width: 98, height: 118, x: 199, y: 70, zIndex: 2, bg: "images/portrait1.png", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addElement('arrow1', { width: 36.5, height: 36.5, x: 264, y: 238, zIndex: 2, bg: "images/arrow1.png", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })

    .addText('job', { width: 220, height: 39, x: 100, y: 196, zIndex: 2, text: "【市场部总监】", textAlign: "right", fontFamily: "MicrosoftYaHei", fontSize: "30", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addText('name', { width: 134, height: 36, x: 123, y: 239, zIndex: 2, text: "Director", lineHeight: 1.8, textAlign: "right", fontFamily: "MicrosoftYaHei", fontSize: "20", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addList('job', {
        type: 'ol',
        width: 256,
        lineHeight: 1,
        textAlign: "Left",
        x: 12,
        y: 286,
        color: "#fff",
        fontSize: 14,
        items: [{
            text: '3年以上房地产行业工作经验；',
        },{
            text: '具有丰富的客户资源和客户关系；',
        },{
            text: '具备较强的市场分析、营销、推广能力和协调能力；',
            width: 186,
        },{
            text: '具有较强的沟通能力及交际技巧有一定的领导力及逼单能力；',
            width: 172,
        },{
            text: '有团队协作精神，善于挑战。',
            width: 130,
        }]
    })

h5.addPage("job2_page", {width: 320, height: 504, top: 32})
    .addRadio('r1', { size: 7, x: 216, y: 80, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r2', { size: 8, x: 170, y: 170, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r3', { size: 14, x: 250, y: 120, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r4', { size: 25, x: 220, y: 102, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r5', { size: 8, x: 9.5, y: 223, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "1s" } })
    .addRadio('r6', { size: 254, x: -68, y: -36, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addRadio('r7', { size: 254, x: 170, y: 360, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })

    .addElement('bg', { width: 385.5, height: 578.5, x: -32.5, y: -28, zIndex: 0, bg: 'images/bg.png', animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addElement('logo', { width: 195.5, height: 291.5, x: -25, y: -76, zIndex: 2, bg: 'images/logo.png', animated: { name: "rotateIn", duration: "1s", delay: "2s" } })
    .addElement('t10', { width: 86, height: 85.5, x: 217, y: 400, zIndex: 3, bg: 'images/t10.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('t10_s', { width: 86, height: 85.5, x: 217, y: 401, zIndex: 2, bg: 'images/t10_s.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('sq', { width: 96, height: 96, x: 250, y: 416, zIndex: 2, backgroundColor: "#000", animated: { name: "rotateInDownRight", duration: "1s", delay: "2s" } })
    .addElement('portrait2', { width: 106, height: 109, x: 199, y: 76, zIndex: 2, bg: "images/portrait2.png", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addElement('arrow1', { width: 36.5, height: 36.5, x: 264, y: 238, zIndex: 2, bg: "images/arrow1.png", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })

    .addText('job', { width: 220, height: 39, x: 100, y: 196, zIndex: 2, text: "【营销副总经理】", textAlign: "right", fontFamily: "MicrosoftYaHei", fontSize: "25", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addText('name', { width: 134, height: 36, x: 123, y: 239, zIndex: 2, text: "The manager", lineHeight: 1.8, textAlign: "right", fontFamily: "MicrosoftYaHei", fontSize: "20", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addList('job', {
        type: 'ol',
        width: 256,
        lineHeight: 1,
        textAlign: "Left",
        x: 12,
        y: 286,
        color: "#fff",
        fontSize: 14,
        items: [{
            text: '市场营销、广告学、房地产等相关专业全日制大学以上学历；',
        },{
            text: '2、5年以上房地产营销策划经理及以上岗位从业经验；',
            width: 178
        },{
            text: '有大型房地产企业产品策划、推广、销售管理经验；',
            width: 172,
        },{
            text: '具备良好的战略思维、分析能力，有统筹多项目营销策划作战能力；；',
            width: 150,
        }]
    })


h5.addPage("job3_page", {width: 320, height: 504, top: 32})
    .addRadio('r1', { size: 7, x: 216, y: 80, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r2', { size: 8, x: 170, y: 170, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r3', { size: 14, x: 250, y: 120, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r4', { size: 25, x: 220, y: 102, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r5', { size: 8, x: 9.5, y: 223, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "1s" } })
    .addRadio('r6', { size: 254, x: -68, y: -36, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addRadio('r7', { size: 254, x: 170, y: 360, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })

    .addElement('bg', { width: 385.5, height: 578.5, x: -32.5, y: -28, zIndex: 0, bg: 'images/bg.png', animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addElement('logo', { width: 195.5, height: 291.5, x: -25, y: -76, zIndex: 2, bg: 'images/logo.png', animated: { name: "rotateIn", duration: "1s", delay: "2s" } })
    .addElement('t10', { width: 86, height: 85.5, x: 217, y: 400, zIndex: 3, bg: 'images/t10.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('t10_s', { width: 86, height: 85.5, x: 217, y: 401, zIndex: 2, bg: 'images/t10_s.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('sq', { width: 96, height: 96, x: 250, y: 416, zIndex: 2, backgroundColor: "#000", animated: { name: "rotateInDownRight", duration: "1s", delay: "2s" } })
    .addElement('portrait3', { width: 106, height: 119, x: 199, y: 64, zIndex: 2, bg: "images/portrait3.png", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addElement('arrow1', { width: 36.5, height: 36.5, x: 264, y: 238, zIndex: 2, bg: "images/arrow1.png", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })

    .addText('job', { width: 220, height: 39, x: 100, y: 196, zIndex: 2, text: "【策划经理】", textAlign: "right", fontFamily: "MicrosoftYaHei", fontSize: "30", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addText('name', { width: 134, height: 36, x: 123, y: 239, zIndex: 2, text: "The manager", lineHeight: 1.8, textAlign: "right", fontFamily: "MicrosoftYaHei", fontSize: "20", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addList('job', {
        type: 'ol',
        width: 256,
        lineHeight: 1,
        textAlign: "Left",
        x: 12,
        y: 286,
        color: "#fff",
        fontSize: 14,
        items: [{
            text: '有优秀的文案创作能力、房地产项目营销策划管理经验；',
        },{
            text: '有较强的市场与产品分析能力、策划指导组织能力及学习创新能力；',
            width: 178
        },{
            text: '有操作与管理流程经验，对市场形势分析把握及策略规划能力较强；',
            width: 172,
        },{
            text: '对市场宏观调控及数据的敏感性强，有较强的市场与产品分析能力。',
            width: 130,
        }]
    })


h5.addPage("job4_page", {width: 320, height: 504, top: 32})
    .addRadio('r1', { size: 7, x: 216, y: 80, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r2', { size: 8, x: 170, y: 170, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r3', { size: 14, x: 250, y: 120, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r4', { size: 25, x: 220, y: 102, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r5', { size: 8, x: 9.5, y: 223, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "1s" } })
    .addRadio('r6', { size: 254, x: -68, y: -36, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addRadio('r7', { size: 254, x: 170, y: 360, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })

    .addElement('bg', { width: 385.5, height: 578.5, x: -32.5, y: -28, zIndex: 0, bg: 'images/bg.png', animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addElement('logo', { width: 195.5, height: 291.5, x: -25, y: -76, zIndex: 2, bg: 'images/logo.png', animated: { name: "rotateIn", duration: "1s", delay: "2s" } })
    .addElement('t10', { width: 86, height: 85.5, x: 217, y: 400, zIndex: 3, bg: 'images/t10.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('t10_s', { width: 86, height: 85.5, x: 217, y: 401, zIndex: 2, bg: 'images/t10_s.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('sq', { width: 96, height: 96, x: 250, y: 416, zIndex: 2, backgroundColor: "#000", animated: { name: "rotateInDownRight", duration: "1s", delay: "2s" } })
    .addElement('portrait4', { width: 95, height: 144, x: 200, y: 36, zIndex: 2, bg: "images/portrait4.png", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addElement('arrow1', { width: 36.5, height: 36.5, x: 264, y: 238, zIndex: 2, bg: "images/arrow1.png", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })

    .addText('job', { width: 220, height: 39, x: 100, y: 196, zIndex: 2, text: "【销售经理】", textAlign: "right", fontFamily: "MicrosoftYaHei", fontSize: "30", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addText('name', { width: 134, height: 36, x: 123, y: 239, zIndex: 2, text: "The manager", lineHeight: 1.8, textAlign: "right", fontFamily: "MicrosoftYaHei", fontSize: "20", animated: { name: "fadeIn", duration: "1s", delay: "3s" } })
    .addList('job', {
        type: 'ol',
        width: 256,
        lineHeight: 1,
        textAlign: "Left",
        x: 12,
        y: 286,
        color: "#fff",
        fontSize: 14,
        items: [{
            text: '市场营销、经济学、房地产经营管理等相关专业专科以上学历；',
        },{
            text: '男：173CM以上，女：160CM以上；',
        },{
            text: '3年以上房地产销售管理经验； ',
            width: 210,
        },{
            text: '对房地产行业和客户拓展有深刻理解和控制能力；',
            width: 172,
        },{
            text: '具有较强的领导、规划、组织与协调能力，良好的商务谈判能力。；',
            width: 150,
        }]
    })

h5.addPage("form_page", {width: 320, height: 504, top: 32})
    .addRadio('r1', { size: 7, x: 216, y: 80, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r2', { size: 8, x: 170, y: 170, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r3', { size: 14, x: 250, y: 120, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r4', { size: 25, x: 220, y: 102, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r5', { size: 8, x: 9.5, y: 223, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "1s" } })
    .addRadio('r6', { size: 254, x: -68, y: -36, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addRadio('r7', { size: 254, x: 170, y: 360, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })

    .addElement('bg', { width: 385.5, height: 578.5, x: -32.5, y: -28, zIndex: 0, bg: 'images/bg.png', animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addElement('logo', { width: 195.5, height: 291.5, x: -25, y: -76, zIndex: 2, bg: 'images/logo.png', animated: { name: "rotateIn", duration: "1s", delay: "2s" } })
    .addElement('t10', { width: 86, height: 85.5, x: 217, y: 400, zIndex: 3, bg: 'images/t10.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('t10_s', { width: 86, height: 85.5, x: 217, y: 401, zIndex: 2, bg: 'images/t10_s.png', animated: { name: "rotateInDownLeft", duration: "1s", delay: "2s" } })
    .addElement('sq', { width: 96, height: 96, x: 250, y: 416, zIndex: 2, backgroundColor: "#000", animated: { name: "rotateInDownRight", duration: "1s", delay: "2s" } })
    .addForm('job', {
        type: 'recruit',
        items: [{
            name: 'name',
            type: 'text',
            placeholder: '您的姓名',
            value: ''
        }, {
            name: 'phone',
            type: 'text',
            placeholder: '联系电话',
            value: ''
        }, {
            name: 'email',
            type: 'text',
            placeholder: '常用邮箱',
            value: ''
        }],
        jobs: {
            title: '应聘职位',
            items: [{
                name: 'yxfzjl',
                value: '营销副总经理',
                checked: false
            },{
                name: 'xsjl',
                value: '销售经理',
                checked: false
            },{
                name: 'chjl',
                value: '策划经理',
                checked: false
            },{
                name: 'scbjl',
                value: '市场部总监',
                checked: false
            }]
        }
    })


h5.addPage("concat_page", {width: 320, height: 504, top: 32})
    .addRadio('r1', { size: 7, x: 216, y: 80, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r2', { size: 8, x: 170, y: 170, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "0s" } })
    .addRadio('r3', { size: 14, x: 250, y: 120, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r4', { size: 25, x: 220, y: 102, zIndex: 1, animated: { name: "slideLeft", duration: "1s", delay: "0s" } })
    .addRadio('r5', { size: 8, x: 9.5, y: 223, zIndex: 1, animated: { name: "slideRight", duration: "1s", delay: "1s" } })
    .addRadio('r7', { size: 254, x: 102, y: 278, zIndex: 1, animated: { name: "fadeIn", duration: "1s", delay: "1s" } })

    .addElement('bg', { width: 385.5, height: 578.5, x: -32.5, y: -28, zIndex: 0, bg: 'images/bg.png', animated: { name: "fadeIn", duration: "1s", delay: "1s" } })
    .addElement('logo', { width: 192, height: 292, x: 150, y: 238, zIndex: 2, bg: 'images/logo.png', animated: { name: "rotateIn", duration: "1s", delay: "2s" } })
    .addElement('p1', { width: 47, height: 72.5, x: 183, y: 64, zIndex:2, bg: 'images/p1.png', animated: { name: "stretchRight", duration: "1s", delay: "1s" } })
    .addElement('p2', { width: 49, height: 174, x: 181.5, y: 4, zIndex:2, bg: 'images/p2.png', animated: { name: "zoomIn", duration: "1s", delay: "1s" } })
    .addElement('t11', { width: 51, height: 33.5, x: 182, y: 91, zIndex:2, bg: 'images/t11.png', animated: { name: "rotateIn", duration: "1s", delay: "1s" } })
    .addElement('t12', { width: 160, height: 25, x: 20, y: 14, zIndex:2, bg: 'images/t12.png', animated: { name: "fadeInLeft", duration: "1s", delay: "1s" } })
    .addElement('t13', { width: 100, height: 25, x: 75, y: 45, zIndex:2, bg: 'images/t13.png', animated: { name: "fadeInRight", duration: "1s", delay: "1s" } })
    .addElement('location', { width: 18, height: 18, x: 14, y: 107, zIndex:2, bg: 'images/location.png', animated: { name: "slideLeft", duration: "1s", delay: "1s" } })
    .addElement('people', { width: 180, height: 253, x: 140, y: 108, zIndex:2, bg: 'images/people.png', animated: { name: "fadeIn", duration: "1s", delay: "2s" } })

    .addText('text1', { width: 162, height: 12, x: 14, y: 88, zIndex:2, text: 'XXXXX有限责任公司', css: {textAlign: "right", }, animated: { name: "fadeInLeft", duration: "1s", delay: "1s" } })
    .addText('text2', { width: 140, height: 12, x: 35, y: 110, zIndex:2, text: '地址展示地址展示地址展示', css: {textAlign: "right"}, animated: { name: "fadeInRight", duration: "1s", delay: "1s" } })


    .addMap('concat', { width: 124, height: 254, x: 14, y: 150, zIndex:2, bg: 'images/map1.png', link: ''})
    .addPhone('concat', { width: 120, height: 40, x: 14, y: 420, zIndex:2, tel: '02988888888', text: "一键拨号" })

h5.loader()