window.onload = () => {
  let count = 1;
  document.getElementById("radio-1").checked = true;

  let interval = setInterval(nextImage, 3300);

  function nextImage() {
    count++;
    if (count > 5) {
      count = 1;
    }
    document.getElementById("radio-" + count).checked = true;
    atualizarBolinhasAtivas();
  }

  // Atualizar o count quando clicar nos botões manuais
  const radios = document.querySelectorAll('input[name="radio-btn"]');
  const manualBtns = document.querySelectorAll('.manual-navegação .manual-btn');

  radios.forEach((radio, index) => {
    radio.addEventListener('click', () => {
      count = index + 1;
      atualizarBolinhasAtivas();
      clearInterval(interval);
      interval = setInterval(nextImage, 3300); // reinicia o intervalo após clique manual
    });
  });

  // Atualiza a aparência das bolinhas manuais
  function atualizarBolinhasAtivas() {
    manualBtns.forEach((btn, i) => {
      btn.style.backgroundColor = (i === count - 1) ? "#ff6300" : "transparent";
    });
  }

  // Atualiza a bolinha correta ao carregar
  atualizarBolinhasAtivas();

  // js recomendados
  const groups = document.querySelectorAll('.group');
  let currentGroup = 0;

  // Botão Anterior
  document.getElementById('prevBtn').addEventListener('click', () => {
    groups[currentGroup].classList.remove('active');
    currentGroup = (currentGroup - 1 + groups.length) % groups.length;
    groups[currentGroup].classList.add('active');
  });

  // Botão Próximo
  document.getElementById('nextBtn').addEventListener('click', () => {
    groups[currentGroup].classList.remove('active');
    currentGroup = (currentGroup + 1) % groups.length;
    groups[currentGroup].classList.add('active');
  });

  // Remove classe 'default-active' ao trocar de card
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.card.default-active').forEach(card => {
        card.classList.remove('default-active');
      });
    });
  });

  // Adiciona o evento de clique para alternar o overlay nos cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
      const isActive = card.classList.contains('active');
      if (!isActive) {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      }
    });
  });

  // Ativa o overlay do primeiro card automaticamente
  const firstCard = document.querySelectorAll('.card')[0];
  if (firstCard) firstCard.classList.add('active');
};
