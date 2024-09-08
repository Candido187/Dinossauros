let dados = [
    {
        titulo: "Ubirajara",
        era: "Cretáceo",
        descricao: 'O Ubirajara foi um dinossauro carnívoro com estruturas semelhantes a penas encontradas no Brasil. Seu nome significa "Senhor das lanças" em tupi-guarani.',
        link: "https://pt.wikipedia.org/wiki/Ubirajara_jubatus",
        dieta: "carnívoro",
        altura: "0.5 metros", // Estimativa
        peso: "15 kg", // Estimativa
        velocidade: "20 km/h", // Estimativa
        nomeCientifico: "Ubirajara jubatus",
        dominio: "Eukaryota",
        familia: "Compsognathidae",
        filo: "Chordata",
        tags: "Paleontologia, Terópode, Compsognathidae, Cretáceo Inferior, Brasil, Formação Crato, Bacia do Araripe, Fósseis, Penaplumagem, Carnívoro, Bípede, Pequeno, Ágil, Exibição, Descoberta recente, Controvérsia, Repatriação, Dinossauro brasileiro, Penas de dinossauro, Evolução das aves, Paleobiogeografia, Conservação de fósseis"
    },
    {
        titulo: "Velociraptor",
        era: "Cretáceo",
        descricao: "O Velociraptor era um dinossauro dromeossaurídeo ágil e inteligente, famoso por sua grande garra curva na segunda pata. Apesar de sua representação nos filmes, era menor e com penas.",
        link: "https://pt.wikipedia.org/wiki/Velociraptor",
        dieta: "carnívoro",
        altura: "1.2 metros", // Estimativa
        peso: "15-20 kg", // Estimativa
        velocidade: "40-60 km/h", // Estimativa
        nomeCientifico: "Velociraptor mongoliensis",
        dominio: "Eukaryota",
        familia: "Dromaeosauridae",
        filo: "Chordata",
        tags: "Paleontologia, Dromaeossaurídeo, Cretáceo Superior, Ásia, Deserto de Gobi, Carnívoro, Bípede, Penas, Predador, Garra em forma de foice, Inteligência, Caçador em grupo, Ágil, Jurassic Park, Dinossauro popular, Cultura pop, Velociraptor mongoliensis, Paleobiologia, Comportamento animal, Evolução dos dinossauros"
    },
    {
        titulo: "Tiranossauro Rex",
        era: "Cretáceo",
        descricao: "O Tiranossauro Rex, ou T-Rex, era um dos maiores carnívoros terrestres que já existiram. Conhecido por suas poderosas mandíbulas e dentes afiados, era um predador ápice.",
        link: "https://pt.wikipedia.org/wiki/Tiranossauro",
        dieta: "carnívoro",
        altura: "4-6 metros", // Estimativa
        peso: "6-9 toneladas", // Estimativa
        velocidade: "27 km/h", // Estimativa
        nomeCientifico: "Tyrannosaurus rex",
        dominio: "Eukaryota",
        familia: "Tyrannosauridae",
        filo: "Chordata",
        tags: "Paleontologia, Tiranossaurídeo, Cretáceo Superior, América do Norte, Carnívoro, Bípede, Predador ápice, Theropoda, Tyrannosauridae, Grande porte, Mandíbulas poderosas, Braços curtos, Caçador, Canibalismo, Jurassic Park, Ícone cultural, Dinossauro popular, Cultura pop, Tyrannosaurus rex, Formação Hell Creek, Paleobiologia, Comportamento animal, Evolução dos dinossauros"
    },
    {
        titulo: "Giganotossauro",
        era: "Cretáceo",
        descricao: "O Giganotossauro era um dos maiores carnívoros terrestres que já existiram, rivalizando em tamanho com o T-Rex. Seus fósseis foram encontrados na América do Sul.",
        link: "https://pt.wikipedia.org/wiki/Giganotossauro",
        dieta: "carnívoro",
        altura: "12-14 metros",
        peso: "8-14 toneladas",
        velocidade: "50 km/h", // Estimativa, considerando sua construção leve para o tamanho
        nomeCientifico: "Giganotosaurus carolinii",
        dominio: "Eukaryota",
        familia: "Carcharodontosauridae",
        filo: "Chordata",
        tags: "Paleontologia, Carcharodontosauridae, Cretáceo Superior, América do Sul, Carnívoro, Bípede, Predador ápice, Theropoda, Grande porte, Crânio alongado, Caçador, Competição com outros predadores, Dinossauro gigante, Rival do T-Rex, Cultura pop, Giganotosaurus carolinii, Formação Candeleros, Paleobiogeografia, Competição ecológica"
    },
    {
        titulo: "Spinossauro",
        era: "Cretáceo",
        descricao: "O Spinossauro era um dinossauro carnívoro conhecido por sua grande vela nas costas. Acredita-se que essa vela tivesse funções como termorregulação e exibição.",
        link: "https://pt.wikipedia.org/wiki/Espinossauro",
        dieta: "principalmente peixes, mas também carnívoro",
        altura: "16 metros",
        peso: "7-12 toneladas",
        velocidade: "30 km/h", // Estimativa, considerando seu peso e tamanho
        nomeCientifico: "Spinosaurus aegyptiacus",
        dominio: "Eukaryota",
        familia: "Spinosauridae",
        filo: "Chordata",
        tags: "Paleontologia, Spinosauridae, Cretáceo Inferior, África, Carnívoro, Bípede, Adaptação aquática, Veil, Peixe, Semi-aquático, Theropoda, Grande porte, Espinhas dorsais, Patas traseiras poderosas, Predador, Pescador, Jurassic Park III, Dinossauro aquático, Cultura pop, Spinosaurus aegyptiacus, Formação Bahariya, Paleobiologia, Comportamento animal, Evolução dos dinossauros"
    },
    {
        titulo: "Estegossauro",
        era: "Jurássico",
        descricao: "O Estegossauro era um dinossauro herbívoro quadrúpede, reconhecido por suas placas ósseas nas costas e as pontas afiadas na cauda.",
        link: "https://pt.wikipedia.org/wiki/Estegossauro",
        dieta: "herbívoro",
        altura: "4 metros",
        peso: "2-5 toneladas",
        velocidade: "10-15 km/h",
        nomeCientifico: "Stegosaurus stenops",
        dominio: "Eukaryota",
        familia: "Stegosauridae",
        filo: "Chordata",
        tags: "Paleontologia, Estegossaurídeo, Jurássico Superior, América do Norte, Herbívoro, Quadrúpede, Placas ósseas, Thagomizer, Ornitísquio, Grande porte, Espinhos na cauda, Defesa, Dinossauro herbívoro, Cultura pop, Stegosaurus stenops, Formação Morrison, Paleobiologia, Comportamento animal, Evolução dos dinossauros"
    },
    {
        titulo: "Apatossauro",
        era: "Jurássico",
        descricao: "O Apatossauro era um dinossauro saurópode herbívoro de pescoço e cauda longos. Era um dos maiores animais terrestres que já existiram.",
        link: "https://pt.wikipedia.org/wiki/Apatossauro",
        dieta: "herbívoro",
        altura: "5 metros (até os quadris)",
        peso: "30-35 toneladas",
        velocidade: "10-15 km/h",
        nomeCientifico: "Apatosaurus ajax",
        dominio: "Eukaryota",
        familia: "Diplodocidae",
        filo: "Chordata",
        tags: "Paleontologia, Diplodocidae, Jurássico Superior, América do Norte, Herbívoro, Quadrúpede, Saurópode, Grande porte, Pescoço longo, Cauda longa, Herdícolo, Dinossauro herbívoro, Dinossauro gigante, Cultura pop, Apatosaurus ajax, Formação Morrison, Paleobiologia, Comportamento animal, Evolução dos dinossauros"
    },
    {
        titulo: "Argentinossauro",
        era: "Cretáceo",
        descricao: "O Argentinossauro era um dos maiores dinossauros que já existiram, um titanossauro herbívoro de pescoço e cauda longos.",
        link: "https://pt.wikipedia.org/wiki/Argentinossauro",
        dieta: "herbívoro",
        altura: "8 metros (até os quadris)",
        peso: "70-100 toneladas",
        velocidade: "10-15 km/h",
        nomeCientifico: "Argentinosaurus huinculensis",
        dominio: "Eukaryota",
        familia: "Titanosauridae",
        filo: "Chordata",
        tags: "Paleontologia, Titanosaurídeo, Cretáceo Superior, América do Sul, Herbívoro, Quadrúpede, Saurópode, Gigante, Pescoço longo, Cauda longa, Herdícolo, Dinossauro gigante, Cultura pop, Argentinosaurus huinculensis, Formação Huincul, Paleobiologia, Comportamento animal, Evolução dos dinossauros"
    },
    {
        titulo: "Shantungosaurus",
        era: "Cretáceo",
        descricao: "O Shantungosaurus foi um dos maiores hadrossauros, com um bico largo e sem dentes na frente e milhares de dentes para mastigar plantas.",
        link: "https://pt.wikipedia.org/wiki/Shantungosaurus",
        dieta: "herbívoro",
        altura: "5 metros",
        peso: "13.000 - 16.000 kg",
        velocidade: "20-25 km/h",
        nomeCientifico: "Shantungosaurus giganteus",
        dominio: "Eukaryota",
        familia: "Hadrosauridae",
        filo: "Chordata",
        tags: "Paleontologia, Hadrossaurídeo, Cretáceo Superior, Ásia, Herbívoro, Bípede, Ornitísquio, Grande porte, Bico de pato, Cristas, Herdícolo, Dinossauro herbívoro, Cultura pop, Shantungosaurus giganteus, Formação Shandong, Paleobiologia, Comportamento animal, Evolução dos dinossauros"
    },
    {
        titulo: "Ouranosaurus",
        era: "Cretáceo",
        descricao: "O Ouranosaurus era um dinossauro hadrossauroide com uma vela nas costas, possivelmente usada para termorregulação ou exibição.",
        link: "https://pt.wikipedia.org/wiki/Ouranosaurus",
        dieta: "herbívoro",
        altura: "4 metros",
        peso: "4-5 toneladas",
        velocidade: "20-25 km/h",
        nomeCientifico: "Ouranosaurus nigerensis",
        dominio: "Eukaryota",
        familia: "Iguanodontidae",
        filo: "Chordata",
        tags: "Paleontologia, Iguanodontidae, Cretáceo Inferior, África, Herbívoro, Bípede, Ornitísquio, Vela dorsal, Semi-aquático, Bico de pato, Herdícolo, Dinossauro com vela, Dinossauro semi-aquático, Cultura pop, Ouranosaurus nigeriensis, Formação Elrhaz, Paleobiologia, Comportamento animal, Evolução dos dinossauros" 
    }
]; 