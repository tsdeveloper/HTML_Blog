$('.names-table').click(function (event) {

    event.preventDefault()
    console.log('click..')
    $( this ).attr('href', '#names');
    $('.names-table' ).hide();

})