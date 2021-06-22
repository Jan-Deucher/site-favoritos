var adicionaLista = $(".botao-favorito").click(function(){
    insereNomeLista();
    $('#icon_prefix').val("");

   
});

function insereNomeLista(){
    var corpoTabela = $(".tabela-favorito").find("tbody");
    console.log(corpoTabela);
    var lista =  $('#icon_prefix').val();
    var linha = novaLinha(lista);

    linha.find(".botao-remover").click(removeLinha);
    linha.find(".botao-add").click(addConteudo);
    
    corpoTabela.prepend(linha);

}

function novaLinha(lista){
    var linha = $("<tr>");
    var colunaNome = $("<td>").text(lista);
    var colunaRemover = $("<td>");
    var adicionaConteudo = $("<td>");
    
    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");
    
    var linkAdiciona = $("<a>").addClass("botao-add").attr("href","#");
    var iconeAdiciona = $("<i>").addClass("small").addClass("material-icons").text("add");
    
    linkAdiciona.append(iconeAdiciona);
    link.append(icone);

    adicionaConteudo.append(linkAdiciona);
    colunaRemover.append(link);

    linha.append(colunaNome);
    linha.append(adicionaConteudo);
    linha.append(colunaRemover);
  
    console.log(adicionaConteudo);
    return linha;
    
}

function removeLinha(event){
        event.preventDefault();
        var linha = $(this).parent().parent();
        linha.fadeOut(1000);
        setTimeout(function () {
         linha.remove();
        }, 1000)      
}

 
function addConteudo (event){
    event.preventDefault();
    console.log("add");  
     $(".collection").slideToggle(500);
 
}



