const perguntas = [
  {
    pergunta: "Onde João e Adriana se conheceram?",
    alternativas: ["Na escola", "Em uma festa", "No trabalho", "Pela internet"],
    correta: 2
  },
  {
    pergunta: "Quem deu o primeiro passo?",
    alternativas: ["Adriana", "João", "Um amigo apresentou os dois", "Os dois ao mesmo tempo"],
    correta: 1
  },
  {
    pergunta: "Quem come mais?",
    alternativas: ["Adriana", "João", "Os dois comem igual", "Depende do dia 😂"],
    correta: 1
  },
  {
    pergunta: "Quem demora mais para se arrumar?",
    alternativas: ["João", "Adriana", "Os dois demoram igual", "Quem escolheu a roupa por último 😂"],
    correta: 1
  },
  {
    pergunta: "Quem é mais organizado?",
    alternativas: ["João", "Adriana", "Os dois são igualmente organizados", "Nenhum dos dois 😂"],
    correta: 1
  },
  {
    pergunta: "Quem esquece mais as coisas?",
    alternativas: ["João", "Adriana", "Os dois esquecem igual", "Quem está com a cabeça nas nuvens 😂"],
    correta: 1
  },
  {
    pergunta: "Quem pediu em casamento?",
    alternativas: ["João, em um café", "João, no Ermida Dom Bosco", "Adriana, no Mais um Café", "Adriana, no Família Pastinha"],
    correta: 1
  },
  {
    pergunta: "Qual lugar vocês mais sonham em conhecer juntos?",
    alternativas: ["Itália", "França", "Japão", "Estados Unidos"],
    correta: 2
  },
  {
    pergunta: "Quantos filhos vocês sonham em ter?",
    alternativas: ["1", "2", "3", "Ainda não decidiram 😂"],
    correta: 1
  },
  {
    pergunta: "Qual é o maior sonho de vocês?",
    alternativas: ["Viajar pelo mundo", "Comprar uma casa enorme", "Constituir uma família", "Ficar ricos e nunca mais trabalhar 😂"],
    correta: 2
  },
  {
    pergunta: "Quem costuma acordar mais cedo?",
    alternativas: ["Adriana", "João", "Os dois acordam no mesmo horário", "Quem dormiu mais cedo 😂"],
    correta: 1
  },
  {
    pergunta: "Quem faz mais piadas?",
    alternativas: ["Adriana", "João", "Os dois fazem a mesma quantidade", "Quem está mais animado 😂"],
    correta: 1
  },
  {
    pergunta: "Quem é o mais romântico?",
    alternativas: ["Adriana", "João", "Os dois são igualmente românticos", "Depende da ocasião ❤️"],
    correta: 1
  },
  {
    pergunta: "Quem costuma fazer mais surpresas?",
    alternativas: ["Adriana", "João", "Os dois fazem surpresas", "Quem tiver uma ideia primeiro 🎁"],
    correta: 1
  },
  {
    pergunta: "Quem demora mais para decidir o que vai comer?",
    alternativas: ["João", "Adriana", "Os dois demoram igual", "Quem fala 'não sei o que quero' 😂"],
    correta: 1
  },
  {
    pergunta: "Quem canta mais alto no carro?",
    alternativas: ["João", "Adriana", "Os dois cantam igual", "Quem escolhe a música 😂"],
    correta: 1
  },
  {
    pergunta: "Quem escolhe o filme ou a série para assistir?",
    alternativas: ["João", "Adriana", "Os dois escolhem juntos", "Quem pegar o controle primeiro 😂"],
    correta: 1
  },
  {
    pergunta: "Quem é mais competitivo?",
    alternativas: ["João", "Adriana", "Os dois são igualmente competitivos", "Quem estiver perdendo 😂"],
    correta: 1
  },
  {
    pergunta: "Quem é mais provável de esquecer uma data importante?",
    alternativas: ["João", "Adriana", "Os dois poderiam esquecer", "O calendário 😂"],
    correta: 1
  },
  {
    pergunta: "Quem disse 'eu te amo' primeiro?",
    alternativas: ["Adriana", "João", "Os dois disseram juntos", "Ninguém lembra mais 😂"],
    correta: 1
  }
];

let perguntaAtual = 0;
let pontuacao = 0;

function iniciarQuiz() {
  perguntaAtual = 0;
  pontuacao = 0;
  mostrarPergunta();
}

function mostrarPergunta() {
  const pergunta = perguntas[perguntaAtual];

  document.getElementById("pergunta").textContent = pergunta.pergunta;

  const alternativas = document.getElementById("alternativas");
  alternativas.innerHTML = "";

  pergunta.alternativas.forEach((alternativa, indice) => {
    const botao = document.createElement("button");

    botao.textContent = alternativa;

    botao.onclick = function() {
      if (indice === pergunta.correta) {
        pontuacao++;
      }

      perguntaAtual++;

      if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
      } else {
        mostrarResultado();
      }
    };

    alternativas.appendChild(botao);
  });

  document.getElementById("progresso").textContent =
    `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
}

function mostrarResultado() {
  document.getElementById("quiz").innerHTML = `
    <h2>🎉 Quiz finalizado!</h2>
    <p>Você acertou:</p>
    <h1>${pontuacao} de ${perguntas.length}</h1>
    <button onclick="location.reload()">Jogar novamente</button>
  `;
}
