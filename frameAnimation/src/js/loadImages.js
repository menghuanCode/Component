/**
 * 加载图片（预加载）
 * @param imgList
 * @param callback
 * @param timeout
 */
function loadImages(imgList, callback, timeout) {
    let count = 0
    let success = true
    let isTimeout = false
    let timeoutId = 0

    for (let key in imgList) {

        if (!imgList.hasOwnProperty(key)) {
            continue
        }

        let item = imgList[key]

        if (typeof item === 'string') {
            item = Object.create(null, {
                src: {value: item}
            })
        }

        if (!item || !item.src) {
            continue
        }

        count++
        item.img = new Image()

        // 加载
        doLoad(item)
    }

    // 没有图片或超时
    if (!count || isTimeout) {
        callback && callback(success)
    }

    //  设置了延时时间
    if (timeout) {
        timeoutId = setTimeout(callback, timeout)
    }

    function doLoad(item) {
        let img = item.img

        img.onload = function () {
            success = success && true
            item.status = 'loaded'
            done()
        }

        img.onerror = function () {
            success = false
            item.status = 'error'
            done()
        }

        img.src = item.src

        // 加载成功或失败都会执行的函数
        function done() {
            if (!--count || isTimeout) {
                clearTimeout(timeoutId)
                callback && callback(success)
            }
        }
    }
}

export default loadImages