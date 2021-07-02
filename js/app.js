$(function(){
    $(".botoes").click(insereTarefa);
});

function insereTarefa(){
    var corpoTabela = $(".tabeladados").find("tbody");
    var titulo = $(".campotitulo").val();
    var obs = $(".campoobs").val();

    var linha = novaLinha(titulo, obs);
    linha.find(".botaoremover").click(removeLinha);

    corpoTabela.append(linha);

}

function novaLinha(titulo,obs){
    var linha = $("<tr>");
    var colunaTitulo =$("<td>").text(titulo);
    var colunaObs =$("<td>").text(obs);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botaoremover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaTitulo);
    linha.append(colunaObs);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(Event){
    Event.preventDefault();
    $(this).parent().parent().remove();
}

