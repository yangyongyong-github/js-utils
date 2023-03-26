module.exports = {
    // timeHepler: (ms) => {
    //     if (!Number(ms) || ms < 1000) {
    //         return 'time Param Error'
    //     }
    //     const t = moment.duration(ms);
    //     const days = t.days();
    //     const hour = t.hours();
    //     const mins = t.minutes();
    //     const secs = t.seconds();

    //     if (days > 0) {
    //         return days + '天' + hour + '小时' + mins + '分钟';
    //     } else if (hour > 0) {
    //         return hour + '小时' + mins + '分钟';
    //     } else {
    //         return secs == 0 ? (mins + '分钟') : (mins + '分钟' + secs + '秒');
    //     }
    // },
    // 2. 计算两个日期之间的间隔
    // 入参 Date(), ms
    dayDiff: (a, b) => {
        a = new Date(a), b = new Date(b)
        return Math.ceil(Math.abs(a.getTime() - b.getTime()) / 86400000) || 'dayDiff : Param error'; // 86400000 : 1 day
    }
}