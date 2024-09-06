function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   // Obtém o valor digitado pelo usuário no campo de pesquisa
    let campoPesquisa = document.getElementById ("campo-pesquisa").value
   // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa){
      // Se o campo estiver vazio, exibe uma mensagem de erro
      section.innerHTML = "<p> Nada encontrado. Você precisa digitar o nome de um dinossauro.</p>";
      return // Interrompe a função
    };
    
    campoPesquisa = campoPesquisa.toLowerCase()
   // Converte o valor da pesquisa para minúsculas para facilitar a comparação

    let resultados = "";// Inicializa uma string vazia para armazenar os resultados
    let titulo = "";// Inicializa uma string vazia para armazenar o titulo
    let era = ""; // Inicializa uma string vazia para armazenar a era
    let descricao = "";// Inicializa uma string vazia para armazenar a descrição
    let link = "";// Inicializa uma string vazia para armazenar o link
    let dieta = "";// Inicializa uma string vazia para armazenar a dieta
    let altura = "";// Inicializa uma string vazia para armazenar a altura
    let peso = "";// Inicializa uma string vazia para armazenar o peso
    let velocidade =""; // Inicializa uma string vazia para armazenar a velocidade
    let nomeCientifico = "";// Inicializa uma string vazia para armazenar o nome científico
    let dominio = "";// Inicializa uma string vazia para armazenar o domínio
    let familia = "";// Inicializa uma string vazia para armazenar a família
    let filo = "";// Inicializa uma string vazia para armazenar o filo
    let tags = "";// Inicializa uma string vazia para armazenar as tags


  
    for (let dado of dados) {
      // Itera sobre cada dinossauro nos dados

      titulo = dado.titulo.toLowerCase();
      era = dado.era.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      link = dado.link.toLowerCase();
      dieta = dado.dieta.toLowerCase();
      altura = dado.altura.toLowerCase();
      peso = dado.peso.toLowerCase();
      velocidade = dado.velocidade.toLowerCase();
      nomeCientifico = dado.nomeCientifico.toLowerCase();
      dominio = dado.dominio.toLowerCase();
      familia = dado.familia.toLowerCase();
      filo = dado.filo.toLowerCase();
      tags = dado.tags.toLowerCase(); 
    // coloca todas as propriedades em minusculo

      if (titulo.includes(campoPesquisa) || era.includes(campoPesquisa) ||descricao.includes(campoPesquisa) || link.includes(campoPesquisa) || dieta.includes(campoPesquisa) || altura.includes(campoPesquisa) || peso.includes(campoPesquisa) || velocidade.includes(campoPesquisa) || nomeCientifico.includes(campoPesquisa)|| dominio.includes(campoPesquisa)|| familia.includes(campoPesquisa)|| filo.includes(campoPesquisa) || tags.includes(campoPesquisa) ) // Verifica se a pesquisa é encontrada em alguma propriedade do dinossauro 
      {
        // Se a pesquisa for encontrada, adiciona o dinossauro aos resultados
        resultados += ` 
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">
                    <strong>Era:</strong> ${dado.era}<br>
                    ${dado.descricao}<br>
                    <strong>Dieta:</strong> ${dado.dieta}<br>
                    <strong>Altura:</strong> ${dado.altura}<br>
                    <strong>Peso:</strong> ${dado.peso}<br>
                    <strong>Velocidade:</strong> ${dado.velocidade}<br>
                    <strong>Nome Científico:</strong> ${dado.nomeCientifico}<br>
                    <strong>Domínio:</strong> ${dado.dominio}<br>
                    <strong>Família:</strong> ${dado.familia}<br>
                    <strong>Filo:</strong> ${dado.filo}<br>
                </p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;

      } 
    }
    if (!resultados) {
      resultados = "<p>Nada encontrado.</p>"; // Se nenhum resultado foi encontrado, exibe uma mensagem
    }
      
      section.innerHTML = resultados;
    // Atualiza o conteúdo da seção com os resultados
  }