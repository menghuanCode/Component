'use strict';

(function () {
    const datepicker = {}

    /**
     * 获取月份数据
     * @param  {[type]} year  [年]
     * @param  {[type]} month [月]
     * @return {[type]}       [这个月的数据]
     */
    datepicker.getMonthData = function (year, month) {
        let ret = []
        /**
         * 注意：
         * 传过来的值是根据现实月份传入，会比 getMonth()得到的值大 1，需要注意
         * getMonth() 获取到的值是 0 - 11, 0 表示 12 月 ，需要做调整
         * getDay() 获取到的值是 0 - 6, 0 表示 星期天，需要做调整
         * 日期会自动进（退）位
         * 
         * 逻辑：
         * 1. 根据传入的year，month获取月份数据，没有就获取当前月份数据
         * 2. 月前天（有时候本月前面会显示前一个月的最后天数日期）。
         * 3. 月后天（多余的格子显示下个月的日期）
         */
        
        // 1. 如果没有传入 year, month
        if (year === undefined || month === undefined) {
            let today = new Date()
            year = today.getFullYear()
            month = today.getMonth() + 1
        }

        //  第一天
        let firstDay = new Date(year, month - 1, 1)
        // 第一天周几,用来计算月前天
        let firstDayWeekDay = firstDay.getDay()

        if (firstDayWeekDay === 0) firstDayWeekDay = 7


        year = firstDay.getFullYear()
        month = firstDay.getMonth() + 1
        
        // 月前天总数
        let preMonthCount = firstDayWeekDay - 1

        // 最后一天
        let lastDay = new Date(year, month, 0)
        // 最后一天日期，用来计算月后天
        let lastDayDate = lastDay.getDate()
        
        // 上个月最后一天
        let lastDaylastMonth = new Date(year, month - 1, 0)
        // 上个月最后一天日期
        let lastDayDateLastMonth = lastDaylastMonth.getDate()

        for (let i = 0; i < 7 * 6; i++) {
            // 年份，有些年份是不同的
            // 月份，有些月份是不同的
            let thisMonth = month
            let thisYear = year
            // 在后台的日期
            let date = i + 1 - preMonthCount
            // 最后在前台显示的日期
            let showDate

           if (date <= 0) {
               // todo 上个月渲染
               showDate = lastDayDateLastMonth + date
               thisMonth = month - 1
           } else if (date > lastDayDate + 1) {
               // todo 下个月渲染    
               showDate = date - (lastDayDate + 1)
               thisMonth = month + 1
           } else {
               // todo 这个月渲染    
               showDate = date
           }

           // 上一年12月份
           if (thisMonth === 0) {
               thisMonth = 12
               thisYear -= 1
           }
           // 下一年一月份
           if (thisMonth === 13) {
               thisMonth = 1
               thisYear += 1
           }


           ret.push({
               time: thisYear + '-' + thisMonth + '-' + showDate,
               month: thisMonth,
               date,
               showDate
           })
        }


        return {
            year,
            month,
            days: ret
        }
    }


    window.datepicker = datepicker
})()