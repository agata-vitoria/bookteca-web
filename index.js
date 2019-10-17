//window.nload serve para só executar o código quado a tela carregar
//$(function(){}) serve para a mesma coisa
//o fetch é uma promessa. Ele cria uma outra execução
//.then significa "então". Ele tbm serve para voltar para a 1° execução

$(function(){
  function carregarLivros() {
    fetch("http://localhost:8080/bookteca-api/src/lerlivros.php").then(function(resposta){
      resposta.json().then(function(json){
        let listagem = $("#listagem")

        for (let i = 0; i < json.length; i++){
          let cardAtual = criarCard(json[i].titulo, json[i].subtitulo, json[i].descricao, "https://picsum.photos/200/300")
          listagem.append(cardAtual)
        }

        //passando os parametros para a função
        //let coluna4 = criarCard(json[0].titulo, json[0].subtitulo, json[0].descricao, "https://img.elo7.com.br/product/zoom/24A98BE/quadro-poster-harry-potter-a-pedra-filosofal-harry-potter-e-a-pedra-filosofal.jpg")
      })
    })
  }


  carregarLivros()
  //sempre que criar uma função, é necessário chama-la

  function criarCard(titulo, subtitulo, descricao, imagem){
    let coluna4 = $("<div></div>")
    coluna4.addClass("col-4")
    let card = $("<div></div>")
    card.addClass("custom-card")
    coluna4.append(card)
    let cardHeader = $("<header></header>")
    cardHeader.addClass("custom-card-header")
    card.append(cardHeader)
    let cardHeaderTitleContainer = $("<div></div>")
    cardHeaderTitleContainer.addClass("custom-card-header-container")
    let cardHeaderTitle = $("<strong></strong>")

    cardHeaderTitle.append(titulo)
    let cardHeaderSubtitle = $("<h6></h6>")
    cardHeaderSubtitle.addClass("custom-card-header-subtitle")
    cardHeaderSubtitle.append(subtitulo)
    cardHeaderTitleContainer.append(cardHeaderTitle)
    cardHeaderTitleContainer.append(cardHeaderSubtitle)
    cardHeader.append(cardHeaderTitleContainer)
    let cardHeaderIcon = $("<span></span>")
    cardHeaderIcon.addClass("custom-card-header-icon");
    cardHeader.prepend(cardHeaderIcon)
    let cardImg = $("<div></div>")
    cardImg.addClass("custom-card-img")
    cardImg.css("background-image", 'url("' + imagem + '")')
    //https://img.elo7.com.br/product/zoom/24A98BE/quadro-poster-harry-potter-a-pedra-filosofal-harry-potter-e-a-pedra-filosofal.jpg")')
    card.append(cardImg)

    return coluna4
  }
});
