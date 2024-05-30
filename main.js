$(document).ready(function () {
    // call back simplificado
    $('header button').click(function () {

        $('form').slideDown();
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-nova-imagem').val();
        const novoItem = $('<li style ="Display: none"></li>');
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem em tamanho real">
            Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-nova-imagem').val('');
    })

})