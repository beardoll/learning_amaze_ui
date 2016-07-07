/**
 * Created by cfinsbear on 2016/7/7.
 */
$('#datetimepicker').datetimepicker({
  format: 'yyyy-mm-dd hh:ii'
});


$(function() {
  var $dpInput = $('.form-datetime').datetimepicker({
    format: 'yyyy-mm-dd hh:ii'
  });

  $('#demo-settime').on('click', function() {
    $dpInput.datetimepicker('update', new Date());
  });
});

(function($){
  // 也可以在页面中引入 amazeui.datetimepicker.zh-CN.js
  $.fn.datetimepicker.dates['zh-CN'] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    today: "今日",
    suffix: [],
    meridiem: ["上午", "下午"]
  };

  $('.form-datetime-lang').datetimepicker({
    language:  'zh-CN',
    format: 'yyyy-mm-dd hh:ii'
  });
}(jQuery));
