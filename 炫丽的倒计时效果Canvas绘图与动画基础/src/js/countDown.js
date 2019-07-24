import digit from './digit'

window.requestAnimationFrame = (function (callback) {
   return window.requestAnimationFrame || setTimeout(callback, callback.interval || 1000 / 60)
})();

window.cancelAnimationFrame = (function (id) {
    return window.cancelAnimationFrame || clearTimeout(id)
})();


(function () {

    let rate = innerWidth/innerHeight > 1 ? 1 : 0.2

    const countDown = {
        config: {
            selector: "#canvas",
            radius: innerWidth/200,
            width: innerWidth,
            height: innerHeight,
            left:(innerWidth/2 - innerWidth/200 * 66) * rate,
            top: innerHeight/3,
        },
        endTime: +new Date() + 3600 * 1000,
        curTime: +new Date() / 1000,
        balls: [],
        colors: ['#001100', '#112211', '#223322', '#334433', '#445544', '#556655', '#556655']
    }

    countDown.init = function (config) {

        let that = this

        // selector
        if (typeof config === "string") {
            this.endTime = this.getEndTime(config)
        }

        this.curTime = getCurrentShowTimeSeconds(this.endTime)
        this.curTimeString = formatTime(this.curTime)

        Object.assign(this.config , config)

        compatible(this)
        requestAnimationFrame(loop)

        function loop () {
            that._update()
            that._render(that.curTime, that.context)
            requestAnimationFrame(loop)
        }
    }

    countDown._update = function () {
        this.nextTime = getCurrentShowTimeSeconds(this.endTime)
        this.nextTimeString = formatTime(this.nextTime)

        if (this.curTime !== this.nextTime) {
            getBalls(this)

            this.curTime = this.nextTime
            this.curTimeString = this.nextTimeString

            for(let i = 0; i < this.balls.length; i++) {
                console.log(1)
            }
        }

        this._updateBalls()

    }

    /**
     * 更新小球位置
     * @private
     */
    countDown._updateBalls = function () {
        let cnt = 0
        for(let i = 0; i < this.balls.length; i++) {
            let ball = this.balls[i]
            ball.x += ball.vx
            ball.y += ball.vy
            ball.vy += ball.g

            if (ball.y >= this.config.height - this.config.radius) {
                ball.y = this.config.height - this.config.radius
                ball.vy = -ball.vy * 0.75
            }

            // 超出边界
            if (ball.x + this.config.radius > 0 && ball.x - this.config.radius < this.config.width) {
                this.balls[cnt++] = ball
            }

        }
        this.balls.length = cnt
    }


    countDown._render = function (curTime, context) {
        context.clearRect(0, 0, this.config.width, this.config.height)

        this.renderTime(this.curTimeString, context)
        this.renderBall()
    }

    /**
     * 渲染时间
     * @param time 时间
     * @param context
     */
    countDown.renderTime = function (time, context) {

        let curSpace = 0

        for(let i = 0; i < time.length; i++) {
            let x = this.config.left
            let y = this.config.top
            let radius = this.config.radius
            let num = time[i]

            if (num === ":") {
                num = 10
            }

            this.renderDigit(x + curSpace * (radius + 1), y, num, radius, context)
            if (num < 10) { curSpace += 15 }  else { curSpace += 9 }
        }
    }

    /**
     * 渲染小球
     */
    countDown.renderBall = function () {
        let context = countDown.context
        for(let i = 0; i < this.balls.length; i++) {
            let ball = this.balls[i]
            context.beginPath()
            context.arc(ball.x, ball.y, this.config.radius, 0, 2 * Math.PI, true)
            context.fillStyle = ball.color
            context.fill()
            context.closePath()
        }

    }

    /**
     * 渲染数字
     * @param x
     * @param y
     * @param num
     * @param context
     */
    countDown.renderDigit = function(x, y, num, radius, context) {
        context.fillStyle = "#006699"

        for(let i = 0; i < digit[num].length; i++) {
            for(let j = 0; j < digit[num][i].length; j++) {
                if (digit[num][i][j] === 1) {
                    context.beginPath()
                    context.arc(x + j * 2 * (radius + 1), y + i * 2 * (radius + 1), radius, 0, 2 * Math.PI, true)
                    context.fill()
                    context.closePath()
                }
            }
        }
    }

    /**
     * 格式化时间
     * @param time
     * @returns {*} hhh:mm:ss
     */
    function formatTime(time) {

        let hours = Math.floor(time/60/60)
        let minus = Math.floor((time - hours * 60 * 60)/60)
        let seconds = Math.floor(time % 60)

        time = `${beautify(hours)}:${beautify(minus)}:${beautify(seconds)}`

        function beautify(num) {
            return num < 10 ? '0' + num : num
        }


        return time
    }

    /**
     * 设置结束时间
     * @param time
     * @returns {number}
     */
    countDown.getEndTime = function (time) {
        time = time.split(',')
        // 月份调整
        time[1] -= 1
        time = time.map(_ => _ - 0)
        return +new Date(...time)
    }

    /**
     * 获取当前时间显示时间秒数
     */
    function getCurrentShowTimeSeconds(endTime) {
        let curTime = +new Date()
        let ret = endTime - curTime
        ret = Math.round(ret/1000)
        return ret >= 0 ? ret : 0
    }

    /**
     * 获取当前时间显示小球
     */
    function getBalls(countDown) {

        let curSpace = 0

        let padStr = '0'
        let curTimeString = countDown.curTimeString.padStart(9, padStr)
        let nextTimeString = countDown.nextTimeString.padStart(9, padStr)


        for(let i = 0; i < curTimeString.length; i++) {
            // 如果有不相等
            if (curTimeString[i] !== nextTimeString[i]) {
                let radius = countDown.config.radius
                let x = countDown.config.left + curSpace * (radius + 1)
                let y = countDown.config.top
                let num = nextTimeString[i]
                for(let i = 0; i < digit[num].length; i++) {
                    for(let j = 0; j < digit[num][i].length; j++) {
                        if (digit[num][i][j] === 1) {
                            let ball = {
                                x: x + j * 2 * (radius + 1),
                                y: y + i * 2 * (radius + 1),
                                g: 0.5 + Math.random(),
                                vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                                vy: -5,
                                color: countDown.colors[(Math.random() * countDown.colors.length)|0]
                            }

                            countDown.balls.push(ball)
                        }
                    }
                }
            }

            curSpace += (curTimeString[i] !== ":" ? 15 : 9)
        }

    }

    /**
     * 兼容
     * @param countDown this
     */
    function compatible(countDown) {
        let config = countDown.config
        let canvas = document.querySelector(config.selector)

        if (!canvas) {
            canvas = document.createElement("canvas")
            document.body.appendChild(canvas)
        }

        countDown.canvas = canvas
        canvas.width = config.width
        canvas.height = config.height

        if (!canvas.getContext('2d')) {
            alert("当前浏览器不支持canvas，请换浏览器再试")
            return
        }

        countDown.context = canvas.getContext("2d")
    }


    window.countDown = countDown
})()

