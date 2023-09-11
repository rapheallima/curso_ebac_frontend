$(document).ready(function () {
    $('form button').click(function () {
        $('ul').slideDown()
    })

    $('#limpar').click(function () {
        $('ul').slideUp()
        $('ul').empty()
    })

    $('form').on('submit', function (e) {
        e.preventDefault()
        const inputTarefa = $('#nova-tarefa').val()
        const tarefa = $(`<li>${inputTarefa}</li>`)

        $(tarefa).appendTo('ul')
        $('#nova-tarefa').val('')
    })

    $('#lista').on('click', 'li', function () {
        $(this).toggleClass('lista')
    })
})

