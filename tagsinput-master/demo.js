/**
 * Created by cfinsbear on 2016/7/6.
 */
/*$(function() {
  $('#my-tags').tagsinput();
});

$('#tags-1').val()
// "Amsterdam,Washington,Sydney,Beijing,Cairo"

$('#tags-2').tagsinput('items')
// ["Amsterdam", "Washington", "Sydney", "Beijing", "Cairo"]*/


var citynames = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: {
    url: 'docs/js/citynames.json',
    filter: function(list) {
      return $.map(list, function(cityname) {
        return { name: cityname }; });
    }
  }
});
citynames.initialize();

$(function() {
  $('#input-sg').tagsinput({
    typeaheadjs: {
      name: 'citynames',
      displayKey: 'name',
      valueKey: 'name',
      source: citynames.ttAdapter()
    }
  });
});

/*var cities = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'assets/cities.json'
});
cities.initialize();

var $elt = $('#obj-as-tags');
$elt.tagsinput({
  itemValue: 'value',
  itemText: 'text',
  typeaheadjs: {
    name: 'cities',
    displayKey: 'text',
    source: cities.ttAdapter()
  }
});

$elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
$elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
$elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
$elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
$elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });

var ab = $('#obj-as-tags').val();
// "1,4,7,10,13"

console.log(ab);

$('#obj-as-tags').tagsinput('items');*/
// [{"value":1,"text":"Amsterdam","continent":"Europe"},{"value":4,"text":"Washington","continent":"America"},{"value":7,"text":"Sydney","continent":"Australia"},{"value":10,"text":"Beijing","continent":"Asia"},{"value":13,"text":"Cairo","continent":"Africa"}]

/*$(function() {
  $('#tag-color').tagsinput();
});

var cities = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'js/cities.json'
});
cities.initialize();

var $tc = $('#tag-color');
$tc.tagsinput({
  tagClass: function(item) {
    switch (item.continent) {
      case 'Europe'   : return 'am-badge am-badge-primary';
      case 'America'  : return 'am-badge am-badge-danger';
      case 'Australia': return 'am-badge am-badge-success';
      case 'Africa'   : return 'am-badge';
      case 'Asia'     : return 'am-badge am-badge-warning';
    }
  },
  itemValue: 'value',
  itemText: 'text',
  typeaheadjs: {
    name: 'cities',
    displayKey: 'text',
    source: cities.ttAdapter()
  }
});
$tc.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
$tc.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
$tc.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
$tc.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
$tc.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });*/


