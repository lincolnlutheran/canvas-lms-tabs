var html = '<div class="enhanceable_content tabs">\
<ul>\
  <li><a href="#fragment-1">PUT TITLE FOR TAB HERE</a></li>\
  <li><a href="#fragment-2">PUT TITLE FOR TAB HERE</a></li>\
  <li><a href="#fragment-3">PUT TITLE FOR TAB HERE</a></li>\
  <li><a href="#fragment-4">PUT TITLE FOR TAB HERE</a></li>\
  <li><a href="#fragment-5">PUT TITLE FOR TAB HERE</a></li>\
</ul>\
<div id="fragment-1">\
  PUT THE CONTENT FOR THE FIRST TAB HERE\
</div>\
<div id="fragment-2">\
  PUT THE CONTENT FOR THE SECOND TAB HERE.\
</div>\
<div id="fragment-3">\
  PUT THE CONTENT FOR THE THIRD TAB HERE\
</div>\
<div id="fragment-4">\
  PUT THE CONTENT FOR THE THIRD TAB HERE\
</div>\
<div id="fragment-5">\
  PUT THE CONTENT FOR THE THIRD TAB HERE\
</div>\
</div>';

var generateHTML = function() {
    var output = '';

    var content = [];
    // Loop through the inputs and copy the values from the two inputs
    // into an array
    for (var i = 1; i < 6; i++) {
        var title = document.getElementById('tab'+ i +'-title');
        var html = document.getElementById('tab'+ i +'-html');
        if (title.value && html.value) {
            content.push({ title: title.value, html: html.value });
        }
    }

    output += '<div class="enhanceable_content tabs">\n';
    output += '<ul>\n';
    for (i = 0; i < content.length; i++) {
        output += '<li><a href="#fragment-' + (i + 1) + '" tabindex='+ (i + 1) + ' >';
        output += content[i].title;
        output += '</a></li>\n';
    }
    output += '</ul>\n';

    for (i = 0; i < content.length; i++) {
        output += '<div id="fragment-' + (i + 1) + '">';
        output += content[i].html;
        output += '</div>\n';
    }
    output += '</div>';

    var resultEl = document.getElementById('result');
    resultEl.textContent = output;
}

document.addEventListener('DOMContentLoaded', function() {
    var tabForm = document.getElementById('tab-form');
    tabForm.addEventListener('submit', function(e) {
        e.preventDefault();
        generateHTML();
    });
});
