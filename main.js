$('form').on('submit', function(e) {
    e.preventDefault();

    const newTarefa = $('#tarefa').val();
    const newItem = $(`<li></li>`)
    $(`<li>${newTarefa}</li>`).appendTo(newItem);
    $(newItem).appendTo(`ul`);
    $('li').click(()=>{
        $('li').addClass('risk')
    })

    })
