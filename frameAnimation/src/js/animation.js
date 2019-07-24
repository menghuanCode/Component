'use strict'

import loadImages from './loadImages'
import Timeline from './timeline'

const STATE_INITIAL = 0
const STATE_START = 1
const STATE_STOP = 2

const TASK_SYNC = 0
const TASK_ASYNC = 1

let next = function (callback) {
    callback && callback()
}

function Animation() {
    this.taskQueue = []
    this.index = 0
    this.state = STATE_INITIAL
    this.timeline = new Timeline()
}

/**
 *  图片加载（预加载）
 * @param imgList
 */
Animation.prototype.loadImages = function (imgList) {
    let taskFn = function (next) {
        return loadImages(imgList, next)
    }

    let type = TASK_SYNC

    return this.add(taskFn, type)
}

Animation.prototype.changePosition = function (ele, positions, imageUrl) {
    let that = this
    let len = positions.length
    let taskFn, type
    if (len) {
        taskFn = function (next, time) {
            if (imageUrl) {
                ele.style.backgroundImage = `url(${imageUrl})`
            }

            let index = Math.min(time / that.interval | 0, len - 1)
            let position = positions[index].split(' ')
            ele.style.backgroundPosition = `${position[0]}px ${position[1]}px`

            if (index === len - 1) {
                next()
            }
        }
        type = TASK_ASYNC
    } else {
        taskFn = next
        type =  TASK_SYNC
    }

    return this.add(taskFn, type)
}


Animation.prototype.destroy = function () {
    if (this.state !== STATE_INITIAL) {
        this.state = STATE_INITIAL
        this.taskQueue = null
        this.timeline.stop()
        this.timeline = null
        return this
    }

    return this
}

/**
 * 动画暂停
 * @returns {Animation}
 */
Animation.prototype.pause = function () {
    if (this.state !== STATE_STOP) {
        this.state = STATE_STOP
        this.timeline.stop()
        return this
    }

    return this
}

/**
 * 动画重新播放
 */
Animation.prototype.restart = function () {
    if (this.state !== STATE_START) {
        this.state = STATE_START
        this.timeline.restart()
        return this
    }

    return this
}

/**
 * 重复当前动画次数
 * @param number 次数
 */
Animation.prototype.repeat = function (number) {
    let that = this
    let taskFn = function (next) {
        if (typeof number === "undefined") {
            that.index--
            that._runTask()
            return
        }

        if (number--) {
            that.index--
            that._runTask()
        } else {
            next()
        }
    }

    let type = TASK_SYNC
    return this.add(taskFn, type)
}

/**
 * 下一个动画前地等待时间
 * @param time
 */
Animation.prototype.wait = function (time) {
    if (this.state !== STATE_START) {
        return this
    }

    this.taskQueue[this.index].wait = time
    return this
}

/**
 * 添加任务到队列
 * @param taskFn
 * @param type
 * @returns {Animation}
 * @private
 */
Animation.prototype.add = function (taskFn, type) {
    this.taskQueue.push({taskFn, type})
    return this
}

/**
 * 动画函数开始
 * @param interval
 * @returns {Animation}
 */
Animation.prototype.start = function (interval) {
    if (this.state === STATE_START) {
        return this
    }

    this.state = STATE_START
    this.interval = interval
    this._runTask()

    return this
}


/**
 * 执行任务
 * @private
 */
Animation.prototype._runTask = function () {
    if (!this.taskQueue || this.state !== STATE_START) {
        return
    }

    // 执行完毕
    if (this.index === this.taskQueue.length) {
        this.destroy()
        return
    }

    let task = this.taskQueue[this.index]

    // 判断任务类型
    if (task.type === TASK_SYNC) {
        this._syncTask(task)
    } else {
        this._asyncTask(task)
    }


    return this
}

/**
 * 同步执行任务
 * @param task
 * @private
 */
Animation.prototype._syncTask = function (task) {
    let that = this
    let taskFn = task.taskFn

    let next = function () {
        that._next(task)
        return that
    }

    return taskFn(next)
}

Animation.prototype._asyncTask = function (task) {
    let that = this

    let enterFrame = function (time) {
        let taskFn = task.taskFn
        let next = function () {
            that.timeline.stop()
            that._next(task)
        }

        taskFn(next, time)
    }

    this.timeline.onEnterFrame = enterFrame
    this.timeline.start(this.interval)
}

Animation.prototype._next = function (task) {
    let that = this
    this.index++
    task.wait ? setTimeout(function () {
        that._runTask()
    }, task.wait) : this._runTask()
}

function createAnimation() {
    return new Animation()
}

window.animation = createAnimation

createAnimation._version = '1.0.0'

export default createAnimation