// $("#botao-esquerdo").click(function (){
//     $(".final").slideToggle(500);
// });
//indicação da home ao passar o mouse no nome do site
$('.tooltip').tooltipster({
    animation: 'swing',
    delay: 500,
    touchDevices: false,
    trigger: 'hover',
    theme: 'my-custom-theme',
    
 });

//tags
$("#input-tags").selectize({
    plugins: ["remove_button"],
    delimiter: ",",
    persist: false,
    create: function (input) {
      return {
        value: input,
        text: input,
      };
    },
});

//cards favoritos

$(".botao-adicionar").click(function(){
    move_card(this)
});

function move_card(e){
    let card = $(e).parent().parent()
    let card_topo = $('.quadro-vazio1');
    card.fadeOut(500);
    $(card).animate({ 
       down: card_topo.offset().down,         
       right: card_topo.offset().right,
    },500, function() {
        $(this).remove()
        add_novo_card()
    });
}    

function add_novo_card(){
    let card = $('.card-top').clone()
    $(card).removeClass('card-top')
    $('.main-top').append(card);
    
}



















//pagina de login
 $("#botao-login").click(function (){
    $(".login-page").removeClass('hide');
    $(".login-page").slideToggle(500);
});


$("#botao-criar").click(function (){
    $(".criar-conta").slideToggle(500);
    $(".login-page").addClass('hide');
    $(".login-page").slideToggle(500);
});


$("#sair-criar").click(function (){
    $(".criar-conta").slideToggle(500); 
});
