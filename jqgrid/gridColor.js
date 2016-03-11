var gridColor = {
    backgroundColor: '#ff0000',
    left: '0px',
    right: '0px',
    bottom: '0px',
    top: '0px',
    height: '40px',
    position: 'absolute',
    object: '',

    highlight: function () {
        $('.grid-highlighter').remove();
        gridColor.object.first().append('<span class="grid-highlighter" style="background-color:"' + gridColor.backgroundColor + '"; left:"' + gridColor.left + '"; bottom:"' + gridColor.bottom + '";height:"' + gridColor.height + '"; position: "' + gridColor.position + '"; top: "' + gridColor.top + '";">&nbsp;</span>');
        //:eq( 2 )
    }
}

$('tr').click(function () {
    gridColor.object = $(this);
    gridColor.highlight();
});