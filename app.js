function pesquisar() {
  
    let section = document.getElementById("resultados-pesquisa");
   
    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    if (!campoPesquisa){
      section.innerHTML = "<p> Nada encontrado. Você precisa digitar o nome de um dinossauro.</p>";
      return
    };
    
    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let era = "";
    let descricao = "";
    let link = "";
    let dieta = "";
    let altura = "";
    let peso = "";
    let velocidade =""; 
    let nomeCientifico = "";
    let dominio = "";
    let familia = "";
    let filo = "";
    let tags = "";


  
    for (let dado of dados) {
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

      if (titulo.includes(campoPesquisa) || era.includes(campoPesquisa) ||descricao.includes(campoPesquisa) || link.includes(campoPesquisa) || dieta.includes(campoPesquisa) || altura.includes(campoPesquisa) || peso.includes(campoPesquisa) || velocidade.includes(campoPesquisa) || nomeCientifico.includes(campoPesquisa)|| dominio.includes(campoPesquisa)|| familia.includes(campoPesquisa)|| filo.includes(campoPesquisa) || tags.includes(campoPesquisa) ) {
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
      resultados = "<p>Nada encontrado.</p>";
    }
      
      section.innerHTML = resultados;
    
  }