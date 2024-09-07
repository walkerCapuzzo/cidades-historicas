function pesquisar() {
    console.log(dados);

    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = "";
    let nomeMinusculo = "";
    let descircaoMinusculo = "";
    let tagMinuscula = "";

    console.log(campoPesquisa);
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi digitado na pesquisa</p>"
        return
    }

    for (let dado of dados) {
        nomeMinusculo = dado.nome.toLowerCase();
        descircaoMinusculo = dado.descricao.toLowerCase();
        tagMinuscula = dado.tags.toLowerCase();

        if (
            nomeMinusculo.includes(campoPesquisa) ||
            descircaoMinusculo.includes(campoPesquisa)||
            tagMinuscula.includes(campoPesquisa) ||
            dado.Fundacao == campoPesquisa   
        ) {
            resultados += `
            <div class="item-resultado flex-container">
                <img src="${dado.foto}" alt="Pôster de ${dado.nome}" class="movie-poster flex-item">
                <div class="flex-item">
                    <h2>${dado.nome}</h2>
                    <p class="descricao-meta">Fundada em: ${dado.Fundacao}</p>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="descricao-meta">Localizada no estado de ${dado.estado} </p>
                    <p class="descricao-meta">Tem como ponto turistico ${dado.pontosTuristicos} </p>
                    <p class="descricao-meta">Festas: ${dado.festas} </p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            </div>
        `;
        }

    }
    
    
    if(!resultados) {
        resultados = "<p>Nada foi encontradao</p>"
        return
    }

    section.innerHTML = resultados;


}





