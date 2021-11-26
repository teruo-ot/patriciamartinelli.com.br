
// Função que permite o Include de html no html
// Solução apresentada em https://stackoverflow.com/questions/8988855/include-another-html-file-in-a-html-file

$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'views/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
})
