$(document).ready(function() {
    var $separators = $('div.text-wrapper-static-home > hr');
    
    var separator_predecessors = [];
    
    $separators.each(function(index, element) {
        separator_predecessors[index] = $(this).prevUntil('hr');
    });
    
    $separators.before('<div class="container"></div>');
    
    var $containers = $('div.text-wrapper-static-home > .container');
    $containers.append('<div class="row"></div>');
    
    $.each(separator_predecessors, function(index, elements) {
        console.log(elements);
        $containers.eq(index).children('.row').append(elements);
        //elements.remove();
    });
});
