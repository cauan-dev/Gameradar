
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let inputPesquisa = document.getElementById("input-pesquisa").value;
    inputPesquisa = inputPesquisa.toLowerCase()
    // Inicializa uma string para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de jogos
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      // se titulo includes inputPesquisa, faça isso
      if(titulo.includes(inputPesquisa) || descricao.includes(inputPesquisa) || tags.includes(inputPesquisa)){        
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <img class="imagem-logo" src="${dado.imagem}">
          <h2>${dado.titulo}</h2>
          <p>${dado.descricao}</p>
          <ul>
            <li><b>Plataformas:</b> ${dado.plataformas}</li>
            <li><b>Gênero:</b> ${dado.genero}</li>
            <li><b>Desenvolvedor:</b> <a class="cor" href="${dado.linkDesenvolvedor}" target="_blank">${dado.desenvolvedor}</aclass=href=></li>
          </ul>
          <a class="link-download" href="${dado.linkParaDownload}" target="_blank">download</a>
        </div>
      `;
        }
    }
  
    if (!resultados) (
        resultados = "<p>o jogo que você procura não é um jogo de FPS ou ainda não está disponivel neste site, futuramnete iremos adiciona-lo ;)</p>"
    )

    // Adiciona os resultados à seção HTML (assumindo que o código está aqui)
    section.innerHTML = resultados;
  }

        


