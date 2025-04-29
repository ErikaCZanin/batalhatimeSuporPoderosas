function jogar() {
  //Lista com 3 jogados escolhidos e vilões / Forças dos personagens 
  personagemUsuario = [" ", " ", " "]
  viloesComputador = [" ", " ", " "]

  forcapersonagemUsuario = 0
  forcaviloesComputador = 0


  //Calcular força de cada jogador, e depois somar para saber a força do time
  for (let i = 0; i < 3; i++) {
    escolhaPersonagem = prompt("Digite o nome do seu personagem: " + (i + 1))
    personagemUsuario[i] = escolhaPersonagem
    //Calcular a força de cada jogador do time do computador 
    forcapersonagemUsuario += Math.floor(Math.random() * 10) + 1
  }
  alert("Agora seus personagens são: " + personagemUsuario)

  for (let i = 0; i < 3; i++) {
    indiceAleatorio = Math.floor(Math.random() * 5)
    viloesPossiveis = ["Mojo Jojo", "HIM (Ele)", "Fuzzy Confusão", "Princesa Maisgrana", "Gangue Gangrena"]
    viloesComputador[i] = viloesPossiveis[indiceAleatorio]
    //Calcular a força de cada jogador do time do computador 
    forcaviloesComputador += Math.floor(Math.random() * 10) + 1
  }

  alert("Viloes: " + viloesComputador)

  //Comparar os dois times para saber quem vencenu

  ganhadorID = 0

  //1 usuario
  //2 computador 
  //3 empate
  if (forcapersonagemUsuario > forcaviloesComputador) {
    ganhadorID = 1
    alert("Você ganhou! Sua força: " + forcapersonagemUsuario + " Força do time vilão: " + forcaviloesComputador)
  }
  else {
    if (forcapersonagemUsuario < forcaviloesComputador) {
      ganhadorID = 2
      alert("Você perdeu! Sua força: " + forcapersonagemUsuario + " Força do time vilão: " + forcaviloesComputador)
    }
    else {
      ganhadorID = 3
      alert("Empate! Sejam amigos! Sua força: " + forcapersonagemUsuario + " Força do time vilão: " + forcaviloesComputador)
    }
  }

  ganhadorNome = ""
  if (ganhadorID == 1) {
    ganhadorNome = "Time SuperPoderosas"
  }
  else {
    if (ganhadorID == 2) {
      ganhadorNome = "Time vilões"
    }
    else {
      ganhadorNome = "Empate, sejam amigos!"
    }
  }

  document.getElementById('timeUsuario').innerText = personagemUsuario;
  document.getElementById('timeComputador').innerText = viloesComputador;
  document.getElementById('resultadoBatalha').innerText = ganhadorNome;
}


document.querySelectorAll('.btnList').forEach(item => {
  item.addEventListener('click', function () {
    const navBar = document.querySelector('.navbar');
    const content = document.querySelector('.container');
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    const body = document.querySelector('body');
    const html = document.querySelector('html');

    content?.style.setProperty('transition', 'margin-top 0.5s ease');
      body?.style.setProperty('transition', 'height 0.5s ease');
      html?.style.setProperty('transition', 'height 0.5s ease');
      item?.style.setProperty('transition', 'width 0.5s ease');

    if (navBar) {
      if (navBar.style.height && navBar.style.height !== '0px') {
        navBar.style.height = '0px';
        item.style.width = '30%';
        body.style.height = '100%';
        html.style.height = '100%';

        // Remove a margem se for tela pequena
        if (isSmallScreen && content) {
          content.style.marginTop = '0px';
        }
      } else {
        navBar.style.height = navBar.scrollHeight + 'px';

        // Ajusta a largura de acordo com o tamanho da tela
        if (isSmallScreen) {
          item.style.width = '60%';
          content.style.marginTop = (navBar.scrollHeight + 110) + 'px';
          body.style.height = '110%';
          html.style.height = '110%';
        } else {
          item.style.width = '100%';
        }
      }
    }
  });
});

