'use strict';

(function () {
    const datepicker = window.datepicker

    let monthData
    let year
    let month

    let queue = []
    let index = 0
    let activeIndex = 0

    datepicker.view = function (year, month) {
        monthData = datepicker.getMonthData(year, month)
        let _ = queue[activeIndex] || {}
        let html = `
        <div class="ui-datepicker-header">
            <div data-direction="prev" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</div>
            <div data-direction="next" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</div>
            ${monthData.year}-${monthData.month}
        </div>
        <div class="ui-datepicker-body">
            <table>
                <thead>
                    <tr>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                        <th>日</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        ${monthData.days.map((item, i) => `${i % 7 === 0 ? '<tr>' : ''}<td date="${item.time}" class="${item.month !== monthData.month ? 'other-month' : ''} ${item.time === _.activeTime ? 'active' : ''}">${item.showDate}</td>${i % 7 === 6 ? '</tr>' : ''}`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>
        `
        return html
    }

    datepicker.render = function (direction) {
        if (monthData) {
            year = monthData.year
            month = monthData.month
        } else {
            let today = new Date()
            year = today.getFullYear()
            month = today.getMonth() + 1
        }

        if (direction === 'prev') month--
        if (direction === 'next') month++

        let _ = queue[activeIndex]

        let $wrapper = _ ? _.wrapper :  document.querySelector('.ui-datepicker-wrapper' + activeIndex)

        if (!$wrapper) {
            $wrapper = document.createElement('div')
            $wrapper.className = 'ui-datepicker-wrapper ui-datepicker-wrapper' + activeIndex
            document.body.append($wrapper)
        }

        $wrapper.innerHTML = datepicker.view(year, month)

        return $wrapper
    }

    datepicker.init = function (input) {

        queue.push({
            input: document.querySelector(input),
            wrapper: datepicker.render(),
            isOpen: false,
            index: index,
            activeTime: "",
            value: '',
        })

        let _ = queue[activeIndex]
        activeIndex = ++index

        // 当输入框点击的时候
        _.input.addEventListener('click', function (e) {

            activeIndex = _.index

            // 清除之前的
            for(let item of queue) {
                if (item.isOpen) {
                    item.isOpen = false
                    item.wrapper.classList.remove('ui-datepicker-wrapper-show')
                }
            }

            _.isOpen = !_.isOpen

            if (_.isOpen) {
                _.wrapper.classList.add('ui-datepicker-wrapper-show')

                let top = this.offsetTop
                let left = this.offsetLeft
                let height = this.offsetHeight

                _.wrapper.style.top = top + height + 2 + 'px'
                _.wrapper.style.left = left + 'px'

                let inputMonth = _.value.split('-')[1]

                if (inputMonth > month) {
                    datepicker.render('next')
                }

                if (inputMonth < month) {
                    datepicker.render('prev')
                }

            } else {
                _.wrapper.classList.remove('ui-datepicker-wrapper-show')
            }


        }, false)

        _.wrapper.addEventListener('click', function (e) {

            activeIndex = _.index

            let $target = e.target

            if ($target.tagName.toLowerCase() === 'td') {
                _.value = _.activeTime = $target.getAttribute('date')
                _.input.value = format(_.value)
                _.isOpen = false
                _.wrapper.classList.remove('ui-datepicker-wrapper-show')
                datepicker.render()
            }

            // 点击月份切换按钮
            if ($target.classList.contains('ui-datepicker-btn')) {
                let direction = $target.dataset.direction
                datepicker.render(direction)
            }

            function format(value) {
                let date = value.split('-')
                for(let i = 0; i < date.length; i++) {
                    let item = date[i]
                    if (item < 9) {  date[i] = "0" + item }
                }

                return date.join('-')
            }
        }, false)
    }
})()