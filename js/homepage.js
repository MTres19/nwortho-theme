// Moves WordPress content into Skeleton grids separated by horizontal rules (hr)

$(document).ready(function() {
    var $separators = $('div.text-wrapper-static-home > hr');
    
    var separator_predecessors = [];
    
    $separators.each(function(index, element) {
        separator_predecessors[index] = $(this).prevUntil('hr');
    });
    
    $separators.before('<div class="container"></div>');
    
    var $containers = $('div.text-wrapper-static-home > .container');
    
    $.each(separator_predecessors, function(index, $elements) {
        var numRows = $elements.length / 2;
        $containers.eq(index).append('<div class="row"></div>'.repeat(numRows));
        
        var $rows = $containers.eq(index).children('.row');
        
        $elements.each(function(index, element) {
            var $row = $rows.eq(Math.floor(index / 2));
            $row.append(element);
        });
    });
});
