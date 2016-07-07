/**
 * Created by cfinsbear on 2016/7/6.
 */
jQuery.extend(jQuery.fn.dataTableExt.oSort, {
  "chinese-string-asc": function(s1, s2) {
    return s1.localeCompare(s2);
  },

  "chinese-string-desc": function(s1, s2) {
    return s2.localeCompare(s1);
  }
});

/*$(function() {
  $('#my-table').DataTable({
    columnDefs: [
      {type: 'chinese-string', targets: '_all'}
    ]
  });
});*/

$(function() {
  $('#example').DataTable();
});

/*$('#example-r').DataTable({
  responsive: true,
  dom: 'ti'
});*/

