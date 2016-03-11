var jqgridResize = {
    resizejqGrid: function () {
        $(".ui-jqgrid").each(function () {
            var grid = $(this);
            var nw = grid.parent().width();

            if (!isNaN(nw)) {
                var gridId = "#" + grid.attr("id").split('_')[1];
                jQuery(gridId).jqGrid('setGridWidth', nw);
            }
        });


    }
};

$(function () {
    $(".ui-jqgrid").each(function () {
        var grid = $(this);
        var nw = grid.parent().width();
        if (!isNaN(nw)) {
            var gridId = "#" + grid.attr("id").split('_')[1];
            jQuery(gridId).jqGrid('setGridWidth', nw);
        }
    });
});
  
 

$(window).resize(function () {
    try {
        $(".ui-jqgrid").each(function () {
            var grid = $(this);
            var nw = grid.parent().width();
            if (!isNaN(nw)) {
                var gridId = "#" + grid.attr("id").split('_')[1];
                jQuery(gridId).jqGrid('setGridWidth', nw);
            }
        });
    } catch (e) {
    }
});
