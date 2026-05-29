// BUSCAR O ARQUIVO JSON
fetch("dados.json")

    .then(function(resposta){

        return resposta.json();

    })

    .then(function(dados){

        // PEGAR A GRID
        const gridFotos = document.querySelector(".grid-fotos");

        // PERCORRER FILMES
        dados.filmes.forEach(function(filme){

            // CRIAR CARD
            const card = document.createElement("div");

            // ADICIONAR CLASSE
            card.classList.add("card-foto");

            // CONTEÚDO
            card.innerHTML = `

                <img src="${filme.imagem}" alt="${filme.titulo}">

                <h3>${filme.titulo}</h3>

                <p><strong>Categoria:</strong> ${filme.categoria}</p>

                <p><strong>Nota:</strong> ⭐ ${filme.nota}</p>

            `;

            // COLOCAR CARD NA TELA
            gridFotos.appendChild(card);

        });

    });